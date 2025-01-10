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
                    <h3>Intro</h3>
                    <p className='intro_paragraph'>Welcome! I am <b>Riccardo Talami, PhD,</b> a Research Fellow with a joint appointment at the <b>National University of Singapore (NUS)</b> – Department of Architecture, and at the <b>Singapore-ETH Centre (SEC).</b> </p>
                    <p className='intro_paragraph'>My research lies at the intersection of <b>Building Science</b>, <b>Architecture</b>, <b>Engineering</b>, and <b>Operations Research.</b></p>
                    <p className='intro_paragraph'>My main research areas include <b>Performance-based Building and Urban Design</b>, <b>Building Performance Simulation and Optimization</b>, and <b>Sustainable and Integrated Building Design.</b></p>
                    <p className='intro_paragraph'>My research outcomes are mainly based on original research conducted via <b>computer simulations, laboratory and field studies.</b> </p>
                    <p className='intro_paragraph'>The aim of my research is to <b>empower building and urban stakeholders</b> to shape sustainable, comfortable, smart, efficient, flexible, and climate-resilient built environments.</p>
                    <p className='intro_paragraph'>I hold a Ph.D. in Architectural Engineering/Building Science from Loughborough University (UK), a Master of Science (M.Sc.) in Sustainable Building Design, and a Bachelor of Architecture from the University IUAV of Venice, Italy. </p>
                    <p className='intro_paragraph'>This website is a space where I share my work, research insights, and resources. Whether you are an academic, professional, or enthusiast, I invite you to explore and join the conversation on shaping the future of built environments. </p>
                </div>
                <div className="individual_about_section">
                    <h3>Interests</h3>
                    <ul>
                        <li>Sustainable and Integrated Building Design</li>
                        <li>Performance-based Building and Urban Design</li>
                        <li>Building Performance Simulation and Optimization</li>
                        <li>Computational Design</li>
                        <li>Artificial Intelligence</li>
                        <li>Numerical Optimization</li>
                        <li>Early-design Exploration</li>
                        <li>Multi-criteria Decision Making</li>
                        <li>Design Uncertainty and Robustness Analysis</li>
                        <li>Smart Built Environments</li>
                        <li>HVAC Systems Design and Controls</li>
                        <li>Daylighting</li>
                        <li>Indoor Environmental Quality</li>
                    </ul>


                </div>

                <div className="individual_about_section">
                    <h3>Memberships</h3>
                    <ul>
                        <li>IBPSA-Singapore Committee Member - Electronic Communications</li>
                        <li>Professional Committee for International Building Performance Simulation Association (IBPSA-Singapore)</li>
                    </ul>
                </div>

                <div className="individual_about_section">
                    <h3>Core Skills</h3>
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
                        <li>Programming: <span className="focus">Python, Java</span></li>
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