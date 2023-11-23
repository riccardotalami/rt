import React from 'react'
import NavBar from '../components/NavBar'
import './Tools.css'
import { Link } from 'react-router-dom'

import CBETool from './../components/Screenshot 2023-10-18 120757.jpg'
import OTSTool from './../components/Screenshot 2023-10-18 130925.jpg'

function Tools() {
    return (
        <div className='Tools'>
            <NavBar />
            <div className='Tools_Title'>
                <h1>Tools</h1>
            </div>
            <div className="sections">
                <div className="each_section">
                    <div className="title_description">
                        <h3>Optimal Temperature Setpoint Tool</h3>
                        <p>
                            Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here,
                            Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here,
                            Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here,
                            Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here,
                            Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here,
                            Describing shit here, <Link to='/otst' target='_blank'>[link]</Link>
                        </p>
                    </div>
                    <div className="tool_image">
                        <Link to='/otst' target='_blank'><img src={OTSTool} alt="" /></Link>
                    </div>
                </div>
                <div className="each_section">
                    <div className="title_description">
                        <h3>CBE Radiant Systems Map</h3>
                        <p>
                            Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here,
                            Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here,
                            Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here,
                            Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here,
                            Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here, Describing shit here,
                            Describing shit here, <a href="https://www.google.com/maps/d/u/0/viewer?mid=1LiVk7CwSdIlwZp5YX_hWasEkv0s&ll=-3.81666561775622e-14%2C2.758914717172047&z=1" target='_blank'>[link]</a>
                        </p>
                    </div>
                    <div className="tool_image">
                        <a href="https://www.google.com/maps/d/u/0/viewer?mid=1LiVk7CwSdIlwZp5YX_hWasEkv0s&ll=-3.81666561775622e-14%2C2.758914717172047&z=1" target='_blank'><img src={CBETool} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tools