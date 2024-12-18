import React from 'react'
import NavBar from '../components/NavBar'
import './Active.css'
import PlaceHolderImage from './../components/PlaceHolderImage.jpg'

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
                                <p>National University of Singapore ETH STH STH STH</p>
                                <p>Project ...</p>
                                <p>Person ...</p>
                                <p>Topic ...</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img src={PlaceHolderImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Active
