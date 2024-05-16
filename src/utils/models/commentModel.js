import { Schema, model, models } from 'mongoose';

const commentSchema = new Schema({
 firstName: String,
 lastName: String,
 email:String,
  message: {
    type: String,
    required: true
  }
});

const Comment = models.Comment || model('Comment', commentSchema);

export default Comment;