
const express = require('express')
const router = require('express-promise-router')()
const userControler = require('../controlers/user')

router.route('/auth/signup')
.post(userControler.signup)

router.route('/auth/login')
.post(userControler.login)

router.route('/:id/polls')
.get(userControler.getUserPolls)
.post(userControler.newUserPoll)

router.route('/')
.get(userControler.getUsers)


module.exports = router