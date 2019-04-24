const express = require('express');
const router = express.Router();

const register = require('./register'); 
const login = require('./login');
const glogin = require('./glogin');
const questions = require('./questions');

const QuestionController = require('../controllers/question');
const authentication = require('../middlewares/authentication');

router.use('/register', register);
router.use('/login', login);
router.use('/glogin', glogin);

router.use('/questions', questions);

router.get('/user/questions', authentication, QuestionController.authAll);


module.exports = router;