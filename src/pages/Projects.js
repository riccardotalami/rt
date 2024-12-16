import React from 'react'
import NavBar from '../components/NavBar'
import './Projects.css'
import ProjectsPageData from '../components/ProjectsPageData'
import { Link } from 'react-router-dom'

function Projects() {
    return (
        <div className='Projects'>
            <NavBar />
            <div className='Projects_Title'>
                <h1>Projects</h1>
            </div>

            <div className="Projects_Sections">
                {ProjectsPageData.map((element, index) => (
                    <div className='each_project_section' key={index}>
                        <p className="date">{element.date}</p>
                        <p className="location">{element.location}</p>
                        <h3><Link to={'/projects/' + `${element.title.split(' ')[0]}_${element.title.split(' ')[1]}_${element.title.split(' ')[2]}_${element.title.split(' ')[3]}`.toLowerCase()}>{element.title}</Link></h3>
                        <h4>{element.subtitle}</h4>
                        <p className="about">{element.about}</p>
                        <p>{element.role}</p>
                        {element.collaboration && (
                            <p dangerouslySetInnerHTML={{ __html: element.collaboration }}></p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects