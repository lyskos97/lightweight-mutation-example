import { Schema, model } from 'mongoose';

const PostSchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    authorId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true,
    collection: 'posts'
  }
);

export default model('Post', PostSchema);
