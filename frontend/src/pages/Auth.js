import React from 'react'
import AuthForm from '../components/AuthForm'
import { redirect,json } from 'react-router-dom'
export default function Auth() {
  return (
    <AuthForm/>
  )
}
export async function action({ request }){
  const data=await request.formData();
  const authData={
    username:data.get('username'),
    password:data.get('password')
  }
  const response=await fetch("http://localhost/test/login.php",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(authData)
  })
  if (response.status === 422 || response.status === 401) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: 'Could not authenticate user.' }, { status: 500 });
  }
  const resData = await response.json();
  const token=resData.token;
  const studentID=resData.student_id
  localStorage.setItem("studentID",studentID)
  localStorage.setItem("token",token)
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());
  return redirect('/')
}
