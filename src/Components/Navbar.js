import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
    let history=useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem('token');
        history("/login");
    }
    let location = useLocation();
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">iNotebook</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} href="/about">About</a>
                            </li>
                        </ul>
                        {!localStorage.getItem('token')?<form className="d-flex" role="search">
                        <a className="btn btn-primary mx-1" href="/login" role="button">Login</a>
                        <a className="btn btn-primary mx-1" href="/signup" role="button">Signup</a>
                        </form>:<button onClick={handleLogout} className='btn btn-primary'>Logout</button>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
