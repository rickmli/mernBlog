import { defaultArticleImage } from "../utils/constants";
import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: defaultArticleImage,
    },
    tags: [
      {
        type: String,
        default: "untagged",
      },
    ],
    status: {
      type: String,
      default: "published",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        default: [],
      },
    ],
    likes: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
