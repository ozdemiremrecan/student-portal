import React from 'react'
import Student from './../student.jpg'
export default function Home() {
  return (
    <>
       <div className="container-fluid py-5" style={{ backgroundColor: '#00264b' }}>
    <div className="container text-white">
        <div className="row align-items-center">
            <div className="col-md-6">
                <h1 className="display-4">Welcome to the Student Portal</h1>
                <p className="lead">
                    Access your courses, enrollment, and more. All from one central location.
                </p>
            </div>
            <div className="col-md-6">
                <img src={Student} alt="Students" className="img-fluid"/>
            </div>
        </div>
    </div>
</div>

<div className="container mt-5">
    <div className="row text-center">
        
        <div className="col-md-4 mb-4">
            <div className="card bg-white border-0 shadow-sm">
                <div className="card-body">
                    <i className="bi bi-book-large display-4 mb-3"></i>
                    <h5>My Courses</h5>
                    <p>See all the courses you're enrolled in.</p>
                </div>
            </div>
        </div>

        <div className="col-md-4 mb-4">
            <div className="card bg-white border-0 shadow-sm">
                <div className="card-body">
                    <i className="bi bi-graph-up display-4 mb-3"></i>
                    <h5>Enroll Courses</h5>
                    <p>Enroll your courses</p>
                </div>
            </div>
        </div>

        <div className="col-md-4 mb-4">
            <div className="card bg-white border-0 shadow-sm">
                <div className="card-body">
                    <i className="bi bi-person display-4 mb-3"></i>
                    <h5>Withdraw</h5>
                    <p>Withdraw your courses</p>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}
