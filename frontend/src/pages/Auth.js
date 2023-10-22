import React from 'react'
import AuthForm from '../components/AuthForm'
import { redirect } from 'react-router-dom'
export default function Auth() {
  return (
    <AuthForm/>
  )
}
export async function action({ request }){
  const data=await request.formData();
  const authData={
    studentID:data.get('studentId'),
    password:data.get('password')
  }
  const token="vedatcoskun"
  localStorage.setItem("token",token)
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());
  return redirect('/')
}
