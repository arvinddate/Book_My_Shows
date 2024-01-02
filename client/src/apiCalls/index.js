import axios from 'axios';
export const axiosInstance=axios.create({
    baseURL:"http://localhost:5050",
    headers:{
        withCredentials: true,
        method:"post",
        "Content-Type":"application/json",
        Authorization:`Beares ${localStorage.getItem('token')}`
    }
})