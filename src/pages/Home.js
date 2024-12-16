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
                <div>
                    <h1>Riccardo Talami, PhD</h1>
                    <div className='interests'>
                        <p>Architectural Engineering</p>
                        <p>Building Performance Simulation</p>
                        <p>Building Optimisation</p>
                        <p>Energy-Efficient Buildings</p>
                        <p>Sustainable Architecture</p>
                    </div>
                </div>
            </div>
            <div className="Home_Sections">
                <div className="individual_home_section">
                    <h3>Research Fellow at National University of Singapore</h3>
                    <p className='home_sentences'>Riccardo Talami, PhD is a Research Fellow at the National University of Singapore (NUS) – Department of Architecture, and the Singapore-ETH Centre.

                    Riccardo specializes in developing cutting-edge computational methods, workflows, and tools that transform performance-based building and urban design. His work empowers building and urban stakeholders to shape sustainable, comfortable, smart, and efficient built environments.

                    Riccardo is a strong advocate for data-driven building and urban design and operation, leveraging Computational Optimization, Artifical Intelligence, and Machine Learning to tackle the challenges of complex built environments.</p>
                   

                    {/* <h3 className='interests'>Interests</h3>
                    <ul>
                        <li>Architectural Engineering</li>
                        <li>Building Performance Simulation</li>
                        <li>Building Optimisation</li>
                        <li>Energy-Efficient Buildings</li>
                        <li>Sustainable Architecture</li>
                    </ul> */}

                    <h3 className='expertise'>Expertise:</h3>
                    <ul>
                        <li>Sustainable and Integrated Building Design</li>
                        <li>Performance-based Building Design</li>
                        <li>Building Performance Simulation and Optimization</li>
                        <li>Computational Design</li>
                        <li>Evolutionary Computation</li>
                        <li>Early-design Exploration and Informed Decision Making</li>
                        <li>Design Uncertainty and Robustness Analysis</li>
                        <li>Smart Buildings</li>
                        <li>HVAC Systems</li>
                        <li>Thermal Comfort</li>
                        <li>Daylighting</li>
                        <li>Indoor Environmental Quality</li>
                    </ul>

                    {/* <p className='home_sentences'>Riccardo brings expertise in Sustainable and Integrated Building Design, Performance-based Building Design, Building Performance Simulation and Optimization, Computational Design, Early-design Exploration and Informed Decision Making, Design Uncertainty and Robustness Analysis, Smart Buildings, HVAC Systems, Thermal Comfort, Daylighting, and Indoor Environmental Quality.</p> */}
                    <div className="links">
                        <div className='each_icon'>
                            <a href={RiccardoResumeIndustry} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFileLines} />
                            </a>
                            <p>Academia CV</p>
                        </div>
                        <div className='each_icon'>
                            <a href={RiccardoResume} target="_blank" rel="noopener noreferrer">
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