import React from 'react'
import NavBar from '../components/NavBar'
import './Directions.css'
import Design_process from './../components/Design_process.png'

import PlaceHolderImage from './../components/PlaceHolderImage.jpg'

function Directions() {
    return (
        <div className='Directions'>
            <NavBar />
            <div className='Directions_Title'>
                <h1>Directions</h1>
            </div>
            <div className="Directions_Sections">
                <p className='text'>I am reimagining the design process by breaking traditional silos between disciplines and fostering <b>true interdisciplinary collaboration</b>. By leveraging <b>data-and-performance-driven approaches</b> as the driving force of design, I aim to transform how design alternatives are generated, explored, evaluated and selected.</p>
                <p className='text'>My reseearch aims to empower built environment stakeholders and decision-makers—architects, engineers, urban planners and government agencies—with cross-scale computational methods, workflows, and tools. These aim to enable:</p>
                <p className='text'>1. Automated design generation.</p>
                <p className='text'>2. Rapid and smart design exploration.</p>
                <p className='text'>3. Data-and-performance-driven design evaluation.</p>
                <p className='text'>4. Informed decision-making design selection.</p>
                <img src={Design_process} />
                <p className='text'>Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here Some Text here</p>
            </div>
        </div>
    )
}

export default Directions
