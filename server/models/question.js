const mongoose = require('mongoose');

let { Schema } = mongoose;

let questionSchema = new Schema({
  title: {
    type: String,
    required: [true, 'required']
  },
  description: {
    type: String,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  upvotes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  downvotes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
})

let Question = mongoose.model('Question', questionSchema);


module.exports = Question;