import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import brochure from '../Assets/brochure.pdf'
import media1 from '../Assets/Media1.png'


const Home = () => {
    return (
        <div className="container-fluid-1 bg-body-primary">
            <div className="row">
                <div className="text-center">
                    <p1 className='heading-home'>International Conference on Biological Innovation, Technology, Engineering and Sciences (BITES-2024)
                    </p1>
                    <p className='date-home'>18th -20th December 2024</p>
                    <Link to={brochure} download="Brochure" target='_blank'>
                        <button className="btn btn-danger btn-lg p-2 m-2">Brochure</button>
                    </Link>
                </div>
                <div className="about">
                    <h1 className="headabout-conf">About the Conference</h1>
                    <p className="bodyabout-conf">The conference aims to provide an excellent platform for engineers, scientists, researchers, and professionals to share
                        knowledge and experiences on the dynamics of the interdisciplinary approaches in solving problems of relevance to bioengineering covering major domains of Biological Innovation, Technology, Engineering and Sciences. The conference will serve as the best platform to learn and share new ideas in the area by connecting the stakeholders involved, particularly students, faculties, engineers, doctors, entrepreneurs, incubators, and enthusiasts. Further, the conference will also inspire the new generation of bioengineers to come up with novel, translatable ideas to meet the needs of the national and international
                        community.
                    </p>
                </div>
                <div className="about">
                    <h1 className="headabout-conf">Theme of the Conference</h1>
                    <p className="bodyabout-conf"><b>"The Future of Biological Innovation"</b> serves as a compelling focal point for the conference, offering a platform to explore a diverse array of topics. This theme delves into emerging technologies and pioneering research, focusing on how technology and engineering are unlocking new potentials in biological research, sharing ideas, and addressing challenges in the field. The conference covers topics in biosciences and bioengineering area from an interdisciplinary perspective, but not limited to, such as – Cell & Molecular Engineering, Tissue Engineering & Biomaterials, Bioprocess Engineering, Environmental & Plant Biotechnology, Biomechanics & Biotransport Engineering, and Medical Electronics &Instrumentation.
                    </p>
                </div>
            </div>

            <div className="media-partners">
                <h3 className='heading-media'>Media Partners</h3>
                <div className="mediaimg">
                    <Link to='https://allconferencealert.net/' target='_blank'>
                        <img className="media1" src={media1} alt="" />
                    </Link>
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