import React from 'react'
import './Committees.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const Committees = () => {

    return (
        <>
            <h1 className="heading">Committees</h1>
            <h2 className="co-heading">Patron</h2>
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title><h5 className="card-title-committees">Prof. K. Umamaheshwar Rao</h5></Card.Title>
                        <Card.Text>
                            <p className="card-text-committees">Director,</p>
                            <p className="card-text-committees">NIT Rourkela</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><h5 className="card-title-committees">Prof. B.V. Ramana Reddy</h5></Card.Title>
                        <Card.Text>
                            <p className="card-text-committees">I/c Director,</p>
                            <p className="card-text-committees"> NIT Uttarakhand</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            <h2 className="co-heading">Chairman</h2>
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title><h5 className="card-title-committees">Prof. Devendra Verma</h5></Card.Title>
                        <Card.Text>
                        <p className="card-text-committees">HoD. Dept. of Biotechnology and Medical Engineering</p>
                        <p className="card-text-committees">NIT Rourkela</p>
                        <a href="https://www.nitrkl.ac.in/FacultyStaff/FacultyProfile/kantar" className="btn   btn-secondary btn-lg">Profile</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            <h2 className="co-heading">Convenors</h2>
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title><h5 className="card-title-committees">Prof. Ravi Kant Avvari</h5></Card.Title>
                        <Card.Text>
                        <p className="card-text-committees">Assistant Professor</p>
                        <p className="card-text-committees">Dept. of Biotechnology and Medical Engineering</p>
                        <p className="card-text-committees">NIT Rourkela</p>
                        <a href="https://www.nitrkl.ac.in/FacultyStaff/FacultyProfile/kantar" className="btn btn-secondary btn-lg">Profile</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><h5 className="card-title-committees">Prof. Dharmendra Tripathi</h5></Card.Title>
                        <Card.Text>
                        <p className="card-text-committees">Associate Professor</p>
                        <p className="card-text-committees">Dept. of Mathematics</p>
                        <p className="card-text-committees">NIT Uttarakhand</p>
                        <a href="https://portfolios.nituk.ac.in/419/dharmendra-tripathi/personal-details" className="btn btn-secondary btn-lg">Profile</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            <h2 className="co-heading">Co-Convenors</h2>
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title><h5 className="card-title-committees">Prof. Prasoon Kumar</h5></Card.Title>
                        <Card.Text>
                        <p className="card-text-committees">Assistant Professor</p>
                        <p className="card-text-committees">Dept. of Biotechnology and Medical Engineering</p>
                        <p className="card-text-committees">NIT Rourkela</p>
                        <a href="https://www.nitrkl.ac.in/FacultyStaff/FacultyProfile/kumarprasoon" className="btn btn-secondary btn-lg">Profile</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><h5 className="card-title-committees">Prof. Earu Banoth</h5></Card.Title>
                        <Card.Text>
                        <p className="card-text-committees">Assistant Professor</p>
                        <p className="card-text-committees">Dept. of Biotechnology and Medical Engineering</p>
                        <p className="card-text-committees">NIT Rourkela</p>
                        <a href="https://www.nitrkl.ac.in/FacultyStaff/FacultyProfile/banothe" className="btn btn-secondary btn-lg">Profile</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><h5 className="card-title-committees">Prof. Kishore Singh Patel</h5></Card.Title>
                        <Card.Text>
                        <p className="card-text-committees">Assistant Professor</p>
                        <p className="card-text-committees">Dept. of Mechanical Engineering</p>
                        <p className="card-text-committees">NIT Rourkela</p>
                        <a href="https://www.nitrkl.ac.in/FacultyStaff/FacultyProfile/patelks" className="btn btn-secondary btn-lg">Profile</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            <h2 className="co-heading">Organising-Members</h2>
            <div class="row-committee">
                <div class="column-committee">
                    <div class="card-committee">
                        <h5>Prof. A Thirugnanam</h5>
                        <p>Professor</p>
                    </div>
                </div>

                <div class="column-committee">
                    <div class="card-committee">
                        <h5>Prof. Amit Biswas</h5>
                        <p>Associate Professor</p>
                    </div>
                </div>
                <div class="column-committee">
                    <div class="card-committee">
                        <h5>Prof. Amrita Singh</h5>
                        <p>Assistant Professor</p>
                    </div>
                </div>
                <div class="column-committee">
                    <div class="card-committee">
                        <h5>Prof. Anamika Singh</h5>
                        <p>Assistant Professor</p>
                    </div>
                </div>
                <div class="column-committee">
                    <div class="card-committee">
                        <h5>Prof. Angana Sarkar</h5>
                        <p>Associate Professor</p>
                    </div>
                </div>
                <div class="column-committee">
                    <div class="card-committee">
                        <h5>Prof. Anju R. Babu</h5>
                        <p>Assistant Professor</p>
                    </div>
                </div>
                <div class="column-committee">
                    <div class="card-committee">
                        <h5>Prof. Bala Chakravarthy Neelapu</h5>
                        <p>Assistant Professor</p>
                    </div>
                </div>
                <div class="column-committee">
                    <div class="card-committee">
                        <h5>Prof. Balasubramanian P</h5>
                        <p> Associate Professor</p>
                    </div>
                </div>
                <div class="column-committee">
                    <div class="card-committee">
                        <h5>Prof. Bibhukalyan Prasad Nayak</h5>
                        <p>Assistant Professor</p>
                    </div>
                </div>

                <div class="column-committee">
                    <div class="card-committee">
                        <h5>Prof. Kasturi Dutta</h5>
                        <p>Associate Professor</p>
                    </div>
                </div>

                <div class="column-committee">
                    <div class="card-committee">
                        <h5>Prof. Krishna Pramanik</h5>
                        <p>Professor</p>
                    </div>
                </div>

                <div class="column-committee">
                    <div class="card-committee">
                        <h5>Prof. Kunal Pal</h5>
                        <p>Professor</p>
                    </div>
                </div>

                <div class="column-committee">
                    <div class="card-committee">
                        <h5>Prof. Mirza Khalid Baig</h5>
                        <p>Assistant Professor</p>
                    </div>
                </div>

                <div class="column-committee">
                    <div class="card-committee">
                        <h5>Prof. Mukesh Kumar Gupta</h5>
                        <p>Professor</p>
                    </div>
                </div>

                <div class="column-committee">
                    <div class="card-committee">
                        <h5>Prof. Nandini Sarkar</h5>
                        <p>Associate Professor</p>
                    </div>
                </div>
                <div class="column-committee">
                    <div class="card-committee">
                        <h5>Prof. Nivedita Patra</h5>
                        <p>Associate Professor</p>
                    </div>
                </div>
                <div class="column-committee">
                    <div class="card-committee">
                        <h5>Prof. Sivaraman J.</h5>
                        <p>Assistant Professor</p>
                    </div>
                </div>
                <div class="column-committee">
                    <div class="card-committee">
                        <h5>Prof. Subhankar Paul</h5>
                        <p>Professor</p>
                    </div>
                </div>

                <div class="column-committee">
                    <div class="card-committee">
                        <h5>Prof. Lohit Kumar Srinivas Gujjala</h5>
                        <p>Assistant Professor</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Committees