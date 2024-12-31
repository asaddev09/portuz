import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Map from './components/Map';
import Experience from './components/Experience';
import ProgressBar from './components/ProgressBar';
import PortfolioVideo from './components/PortfolioVideo';

function App() {
    return (
        <div>
            <Helmet>
                <title>My Portfolio</title>
                <meta name="description" content="This is my portfolio website." />
            </Helmet>
            <Header />
            <About />
            <Projects />
            <Experience />
            <Testimonials />
            <PortfolioVideo />
            <ProgressBar skill="JavaScript" width={80} />
            <ProgressBar skill="React" width={70} />
            <Map />
            <Contact />
        </div>
    );
}

export default App; 