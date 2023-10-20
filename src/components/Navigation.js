import React from 'react'
import { NavLink,useRouteLoaderData,Form } from 'react-router-dom'
import classes from "./Navigation.module.css"

export default function Navigation() {
    const token = useRouteLoaderData('root');

  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-2">
            <div className="container-fluid">
            <NavLink className="navbar-brand" href="#">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Atlas_University_logo.svg/1200px-Atlas_University_logo.svg.png' width={70} height={70} alt='nav'/>
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ms-auto mb-lg-0">
                        <li className="nav-item me-5">
                            <NavLink className={({ isActive }) =>isActive ? classes.active : undefined} aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item me-5">
                            <NavLink className={({ isActive }) =>isActive ? classes.active : undefined} to="/enroll">Enroll</NavLink>
                        </li>
                        <li className="nav-item me-5">
                            <NavLink className={({ isActive }) =>isActive ? classes.active : undefined} to="/withdraw">Withdraw</NavLink>
                        </li>
                        {!token&&<li className='nav-item ms-auto'>
                            <NavLink to="auth" className={({ isActive }) =>isActive ? classes.active : undefined}>Login</NavLink>
                        </li>}
                        {token && (
                                <Form action="/logout" method="post">
                                    <button className='btn text-white'>Logout</button>
                                </Form>
                        )}
                    </ul>
                    
                </div>
            </div>
        </nav>
  )
}
