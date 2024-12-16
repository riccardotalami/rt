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
                            <p><b>Research Fellow</b> (2024 - current)</p>
                            <p>Department of Architecture, College of Design and Engineering</p>
                            <p>National University of Singapore - NUS and Singapore-ETH Centre (Singapore)</p>
                            <p>Duties: <span className='focus'>Collaborating on research projects related to Early-design exploration, Multi-criteria Decision Making, Robust Building Design Optimization, Urban Building Energy Modelling, Building Design.</span></p>
                        </li>
                        <li>
                            <p><b>Research Fellow</b> (2023 - 2024)</p>
                            <p>Department of the Built Environment, College of Design and Engineering</p>
                            <p>National University of Singapore - NUS (Singapore)</p>
                            <p>Duties: <span className='focus'>Led a team for research projects on Temperature Setpoints and Indoor Environmental Quality, and the development of online tools for practical appplications. Collaborated on research projects related to Building Envelope Systems. Supervised  final year students for research thesis and visiting scholars. Developed and published scientific papers. Managed the procurement for project expenses.</span></p>
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
                <div className="individual_work_experience_section">
                    <h3>External Academic Experience</h3>
                    <ul>
                        <li>
                            <p><b>Committee Member - Electonic Communications for International Building Performance Simulation Association (IBPSA-Singapore)</b> (2024 - Current)</p>
                        </li>
                        <li>
                            <p><b>Professional Committee for International Building Performance Simulation Association (IBPSA-Singapore)</b> (2024 - Current)</p>
                        </li>
                        <li>
                            <p><b>Reviewer for Journal of Architectural Engineering</b> (2024 - Current)</p>
                        </li>
                        <li>
                            <p><b>Reviewer for Building Simulation 2023: 18th Conference of IBPSA</b> (August 2022 - September 2023)</p>
                            <p>4-6 September 2023, Shanghai (China) - Hybrid</p>
                        </li>
                        <li>
                            <p><b>Reviewer for Building Simulation 2021: 17th Conference of IBPSA</b> (August 2020 - September 2021)</p>
                            <p>1-3 September 2021, Bruges (Belgium)</p>
                        </li>
                        <li>
                            <p><b>Reviewer for Building Simulation and Optimization 2020</b> (September 2019 - September 2020)</p>
                            <p>21-22 September 2020, Loughborough (UK)</p>
                        </li>
                        <li>
                            <p><b>Reviewer for Building Simulation 2019: 16th Conference of IBPSA</b> (August 2018 - September 2019)</p>
                            <p>2-4 September 2019, Rome (Italy)</p>
                        </li>
                    </ul>
                </div>
                <div className="individual_work_experience_section">
                    <h3>Architectural Experience</h3>
                    <ul>
                        <li>
                            <p><b>Architectural Assistant</b> (September 2013 - February 2014)</p>
                            <p>Architect Renzo Parise (Padova, Italy)</p>
                            <p>Duties: <span className='focus'>Collaborated on the design and development of residential projects. Produced 2D and 3D drawings. Attended meetings with clients. Assisted with the materials selection.</span></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Work_Experience