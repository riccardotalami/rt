import React from 'react'
import NavBar from '../components/NavBar'
import './Home.css'
import GoogleIcon from '../components/GoogleIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import { faResearchgate, faLinkedin, faOrcid } from '@fortawesome/free-brands-svg-icons'
import RiccardoResume from './../components/riccardo_resume.pdf'
import RiccardoResumeIndustry from './../components/CV_Industry_Feb2024_RT.pdf'
import RiccardoPic from './../components/image.jpg'

function Home() {
    return (
        <div className='Home'>
            <NavBar />
            <div className='Home_Title'>
                <img src={RiccardoPic} alt="Logo" />
                <h1>Riccardo Talami, PhD</h1>
            </div>
            <div className="Home_Sections">
                <div className="individual_home_section">
                    <h3>Research Fellow at National University of Singapore</h3>
                    <p>Riccardo Talami, PhD, is a Research Fellow at the National University of Singapore (NUS) - Department of the Built Environment. Riccardo is dedicated to advancing energy-efficient building design and operation to enhance occupant comfort and wellbeing. He advocates for data-driven approaches to empower building stakeholders in creating sustainable, comfortable, and efficient built environments. Riccardo brings expertise in Sustainable and Integrated Building Design, Performance-based Building Design, Building Performance Simulation and Optimization, Computational Design, Early-design Exploration and Informed Decision Making, Design Uncertainty and Robustness Analysis, Smart Buildings, HVAC Systems, Thermal Comfort, Daylighting, and Indoor Environmental Quality.</p>
                    <div className="links">
                        <div className='each_icon'>
                            <a href={RiccardoResume} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFileLines} />
                            </a>
                            <p>Academia CV</p>
                        </div>
                        <div className='each_icon'>
                            <a href={RiccardoResumeIndustry} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFileLines} />
                            </a>
                            <p>Industry CV</p>
                        </div>
                        <div className='each_icon'>
                            <a href="https://scholar.google.com/citations?user=EmFyzowAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer">
                                <GoogleIcon />
                            </a>
                            <p>Google Scholar</p>
                        </div>
                        <div className='each_icon'>
                            <a href="https://www.researchgate.net/profile/Riccardo-Talami" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faResearchgate} />
                            </a>
                            <p>Research Gate</p>
                        </div>
                        <div className='each_icon'>
                            <a href="https://www.linkedin.com/in/riccardo-talami12/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <p>LinkedIn</p>
                        </div>
                        <div className='each_icon'>
                            <a href="https://orcid.org/0000-0002-5173-339X" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faOrcid} />
                            </a>
                            <p>ORCID</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home