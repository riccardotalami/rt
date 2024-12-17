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
                            <p><b>Committee Member - Electonic Communications for International Building Performance Simulation Association (IBPSA-Singapore)</b> (2024 - Current)</p>
                        </li>
                        <li>
                            <p><b>Professional Committee for International Building Performance Simulation Association (IBPSA-Singapore)</b> (2024 - Current)</p>
                        </li>
                    </ul>
                </div>
                <div className="individual_service_section">
                    <h3>Events</h3>
                    <ul>
                        <li>
                            <p><b>Bolded Text Here</b> (Date Here)</p>
                            <p>Location Here</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Service
