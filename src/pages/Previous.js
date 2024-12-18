import React from 'react'
import NavBar from '../components/NavBar'
import './Previous.css'
import PlaceHolderImage from './../components/PlaceHolderImage.jpg'

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
                <div className="individual_previous_section">
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
                <div className="individual_previous_section">
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
                <div className="individual_previous_section">
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

export default Previous
