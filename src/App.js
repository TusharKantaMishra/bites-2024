
import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Header from './Components/Headder/Headder';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Committees from './Components/Committees/Committees'
import Submissions from './Components/Submissions/Submissions';
import Speakers from './Components/Speakers/Speakers';
import Registration from './Components/Registration/Registration';
import Contact from './Components/Contact/Contact';
import Sponsors from './Components/Sponsors/Sponsors';
import Awards from './Components/Awards/Awards';
import Publications from './Components/Publications/Publications';
import MediaPartners from './Components/Media/Media Partners';
import Places from './Components/Places/Places';
const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/about" element={<About/>} />
                <Route path="/speakers" element={<Speakers/>} />
                <Route path="/committees" element={<Committees/>} />
                <Route path="/submission" element={<Submissions/>} />
                <Route path="/publications" element={<Publications/>} />
                <Route path="/registration" element={<Registration/>} />
                <Route path="/awards" element={<Awards/>} />
                <Route path="/sponsors" element={<Sponsors/>} />
                <Route path="/media" element={<MediaPartners/>} />
                <Route path="/places" element={<Places/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

