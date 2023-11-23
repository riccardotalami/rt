import React from 'react'
import NavBar from '../components/NavBar'
import './About.css'

function About() {
    return (
        <div className='About'>
            <NavBar />
            <div className='About_Title'>
                <h1>About</h1>
            </div>
            <div className="About_Sections">
                <div className="individual_about_section">
                    <h3>Skills</h3>
                    <p>Languages</p>
                    <ul>
                        <li>English: <span className="focus">Full Professional Proficiency</span></li>
                        <li>Italian: <span className="focus">Native Proficiency</span></li>
                        <li>French: <span className="focus">Elementary Proficiency</span></li>
                        <li>Spanish: <span className="focus">Elementary Proficiency</span></li>
                    </ul>
                    <p>Technical</p>
                    <ul>
                        <li>Energy Analysis: <span className="focus">Energy Plus (Conventional, Design Builder and Open Studio Interfaces), ArchSim and Honeybee plug-ins for Grasshopper</span></li>
                        <li>Energy Certification: <span className="focus">Master Clima 11300</span></li>
                        <li>Solar and Environmental Analysis: <span className="focus">Ecotect, Climate Consultant</span></li>
                        <li>Daylight Analysis: <span className="focus">Radiance (DIVA and Ladybug interfaces)</span></li>
                        <li>Parametric Modeling: <span className="focus">Rhinoceros/Grasshopper</span></li>
                        <li>Statistics and Data Science: <span className="focus">R</span></li>
                        <li>Programming: <span className="focus"></span>Python, Java</li>
                        <li>Environmental Sensors: <span className="focus">HOBO products</span></li>
                        <li>Architecture/Engineering Drafting and Modeling: <span className="focus">AutoCAD, ArchiCAD, Revit, SketchUp, Rhinoceros</span></li>
                        <li>Graphic and Editing: <span className="focus">Photoshop, Illustrator, InDesign</span></li>
                    </ul>
                </div>
                <div className="individual_about_section">
                    <h3>Interests</h3>
                    <p>Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting Hmmm very interesting </p>
                </div>
                <div className="individual_about_section">
                    <h3>Awards</h3>
                    <p>Wow such achievements, much awards hmmm. Wow such achievements, much awards hmmm. Wow such achievements, much awards hmmm. Wow such achievements, much awards hmmm. Wow such achievements, much awards hmmm. Wow such achievements, much awards hmmm. Wow such achievements, much awards hmmm. Wow such achievements, much awards hmmm. Wow such achievements, much awards hmmm. Wow such achievements, much awards hmmm. Wow such achievements, much awards hmmm. Wow such achievements, much awards hmmm. Wow such achievements, much awards hmmm. Wow such achievements, much awards hmmm.</p>
                </div>
            </div>
        </div>
    )
}

export default About