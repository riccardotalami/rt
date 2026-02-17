import React from 'react'
import NavBar from '../components/NavBar'
import './Home.css'
import GoogleIcon from '../components/GoogleIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEnvelope, faFileLines } from '@fortawesome/free-regular-svg-icons'
import { faResearchgate, faLinkedin, faOrcid } from '@fortawesome/free-brands-svg-icons'
import RiccardoCV from './../components/Riccardo_Talami_CV_2026.pdf'
import RiccardoResume from './../components/Riccardo_Talami_Resume_2025.pdf'
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
                    <p className='home_sentences'>Riccardo Talami, PhD, MSc, BArch is a <b> Research Project Manager</b> and <b>Research Scientist</b> at the <b>Nanyang Technological University, Singapore (NTU)</b> - Energy Research Institute (ERI@N) where he manages the research initiatives of the Sustainable Built Environment program.</p>
                    <p className='home_sentences'>Riccardo specializes in:</p>
                    <p className='home_sentences'>1)<b>DIGITAL TRANSFORMATION: Design + Physics-based Modelling + Computational and Artificial Intelligence + Numerical Optimization</b>: developing scalable data-driven methods, workflows, frameworks, software and tools that transform <b> performance-based building and urban design.</b></p>
                    <p className='home_sentences'>2)<b>TECHNOLOGICAL TRANSFORMATION: Design + Physics-based Modelling + Technology</b>: developing technologies and products that accelerate the impact of <b>passive and smart buildings</b>.</p>
                    <p className='home_sentences'>His work empowers building and urban stakeholders to shape sustainable, comfortable, smart, efficient, flexible, and climate-resilient built environments and tackles the challenges of complex built environments at multiple scales: human/individual, room, building, district, and city scale.</p>
        

                    <div className="links">
                        <div className='each_icon'>
                            <a href={RiccardoCV} target="_blank" rel="noopener noreferrer">
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
                                    <FontAwesomeIcon icon={faEnvelope} /> riccardo.talami@ntu.edu.sg
                                </a>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faLocationDot} /> 1 Cleantech Loop, CleanTech Park, Singapore 637141
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faClock} /> Monday to Friday - 9 am to 7 pm
                            </p>
                        </div>
                        <div className='Contact_Location'>
                            <MyMap location={[1.3553221,103.6921525]} address={"1 Cleantech Loop, CleanTech Park, Singapore 637141"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home