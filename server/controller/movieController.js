import Movies from "../models/movieModel.js";

export const addMovie=async(req,res)=>{
    try {
        const newMovie = new Movies(req.body); 
        await newMovie.save();
        res.status(200).send({
            success:true,
            message:"Movie Added"
        })
        
    } catch (error) {
        res.status(500).send({
            success:false,
            message:error.message
        });
        
    }


}

export const getAllMovies=async(request,response)=>{
    
    try {
        const movies = await Movies.find();
        response.status(200).send({
        success: true,
        message: "Movies Fetched Successfully",
        data: movies
        });
    } catch (err) {
        response.status(500).send({
        success: false,
        message: err.message
        });
    }

}

export const updateMovie=async(request,response)=>{
    try {
        await Movies.findByIdAndUpdate(request.body.movieId, request.body);
        response.send({
          success: true,
          message: "Movie Updated Successfully",
        });
      } catch (error) {
        response.status(500).send({
            success: false,
            message: error.message
            });
    }
}

export const deleteMovie=async(request,response)=>{
    try {
        await Movies.findByIdAndDelete(request.query.movieId);
        response.send({
          success: true,
          message: "Movie Deleted Successfully",
        });
      } catch (err) {
        response.status(500).send({
          success: false,
          message: err.message
        });
      }
}

export const GetMovieById=async(request,response)=>{
    try {
        const movie = await Movies.findById(request.params.movieId);
        if (movie) {
          response.status(200).send({
            success: true,
            message: "Movie Fetched Successfully",
            data: movie
          });
        } else {
          response.status(404).send({
            success: false,
            message: "Movie Not found"
          });
        }
      } catch (err) {
        response.status(500).send({
          success: false,
          message: err.message
        });
      }
}




