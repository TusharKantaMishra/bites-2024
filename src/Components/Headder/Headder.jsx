import React from 'react';
import { Link } from 'react-router-dom';
import './Headder.css'
import imgleft from "../Assets/NITRlogo.png"
import imgright from "../Assets/NITUlogo.png"

const Header = () => {
    return (
        <>
            <div className='w3-upper-write'>
                <div className='left-side'>
                    <img className='leftimg' src={imgleft} alt=''></img>
                </div>
                <div className="centre-text">
                    <h1>Dept. of Biotechnology and Medical Engg., and Dept. of Mechanical Engg. (NIT Rourkela) in association with National Institute of Technology Uttarakhand</h1>
                </div>
                <div className='right-side'>
                    <img className='rightimg' src={imgright} alt=''></img>
                </div>
            </div>

            <div className='image'>
               
            </div>


            <nav className="navbar navbar-expand-lg bg-body-tertiary fs-4">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/speakers">Speaker</Link>
                            <Link className="nav-link" to="/committees">Committees</Link>
                            <Link className="nav-link" to="/callForPapers">Call for Papers</Link>
                            <Link className="nav-link" to="/publications">Publications</Link>
                            <Link className="nav-link" to="/registration">Registration</Link>
                            <Link className="nav-link" to="/awards">Awards</Link>
                            <Link className="nav-link" to="/sponsors">Sponsors</Link>
                            <Link className="nav-link" to="/media">Media Partners</Link>
                            <Link className="nav-link" to="/places">Places to Visit</Link>
                            <Link className="nav-link" to="/contact">Contacts</Link>

                        </div>
                    </div>
                </div>
            </nav>
        </>

    );
}

export default Header;