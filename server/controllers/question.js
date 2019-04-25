const Question = require('../models/question');
const jwt = require('../helpers/jwt');

class Controller {
  static all(req, res) {
    Question.find({})
      .populate('User')
      .then(questions => {
        if (questions.length === 0) {
          res.status(404).json({ message: 'data empty', questions })
        } else {
          res.status(200).json({ message: 'data found', questions });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'internal server error', err });
      })
  }
  
  static one(req, res) {
    Question.findById(req.params.id)
      .populate('User')
      .then(question => {
        if (!question) {
          res.status(404).json({ message: 'not found', question });
        } else {
          res.status(200).json({ message: 'found', question });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'internal server error', err });
      })
  }

  static create(req, res) {
    Question.create({
      title: req.body.title,
      description: req.body.description,
      creator: req.body.creator,
      upvotes: req.body.upvotes,
      downvotes: req.body.downvotes
    })
      .then(newQuestion => {
        res.status(201).json({ message: 'successfully created', newQuestion });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'internal server error', err });
      })
  }
  
  static update(req, res) {
    let updatedQuestion = null;
    Question.findById(req.params.id)
      .then(question => {
        if (!question) {
          res.status(404).json({ message: 'not found to update', question });
        } else {
          updatedQuestion = question;
          updatedQuestion.title = req.body.title || question.title;
          updatedQuestion.description = req.body.description || question.description;
          updatedQuestion.upvotes = req.body.upvotes || question.upvotes;
          updatedQuestion.downvotes = req.body.downvotes || question.downvotes;
          return question.updateOne({
            title: req.body.title || question.title,
            description: req.body.description || question.description,
            upvotes: req.body.upvotes || question.upvotes,
            downvotes: req.body.downvotes || question.downvotes
          })
        }
      })
      .then(info => {
        res.status(200).json({ message: 'successfully updated', updatedQuestion, info });
      })  
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'internal server error', err });
      })
  }

  static delete(req, res) {
    let deletedQuestion = null;
    Question.findById(req.params.id)
      .then(question => {
        if (!question) {
          res.status(200).json({ message: 'not found to delete', question });
        } else {
          deletedQuestion = question;
          return question.delete()
        }
      })
      .then(() => {
        res.status(200).json({ message: 'successfully deleted', deletedQuestion});
      })  
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'internal server error', err });
      })
  }

  static authAll(req, res) {
    const decoded = jwt.verify(req.headers.token);

    Question.find({
      creator: decoded.id
    })
      .populate('User')
      .then(questions => {
        if (questions.length === 0) {
          res.status(404).json({ message: 'data empty', questions })
        } else {
          res.status(200).json({ message: 'data found', questions });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'internal server error', err });
      })
  }

  static upvote(req, res) {
    const decoded = jwt.verify(req.headers.token);
    let obj = {};
    
    Question.findById(req.params.id)
      .then(question => {
        if (!question) {
          res.status(404).json({ message: 'not found to upvote', question });
        } else {
          res.status(200).json({ message: 'found', question });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'internal server error', err });
      })
  }
}


module.exports = Controller;