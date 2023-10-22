import React, { useEffect, useState } from 'react'

export default function Withdraw() {
    const token=localStorage.getItem("token")
    const studentID=localStorage.getItem("studentID")
    const [courses,setCourses]=useState([]);
    const fetchCourses = () => {
      fetch("http://localhost/test/studentCourses.php", {
          method:"POST",
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({token:token, student_id:studentID})
      })
      .then(response => response.json())
      .then(data => setCourses(data));
  }
    useEffect(()=>{
       fetchCourses()
    },[studentID,token])
    const deleteCourse=async(index)=>{
      await fetch("http://localhost/test/removeCourse.php",{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({token:token,student_id:studentID,course_id:index})
      })
      fetchCourses();
    }
    console.log(courses)
  return (
    <>
      {courses.courses?.map((item,index)=>(
        <div class="container mt-5" style={{overflow:"hidden"}}>
          <div class="card">
              <div class="card-body d-flex justify-content-between align-items-center">
                  <div>
                      <h5>{item.course_name}</h5>
                  </div>
                  <button onClick={() => deleteCourse(item.course_id)} class="btn text-white">
                      Remove
                  </button>
              </div>
          </div>
        </div>
      ))}
      {courses.description && <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#00264b',marginTop:"300px"}}>
      <div className="card bg-white w-50">
        <div className="card-body text-center">
          <h5 className="card-title">No Course Item</h5>
          <p className="card-text">There are no courses available at the moment.</p>
        </div>
      </div>
    </div>}
    </>
  )
}
