import { Schema, model } from 'mongoose';

const postReviewSchema = new Schema(
  {
    postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    adminId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    action: { type: String, enum: ['approve', 'reject'], required: true },
    comment: { type: String },
  },
  { timestamps: { createdAt: true, updatedAt: false } } // Only createdAt
);

export const PostReview = model('PostReview', postReviewSchema);
