import React, { useState } from 'react'
import {toast} from 'react-toastify'

function LoginPage() {
    const [loginData,setLoginData] = useState({
      email:"",
      password:""
    })
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");

    const handleChange = (e) => {
      setLoginData ((prev) => ({
        ...prev,
        [e.target.name] : e.target.value
      }));
    };

    const submitHandler = async (e) => {
      e.preventDefault();
      setError("");
       
      const [email,password] = loginData;
      if(!email || !password){
        setError("Insufficient information");
        return;
      }

      setLoading(true);

      try{
        const response = await fetch ("http://localhost:4000/api/v1/login", {
          method : "POST",
          headers :{
            "Content-Type" : "application/json"
          },
          body : {email,password}
        });

        const data = await response.json();
        if(data.success){
          toast.success("Login Successful", {
            position:"top-right",
            draggable:true,
            autoClose:3000,
            hideProgressBar:false,
            pauseOnHover:true
          })
        }else{
          setError(data.message || "Login failed.")
          toast.error("Login failed",{
            autoClose:3000,
            position:"top-right"
          })
        }
      }catch(err){
        console.error(error);
        setError("Something went wrong.Please try again later");
      }
      
      setLoading(false);
      setLoginData({email:"",password:""})
    }


   return (
    <div className='w-full h-screen flex justify-center items-center bg-[#3E0B18]'>
      <div className='bg-[#5B1A29] w-full max-w-md rounded-xl px-8 py-10 sapce-y-6 text-white'>
        <h2 className='font-cormorant text-center text-3xl'>Login</h2>

        <form onSubmit={submitHandler} className='space-y-10'>
            <div>
              <label htmlFor="email" className='block text-md mb-1'>Email</label>
              <input
                type='email'
                name='email'
                className='w-full px-4 py-2 bg-[#3E0B18] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400'
                value={loginData.email}
                onChange={handleChange}
                required              
              />             
            </div>

            <div>
              <label htmlFor="password" className='block text-md mb-1'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                className='w-full px-4 py-2 bg-[#3E0B18] border rounded-md border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-400'
                value={loginData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className='flex justify-center'>
              <button
                type='submit'
                className='px-6 py-2 bg-[#8B3A4C] hover:bg-[#A0475B] text-white text-sm font-medium rounded-md transition duration-300'
                >
                  {loading ? "Signing Up.." : "Sign Up"}
                </button>
            </div>

        </form>

      </div>

    </div>
  )
}

export default LoginPage
