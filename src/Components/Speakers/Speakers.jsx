// src/components/Speakers.js
import React from 'react';
import './Speaker.css'

const Speakers = () => {
    return (
        <>
            <div className="heading">
                <h1 className='heading'>The list of Speakers who have given consent to be part of BITES-2024</h1>
                <h2 className='mt-4 fw-bold'>Planery Address</h2>
                <h1 className="heading">To be updated ...</h1>

            </div>
            {/* <div className="container-speaker">
                <div className="row-2">
                    <div className="card col-lg-4">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on
                                the card title and make up the bulk
                                of the card's content.
                            </p>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the
                                card title and make up the bulk of the
                                card's content.
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="container-speaker">
                <div className="row-2">
                    <div className="card col-lg-5">
                        <div className="card-body">
                            <h1 className="card-title text-danger mb-4">Keynote Address</h1>

                        
                            <h5 className="card-title">Prof. Luís Miguel Grilo</h5>
                            <p className="card-text">
                                Professor, University of Evora, Portugal
                            </p>
                            <h5 className="card-title">Prof. Kh S Mekheimer </h5>
                            <p className="card-text">
                                Professor & Ex-Vice Dean (PG)
                                <p>Al-Azhar University, Cairo</p>
                            </p>
                            <h5 className="card-title">Prof. Dhirendra S Katti</h5>
                            <p className="card-text">
                                Director, IIT Goa
                            </p>
                            <h5 className="card-title">Prof. Mukesh K Gupta </h5>
                            <p className="card-text">
                                Director, ICMR-NARFBR, Hyderabad
                            </p>
                            <h5 className="card-title">Dr. Sanjib Mohanty</h5>
                            <p className="card-text">
                                Ex Director
                                Ispat General Hospital (IGH), Rourkela
                            </p>
                            <h5 className="card-title">Prof. Sunil K Khare</h5>
                            <p className="card-text">
                                Director, IISER Kolkata
                            </p>
                            <h5 className="card-title">Prof. Ashok Pandey </h5>
                            <p className="card-text">
                                Exe. Director (Honorary)
                                <p>Centre for Energy and Environmental
                                Sustainability, Lucknow</p>          
                            </p>
                            <h5 className="card-title">Prof. Anuj Mubayi</h5>
                            <p className="card-text">
                            Illinois University USA          
                            </p>
                            <h5 className="card-title">Prof. Suman Chakraborty</h5>
                            <p className="card-text">
                            Shanti Swarup Bhatnagar Awardee 
                            Professor, 
                                <p>IIT Kharagpur </p>          
                            </p>
                            <h5 className="card-title">Prof. R Vinu </h5>
                            <p className="card-text">
                            Professor, IIT Madras          
                            </p>
                            <h5 className="card-title">Dr. S Venkata Mohan</h5>
                            <p className="card-text">
                            Chief Scientist, IICT Hyderabad           
                            </p>
                            <h5 className="card-title">Prof. Singam Jayanthu</h5>
                            <p className="card-text">
                            National Mineral Awardee 
                            Professor, 
                                <p>NIT Rourkela </p>          
                            </p>
                            <h5 className="card-title">Prof. Mohamed Sultan Mohamed Ali</h5>
                            <p className="card-text">
                            Universiti Teknologi Malaysia         
                            </p>
                            <h5 className="card-title">Dr. Praveen Sahu</h5>
                            <p className="card-text">
                            Sr. Scientist, CWS Hospital, Rourkela          
                            </p>
                            <h5 className="card-title">Prof. T Bhaskar </h5>
                            <p className="card-text">
                            Scientist F, IIP Dehradun         
                            </p>

                        </div>

                    </div>

                    <div className="card col-lg-5">
                        <div className="card-body">
                            <h1 className="card-title text-danger mb-4" >Invited Address</h1>

                            <h5 className="card-title">Dr. Tikam Chand Dakal</h5>
                            <p className="card-text">
                            Assistant Professor, ICMR-NARFBR, Hyderabad
                            </p>
                             <h5 className="card-title">Dr. Vivekanand </h5>
                            <p className="card-text">
                            Top 2% of the world’s Scientists,
                            <p>MNIT Jaipur</p>
                            </p>
                            <h5 className="card-title">Dr. Anurag Kumar Tiwari</h5>
                            <p className="card-text">
                            Dr B R Ambedkar National Institute of Technology, Jalandhar
                            </p>
                            <h5 className="card-title">Dr. Ruchi Mishra Tiwari</h5>
                            <p className="card-text">
                                
                            </p>
                            

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Speakers;
