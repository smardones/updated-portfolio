import React from 'react';
import ACphoto from '../assets/images/AnimalCrossingMuseumTracker.png';
import foodPhoto from '../assets/images/FoodFestival.png';
import notePhoto from '../assets/images/NoteTaker.png';
import geminiPhoto from '../assets/images/ProjectGemini.png';
import runPhoto from '../assets/images/RunBuddy.png';
import weatherPhoto from '../assets/images/WeatherDashboard.png';
import gitHubIcon from '../assets/icons/GitHub.png';
import externalLinkIcon from '../assets/icons/ExternalLink.png';

function Project() {
    const projects = [
        {
            name: "Animal Crossing Museum Tracker",
            url: "https://sheltered-forest-35745.herokuapp.com/",
            github: "https://github.com/smardones/actracker",
            photo: ACphoto,
            technologies: "React, MongoDB, Redux"
        },
        {
            name: "Project Gemini",
            url: "https://codyrobbins99.github.io/project-gemini-forecast/index.html",
            github: "https://github.com/CodyRobbins99/project-gemini-forecast",
            photo: geminiPhoto,
            technologies: "JavaScript, HTML5, CSS"
        },
        {
            name: "Run Buddy",
            url: "https://smardones.github.io/run-buddy/",
            github: "https://github.com/smardones/run-buddy",
            photo: runPhoto,
            technologies: "HTML5, CSS"
        },
        {
            name: "Food Festival",
            url: "https://smardones.github.io/food-festival/",
            github: "https://github.com/smardones/food-festival",
            photo: foodPhoto,
            technologies: "Javascript, React"
        },
        {
            name: "Note Taker",
            url: "https://shady-cheetah.herokuapp.com/notes",
            github: "https://github.com/smardones/NoteTaker",
            photo: notePhoto,
            technologies: "Javascript"
        },
        {
            name: "Weather Dashboard",
            url: "https://smardones.github.io/weatherapp/",
            github: "https://github.com/smardones/weatherapp",
            photo: weatherPhoto,
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
                            <a href={project.url} className="project-link">
                                <img src={externalLinkIcon} alt={`Visit ${project.name}`} />
                            </a>
                            <a href={project.github} className="project-link">
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