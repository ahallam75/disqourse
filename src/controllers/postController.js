const postQueries = require("../db/queries.posts.js");
const Authorizer = require("../policies/post");

module.exports = {
    new(req, res, next){

        const authorized = new Authorizer(req.user).new();

        if(authorized) {
            res.render("posts/new", {topicId: req.params.topicId});
        } else {
            req.flash("notice", "You are not authorized to do that.");
            res.redirect("/posts/");
        }
    },

    create(req, res, next){

        const authorized = new Authorizer(req.user).create();

        if(authorized){
            let newPost = {
                title: req.body.title,
                body: req.body.body,
                topicId: req.params.topicId,
                userId: req.user.id
            };
            postQueries.addPost(newPost, (err, post) => {
                if(err){
                    res.redirect(500, "/posts/new");
                } else {
                    res.redirect(303, `/topics/${newPost.topicId}/posts/${post.id}`);
                }
            });
        } else {
            req.flash("notice", "You are not authorized to do that.");
            res.redirect("/posts");
        }
    },

    show(req, res, next){
        postQueries.getPost(req.params.id, (err, post) => {
            if(err || post == null){
                res.redirect(404, "/");
            } else {
                res.render("posts/show", {post});
            }
        });
    },

    destroy(req, res, next){ 
        console.log("Destroying a post...");
        console.log(req);
        postQueries.deletePost(req, (err, deletedRecordsCount) => { 
          console.log("Finished destroy post query");
          if(err){ 
            console.log("There was an error");
            res.redirect(500, `/topics/${req.params.topicId}/posts/${req.params.id}`) 
          } else { 
            console.log("There was no error");
            res.redirect(303, `/topics/${req.params.topicId}`) 
          } 
        }); 
      }, 

    edit(req, res, next){
        postQueries.getPost(req.params.id, (err, post) => {
            if(err || post == null){
                res.redirect(404, "/");
            } else {
                
                const authorized = new Authorizer(req.user, post).edit();

                if(authorized){
                    res.render("posts/edit", {post});
                } else {
                    req.flash("You are not allowed to do that.");
                    res.redirect(`/posts/${req.params.id}`);
                }        
            }
        });
    },

    update(req, res, next) {
        postQueries.updatePost(req.params.id, req.body, (err, post) => {
            if (err || post == null) {
                res.redirect(404, `/topics/${req.params.topicId}/posts/${req.params.id}/edit`);
            } else {
                res.redirect(`/topics/${req.params.topicId}/posts/${req.params.id}`);
            }
        });
    }
}



