import { axiosInstance } from ".";

// make payment

export const MakePayment = async (token, amount) => {
    try {
      const response = await axiosInstance.post(
        "/api/bookings/make-payment",
        {
          token,
          amount,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Your authentication token
            'Stripe-Secret-Key': 'pk_test_51OT12BSIjYPQyd6njha3KT9e4ILMCgQVFgY0OTjcXvF5iR9sjsGUHHmhmOpXO3redNnhz2Wsy2A9QiPI3AN1bFOg002zkhxjCV', // Replace with your actual Stripe secret key
            'Content-Type': 'application/json',
          },
        }
      );
  
      return response.data;
    } catch (error) {
      //console.log(error.response.data);
      return error.response.data;
    }
  };


export const BookShowTickets = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/bookings/book-show",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// get bookings of a user
export const GetBookingsOfUser = async () => {
  try {
    const response = await axiosInstance.get("/api/bookings/get-bookings");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

