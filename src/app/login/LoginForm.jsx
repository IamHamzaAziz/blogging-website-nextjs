"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

function LoginForm() {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      const res = await signIn("credentials", {
        email, password, redirect: false,
      })
  
      if (res.error) {
        console.error(res)
        return
      }
  
      // Redirect to the home page
      router.push('/')
    }
  
    return (
      <div className='w-3/4 mx-auto my-10 bg-gray-300 p-10 rounded-xl'>
        <h1 className='text-center text-3xl font-bold'>Login</h1>
  
        <form onSubmit={handleSubmit} className='*:block *:w-full space-y-3 my-5'>
          <input
            type='email'
            placeholder='Email'
            className='py-2 px-3 rounded-lg'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
  
          <input type='password'
            placeholder='Password'
            className='py-2 px-3 rounded-lg'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
  
          <button className='bg-blue-700 text-white py-3 rounded-lg'>Submit</button>
        </form>
  
        <p className='text-center'>Do not have an account? <Link href={'/register'} className='text-blue-800'>Register Here</Link></p>
      </div>
    )
}

export default LoginForm