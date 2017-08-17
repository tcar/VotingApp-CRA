
const express = require('express')
const router = require('express-promise-router')()
const pollControler = require('../controlers/poll')

//get all polls


router.route('/polls')
    .get(pollControler.getPolls)
    .post(pollControler.postPoll);

router.route('/polls/:id')
    .get(pollControler.getPoll)
    .delete(pollControler.deletePoll);

router.route('/polls/voting/:vote')
    .put(pollControler.putVote)
    .get(pollControler.vote);


module.exports = router




