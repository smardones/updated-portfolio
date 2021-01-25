import React from 'react';
import ACphoto from '../assets/images/AnimalCrossingMuseumTracker.png';
import foodPhoto from '../assets/images/FoodFestival.png';
import notePhoto from '../assets/images/NoteTaker.png';
import pairPhoto from '../assets/images/PairPro.png';
import geminiPhoto from '../assets/images/ProjectGemini.png';
import runPhoto from '../assets/images/RunBuddy.png';
import weatherPhoto from '../assets/images/WeatherDashboard.png';

function Project() {
    const projects = [
        {
            name: "Animal Crossing Museum Tracker",
            url: "https://sheltered-forest-35745.herokuapp.com/",
            photo: ACphoto
        },
        {
            name: "Project Gemini",
            url: "https://codyrobbins99.github.io/project-gemini-forecast/index.html",
            photo: geminiPhoto
        },
        {
            name: "Run Buddy",
            url: "https://smardones.github.io/run-buddy/",
            photo: runPhoto
        },
        {
            name: "Food Festival",
            url: "https://smardones.github.io/food-festival/",
            photo: foodPhoto
        },
        {
            name: "Note Taker",
            url: "https://shady-cheetah.herokuapp.com/notes",
            photo: notePhoto
        },
        {
            name: "Weather Dashboard",
            url: "https://smardones.github.io/weatherapp/",
            photo: weatherPhoto
        }
    ];

    return(
        <div>
        <h2>Projects</h2>
        <div className="project-grid-container">
            <div className="projects-container">
                {projects.map((project) => (
                    <a className="card" href={project.url} key={project.name}>
                        <img
                        src={project.photo}
                        alt={project.name}
                        className="project-img"
                        key={project.name}
                        />
                        <div class="card-container">
                            <h4><b>{project.name}</b></h4>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Project;