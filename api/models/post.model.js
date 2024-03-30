import mongoose from "mongoose";
const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        "https://media.licdn.com/dms/image/sync/D4E27AQHQYpGMkRAnPg/articleshare-shrink_800/0/1710432899145?e=2147483647&v=beta&t=BD7NLwaLa-wOvXMbCXSPtpa6cdvma4stXbTvvO3TDZw",
    },
    category: {
      type: String,
      default: "uncategorised",
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
