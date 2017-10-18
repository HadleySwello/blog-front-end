// required files //

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
// page funtionality //

// events //

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  console.log('I did something in onSignIn!')
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.logOutSuccess)
    .catch(ui.logOutFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordfailure)
}

const onCreatePost = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createPost(data)
    .then(ui.createPostSuccess)
    .catch(ui.createPostfailure)
}

// const onCreateComment = function () {
//   event.preventDefault()
//   const data = getFormFields(this)
//   const postID = $('#post-content').attr('data-id')
//   api.createComment(data, postID)
//     .then(ui.createCommentSuccess)
//     .catch(ui.createCommentfailure)
// }

const onGetPost = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.getPost(data)
    .then(ui.getPostSuccess)
    // .then(onGetComment)
    .catch(ui.getPostfailure)
}

// const onGetComment = function (event) {
//   // event.preventDefault()
//   api.getComment()
//     .then(ui.getCommentSuccess)
//     .catch(ui.getCommentfailure)
// }

const onUpdatePost = function (event) {
  const data = getFormFields(this)
  const dataId = this.getAttribute('data-id')
  console.log('onUpdatePost dataId = ' + dataId)
  event.preventDefault()
  api.updatePost(data, dataId)
    .then(ui.updatePostSuccess)
    .catch(ui.updatePostfailure)
}

const onDeletePost = function (event) {
  const dataId = this.getAttribute('data-id')
  console.log(dataId)
  api.deletePost(dataId)
    .then(ui.deletePostSuccess)
    .catch(ui.deletePostfailure)
}

// const onDeleteComment = function (event) {
//   const dataId = this.getAttribute('data-id')
//   console.log(dataId)
//   api.deletePost(dataId)
//     .then(ui.deletePostSuccess)
//     .catch(ui.deletePostfailure)
// }

const onUpdatePostSaveId = function (event) {
  const dataId = this.getAttribute('data-id')
  console.log('onUpdatePostSaveId = ' + dataId)
  event.preventDefault()
  $('#updatePost').attr({
    'data-id': dataId
  })
}

// const onSaveIdForComment = function (event) {
//   const dataId = this.getAttribute('data-id')
//   console.log('onSaveIdForComment = ' + dataId)
//   event.preventDefault()
//   $('#updatePost').attr({
//     'data-id': dataId
//   })
// }

module.exports = {
  onSignIn,
  onSignUp,
  onChangePassword,
  onSignOut,
  onCreatePost,
  onGetPost,
  onUpdatePost,
  onDeletePost,
  // onCreateComment,
  // onGetComment,
  onUpdatePostSaveId
  // onDeleteComment,
  // onSaveIdForComment
}
