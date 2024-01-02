import {axiosInstance} from "./index"


export const registerUser =async(payload)=>{
    try {
        const response=await axiosInstance.post('/api/user/register',payload);
        return response.data;
        
    } catch (error) {
        return error;
    }

}

export const loginUser =async(payload)=>{
    try {
        const response=await axiosInstance.post('/api/user/login',payload);
        return response.data;
        
    } catch (error) {
        return error;
    }

}

export const GetCurrentUser =async()=>{
    try {
        const response=await axiosInstance.get('/api/user/getProfile', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });
        return response.data;
        
    } catch (error) {
        return error;
    }

}