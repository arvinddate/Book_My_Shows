import mongoose, { model } from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  duration:{
    type: Number,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
},{
    timestamps:true 
});

const Movies = model("movies", movieSchema);
export default Movies;