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
                <p className='text'>Are you exploring innovative solutions to shape sustainable, comfortable, smart, efficient, flexible, and climate-resilient built environments? Let's work together! I welcome opportunities to collaborate on research projects, tool development, and consultancy in areas such as:</p>
                <ol>
                    <li className='text'>Sustainable and Integrated Building Design</li>
                    <li className='text'>Performance-based Building and Urban Design</li>
                    <li className='text'>Computational Design</li>
                    <li className='text'>Artifical Intelligence</li>
                    <li className='text'>Numerical Optimization</li>
                    <li className='text'>Early-design Exploration</li>
                    <li className='text'>Multi-criteria Decision Making</li>
                    <li className='text'>Design Uncertainty and Robustness Analysis</li>
                    <li className='text'>Smart Built Environments</li>
                    <li className='text'>HVAC Systems Design and Controls</li>
                    <li className='text'>Daylighting</li>
                    <li className='text'>Indoor Environmental Quality</li>
                </ol>
                <p className='text'>Whether you are from academia, industry, or government, I bring expertise in developing methodologies, workflows, and tools to tackle complex challenges in the built environment. Feel free to reach out to discuss potential partnerships, research initiatives, or innovative ideas to advance our shared goals.</p>
            </div>
        </div>
    )
}

export default Collaborate
