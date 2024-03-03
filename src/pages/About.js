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
                    <p>Transferrable Skills</p>
                    <ul>
                        <li>Excellent journal, conference paper, and technical report writing skills</li>
                        <li>Ability to work in a team and independently</li>
                        <li>Good presentation and communication skills (verbal and written)</li>
                        <li>Ability to work in a multidisciplinary and multicultural environment</li>
                        <li>Ability to work on several projects simultaneously, with clear deadlines and under pressure</li>
                    </ul>
                    <p>Software and Technical</p>
                    <ul>
                        <li>Energy Analysis: <span className="focus">Energy Plus (Conventional, Design Builder and Open Studio Interfaces), ArchSim and Honeybee plug-ins for Grasshopper</span></li>
                        <li>Energy Certification: <span className="focus">Master Clima 11300</span></li>
                        <li>Solar and Environmental Analysis: <span className="focus">Ecotect, Climate Consultant</span></li>
                        <li>Daylight Analysis: <span className="focus">Radiance (DIVA and Ladybug interfaces)</span></li>
                        <li>Parametric Modeling: <span className="focus">Rhinoceros/Grasshopper</span></li>
                        <li>Statistics and Data Science: <span className="focus">R</span></li>
                        <li>Programming: <span className="focus"></span>Python, Java</li>
                        <li>Environmental Sensors: <span className="focus">HOBO products, DustTrak™ DRX Aerosol Monitor 8534, XL2 Audio and Acoustic Analyzer, VelociCalc Multi-Function Ventilation Meter 9565, RAE Systems ppbRAE 3000+ Portable Handheld VOC Monitor, Testo Luxmeter</span></li>
                        <li>Microcontrollers: <span className="focus">Raspberry Pi, Arduino</span></li>
                        <li>Architecture/Engineering Drafting and Modeling: <span className="focus">AutoCAD, ArchiCAD, Revit, SketchUp, Rhinoceros</span></li>
                        <li>Graphic and Editing: <span className="focus">Photoshop, Illustrator, InDesign</span></li>
                        <li>General: <span className="focus">Microsoft Office package</span></li>
                    </ul>
                    <p>Certifications/Courses</p>
                    <ul>
                        <li>Certified Peer Reviewer Course from Elsevier, <span className="focus">January 8-9 2020</span></li>
                        <li>Grasshopper Level 1 course from McNeel, <span className="focus">12 hours, January 25-29 2021</span></li>
                        <li>Grasshopper Level 2 course from McNeel, <span className="focus">18 hours, January 25-29 2021</span></li>
                    </ul>
                    <p>Languages</p>
                    <ul>
                        <li>English: <span className="focus">Full Professional Proficiency</span></li>
                        <li>Italian: <span className="focus">Native Proficiency</span></li>
                        <li>French: <span className="focus">Elementary Proficiency</span></li>
                        <li>Spanish: <span className="focus">Elementary Proficiency</span></li>
                    </ul>
                </div>
                <div className="individual_about_section">
                    <h3>Interests</h3>
                    <ul>
                        <li>Architectural Engineering</li>
                        <li>Building Performance Simulation</li>
                        <li>Building Optimisation</li>
                        <li>Energy-Efficient Buildings</li>
                        <li>Sustainable Architecture</li>
                    </ul>
                </div>
                <div className="individual_about_section">
                    <h3>Awards</h3>
                    <ul>
                        <li>UK Engineering and Physical Sciences Research Council Scholarship, Engineering and Physical Sciences Research Council (2019 - 2022)</li>
                        <li>Winner of Best Poster Award for “Subjective and Measured Evidence for Residential Lighting Metrics in the Tropics” (in collaboration with Jakubiec, J. Alstan; Srisamranrungruang, Thanyalak; Kong, Zhe; Quek, Geraldine), 16th International IBPSA Conference (2019).</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About