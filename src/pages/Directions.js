import React from 'react'
import NavBar from '../components/NavBar'
import './Directions.css'
import Image1 from './../components/Image1.png'

import PlaceHolderImage from './../components/PlaceHolderImage.jpg'

function Directions() {
    return (
        <div className='Directions'>
            <NavBar />
            <div className='Directions_Title'>
                <h1>Directions</h1>
            </div>
            <div className="Directions_Sections">
                <p className='text'>I am reimagining the design process by breaking traditional silos between disciplines and fostering <b>true interdisciplinary collaboration</b>. By leveraging <b>data-and-performance-driven approaches</b> as the driving force of design, I am to transform how design alternatives are generated, explored, evaluated and selected.</p>
                <p className='text'>My reseearch aims to empower built environment stakeholders and decision-makers—architects, engineers, urban planners and government agencies—with cutting-edge computational methods, workflows, and tools.</p>
                <p className='text'>Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here</p>
                <p className='text'>Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here</p>
                <img src={Image1} />
                <p className='text'>Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here</p>
            </div>
        </div>
    )
}

export default Directions
