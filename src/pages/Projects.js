import React from 'react'
import NavBar from '../components/NavBar'
import './Projects.css'

function Projects() {
    return (
        <div className='Projects'>
            <NavBar />
            <div className='Projects_Title'>
                <h1>Projects</h1>
            </div>
            <div className="Projects_Sections">
                <div className='each_project_section'>
                    <p className='date'>January 2019 - February 2022</p>
                    <p className='location'>Loughborough, United Kingdom</p>
                    <h3>The sequential whole-building design approach for building performance</h3>
                    <h4>Loughborough University, School of Architecture, Building and Civil Engineering</h4>
                    <p className='about'>The research develops a novel whole-building design approach in the multi-objective optimization of building geometry, fabric, HVAC systems and controls to support the high-performance building design process. It then evaluates its effectiveness, reliability, and computational efficiency.</p>
                    <p className='supervisors'><span className='focus'>Supervisors: </span>Prof. <a href="https://www.lboro.ac.uk/departments/abce/staff/jonathan-wright/" target="_blank">Jonathan Wright</a> and Dr. <a href="https://www.engineering.columbia.edu/faculty/bianca-howard" target="_blank">Bianca Howard</a></p>
                </div>
                
                <div className='each_project_section'>
                    <p className='date'>July 2018 - ?</p>
                    <p className='location'>Singapore</p>
                    <h3>Comparing laboratory and field studies of occupant lighting experience</h3>
                    <h4>Singapore University of Technology and Design</h4>
                    <p className='about'>The research investigates if laboratory conclusions related to visual discomfort and lighting quality are applicable to real building conditions. This is achieved by comparing 40 laboratory post-occupancy evaluation responses to 40 field responses in actual office workspaces in Singapore.</p>
                    <p className='supervisors'><span className='focus'>Supervisor: </span>Dr. <a href="https://scholar.google.com/citations?hl=en&user=0nsh9dAAAAAJ&view_op=list_works&sortby=pubdate" target="_blank">J. Alstan Jakubiec</a></p>
                </div>

                <div className='each_project_section'>
                    <p className='date'>July 2018 - December 2018</p>
                    <p className='location'>Singapore</p>
                    <h3>Subjective and measured evidence for residential lighting metrics in the tropics</h3>
                    <h4>Singapore University of Technology and Design</h4>
                    <p className='about'>The research presents a comprehensive study methodology to craft statistically-valid subjective models based on predictive lighting simulation data. This is done by comparing measured and simulated lighting levels in 17 residential housing units in Singapore against the subjective opinions of 35 participants who reside in the units.</p>
                    <p className='supervisors'><span className='focus'>Supervisor: </span>Dr. <a href="https://scholar.google.com/citations?hl=en&user=0nsh9dAAAAAJ&view_op=list_works&sortby=pubdate" target="_blank">J. Alstan Jakubiec</a></p>
                </div>

                <div className='each_project_section'>
                    <p className='date'>March 2017 - December 2018</p>
                    <p className='location'>Singapore</p>
                    <h3>Radiant Cooling Systems in the Tropics</h3>
                    <h4>Singapore University of Technology and Design</h4>
                    <p className='about'>The research aims to support early-design decisions when integrating radiant cooling systems in architectural design. This is achieved by identifying the most important and influential passive and active design parameters related to energy consumption, system operation and thermal comfort in the tropics. Through this research, meaningful guidelines were created to focus a proportionate amount of design effort on variables with a larger impact on building performance, and establishing an order of importance on which the design parameters should be addressed during the design process.</p>
                    <p className='supervisors'><span className='focus'>Supervisor: </span>Dr. <a href="https://scholar.google.com/citations?hl=en&user=0nsh9dAAAAAJ&view_op=list_works&sortby=pubdate" target="_blank">J. Alstan Jakubiec</a></p>
                </div>

                <div className='each_project_section'>
                    <p className='date'>March 2017 - December 2018</p>
                    <p className='location'>Singapore</p>
                    <h3>Sustainable Futures: Cooling</h3>
                    <h4>Singapore University of Technology and Design</h4>
                    <p className='about'>In a collaboration with the Lee Kuan Yew Centre for Innovative Cities, the cooling portion of the project investigates human behaviours by performing long term observational field studies in commercial and residential spaces, and analyzing how individuals operate their spaces in buildings through statistical analysis of air-conditioning, window shading, and electric lighting use. Translating these observations into predictive models, the results will be used to inform building design decisions.</p>
                    <p className='supervisors'><span className='focus'>Supervisor: </span>Dr. <a href="https://scholar.google.com/citations?hl=en&user=0nsh9dAAAAAJ&view_op=list_works&sortby=pubdate" target="_blank">J. Alstan Jakubiec</a></p>
                </div>

                <div className='each_project_section'>
                    <p className='date'>May 2016 - November 2016</p>
                    <p className='location'>California, United States</p>
                    <h3>Optimizing Radiant Systems for Energy Efficiency and Comfort</h3>
                    <h4>University of California, Berkeley - Center for the Built Environment</h4>
                    <p className='about'>The objective of this project was to contribute to improved understanding of applications, design and optimization of radiant heating and cooling systems, and to develop guidelines, tools and resources for system designers and operators. The  project contributed to the implementation of a database of over 400 commercial buildings that use radiant cooling and heating across the globe, the largest database of its kind to date. All buildings from the database are displayed on an <a href="http://bit.ly/RadiantBuildingsCBEv2" target='_blank'>online interactive map</a>.</p>
                    <p className='supervisors'><span className='focus'>Supervisor: </span><a href="https://www.researchgate.net/profile/Fred-Bauman" target="_blank">Fred Bauman</a>, PE</p>
                </div>
                {/* <ul>
                    <li>
                        <h3>The sequential whole-building design approach for building performance (January 2019 - February 2022)</h3>
                        <p>Loughborough University (United Kingdom)</p>
                        <p><span className="focus">The research develops a novel whole-building design approach in the multi-objective optimization of building geometry, fabric, HVAC systems and controls to support the high-performance building design process. It then evaluates its effectiveness, reliability, and computational efficiency.</span></p>
                        <p>Supervisors: Prof. <a href="https://www.lboro.ac.uk/departments/abce/staff/jonathan-wright/" target="_blank">Jonathan Wright</a>, Dr. <a href="https://www.engineering.columbia.edu/faculty/bianca-howard" target="_blank">Bianca Howard</a></p>
                    </li>

                    <li>
                        <h3>Comparing laboratory and field studies of occupant lighting experience (July 2018 - ?)</h3>
                        <p>Singapore University of Technology and Design (Singapore)</p>
                        <p><span className="focus">The research investigates if laboratory conclusions related to visual discomfort and lighting quality are applicable to real building conditions. This is achieved by comparing 40 laboratory post-occupancy evaluation responses to 40 field responses in actual office workspaces in Singapore.</span></p>
                        <p>Supervisor: Dr. <a href="https://scholar.google.com/citations?hl=en&user=0nsh9dAAAAAJ&view_op=list_works&sortby=pubdate" target="_blank">J. Alstan Jakubiec</a></p>
                    </li>

                    <li>
                        <h3>Subjective and measured evidence for residential lighting metrics in the tropics (July 2018 - December 2018)</h3>
                        <p>Singapore University of Technology and Design (Singapore)</p>
                        <p><span className="focus">The research presents a comprehensive study methodology to craft statistically-valid subjective models based on predictive lighting simulation data. This is done by comparing measured and simulated lighting levels in 17 residential housing units in Singapore against the subjective opinions of 35 participants who reside in the units.</span></p>
                        <p>Supervisor: Dr. <a href="https://scholar.google.com/citations?hl=en&user=0nsh9dAAAAAJ&view_op=list_works&sortby=pubdate" target="_blank">J. Alstan Jakubiec</a></p>
                    </li>

                    <li>
                        <h3>Radiant Cooling Systems in the Tropics (March 2017 - December 2018)</h3>
                        <p>Singapore University of Technology and Design (Singapore)</p>
                        <p><span className="focus">The research aims to support early-design decisions when integrating radiant cooling systems in architectural design. This is achieved by identifying the most important and influential passive and active design parameters related to energy consumption, system operation and thermal comfort in the tropics. Through this research, meaningful guidelines were created to focus a proportionate amount of design effort on variables with a larger impact on building performance, and establishing an order of importance on which the design parameters should be addressed during the design process.</span></p>
                        <p>Supervisor: Dr. <a href="https://scholar.google.com/citations?hl=en&user=0nsh9dAAAAAJ&view_op=list_works&sortby=pubdate" target="_blank">J. Alstan Jakubiec</a></p>
                    </li>

                    <li>
                        <h3>Sustainable Futures: Cooling (March 2017 - December 2018)</h3>
                        <p>Singapore University of Technology and Design (Singapore)</p>
                        <p><span className="focus">In a collaboration with the Lee Kuan Yew Centre for Innovative Cities, the cooling portion of the project investigates human behaviours by performing long term observational field studies in commercial and residential spaces, and analyzing how individuals operate their spaces in buildings through statistical analysis of air-conditioning, window shading, and electric lighting use. Translating these observations into predictive models, the results will be used to inform building design decisions.</span></p>
                        <p>Supervisor: Dr. <a href="https://scholar.google.com/citations?hl=en&user=0nsh9dAAAAAJ&view_op=list_works&sortby=pubdate" target="_blank">J. Alstan Jakubiec</a></p>
                    </li>

                    <li>
                        <h3>Optimizing Radiant Systems for Energy Efficiency and Comfort (May 2016 - November 2016)</h3>
                        <p>UC Berkeley - Center for the Built Environment (United States)</p>
                        <p><span className="focus">The objective of this project was to contribute to improved understanding of applications, design and optimization of radiant heating and cooling systems, and to develop guidelines, tools and resources for system designers and operators. The  project contributed to the implementation of a database of over 400 commercial buildings that use radiant cooling and heating across the globe, the largest database of its kind to date. All buildings from the database are displayed on an <a href="http://bit.ly/RadiantBuildingsCBEv2" target='_blank'>online interactive map</a>.</span></p>
                        <p>Supervisor: <a href="https://www.researchgate.net/profile/Fred-Bauman" target="_blank">Fred Bauman</a>, PE</p>
                    </li>
                </ul> */}
            </div>
        </div>
    )
}

export default Projects