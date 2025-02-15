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
                    <p>Dept. of Biotechnology and Medical Engg., & Dept. of Mechanical Engg. (NIT Rourkela) <i>in association with</i>  <br />National Institute of Technology Uttarakhand</p>
                </div>
                <div className='right-side'>
                    <img className='rightimg' src={imgright} alt=''></img>
                </div>
            </div>

            <div className='image'>
               
            </div>


            <nav className="navbar navbar-expand-lg bg-body-tertiary fs-3">
                <div className="container-fluid">
                    <button className="navbar-toggler ml-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/speakers">Speaker</Link>
                            <Link className="nav-link" to="/committees">Committees</Link>
                            <Link className="nav-link" to="/callForPapers">Call for Papers</Link>
                            <Link className="nav-link" to="/registration">Registration</Link>
                            <Link className="nav-link" to="/awards">Awards</Link>
                            <Link className="nav-link" to="/sponsors">Sponsorship</Link>
                            <Link className="nav-link" to="/places">To Visit</Link>
                            <Link className="nav-link" to="/contact">Contacts</Link>

                        </div>
                    </div>
                </div>
            </nav>
        </>

    );
}

export default Header;