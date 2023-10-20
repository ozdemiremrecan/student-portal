import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error() {
    const navigate=useNavigate();
  return (
    <>
        <div className='middle'>
            <div className='containter bg-white border rounded'>
                <h1 className='p-5'>404 Error, please return homepage</h1>
                <div className='me-auto ms-auto'>
                    <button onClick={()=>navigate('/')} className='btn text-white p-3'>Click</button>
                </div>
            </div>
        </div>
    </>
  )
}
