import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import RegisterForm from './RegisterForm';

async function Register() {
  const session = await getServerSession(authOptions);

  if (session) {
    // If the user is already logged in, redirect them to another page
    redirect("/"); // Redirect to the home page
  }

  return <RegisterForm />  
}

export default Register