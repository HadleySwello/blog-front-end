'use strict'
const app = require('../../../app.js')

const signUpSuccess = (data) => {
  console.log(data)
  console.log('I did something!')
}

const signUpFailure = (error) => {
  console.log(error)
}

const signInSuccess = (data) => {
  $('#sign-out').prop('disabled', false)
  app.user = data.user
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
  console.log(data)
  console.log('Succeded')
}

const deletePostFailure = (error) => {
  console.log(error)
  console.log('Failed')
}

const createCommentSuccess = (data) => {
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
