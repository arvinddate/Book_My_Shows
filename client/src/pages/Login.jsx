import { Form, message } from 'antd'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/button'
import { loginUser } from '../apiCalls/users'

const Login = () => {
    const navigate=useNavigate();
    const onFinish=async(values)=>{
        console.log(values);
    
        try {
          
          const response=await loginUser(values);
          if(response.success){
            message.success(response.message);
           // console.log(response);
           localStorage.setItem('token',response.data);
            navigate('/')

          }else{
            message.error(response.message);
          }
    
        } catch (error) {
          message.error(error);
          
        }
    
      }
      useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/"); 
        } 
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
  return (
    <div className="flex justify-center h-screen items-center bg-primary">
      <div className="card p-3 w-400">
        <h1 className="text-xl mb-1">
          Welcome back to Scaler Shows! Please Login{" "}
        </h1>
        <hr />
        <Form layout="vertical" className="mt-1" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <input type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <input type="password" />
          </Form.Item>

          <div className="flex flex-col mt-2 gap-1">
            <Button fullWidth title="Login" type="submit" />
            <Link to="/register" className="text-primary">
              {" "}
              New to User ? Register!
            </Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login
