import express from "express";
import mongoose from "mongoose";
import userRoutes from './routes/user.route.js';
mongoose
  .connect(
    "mongodb+srv://Priyanshu:priyanshugmishra4001@mern-blog.n1y7dse.mongodb.net/mern-blog?retryWrites=true&w=majority&appName=mern-blog"
  )
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


app.use('/api/user',userRoutes);