'use strict'
const app = require('./app.js')
// const events = require('./events.js')

const signUpSuccess = (data) => {
  console.log(data)
  console.log('I did something in ui.js!')
}

const signUpFailure = (error) => {
  console.log(error)
}

const log = function () {
  console.log('hiding!')
}

const signInSuccess = (data) => {
  $('#sign-out').prop('disabled', false)
  app.user = data.user
  if (app.user.id !== 1) {
    $('.rowPostId').hide('fast', log)
    $('#updatePost').hide('fast', log)
    $('#new-post').hide('fast', log)
  } else {
    $('.rowPostId').show('fast', log)
    $('#updatePost').show('fast', log)
    $('#new-post').show('fast', log)
  }
  console.log(app.user.token)
}

const signInFailure = (error) => {
  console.log(error)
}

const changePasswordSuccess = (data) => {
  console.log(data)
}

const changePasswordfailure = (error) => {
  console.log(error)
}

const logOutSuccess = (data) => {
  console.log(data)
  console.log('Succeded')
}

const logOutFailure = (error) => {
  console.log(error)
  console.log('Failed')
}

const createPostSuccess = (data) => {
  app.data = data.post
  console.log(data)
  console.log('Succeded')
}

const createPostFailure = (error) => {
  console.log(error)
  console.log('Failed')
}

const getPostSuccess = (data) => {
  console.log(data)
  console.log('Succeded')
  console.log(data.posts.length)
  $('#posts').empty()
  for (let i = 0; i < data.posts.length; i++) {
    $('#posts').append(
      '<tr>' +
      '<td class="rowPostId">' + data.posts[i].id + '</td>' +
      '<tr class="break">' +
      '</tr>' +
      '<tr class="title">' +
        '<th>' + data.posts[i].title + '</th>' +
      '</tr>' +
      '<tr class="content">' +
      '<td>' + data.posts[i].content + '</td>' +
      '<td>' + '<button class="delete-post" data-id="' + data.posts[i].id + '" type="button">' + 'Delete Post' + '</button>' + '</td>' +
      '</tr>' +
      '<tr class="comment-button">' +
      '<td>' +
      '<input type="text" name="title" form="comment-form" placeholder="Title" />' +
      '<input type="text" name="comment" form="comment-form" placeholder="Comment" />' +
      '<tr class="submit-comment">' +
      '<td>' +
      '<button type="button" form="comment-form" id="commentButton">' + 'Comments?' + '</button>' +
      '</td>' +
      '</tr>' +
      '</tr>' +
      '</td>' +
      '</tr>'
    )
  }
  if (app.user.id !== 1) {
    $('.rowPostId').hide('fast', log)
    $('.delete-post').hide('fast', log)
  } else {
    $('.rowPostId').show('fast', log)
    $('.delete-post').show('fast', log)
  }
}

const getPostFailure = (error) => {
  console.log(error)
  console.log('Failed')
}

const updatePostSuccess = (data) => {
  console.log(data)
  console.log('Succeded')
}

const updatePostFailure = (error) => {
  console.log(error)
  console.log('Failed')
}

const deletePostSuccess = (data) => {
  console.log(data.post.id)
  console.log(data)
  console.log('Succeded')
}

const deletePostFailure = (error) => {
  console.log(error)
  console.log('Failed')
}

const createCommentSuccess = (data) => {
  app.data = data.comment
  console.log(data)
  console.log('Succeded')
}

const createCommentFailure = (error) => {
  console.log(error)
  console.log('Failed')
}

const getCommentSuccess = (data) => {
  console.log(data)
  console.log('Succeded')
}

const getCommentFailure = (error) => {
  console.log(error)
  console.log('Failed')
}

module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  changePasswordfailure,
  changePasswordSuccess,
  logOutFailure,
  logOutSuccess,
  createPostSuccess,
  createPostFailure,
  getPostSuccess,
  getPostFailure,
  updatePostSuccess,
  updatePostFailure,
  deletePostSuccess,
  deletePostFailure,
  createCommentSuccess,
  createCommentFailure,
  getCommentSuccess,
  getCommentFailure
}
