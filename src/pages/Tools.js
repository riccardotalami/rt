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
                <h1>Products and Tools Development</h1>
            </div>
            <div className="sections">
                <div className="each_section">
                    <div className="title_description">
                        <h3>Indoor Environmental Quality sensor package v.2.0 (September 2023 - current)</h3>
                        <p>
                            Designed and assembled 40 Arduino-based sensor packages that monitor 4 IEQ parameters continuously. Protoyped and 3D printed 40 sensor enclosures with reduced dimensions. Introduced fast-charging battery and Wi-Fi connection.
                        </p>
                        <div className="tool_image">
                            &nbsp;
                        </div>
                    </div>
                </div>
                <div className="each_section">
                    <div className="title_description">
                        <h3>Indoor Environmental Quality sensor package v.1.0 (September 2022 - April 2023)</h3>
                        <p>
                            Designed and assembled 20 Raspberry-pi-based sensor packages that monitor 9 Indoor Environmental Quality metrics continuously: Carbon dioxide, Particulate matter, Total volatile organic compound, Illuminance, Temperature, Humidity, and Sound. Protoyped and 3D printed 20 boltless sensor enclosures for easy assembly and maintenance.
                        </p>
                        <div className="tool_image">
                            &nbsp;
                        </div>
                    </div>
                </div>
                <div className="each_section">
                    <div className="title_description">
                        <h3>Optimal Temperature Setpoint Tool (September 2022 - April 2023)</h3>
                        <p>
                            The Optimal Temperature Setpoint Tool allows the user to identify the optimal temperature setpoint based on occupancy rates, patterns, and outdoor air temperature values. <Link to='/otst' target='_blank'>[link]</Link>
                        </p>
                    </div>
                    <div className="tool_image">
                        <Link to='/otst' target='_blank'><img src={OTSTool} alt="" /></Link>
                    </div>
                </div>
                <div className="each_section">
                    <div className="title_description">
                        <h3>CBE Radiant Systems Map (May 2017 - October 2017)</h3>
                        <p>
                            The CBE Radiant Systems Map displays a database of over 400 commercial buildings using radiant cooling and heating in the world as online interactive map. <a href="https://www.google.com/maps/d/u/0/viewer?mid=1LiVk7CwSdIlwZp5YX_hWasEkv0s&ll=-3.81666561775622e-14%2C2.758914717172047&z=1" target='_blank'>[link]</a>The tool has obtained 18,000 views so far.
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