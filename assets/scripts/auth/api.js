'use strict'
const app = require('./app.js')

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
  console.log(app.user)
  return $.ajax({
    url: app.host + '/posts/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'post': {
        'user_id': app.user.id,
        'title': data.title,
        'content': data.content
      }
    }
  })
}

const getPost = (data) => {
  console.log(data)
  return $.ajax({
    url: app.host + '/posts/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updatePost = (data, dataId) => {
  console.log(data)
  console.log(app.user.id, data.title, data.content)
  return $.ajax({
    url: app.host + '/posts/' + dataId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'post': {
        'user_id': app.user.id,
        'title': data.title,
        'content': data.content
      }
    }
  })
}

const deletePost = (dataId) => {
  return $.ajax({
    url: app.host + '/posts/' + dataId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

// const createComment = (data, postID) => {
//   console.log(data)
//   console.log(app.user)
//   return $.ajax({
//     url: app.host + '/comments/',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + app.user.token
//     },
//     data: {
//       'comment': {
//         'user_id': app.user.id,
//         'post_id': postID,
//         'title': data.title,
//         'content': data.content
//       }
//     }
//   })
// }

// const getComment = () => {
//   return $.ajax({
//     url: app.host + '/comments/',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + app.user.token
//     }
//   })
// }

module.exports = {
  signIn,
  signUp,
  changePassword,
  signOut,
  createPost,
  getPost,
  updatePost,
  deletePost
  // createComment,
  // getComment
}
