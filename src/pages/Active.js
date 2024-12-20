import React from 'react'
import NavBar from '../components/NavBar'
import './Active.css'
import Concordia_University from './../components/Concordia_University.png'
import SEC_logo from './../components/SEC_logo.png'
import NUS_logo from './../components/NUS_logo.jpg'

function Active() {
    return (
        <div className='Active'>
            <NavBar />
            <div className='Active_Title'>
                <h1>Active Collaborations</h1>
            </div>
            <div className="Active_Sections">
                <div className="individual_active_section">
                    <div>
                        <ul>
                            <li>
                                <p><b>Concordia University in Montreal (Canada)</b></p>
                                <p>Project: Problem decomposition approaches in Building Design</p>
                                <p>Contact: Nima Bonyadi, PhD Research Assistant</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img src={Concordia_University} />
                    </div>
                </div>
                <div className="individual_active_section">
                    <div>
                        <ul>
                            <li>
                                <p><b>Singapore-ETH Centre (Singapore)</b></p>
                                <p>Project: AI-driven frameworks for Building Performance Design</p>
                                <p>Contact: Dr. Alberto Costa, Senior Researcher</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img src={SEC_logo} />
                    </div>
                </div>
                <div className="individual_active_section">
                    <div>
                        <ul>
                            <li>
                                <p><b>National University of Singapore (Singapore)</b></p>
                                <p>Project: The role of Archetypes in Urban Building Energy Modelling</p>
                                <p>Contact: Wanyu Pei, PhD student</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img src={NUS_logo} />
                    </div>
                </div>
                <div className="individual_active_section">
                    <div>
                        <ul>
                            <li>
                                <p><b>Singapore-ETH Centre (Singapore)</b></p>
                                <p>Project: The impact of thermal inertia in mitigating energy disruptions</p>
                                <p>Contact: Dr. Andrea Bartolini, Postdoctoral Researcher</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img src={SEC_logo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Active
