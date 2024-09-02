import React from 'react'
import LoginForm from './LoginForm'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    // If the user is already logged in, redirect them to another page
    redirect("/"); // Redirect to the home page
  }

  return <LoginForm /> 
}

export default Login