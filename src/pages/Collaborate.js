import React from 'react'
import NavBar from '../components/NavBar'
import './Collaborate.css'

function Collaborate() {
    return (
        <div className='Collaborate'>
            <NavBar />
            <div className='Collaborate_Title'>
                <h1>Collaborate With Me</h1>
            </div>
            <div className="Collaborate_Sections">
                <p className='text'>I am reimagining the design process by breaking traditional silos between disciplines and fostering <b>true interdisciplinary collaboration</b>. My research aims to empower built environment stakeholders and decision-makers—architects, engineers, urban planners, facilities managers, and government agencies—with <b>cross-scale computational methods, workflows, and tools</b>.</p>
                <p className='text'>At the core of my research, I am envisioning a <b>dynamic, adaptive, and iterative design process</b>. Through this process, I aim to transform how design alternatives are generated, explored, evaluated and selected:</p>
                <ol>
                    <li className='text'>Automated design generation.</li>
                    <li className='text'>Rapid and smart design exploration.</li>
                    <li className='text'>Data-and-performance-driven design evaluation.</li>
                    <li className='text'>Informed decision-making design selection.</li>
                </ol>
                <p className='text'>This enables built environment stakeholders to navigate complex decisions, bridging the gap between design ideas and actionable design solutions.</p>
            </div>
        </div>
    )
}

export default Collaborate
