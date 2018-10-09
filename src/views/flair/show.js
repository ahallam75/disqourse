<!DOCTYPE html>
<html>
  <head>
    <% include ../static/partials/head.ejs %>
  </head>
  <body>
    <% include ../static/partials/navbar.ejs %>

    <main class="container">
      <h1><%= flair.name %></h1>
        <a href="/topics/<%= flair.topicId %>/flair/<%= flair.id %>/edit" class="btn btn-warning">Edit</a>
        <form style="display:initial" action="/topics/<%= flair.topicId %>/flair/<%= flair.id %>/destroy" method="post">
          <button type="submit" class="btn btn-danger">Delete</button>
        </form>
      <p><%= flair.color %></p>
    </main>

    <% include ../static/partials/baseScripts.ejs %>

  </body>
</html>