<!DOCTYPE html>
<html>
  <head>
    <% include ../static/partials/head.ejs %>
  </head>
  <body>
    <% include ../static/partials/navbar.ejs %>

    <main class="container">
      <h1>New Flair</h1>
<!-- #1 -->
      <form action="/topics/<%= topicId %>/flair/create" method="post">
        <div class="form-group">
          <label for="title">Flair Name</label>
          <input type="text" class="form-control" name="title" aria-describedby="titleHelp" placeholder="Enter Name">
        </div>
        <div class="form-group">
          <label for="body">Color</label>
          <textarea rows="4" class="form-control" name="body" placeholder="Enter Color"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </main>

    <% include ../static/partials/baseScripts.ejs %>

  </body>
</html>