import React from 'react'
import NavBar from '../components/NavBar'
import './Academic.css'

function Academic() {
    return (
        <div className='Academic'>
            <NavBar />
            <div className='Academic_Title'>
                <h1>Experience</h1>
            </div>
            <div className="Academic_Sections">
                <div className="individual_academic_section">
                    <h3>Academic</h3>
                    <ul>
                        <li>
                            <p><b>Research Fellow</b> (2024 - current)</p>
                            <p>Department of Architecture, College of Design and Engineering</p>
                            <p>National University of Singapore - NUS and Singapore-ETH Centre (Singapore)</p>
                            <p>Duties: <span className='focus'>Collaborating on research projects related to Design exploration, Multi-criteria Decision Making, Robust Building Design Optimization, Urban Building Energy Modelling, Building Design.</span></p>
                        </li>
                        <li>
                            <p><b>Research Fellow</b> (2022 - 2024)</p>
                            <p>Department of the Built Environment, College of Design and Engineering</p>
                            <p>National University of Singapore - NUS (Singapore)</p>
                            <p>Duties: <span className='focus'>Led a team for research projects on Temperature Setpoints and Indoor Environmental Quality, and the development of online tools for practical applications. Collaborated on research projects related to Building Envelope Systems. Supervised  final year students for research thesis and visiting scholars. Developed and published scientific papers. Managed the procurement for project expenses.</span></p>
                        </li>
                        <li>
                            <p><b>Doctoral Researcher</b> (2019 - 2022)</p>
                            <p>School of Architecture, Building and Civil Engineering</p>
                            <p>Loughborough University (Loughborough, United Kingdom)</p>
                            <p>Duties: <span className='focus'>Researched on Building Performance Optimization. Developed and published scientific papers. Delivered lectures.</span></p>
                        </li>
                        <li>
                            <p><b>Co-Instructor and Teaching Assistant</b> (2017 - 2018)</p>
                            <p>ASD - Architecture and Sustainable Design Pillar</p>
                            <p>Singapore University of Technology and Design - SUTD (Singapore)</p>
                            <p>Duties: <span className='focus'>Developed coursework structure, teaching materials, and assignments. Delivered lectures, conducted weekly reviews and supervised final exams.</span></p>
                        </li>
                        <li>
                            <p><b>Research Assistant</b> (2017 - 2018)</p>
                            <p>Design for Climate and Comfort Lab (DCC)</p>
                            <p>Singapore University of Technology and Design - SUTD (Singapore)</p>
                            <p>Duties: <span className='focus'>Developed and conducted independent research on Radiant Cooling Systems in the Tropics and Human Behaviour in office settings. Collaborated on research projects related to Daylighting in Buildings and Building Performance of Tropical Building Typolgies. Developed and published scientific papers.</span></p>
                        </li>
                        <li>
                            <p><b>Student Researcher</b> (2016)</p>
                            <p>Center for the Built Environment (CBE)</p>
                            <p>University of California Berkely - UC Berkeley (United States)</p>
                            <p>Duties: <span className='focus'>Researched on Radiant Cooling Systems, culminating in published scientific reports and the development of an online tool.</span></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Academic
