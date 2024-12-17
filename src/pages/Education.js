import React from 'react'
import NavBar from '../components/NavBar'
import './Education.css'

function Education() {
    return (
        <div className='Education'>
            <NavBar />
            <div className='Education_Title'>
                <h1>Education</h1>
            </div>
            <div className='sections'>
                <div className='each_section'>
                    <p className='date'>2019 - 2022</p>
                    <p className='location'>Loughborough, United Kingdom</p>
                    <h3>Doctor of Philosophy (PhD) in Building Science/Building Engineering <span className='major'>(Building Performance Optimization)</span></h3>
                    <h4>Loughborough University, School of Architecture, Building and Civil Engineering</h4>
                    <p className='title'><span className='focus'>Thesis title: </span><a href="https://doi.org/10.26174/thesis.lboro.21547701.v1" target="_blank">The sequential design optimization of building performance</a></p>
                    <p className='supervisors'><span className='focus'>Supervisors: </span>Prof. <a href="https://www.lboro.ac.uk/departments/abce/staff/jonathan-wright/" target="_blank">Jonathan Wright</a> and Dr. <a href="https://www.engineering.columbia.edu/faculty/bianca-howard" target="_blank">Bianca Howard</a></p>
                </div>
                <div className='each_section'>
                    <p className='date'>2014 - 2017</p>
                    <p className='location'>Venice, Italy</p>
                    <h3>Master of Science in Architecture and Innovation <span className='major'>(Sustainable Design)</span></h3>
                    <h4>University of California Berkely (UC Berkeley) and Università Iuav di Venezia (IUAV), Architecture and Innovation</h4>
                    <p className='title'><span className='focus'>Thesis title: </span>Recent trends in radiant system technology for heating and cooling: analysis of the factors that influence the built environment</p>
                    <p className='supervisors'><span className='focus'>Supervisors: </span><a href="https://www.researchgate.net/profile/Fred-Bauman" target="_blank">Fred Bauman</a>, PE (UC Berkeley), Prof. <a href="https://www.iuav.it/Ateneo1/docenti/docenti201/Romagnoni-/index.htm" target="_blank">Piercarlo Romagnoni</a> (IUAV) and <a href="" target="_blank">Simone Cappelletti</a> (STEAM Engineering)</p>
                </div>
                <div className='each_section'>
                    <p className='date'>2011 - 2014</p>
                    <p className='location'>Venice, Italy</p>
                    <h3>Bachelor of Science in Architecture</h3>
                    <h4>Università Iuav di Venezia (IUAV), Architecture and Innovation</h4>
                </div>
            </div>
        </div>
    )
}

export default Education