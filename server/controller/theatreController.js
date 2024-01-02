import Theatre from "../models/theatreModel.js";

export const addTheatre=async(request,response)=>{
    try {
        const newTheatre = new Theatre(request.body);
        await newTheatre.save();
        response.status(200).send({
          success: true,
          message: "Theatre added successfully",
        });
      } catch (err) {
        response.status(500).send({
          success: false,
          message: err.message,
        });
    }
}
// Get All Theatres by Owner
export const getAllTheatreByOwner=async(request,response)=>{
    try {
        const theatres = await Theatre.find({ owner: request.body.owner });
        response.send({
          success: true,
          message: "Theatres fetched successfully",
          data: theatres,
        });
      } catch (err) {
        response.status(500).send({
          success: false,
          message: err.message,
        });
      }
}

export const getAllTheatre=async(request,response)=>{
    try {
        const theatres = await Theatre.find().populate("owner");
        response.send({
          success: true,
          message: "Theatres fetched successfully",
          data: theatres,
        });
      } catch (err) {
        response.status(500).send({
          success: false,
          message: err.message,
        });
      }
}


export const updateTheatre=async (request, response) => {
    try {
      await Theatre.findByIdAndUpdate(request.body.theatreId, request.body);
      response.send({
        success: true,
        message: "Theatre Updated Successfully",
      });
    } catch (err) {
      response.status(500).send({
        success: false,
        message: err.message,
      });
    }
  };
  
export const deleteTheatre= async (request, response) => {
    try {
      await Theatre.findByIdAndDelete(request.query.theatreId);
      response.send({
        success: true,
        message: "Theatre Deleted Successfully",
      });
    } catch (err) {
      response.status(500).send({
        success: false,
        message: err.message,
      });
    }
};






