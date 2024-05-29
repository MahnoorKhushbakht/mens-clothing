import { Schema, model, models } from 'mongoose';

const signSchema = new Schema({
  fields: [{ type: Schema.Types.ObjectId, ref: "Field" }],
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique:true,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
}, {
  createdAt: { type: Date, default: Date.now },
  versionKey: false, 
});




const Sign = models.Sign || model('Sign', signSchema);


export default Sign;