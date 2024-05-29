import Sign from '@/utils/models/signModel';
import { Schema, model, models } from 'mongoose';


const fieldSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "Sign" }, // Array of references to Field documents
  // name: {
  //   type: String,
  //   required: true,
  // },
  comment: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0,
  },
  slug: {
    type: String,
    required: true,
  },
}, {
  createdAt: { type: Date, default: Date.now },
  versionKey: false, 
});


console.log('user_id saved',user_id)

const Field = models.Field || model('Field', fieldSchema);


export default Field;