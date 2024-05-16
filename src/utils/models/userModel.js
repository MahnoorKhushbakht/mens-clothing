import { Schema, model, models } from 'mongoose';


const fieldSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
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
  timestamps: true, 
  versionKey: false, 
});


fieldSchema.index({ slug: 1 });

const Field = models.Field || model('Field', fieldSchema);

export default Field;
