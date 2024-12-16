import React from 'react'
import NavBar from '../components/NavBar'
import './Teaching.css'

function Teaching() {
    return (
        <div className='Teaching'>
            <NavBar />
            <div className='Teaching_Title'>
                <h1>Teaching and Supervision</h1>
            </div>
            <div className='Teaching_Sections'>
                <div className="individual_teaching_section">
                    <h3>National University of Singapore - NUS <span className='city'>(Singapore)</span></h3>
                    <h4>Teaching:</h4>
                    <ul>
                        <li>
                            <p>Department of Architecture</p>
                            <p>Role: M.Arch. Dissertation Invited Guest Reviewer <span className="focus">(2024)</span></p>
                            </li>
                        <li>
                            <p>Department of Built Environment</p>
                            <p>Role: M.Sc. "Passive Systems" course Invited Guest Reviewer <span className="focus">(2024)</span></p>
                        </li>
                    </ul>
                    <h5>Supervision:</h5>
                    <ul>
                        <li>Xudong Jia <span className='focus'>Master Student (2023 - 2024)</span></li>
                        <li>Ilyas Dawoodjee <span className='focus'>Research Engineer (2023 - 2024)</span></li>
                        <li>Xinhao Hu <span className='focus'>Visiting PhD Candidate (2023 - 2024)</span></li>
                        <li>Glenda Cheng <span className='focus'>Undergraduate Dissertation (2023 - 2024)</span></li>
                        <li>Sabrina Tay <span className='focus'>Undergraduate Dissertation (2023)</span></li>
                        <li>Shirlynn Koh <span className='focus'>Undergraduate Dissertation (2023)</span></li>
                        <li>Thomas Firsich <span className='focus'>Visiting Master Student (2023)</span></li>
                    </ul>
                </div>
                <div className="individual_teaching_section">
                    <h3>Loughborough University <span className='city'>(United Kingdom)</span></h3>
                    <ul>
                        <li>
                            <p>Center for the Energy Resilience and the Built Environment (ERBE)</p>
                            <p>Role: Invited Lecturer <span className="focus">(2021)</span></p>
                        </li>
                        <li>
                            <p>Center for the Energy Resilience and the Built Environment (ERBE)</p>
                            <p>Role: Invited Lecturer <span className="focus">(2020)</span></p>
                        </li>
                    </ul>
                </div>
                <div className="individual_teaching_section">
                    <h3>Singapore University of Technology and Design - SUTD <span className='city'>(Singapore)</span></h3>
                    <ul>
                        <li>
                            <p>20.112 Sustainable Design Option Studio 2</p>
                            <p>Role: Teaching Assistant <span className="focus">(2018)</span></p>
                        </li>
                        <li>
                            <p>20.112 Sustainable Design Option Studio 3</p>
                            <p>Role: Teaching Assistant <span className="focus">(2018)</span></p>
                        </li>
                        <li>
                            <p>20.111 Sustainable Design Option Studio 1</p>
                            <p>Role: Teaching Assistant <span className="focus">(2018)</span></p>
                        </li>
                        <li>
                            <p>20.223 History, Theory and Culture 3: Contemporary Architecture Between Technology, Science and Culture</p>
                            <p>Role: Co-Instructor <span className="focus">(2017)</span></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Teaching