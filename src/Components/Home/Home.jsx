import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import brochure from '../Assets/brochure.pdf'

const Home = () => {
    return (
        <div className="container-fluid-1 bg-body-primary">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className='headding'>BITES-2024</h1>
                    <h1 className="up-text">International Conference on
                        <br />
                        Biological Innovation, Technology, Engineering and Sciences
                    </h1>
                    <h2 className='date'>18th -20th December 2024</h2>
                    <h2> Organized by</h2>
                    <h2>National Institute of Technology Rourkela</h2>
                    <Link to={brochure} download="Brochure" target='_blank'>
                        <button className="btn btn-danger btn-lg p-3 mt-5">Brochure</button>
                    </Link>
                </div>
                <div className="about">
                    <h1 className="headabout-conf">About the Conference</h1>
                    <p className="bodyabout-conf">The conference aims to provide an excellent platform for engineers, scientists, researchers, and professionals to share
                        knowledge and experiences on the dynamics of the interdisciplinary approaches in solving problems of relevance to bioengineering covering major domains of Biological Innovation, Technology, Engineering and Sciences. The conference will serve as the best platform to learn and share new ideas in the area by connecting the stakeholders involved, particularly students, faculties, engineers, doctors, entrepreneurs, incubators, and enthusiasts. Further, the conference will also inspire the new generation of bioengineers to come up with novel, translatable ideas to meet the needs of the national and international
                        community.
                    </p>
                </div>
            </div>

            {/* <div className="container-fluid py-5">
                <h1 className='heading'>Timeline</h1>

                <div className="row">
                    <div className="col-lg-12">

                        <div className="horizontal-timeline">

                            <ul className="list-inline items">
                                <li className="list-inline-item items-list">
                                    <div className="px-4">
                                        <div className="event-date badge bg-info">2 June</div>
                                        <h5 className="pt-2">Event One</h5>
                                        <p className="text-muted">It will be as simple as occidental in fact it will be Occidental Cambridge
                                            friend</p>
                                        
                                    </div>
                                </li>
                                <li className="list-inline-item items-list">
                                    <div className="px-4">
                                        <div className="event-date badge bg-success">5 June</div>
                                        <h5 className="pt-2">Event Two</h5>
                                        <p className="text-muted">Everyone realizes why a new common language one could refuse translators.
                                        </p>
                                        
                                    </div>
                                </li>
                                <li className="list-inline-item items-list">
                                    <div className="px-4">
                                        <div className="event-date badge bg-danger">7 June</div>
                                        <h5 className="pt-2">Event Three</h5>
                                        <p className="text-muted">If several languages coalesce the grammar of the resulting simple and
                                            regular</p>
                                        
                                    </div>
                                </li>
                                <li className="list-inline-item items-list">
                                    <div className="px-4">
                                        <div className="event-date badge bg-warning">8 June</div>
                                        <h5 className="pt-2">Event Four</h5>
                                        <p className="text-muted">Languages only differ in their pronunciation and their most common words.
                                        </p>

                                    </div>
                                </li>
                            </ul>

                        </div>

                    </div>
                </div>

            </div> */}
        </div>
    );
}

export default Home;