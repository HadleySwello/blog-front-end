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
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#signOut').on('submit', events.onSignOut)
  $('#new-post').on('submit', events.onCreatePost)
  $('#get-posts').on('click', events.onGetPost)
  $('#commentButton').on('click', events.onCreateComment)
})

$(document).on('click', '#commentButton', function () {
  events.onCreateComment()
})

$(document).on('click', '.delete-post', events.onDeletePost)
