import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import './ProjectsPage.css';
import ProjectsPageData from '../components/ProjectsPageData';
import { Link } from 'react-router-dom';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProjectsPage() {
    const { projectTitle } = useParams();

    // Scroll to the top when the page is rendered
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectTitle]);

    // Find the current project index
    const currentIndex = ProjectsPageData.findIndex(
        project => project.title.split(' ').slice(0, 4).join('_').toLowerCase() === projectTitle
    );

    if (currentIndex === -1) {
        return (
            <div className="ProjectsPage">
                <NavBar />
                <div className='ProjectsPage_Title'>
                    <h1>No project found</h1>
                </div>
            </div>
        );
    }

    const projectData = ProjectsPageData[currentIndex];

    function renderData(element, index, parentIndex = '') {
        const uniqueKey = `${parentIndex}-${index}`;
        if (element.text) {
            const text = element.text;
            const linkRegex = /<link:\s*"([^"]+)"\s*(.*?)>/;
            const match = linkRegex.exec(text);

            if (match) {
                const url = match[1];
                const linkText = match[2];
                const replacedText = text.replace(match[0], `<a href="${url}" target="_blank">${linkText}</a>`);
                return <p className='text' key={uniqueKey} dangerouslySetInnerHTML={{ __html: replacedText }} />;
            } else {
                return <p className='text' key={uniqueKey}>{text}</p>;
            }
        } else if (element.image) {
            return <img src={element.image} key={uniqueKey} alt="" />;
        } else {
            return null;
        }
    }

    // Generate URLs for navigation links
    function generateProjectUrl(title) {
        return '/projects/' + title.split(' ').slice(0, 4).join('_').toLowerCase();
    }

    const isFirst = currentIndex === 0;
    const isLast = currentIndex === ProjectsPageData.length - 1;

    const prevLink = !isFirst ? generateProjectUrl(ProjectsPageData[currentIndex - 1].title) : null;
    const nextLink = !isLast ? generateProjectUrl(ProjectsPageData[currentIndex + 1].title) : null;

    const prevTitle = !isFirst ? ProjectsPageData[currentIndex - 1].title : null;
    const nextTitle = !isLast ? ProjectsPageData[currentIndex + 1].title : null;

    return (
        <div className="ProjectsPage">
            <NavBar />
            <div className='ProjectsPage_Title'>
                <h1>{projectData.title}</h1>
            </div>

            <div className="ProjectsPage_Sections">
                {projectData.data.map((element, index) => renderData(element, index))}
            </div>

            <div className="ProjectsPage_Navigation">
                {isFirst && nextLink && (
                    <div className='nextLink'>
                        <Link to={nextLink}>{nextTitle} <FontAwesomeIcon icon={faAnglesRight} /></Link>
                    </div>
                )}

                {isLast && prevLink && (
                    <div className='previousLink'>
                        <Link to={prevLink}><FontAwesomeIcon icon={faAnglesLeft} /> {prevTitle}</Link>
                    </div>
                )}

                {!isFirst && !isLast && (
                    <div className='Links'>
                        {prevLink &&
                            <div className='previousLink'>
                                <Link to={prevLink}><FontAwesomeIcon icon={faAnglesLeft} /> {prevTitle}</Link>
                            </div>}
                        {nextLink &&
                            <div className='nextLink'>
                                <Link to={nextLink}>{nextTitle} <FontAwesomeIcon icon={faAnglesRight} /></Link>
                            </div>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectsPage;