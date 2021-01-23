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
            name: "Pair Pro",
            url: "https://evening-shelf-38157.herokuapp.com/",
            photo: pairPhoto
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
        <div className="projects-container">
            {projects.map((project) => (
                <a href={project.url} key={project.name}>
                    <img
                    src={project.photo}
                    alt={project.name}
                    className="project-img"
                    key={project.name}
                    />
                </a>
            ))}
        </div>
    </div>
    )
}

export default Project;