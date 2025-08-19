import { Schema, model } from 'mongoose';

const postSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    content: { type: String, required: true },
    authorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    publishedAt: { type: Date },
  },
  { timestamps: true }
);

export const Post = model('Post ', postSchema);
