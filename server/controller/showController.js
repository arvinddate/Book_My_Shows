import Show from "../models/showModel.js";

export const addShow=async(request, response)=>{
    try {
        const newShow = new Show(request.body);
        await newShow.save();
        response.status(200).send({
          success: true,
          message: "Show added successfully",
        });
      } catch (err) {
        response.status(500).send({
          success: false,
          message: err.message,
        });
      }
}

export const getAllShowsByTheatre=async(request,response)=>{
    try {
        const shows = await Show.find({
          theatre: request.body.theatreId,
        }).populate("movie");
        response.send({
          success: true,
          message: "Shows fetched successfully",
          data: shows,
        });
      } catch (err) {
        response.status(500).send({
          success: false,
          message: err.message,
        });
      }
}

export const deleteShow=async(request,response)=>{
    try {
        await Show.findByIdAndDelete(request.query.showId);
        response.send({
          success: true,
          message: "Show Deleted Successfully",
        });
      } catch (err) {
        response.status(500).send({
          success: false,
          message: err.message,
        });
      }
}

export const GetAllTheatresByMovie=async(request,response)=>{
    try {
        const { movieId, date } = request.body;
  
        // get all shows
        const shows = await Show.find({ movie: movieId, date })
          .populate("theatre")
          .sort({ createdAt: -1 });
  
        // get all unique theatres from those shows
        let uniqueTheatres = [];
        shows.forEach((show) => {
          const theatre = uniqueTheatres.find(
            (theatre) => theatre._id == show.theatre._id
          );
  
          if (!theatre) {
            const showsForThisTheatre = shows.filter(
              (showObj) => showObj.theatre._id == show.theatre._id
            );
            uniqueTheatres.push({
              ...show.theatre._doc,
              shows: showsForThisTheatre,
            });
          }
        });
  
        response.send({
          success: true,
          message: "Shows fetched successfully",
          data: uniqueTheatres
        });
      } catch (err) {
        response.status(500).send({
          success: false,
          message: err.message,
        });
      }
}
export const GetShowById=async(req,res)=>{
    try {
        const show = await Show.findById(req.body.showId)
          .populate("movie")
          .populate("theatre");
          
        res.send({
          success: true,
          message: "Show fetched successfully",
          data: show,
        });
      } catch (error) {
        res.send({
          success: false,
          message: error.message,
        });
      }
  }
