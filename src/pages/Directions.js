import React from 'react'
import NavBar from '../components/NavBar'
import './Directions.css'
import Design_process from './../components/Design_process.png'
import Design_innovative from './../components/Design_innovative.png'

function Directions() {
    return (
        <div className='Directions'>
            <NavBar />
            <div className='Directions_Title'>
                <h1>Directions</h1>
            </div>
            <div className="Directions_Sections">
                <p className='text'>I am reimagining the design process by breaking traditional silos between disciplines and fostering <b>true interdisciplinary collaboration</b>. My research aims to empower built environment stakeholders and decision-makers—architects, engineers, urban planners, facilities managers, and government agencies—with <b>cross-scale computational methods, workflows, and tools</b>.</p>
                <img src={Design_process} />
                <p className='text'>At the core of my research, I am envisioning a <b>dynamic, adaptive, and iterative design process</b>. Through this process, I aim to transform how design alternatives are generated, explored, evaluated and selected:</p>
                <ol>
                    <li className='text'>Automated design generation.</li>
                    <li className='text'>Rapid and smart design exploration.</li>
                    <li className='text'>Data-and-performance-driven design evaluation.</li>
                    <li className='text'>Informed decision-making design selection.</li>
                </ol>
                <img src={Design_innovative} />
                <p className='text'>This enables built environment stakeholders to navigate complex decisions, bridging the gap between design ideas and actionable design solutions.</p>
            </div>
        </div>
    )
}

export default Directions
