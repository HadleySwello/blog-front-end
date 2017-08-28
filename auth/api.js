'use strict'
const app = require('app.js')

// const config = require('../config')

const signUp = (data) => {
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password
      }
    }
  })
}

const signIn = (data) => {
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

const changePassword = (data) => {
  console.log(data.credentials.old)
  console.log(data.credentials.new)
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data: {
      'passwords': {
        'old': data.credentials.old,
        'new': data.credentials.new
      }
    }
  })
}

const signOut = (data) => {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createPost = (data) => {
  console.log(data)
  return $.ajax({
    url: app.host + '/posts/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'post': {
        'user_id': data.user_id,
        'title': data.title,
        'content': data.content
      }
    }
  })
}

const getPost = (data) => {
  console.log(data)
  return $.ajax({
    url: app.host + '/posts/' + app.post.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'post': {
        'user_id': data.user_id,
        'title': data.title,
        'content': data.content
      }
    }
  })
}

const updatePost = (data) => {
  console.log(data)
  return $.ajax({
    url: app.host + '/posts/' + app.post.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'post': {
        'user_id': data.user_id,
        'title': data.title,
        'content': data.content
      }
    }
  })
}

const deletePost = (data) => {
  console.log(data)
  return $.ajax({
    url: app.host + '/posts/' + app.post.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createComment = (data) => {
  console.log(data)
  return $.ajax({
    url: app.host + '/comments/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'post': {
        'user_id': data.user_id,
        'post_id': data.post.id,
        'title': data.title,
        'content': data.content
      }
    }
  })
}

const getComment = (data) => {
  console.log(data)
  return $.ajax({
    url: app.host + '/comments/' + app.comment.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'post': {
        'user_id': data.user_id,
        'post_id': data.post.id,
        'title': data.title,
        'content': data.content
      }
    }
  })
}

module.exports = {
  signIn,
  signUp,
  changePassword,
  signOut,
  createPost,
  getPost,
  updatePost,
  deletePost,
  createComment,
  getComment
}
