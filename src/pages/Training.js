import React from 'react'
import NavBar from '../components/NavBar'
import './Training.css'

function Training() {
    return (
        <div className='Training'>
            <NavBar />
            <div className='Training_Title'>
                <h1>Training</h1>
            </div>
            <div className='Training_Sections'>
                <div className="individual_training_section">
                    <h3>Conferences</h3>
                    <ul>
                        <li>
                            <p><b>International Conference on Resilient Systsems</b> </p>
                            <p>28-30 August 2024, Singapore</p>
                        </li>
                        <li>
                            <p><b>Building Simulation 2023: 18th Conference of IBPSA</b> </p>
                            <p>4-6 September 2023, Shanghai (China) - Hybrid</p>
                        </li>
                        <li>
                            <p><b>Building Simulation 2021: 17th Conference of IBPSA</b> </p>
                            <p>1-3 September 2021, Bruges (Belgium)</p>
                        </li>
                        <li>
                            <p><b>Building Simulation and Optimization 2020</b> </p>
                            <p>21-22 September 2020, Loughborough (UK)</p>
                        </li>
                        <li>
                            <p><b>Building Simulation 2019: 16th Conference of IBPSA</b> </p>
                            <p>2-4 September 2019, Rome (Italy)</p>
                        </li>
                    </ul>
                </div>
                <div className="individual_training_section">
                    <h3>Workshops</h3>
                    <ul>
                        <li>
                            <p><b>Exploring Structures and Features of Research Articles</b> (2019)</p>
                            <p>Loughborough University (UK)</p>
                        </li>
                    </ul>
                </div>
                <div className="individual_training_section">
                    <h3>XXXXXX</h3>
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

export default Training
