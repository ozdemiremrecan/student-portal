import React from 'react'
import { Form,useNavigation } from 'react-router-dom'
export default function AuthForm() {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
  return (
    <>
    <section className='mt-4'>
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
                <div className="card" style={{borderRadius: "1rem"}}>
                <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                        alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}}/>
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                        <Form method='post'>
                            <h1 className="fw-bold mb-3 pb-3 fs-1" style={{letterSpacing: "1px"}}>Login</h1>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="username">Student Id</label>
                                <input type="text" id="username" name='username' className="form-control form-control-lg" />
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input type="password" id="password" name='password' className="form-control form-control-lg" />
                            </div>
                            <div className="pt-1 mb-4">
                                <button className="btn btn-dark btn-lg btn-block" type='submit'>{isSubmitting ? "Submitting" : "Login"}</button>
                            </div>
                        </Form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
