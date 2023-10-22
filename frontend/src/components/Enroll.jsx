import React,{useEffect, useState} from 'react'
import { Form,redirect } from 'react-router-dom'
export default function Enroll() {
  const studentID=localStorage.getItem("studentID")
  const token=localStorage.getItem("token")
  const [courses,setCourses]=useState([]);
  useEffect(()=>{
    fetch("http://localhost/test/courses.php",{
      headers:{"Content-Type":"application/json"},
      method:"POST",
      body:JSON.stringify({token:token})
    }).then(response=>response.json()).then(data=>setCourses(data))
  },[token])
  return (
    <>
        <div className="container mt-5">
          <div className="row justify-content-center">
              <div className="col-md-6">
                  <div className="card shadow">
                      <div className="card-header text-center">
                          <h4>Enroll in a Course</h4>
                      </div>
                      <div className="card-body">
                          <Form method='post'>
                              <div className="mb-3">
                                  <label htmlFor="studentId" className="form-label">Student ID</label>
                                  <input 
                                      type="text" 
                                      id="studentId"
                                      name='studentId' 
                                      className="form-control" 
                                      disabled={true} 
                                      value={studentID}
                                  />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="courseSelect" className="form-label">Select Course</label>
                                  <select 
                                      id="courseSelect"
                                      className="form-select" 
                                      name='course' 
                                      aria-label="Default select example"
                                  >
                                      {courses.courses?.map((item,index)=>(
                                        <option key={item.course_id} value={item.course_id}>{item.course_name}</option>
                                      ))}
                                  </select>
                              </div>
                              <div className="text-center">
                                  <button className='btn btn-primary'>Enroll</button>
                              </div>
                          </Form>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </>
  )
}
export async function action({request}){
  const data=await request.formData();
  const token=localStorage.getItem("token")
  const studentID=localStorage.getItem("studentID")
  const courseData={
    token:token,
    student_id:studentID,
    course_id:data.get("course")
  }
  const response = await fetch('http://localhost/test/addCourse.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseData)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    
    return redirect('/');
}