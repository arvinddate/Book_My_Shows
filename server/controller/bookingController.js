import stripe from 'stripe';
import Bookings from "../models/bookingModel.js";
import Show from "../models/showModel.js";
 const stripeInstance = stripe("sk_test_51OT12BSIjYPQyd6nhPYV10RdN0ryeSLFeJnsp0HNMIuqLfKDP7OplhDFmX7Vdx6YDRLWEJhzATOcqssU3wcVFmw3001QHlIgd3");
//const stripeInstance = stripe(process.env.stripe_key);
export const MAkePayment = async (req, res) => {
  try {
    const { amount } = req.body;
    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount,
      currency: "INR",
    });

    const transactionId = paymentIntent.client_secret;
    res.send({
      success: true,
      message: "Payment successful",
      data: transactionId,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
}

export const BookShow=async(req,res)=>{
    try {
        // save booking
        const newBooking = new Bookings(req.body);
        await newBooking.save();
    
        const show = await Show.findById(req.body.show);
        // update seats
        await Show.findByIdAndUpdate(req.body.show, {
          bookedSeats: [...show.bookedSeats, ...req.body.seats],
        });
    
        res.send({
          success: true,
          message: "Show booked successfully",
          data: newBooking,
        });
      } catch (error) {
        res.send({
          success: false,
          message: error.message,
        });
      }
}

export const GetBookings=async(req,res)=>{
    try {
        const bookings = await Bookings.find({ user: req.body.userId })
          .populate("show")
          .populate({
            path: "show",
            populate: {
              path: "movie",
              model: "movies",
            },
          })
          .populate("user")
          .populate({
            path: "show",
            populate: {
              path: "theatre",
              model: "theatres",
            },
          });
    
        res.send({
          success: true,
          message: "Bookings fetched successfully",
          data: bookings,
        });
      } catch (error) {
        res.send({
          success: false,
          message: error.message,
        });
      }

}