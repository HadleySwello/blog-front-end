// ////////////////////////// //
// template context for posts //
// ////////////////////////// //
const postsHandlebars = function (title, content, dataId) {
  const postHandlebarsTemplate = require('./templates/posts.handlebars')
  const context = {
    'title': title,
    'content': content,
    'dataId': dataId
  }
  const postTemplate = postHandlebarsTemplate(context)
  $('#empty-post-template').append(postTemplate)
}

// ///////////////////////////// //
// template context for comments //
// ///////////////////////////// //
const commentsHandlebars = function (title, content, dataId) {
  const commentsHandlebarsTemplate = require('./templates/comments.handlebars')
  const context = {
    'title': title,
    'content': content,
    'dataId': dataId
  }
  const commentsTemplate = commentsHandlebarsTemplate(context)
  $('#empty-comments-div').append(commentsTemplate)
}

module.exports = {
  postsHandlebars,
  commentsHandlebars
}
