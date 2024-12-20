import React from 'react'
import NavBar from '../components/NavBar'
import './Previous.css'
import PlaceHolderImage from './../components/PlaceHolderImage.jpg'
import NUS_logo from './../components/NUS_logo.jpg'
import LB_logo from './../components/LB_logo.png'
import SUTD_logo from './../components/SUTD_logo.jpg'
import UCB_logo from './../components/UCB_logo.png'

function Previous() {
    return (
        <div className='Previous'>
            <NavBar />
            <div className='Previous_Title'>
                <h1>Previous Collaborations</h1>
            </div>
            <div className="Previous_Sections">
                <div className="individual_previous_section">
                    <div>
                        <ul>
                            <li>
                            <p><b>National University of Singapore (Singapore)</b></p>
                                <p>Project: Exploring novel cooling technologies for building façades</p>
                                <p>Contact: Iqbal Shah, PhD student</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img src={NUS_logo} />
                    </div>
                </div>
                <div className="individual_previous_section">
                    <div>
                        <ul>
                            <li>
                                <p>Loughborough University (UK)</p>
                                <p>Project: The sequential design optimization of building performance</p>
                                <p>Contact: Prof.Jonathan Wright and Dr. Bianca Howard</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img src={LB_logo} />
                    </div>
                </div>
                <div className="individual_previous_section">
                    <div>
                        <ul>
                            <li>
                                <p>Singapore University of Technology and Design (Singapore)</p>
                                <p>Project: Comparing laboratory and field studies of occupant lighting experience, Subjective and measured evidence for residential lighting metrics in the tropics, Radiant Cooling Systems in the Tropics, Sustainable Futures: Cooling </p>
                                <p>Contact: Dr. J. Alstan Jakubiec</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img src={SUTD_logo} />
                    </div>
                </div>
                <div className="individual_previous_section">
                    <div>
                        <ul>
                            <li>
                                <p>University of California Berkeley (US)</p>
                                <p>Project: Optimizing Radiant Systems for Energy Efficiency and Comfort </p>
                                <p>Contact: Fred Bauman </p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img src={UCB_logo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Previous
