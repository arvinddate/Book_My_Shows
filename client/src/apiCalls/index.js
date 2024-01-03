import axios from 'axios';
export const axiosInstance=axios.create({
    baseURL:"https://book-my-show-k69e.onrender.com",
    headers:{
        withCredentials: true,
        method:"post",
        "Content-Type":"application/json",
        Authorization:`Beares ${localStorage.getItem('token')}`
    }
})