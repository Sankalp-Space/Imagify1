import React from 'react'
import { assets } from '../assets/assets'

const Login = () => {
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <form className='relative bg-white p-10 rounded-xl text-slate-500'>
        <h1 className='text-center text-2xl text-neutral-700 font-medium'>Sign Up</h1>
        <p className='text-sm'>Welcome back! Please sign in to continue</p>

        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
            <img width={20} src={assets.profile_icon} alt=""/>
            <input className='outline-none text-sm' type="text"  placeholder='Full Name' required/>
        </div>
        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
            <img width={20} src={assets.email_icon} alt=""/>
            <input className='outline-none text-sm' type="email"  placeholder='Email id' required/>
        </div>
        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
            <img width={20} src={assets.lock_icon} alt=""/>
            <input className='outline-none text-sm' type="password"  placeholder='Password' required/>
        </div>

        <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forget Password ?</p>

        <button className='bg-blue-600 w-full text-white py-2 rounded-full'>Create Account</button>
      </form>
    </div>
  )
}

export default Login
