const jwt = require('../helpers/jwt');
const Question = require('../models/question');

module.exports = (req, res, next) => {
  let decoded = jwt.verify(req.headers.token);

  Question.findById(req.params.id)
    .then(question => {
      if (!question) {
        res.status(404).json({ message: 'not found to authorize', question });
      } else {
        if (question.creator != decoded.id) {
          res.status(401).json({ message: 'unauthorized to access'});
        } else {
          next();
        }
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'internal server error', err });
    })
}