// src/components/Contact.js
import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <>
            <div>
                <h2 className='heading'>Contacts</h2>
            </div>
            <div className="container-speaker">
                <div className="row-2">
                    <div className="card-contact col-lg-4">
                        <div className="card-body-contact">
                        <h5 className="card-title-contact">Prof. Ravi Kant Avvari</h5>
                            <p className="card-text-contact">
                                kantar@nitrkl.ac.in
                                <p>+(91) 9866859277</p>
                            </p>
                        </div>
                    </div>
                    <div className="card-contact col-lg-4">
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

        </>
    );
}

export default Contact;
