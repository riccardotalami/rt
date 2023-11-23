import React from 'react'
import NavBar from '../components/NavBar'
import './Home.css'
import GoogleIcon from '../components/GoogleIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import { faResearchgate, faLinkedin, faOrcid } from '@fortawesome/free-brands-svg-icons'
import RiccardoResume from './../components/riccardo_resume.pdf'
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
                    <h3>Research Fellow at National University of Singapore (<a href='https://building-robotics-lab.github.io/brlab/#/' target='_blank'>BRL</a>)</h3>
                    <p>Riccardo Talami, PhD, is a Research Fellow at the National University of Singapore (NUS) - Department of the Built Environment. Riccardo focuses his effort on the energy- efficient design and operation of buildings while improving occupant comfort and well - being. He believes that through data - driven processes, building stakeholders can achieve sustainable, comfortable, and efficient built environments.He has experience in laboratory measurements, field studies, and building performance simulation & numerical optimisation techniques. Previously, he worked as a Research and Teaching Assistant at the Singapore University of Technology and Design (SUTD) - Design for Climate and Comfort Lab. To date, Riccardo has supervised three undergraduate students for their final year project dissertation. In his free time, he is an avid street / urban art prints and books collector, and enjoys hiking and travelling.</p>
                    <div className="links">
                        <a href={RiccardoResume} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFileLines} />
                        </a>
                        <a href="https://scholar.google.com/citations?user=EmFyzowAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer">
                            <GoogleIcon />
                        </a>
                        <a href="https://www.researchgate.net/profile/Riccardo-Talami" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faResearchgate} />
                        </a>
                        <a href="https://www.linkedin.com/in/riccardo-talami12/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://orcid.org/0000-0002-5173-339X" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faOrcid} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home