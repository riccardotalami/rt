import React from 'react'
import NavBar from '../components/NavBar'
import './Work_Experience.css'

function Work_Experience() {
    return (
        <div className='Work_Experience'>
            <NavBar />
            <div className='Work_Experience_Title'>
                <h1>Work Experience</h1>
            </div>
            <div className="Work_Experience_Sections">
                <div className="individual_work_experience_section">
                    <h3>Academic Experience</h3>
                    <ul>
                        <li>
                            <p><b>Research Fellow</b> (May 2023 - current)</p>
                            <p>The Built Environment, College of Design and Engineering</p>
                            <p>National University of Singapore (Singapore)</p>
                        </li>
                        <li>
                            <p><b>Doctoral Researcher</b> (January 2019 - February 2022)</p>
                            <p>School of Architecture, Building and Civil Engineering</p>
                            <p>Loughborough University (Loughborough, United Kingdom) </p>
                        </li>
                        <li>
                            <p><b>Co-Instructor and Teaching Assistant</b> (September 2017 - December 2018)</p>
                            <p>ASD - Architecture and Sustainable Design Pillar</p>
                            <p>Singapore University of Technology and Design (Singapore)</p>
                        </li>
                        <li>
                            <p><b>Research Assistant</b> (March 2017 - December 2018)</p>
                            <p>Design for Climate and Comfort Lab (DCC)</p>
                            <p>Singapore University of Technology and Design (Singapore)</p>
                        </li>
                        <li>
                            <p><b>Visiting Student Researcher</b> (May 2016 - November 2016)</p>
                            <p>Center for the Built Environment (CBE)</p>
                            <p>University of California Berkely (United States)</p>
                        </li>
                    </ul>
                </div>
                <div className="individual_work_experience_section">
                    <h3>External Academic Experience</h3>
                    <ul>
                        <li>
                            <p><b>Reviewer for Building Simulation 2019: 16th Conference of IBPSA</b> (August 2018 - September 2019)</p>
                            <p>2-4 September 2019, Rome (Italy)</p>
                        </li>
                        <li>
                            <p><b>Reviewer for Building Simulation and Optimization 2020</b> (September 2019 - September 2020)</p>
                            <p>21-22 September 2020, Loughborough (UK)</p>
                        </li>
                        <li>
                            <p><b>Reviewer for Building Simulation 2021: 17th Conference of IBPSA</b> (August 2020 - September 2021)</p>
                            <p>1-3 September 2021, Bruges (Belgium)</p>
                        </li>
                    </ul>
                </div>
                <div className="individual_work_experience_section">
                    <h3>Architectural Experience</h3>
                    <ul>
                        <li>
                            <p><b>Architectural Intern</b> (September 2013 - February 2014)</p>
                            <p>Arch. Renzo Parise (Padova, Italy)</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Work_Experience