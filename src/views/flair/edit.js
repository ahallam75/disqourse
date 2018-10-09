<!DOCTYPE html>
<html>
  <head>
    <% include ../static/partials/head.ejs %>
  </head>
  <body>
    <% include ../static/partials/navbar.ejs %>

    <main class="container">

      <h1>Edit Flair</h1>

      <form action="/topics/<%= flair.topicId %>/flair/<%= flair.id %>/update" method="post">
        <div class="form-group">
          <label for="title">Flair Name</label>
          <input value="<%= flair.name %>" type="text" class="form-control" name="title" aria-describedby="titleHelp" placeholder="Enter Name">
        </div>
        <div class="form-group">
          <label for="body">Color</label>
          <textarea rows="4" class="form-control" name="body" placeholder="Enter Color"><%= flair.color %></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Update</button>
      </form>
    </main>

    <% include ../static/partials/baseScripts.ejs %>

  </body>
</html>