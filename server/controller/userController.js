import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
export const register=async(req,res)=>{
    try {
        // Check if user with the given email already exists
        const userExist = await User.findOne({ email: req.body.email });

        if (userExist) {
            return res.status(403).send({
                success: false,
                message: "User with this email already exists",
            });
        }

        // If the user does not exist, proceed with registration
        const userData = req.body;
        userData.password = await bcrypt.hash(userData.password, 10);

        const newUser = await User.create(userData);

        res.status(200).send({
            status: true,
            message: "Successfully registered!",
            user: newUser,
        });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
        });
    }


}

export const login=async(req,res)=>{
    // console.log('Email:', req.body.email);
    // console.log('Password:', req.body.password);
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return res.status(404).send({ success: false, message: "User does not exist" });
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) {
        return res.status(401).send({ success: false, message: "Invalid password" });
    }
    const token=jwt.sign({userId:user._id ,emailId:user.email},process.env.jwt_secret,{expiresIn:"30d"});

    return res.status(200).send({ success: true, message: "User logged in", data: token });
}

export const getProfile= async(req,res)=>{
    try{
    const user = await User.findById(req.body.userId).select("-password");
    res.send({
      success: true,
      message: "User details fetched successfully",
      data: user,
    });
} catch (err) {
    res.status(500).send({
      success: false,
      message: err.message
    });
  }
}