'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./auth/events.js')
// event handlers //

$(() => {
  $('#updatePost').hide()
  $('#new-post').hide()
  $('#new-comment-form').hide()
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#signOut').on('submit', events.onSignOut)
  $('#new-post').on('submit', events.onCreatePost)
  $('#get-posts').on('click', events.onGetPost)
  // $('#commentButton').on('click', events.onCreateComment)
  $('#updatePost').on('submit', events.onUpdatePost)
  $('#sign-out').click(function () {
    $('#sign-in').show(1000)
    $('#sign-up').show(1000)
  })
  $('#sign-in-button').click(function () {
    $('#sign-in').hide(1000)
    $('#sign-up').hide(1000)
    $('#new-comment-form').show(1000)
  })
})

// $(document).on('click', '#commentButton', events.onCreateComment)
// $(document).on('click', '.commentsDeleteButton', events.onDeleteComment)
$(document).on('click', '.postsEditButton', events.onUpdatePostSaveId)
$(document).on('click', '.postsDeleteButton', events.onDeletePost)
// $(document).on('submit', '.new-comment-form', events.onCreateComment)
