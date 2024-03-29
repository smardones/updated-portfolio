import React from 'react';
import ACphoto from '../assets/images/AnimalCrossingMuseumTracker.png';
import ttrPhoto from '../assets/images/TabletopRandomizer.png';
import planetPhoto from '../assets/images/OVScreen.PNG';
import geminiPhoto from '../assets/images/ProjectGemini.png';
import runPhoto from '../assets/images/RunBuddy.png';
import weatherPhoto from '../assets/images/WeatherDashboard.png';
import gitHubIcon from '../assets/icons/GitHub.png';
import externalLinkIcon from '../assets/icons/ExternalLink.png';

function Project() {
    const projects = [
        {
            name: "AC Museum Tracker",
            url: "https://sheltered-forest-35745.herokuapp.com/",
            github: "https://github.com/smardones/actracker",
            photo: ACphoto,
            description: "test",
            technologies: "React, MongoDB, Redux"
        },
        {
            name: "The Planets - Planet Explorer",
            url: "https://whispering-stream-58778.herokuapp.com/",
            github: "https://github.com/smardones/planetexplorer",
            photo: planetPhoto,
            description:"test",
            technologies: "React, JavaScript, HTML5, CSS"
        },
        {
            name: "Project Gemini",
            url: "https://codyrobbins99.github.io/project-gemini-forecast/index.html",
            github: "https://github.com/CodyRobbins99/project-gemini-forecast",
            photo: geminiPhoto,
            description:"test",
            technologies: "JavaScript, HTML5, CSS"
        },
        {
            name: "Run Buddy",
            url: "https://smardones.github.io/run-buddy/",
            github: "https://github.com/smardones/run-buddy",
            photo: runPhoto,
            description:"test",
            technologies: "HTML5, CSS"
        },
        {
            name: "Tabletop Randomizer",
            url: "http://agile-inlet-31690.herokuapp.com/",
            github: "https://github.com/smardones/tabletoprandomizer",
            photo: ttrPhoto,
            description:"test",
            technologies: "SQL, MySQL, React, Node, Expressjs"
        },
        {
            name: "Weather Dashboard",
            url: "https://smardones.github.io/weatherapp/",
            github: "https://github.com/smardones/weatherapp",
            photo: weatherPhoto,
            description:"test",
            technologies: "Javascript"
        }
    ];

    return(
        <div className="page-body">
        <h2>Projects</h2>
        <div className="project-grid-container">
            <div className="projects-container">
                {projects.map((project) => (
                    <div className="card" href={project.url} key={project.name}>
                        <img
                        src={project.photo}
                        alt={project.name}
                        className="project-img"
                        key={project.name}
                        />
                        <div className="card-container">
                            <h4 className="project-name"><b>{project.name}</b></h4>
                            <p className="technologies">{project.technologies}</p>
                        </div>
                        <div className="card-links">
                            <a href={project.url} className="project-link hvr-radial-out">
                                <img src={externalLinkIcon} alt={`Visit ${project.name}`} />
                            </a>
                            <a href={project.github} className="project-link hvr-radial-out">
                                <img src={gitHubIcon} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    </div>
    )
}

export default Project;