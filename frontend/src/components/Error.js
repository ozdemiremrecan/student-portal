import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error() {
    const navigate=useNavigate();
  return (
    <>
        <div className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#00264b' }}>
            <div className="bg-white p-5 rounded shadow text-center">
                <h1 className="display-3 mb-4">404</h1>
                <p className="lead">Maalesef aradığınız sayfayı bulamadık.</p>
                <button className="btn btn-primary mt-3" onClick={()=>navigate('/')}>Ana Sayfaya Dön</button>
            </div>
        </div>
    </>
  )
}
