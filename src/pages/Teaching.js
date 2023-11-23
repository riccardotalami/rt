import React from 'react'
import NavBar from '../components/NavBar'
import './Teaching.css'

function Teaching() {
    return (
        <div className='Teaching'>
            <NavBar />
            <div className='Teaching_Title'>
                <h1>Teaching</h1>
            </div>
            <div className='Teaching_Sections'>
                <div className="individual_teaching_section">
                    <h3>Loughborough University <span className='city'>(United Kingdom)</span></h3>
                    <ul>
                        <li>
                            <p>Center for the Energy Resilience and the Built Environment (ERBE)</p>
                            <p>Role: Invited Lecturer <span className="focus">(May 2021 - May 2021)</span></p>
                        </li>
                        <li>
                            <p>Center for the Energy Resilience and the Built Environment (ERBE)</p>
                            <p>Role: Invited Lecturer <span className="focus">(May 2020 - May 2020)</span></p>
                        </li>
                    </ul>
                </div>
                <div className="individual_teaching_section">
                    <h3>Singapore University of Technology and Design <span className='city'>(Singapore)</span></h3>
                    <ul>
                        <li>
                            <p>20.112 Sustainable Design Option Studio 2</p>
                            <p>Role: Teaching Assistant <span className="focus">(May 2018 - December 2018)</span></p>
                        </li>
                        <li>
                            <p>20.112 Sustainable Design Option Studio 3</p>
                            <p>Role: Teaching Assistant <span className="focus">(January 2018 - April 2018)</span></p>
                        </li>
                        <li>
                            <p>20.111 Sustainable Design Option Studio 1</p>
                            <p>Role: Teaching Assistant <span className="focus">(January 2018 - April 2018)</span></p>
                        </li>
                        <li>
                            <p>20.223 History, Theory and Culture 3: Contemporary Architecture Between Technology, Science and Culture</p>
                            <p>Role: Co-Instructor <span className="focus">(September 2017 - December 2017)</span></p>
                        </li>
                    </ul>
                </div>


            </div>
        </div >
    )
}

export default Teaching