// src/components/Registration.js
import React from 'react';
import './Registration.css'
import { Link } from 'react-router-dom';
import qrcode from '../Assets/QRcode.pdf'

const Registration = () => {
    return (
        <div>
            <h1 className="heading">Online Registration and Payment</h1>
            <h3 className="feetable">Fee Table</h3>
            <div className="table-container">
                <table className="table table-striped table-hover table-bordered table-light">
                    <thead >
                        <tr className='t-head'>
                            <th scope="col"></th>
                            <th scope="col">Participants</th>
                            <th scope="col">Indian</th>
                            <th scope="col">Foreign</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className='t-body'>
                            <th scope="row">1</th>
                            <td>UG/PG Students</td>
                            <td>Rs. 2500</td>
                            <td>USD 75</td>
                        </tr>
                        <tr className='t-body'>
                            <th scope="row">2</th>
                            <td>Research Scholars</td>
                            <td>Rs. 4000</td>
                            <td>USD 100</td>
                        </tr>
                        <tr className='t-body'>
                            <th scope="row">3</th>
                            <td>Academicians</td>
                            <td>Rs. 6000</td>
                            <td>USD 150</td>
                        </tr>
                        <tr className='t-body'>
                            <th scope="row">4</th>
                            <td>Industry</td>
                            <td>Rs. 8000</td>
                            <td>USD 250</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className="t-content">
                * Registration includes - conference kit, high tea, breakfast and lunch (GST incl.).
                <br />
                * Registration for student/ staff of NIT Rourkela is free.
                <br />

                * Accommodation will be arranged at the campus, subject to availability and charges payable by the participant.
                <br />
                <h2 className="boxreg">
                    Payment should be made through an Online transfer in favor of “Conference, NIT Rourkela” payable at SBI, NIT Branch to Account No.: 36734418111, IFSC: SBIN0002109, MICR: 769002007, SWIFT: SBININBB137
                </h2>
            </div>
            <div className="registration">
                <div class="reg-link">
                    <div><Link to="https://forms.gle/s1hdv4Q9s1uoskPu9" target='_blank' class="blink-text h3">
                        Click here to Register !
                    </Link>
                    </div>
                    <div>
                    <Link to={qrcode} target='_blank' class="blink-text h3">
                       Link to QR code !
                    </Link>
                    </div> 
                </div>

            </div>
        </div>
    );
}

export default Registration;
