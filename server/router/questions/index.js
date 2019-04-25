const express = require('express');
const questions = express.Router();
const QuestionController = require('../../controllers/question');
const authentication = require('../../middlewares/authentication');
const authorizeAuthUser = require('../../middlewares/authorizeAuthUser');

questions.get('/', QuestionController.all);
questions.post('/', authentication, QuestionController.create);
questions.get('/:id', QuestionController.one);
questions.put('/:id', authentication, authorizeAuthUser, QuestionController.update);
questions.patch('/:id', authentication, authorizeAuthUser, QuestionController.update);
questions.delete('/:id', authentication, authorizeAuthUser, QuestionController.delete);

questions.post('/:id', authentication, QuestionController.upvote);
questions.post('/:id', authentication, QuestionController.downvote);


module.exports = questions;