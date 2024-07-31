import React from 'react'
import './Committees.css'

const Committees = () => {
    return (
        <div>
            <>
            <h1 className="heading-com">Committees</h1>
                <h2 className="co-heading">Convenors</h2>
                <div className="card-committees">
                    <div className="card w-75" >
                        <div className="card-body w-70">
                            <h5 className="card-title">Proff. Ravi Kant Avvari</h5>
                            <p className="card-text">Assistant Professor Grade-II</p>
                            <p className="card-text">Dept. of Biotechnology and Medical Engineering</p>
                            <a href="https://www.nitrkl.ac.in/FacultyStaff/FacultyProfile/kantar" className="btn btn-secondary btn-lg">Profile</a>
                        </div>
                    </div>
                    <div className="card w-75" >
                        <div className="card-body w-70">
                            <h5 className="card-title">Proff. Dharmendra Tripathi</h5>
                            <p className="card-text">Assistant Professor</p>
                            <p className="card-text">Dept. of Mathematics</p>
                            <a href="https://portfolios.nituk.ac.in/419/dharmendra-tripathi/personal-details" className="btn btn-secondary btn-lg">Profile</a>
                        </div>
                    </div>
                </div>
                <h2 className="co-heading">Co-Convenors</h2>
                <div className="card-committees">
                    <div className="card w-75" >
                        <div className="card-body w-70">
                            <h5 className="card-title">Proff. Prasoon Kumar</h5>
                            <p className="card-text">Assistant Professor Grade-II</p>
                            <p className="card-text">Dept. of Biotechnology and Medical Engineering</p>
                            <a href="https://www.nitrkl.ac.in/FacultyStaff/FacultyProfile/kumarprasoon" className="btn btn-secondary btn-lg">Profile</a>
                        </div>
                    </div>
                    <div className="card w-75" >
                        <div className="card-body w-70">
                            <h5 className="card-title">Proff. Earu Banoth</h5>
                            <p className="card-text">Assistant Professor Grade-II</p>
                            <p className="card-text">Dept. of Biotechnology and Medical Engineering</p>
                            <a href="https://www.nitrkl.ac.in/FacultyStaff/FacultyProfile/banothe" className="btn btn-secondary btn-lg">Profile</a>
                        </div>
                    </div>
                    <div className="card w-75" >
                        <div className="card-body w-70">
                            <h5 className="card-title">Proff. Kishore Singh Patel</h5>
                            <p className="card-text">Assistant Professor Grade-I </p>
                            <p className="card-text">Dept. of Mechanical Engineering</p>
                            <a href="https://www.nitrkl.ac.in/FacultyStaff/FacultyProfile/patelks" className="btn btn-secondary btn-lg">Profile</a>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Committees