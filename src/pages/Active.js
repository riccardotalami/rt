import React from 'react'
import NavBar from '../components/NavBar'
import './Active.css'
import Concordia_University from './../components/Concordia_University.png'

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
                                <p>Project: Decomposition approaches in building design</p>
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
                                <p><b>Concordia University in Montreal (Canada)</b></p>
                                <p>Project: Decomposition approaches in building design</p>
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
                                <p><b>Concordia University in Montreal (Canada)</b></p>
                                <p>Project: Decomposition approaches in building design</p>
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
                                <p><b>Concordia University in Montreal (Canada)</b></p>
                                <p>Project: Decomposition approaches in building design</p>
                                <p>Contact: Nima Bonyadi, PhD Research Assistant</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img src={Concordia_University} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Active
