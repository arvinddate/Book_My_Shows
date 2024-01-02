import jwt from "jsonwebtoken";
const isLoggedIn=(req,res,next)=>{
    const token =req.headers.authorization.split(" ")[1];
    const tokenDetails = jwt.verify(token,process.env.jwt_secret);
    if( !token || !tokenDetails){
        res.status(401).send("Login is required");
        return;
    }
    req.body.userId=tokenDetails.userId; //pass details to req
    next();
}
export default isLoggedIn;