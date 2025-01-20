import React from 'react'
import NavBar from '../components/NavBar'
import './Home.css'
import GoogleIcon from '../components/GoogleIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEnvelope, faFileLines } from '@fortawesome/free-regular-svg-icons'
import { faResearchgate, faLinkedin, faOrcid } from '@fortawesome/free-brands-svg-icons'
import RiccardoResume from './../components/Riccardo_Talami_CV_2025.pdf'
import RiccardoResumeIndustry from './../components/Riccardo_Talami_Resume_2025.pdf'
import RiccardoPic from './../components/image.jpg'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MyMap from '../components/MyMap'

function Home() {
    return (
        <div className='Home'>
            <NavBar />
            <div className='Home_Title'>
                <img src={RiccardoPic} alt="Logo" />
                <div>
                    <h1>Riccardo Talami, PhD</h1>
                    <div className='interests'>
                        <p>Building Engineering</p>
                        <p>Building Performance Simulation</p>
                        <p>Building and Urban Optimization</p>
                        <p>Integrated Building Design</p>
                        <p>Sustainable Building and Urban Design</p>
                    </div>
                </div>
            </div>
            <div className="Home_Sections">
                <div className="individual_home_section">
                    <p className='home_sentences'><b>Riccardo Talami, PhD </b> is a Research Fellow at the <b> National University of Singapore (NUS) </b> – Department of Architecture, and the <b> Singapore-ETH Centre.</b> </p>
                    <p className='home_sentences'>Riccardo specializes in developing cross-scale computational methods, workflows, and tools that transform <b> performance-based building and urban design.</b> His work empowers building and urban stakeholders to shape sustainable, comfortable, smart, efficient, flexible, and climate-resilient built environments.</p>
                    <p className='home_sentences'>Riccardo is a strong advocate for <b> data-driven </b> building and urban design and operation, leveraging Computational Optimization and Artificial Intelligence to tackle the challenges of complex built environments.</p>

                    <div className="links">
                        <div className='each_icon'>
                            <a href={RiccardoResumeIndustry} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFileLines} />
                            </a>
                            <p>Curriculum Vitae</p>
                        </div>
                        <div className='each_icon'>
                            <a href={RiccardoResume} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFileLines} />
                            </a>
                            <p>Resume</p>
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
                <div className="individual_home_section">
                    <div className='Contacts'>
                        <div className='Contact_Links'>
                            <p>
                                <a href="mailto:rtalami@nus.edu.sg">
                                    <FontAwesomeIcon icon={faEnvelope} /> rtalami@nus.edu.sg
                                </a>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faLocationDot} /> 1 College Avenue, CREATE Tower, Singapore 138602
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faClock} /> Monday to Friday - 9 am to 7 pm
                            </p>
                        </div>
                        <div className='Contact_Location'>
                            <MyMap location={[1.306789, 103.773740]} address={"1 College Avenue, CREATE Tower, Singapore 138602"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home