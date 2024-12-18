import React from 'react'
import NavBar from '../components/NavBar'
import './Service.css'

function Service() {
    return (
        <div className='Service'>
            <NavBar />
            <div className='Service_Title'>
                <h1>Service</h1>
            </div>
            <div className='Service_Sections'>
                <div className="individual_service_section">
                    <h3>Reviewing</h3>
                    <ul>
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
                <div className="individual_service_section">
                    <h3>Associations</h3>
                    <ul>
                        <li>
                            <p><b>Committee Member - Electronic Communications for International Building Performance Simulation Association (IBPSA-Singapore)</b> (2024 - Current)</p>
                        </li>
                        <li>
                            <p><b>Professional Committee - International Building Performance Simulation Association (IBPSA-Singapore)</b> (2024 - Current)</p>
                        </li>
                        <li>
                            <p><b>Student Member - International Building Performance Simulation Association (IBPSA-United Kingdom)</b> (2019 - 2022)</p>
                        </li>
                    </ul>
                </div>
                <div className="individual_service_section">
                    <h3>Presentations</h3>
                    <ul>
                        <li>
                            <p><b>Performance-based building and urban design</b> (2024)</p>
                            <p> BUDS Research Lab at the National University of Singapore (Singapore)</p>
                        </li>
                        <li>
                            <p><b>Energy savings from dynamic temperature setpoints and setbacks</b> (2023)</p>
                            <p>Funding agency at the National University of Singapore (Singapore)</p>
                        </li>
                        <li>
                            <p><b>Multi-criteria robustness assessment of a sequential whole-building design optimization</b> (2021)</p>
                            <p>IBPSA Conference in Bruges (Belgium)</p>
                        </li>
                        <li>
                            <p><b>A comparison between sequential and simultaneous whole-building design optimization for building performance</b> (2020)</p>
                            <p>IBPSA - UK Conference in Loughborough (UK)</p>
                        </li>
                        <li>
                            <p><b>The sequential design optimization of building performance</b> (2020)</p>
                            <p>Funding agency at Loughborough University (UK)</p>
                        </li>
                        <li>
                            <p><b> Sensitivity of design parameters on energy, system and comfort performances for radiant cooled office buildings in the tropics.</b> (2019)</p>
                            <p> IBPSA Conference in Rome (Italy)</p>
                        </li>
                        <li>
                            <p><b>The sequential design optimization of building performance</b> (2019)</p>
                            <p>Doctoral Seminar at Loughborough University (UK)</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Service
