import React from 'react';
import './Contact.css'
import byRoad from '../Assets/byRoad.png'
import byTrain from '../Assets/byTrain.png'
import byAir from '../Assets/byPlane.png'

const Contact = () => {
    return (
        <>
            <div>
                <h2 className='heading'>Contacts</h2>
            </div>
            <div className="container-contact">
                <div className="row-2">
                    <div className="card-contact">
                        <div className="card-body-contact">
                            <h5 className="card-title-contact">Prof. Ravi Kant Avvari</h5>
                            <p className="card-text-contact">
                                kantar@nitrkl.ac.in
                                <p>+(91) 9866859277</p>
                            </p>
                        </div>
                    </div>
                    <div className="card-contact">
                        <div className="card-body-contact">
                            <h5 className="card-title-contact">Prof. Dharmendra Tripathi</h5>
                            <p className="card-text-contact">
                                dtripathi@nituk.ac.in
                                <p>+(91) 8385882005</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="toreach">
                <h3 className="to-reach">
                    How to Reach
                </h3>
                <div className="to-reach-content">
                    <div className="left-reach">
                        <iframe className='map-nit'
                            title="NIT Rourkela Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2903702284827!2d84.89899121431826!3d22.25259988533942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20163268590b71%3A0x65c59752d5e0abf8!2sNIT%20Rourkela!5e0!3m2!1sen!2sin!4v1694694459329!5m2!1sen!2sin"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="right-reach">
                        <div className="road">
                            <img className='byIcon' src={byRoad} alt="" />
                            <div className="heading-reach">By Road</div>
                            <div className="body-reach">Rourkela is well connected by State Highway no. 10 and National Highway no. 23. It connects to the cities like Ranchi, Raipur, Sambalpur, Bhubaneswar etc.</div>
                        </div>
                        <div className="train">
                            <img className='byIcon' src={byTrain} alt="" />
                            <div className="heading-reach">By Train</div>
                            <div className="body-reach">Rourkela railway station is situated 7 km away from the NIT campus. Autos/taxis are available round the clock there. Local transport facility is also available from nearby private bus terminus. Official guests are normally received at the railway station. The Howrah-Mumbai line and Ranchi-Bhubaneswar line passes through this city.</div>
                        </div>
                        <div className="air">
                            <img className='byIcon' src={byAir} alt="" />
                            <div className="heading-reach">By Air</div>
                            <div className="body-reach">There is no commercial air strip in Rourkela; however Steel Authority of India Limited has an airport that is routinely used for charter flights and private aircrafts. Major airports in the proximity of Rourkela are Jharsuguda, Ranchi, Bhubaneswar, Kolkata and Raipur</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="to-reach-table">
                    <table className="table table-striped table-hover table-bordered table-light">
                        <thead >
                            <tr className='t-head'>
                                <th scope="col"></th>
                                <th scope="col">Airport</th>
                                <th scope="col">Rail Distance from Rourkela / Journey time</th>
                                <th scope="col">Road distance from Rourkela / Journey time</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className='t-body'>
                                <th scope="row">1</th>
                                <td>Jharsuguda</td>
                                <td>135 Km, 1 hrs 30 mins</td>
                                <td>135 Km, 2hrs 30 mins</td>
                            </tr>
                            <tr className='t-body'>
                                <th scope="row">2</th>
                                <td>Kolkata</td>
                                <td>413 Km, 6 hrs</td>
                                <td>525 Km, 9hrs</td>
                            </tr>
                            <tr className='t-body'>
                                <th scope="row">3</th>
                                <td>Bhubaneswar</td>
                                <td>462 Km, 7 hrs</td>
                                <td>320 Km, 5hrs</td>
                            </tr>
                            <tr className='t-body'>
                                <th scope="row">4</th>
                                <td>Ranchi</td>
                                <td>166 Km, 3 hrs 30 minutes</td>
                                <td>222 Km, 4hrs</td>
                            </tr>
                            <tr className='t-body'>
                                <th scope="row">5</th>
                                <td>Raipur</td>
                                <td>417 Km, 6 hrs 30 mins</td>
                                <td>448 Km, 6hrs 30 mins</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>

        </>
    );
}

export default Contact;
