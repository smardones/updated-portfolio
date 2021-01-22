import React from 'react';

function Project() {
    const projects = [
        {
            name: "Animal Crossing Museum Tracker",
            url: "https://sheltered-forest-35745.herokuapp.com/"
        }
        {
            name: "Project Gemini",
            url: "https://codyrobbins99.github.io/project-gemini-forecast/index.html"
        },
        {
            name: "Run Buddy",
            url: "https://smardones.github.io/run-buddy/"
        },
        {
            name: "Pair Pro",
            url: "https://evening-shelf-38157.herokuapp.com/"
        },
        {
            name: "Food Festival",
            url: "https://smardones.github.io/food-festival/"
        },
        {
            name: "Note Taker",
            url: "https://shady-cheetah.herokuapp.com/notes"
        },
        {
            name: "Weather Dashboard",
            url: "https://smardones.github.io/weatherapp/"
        }
    ];

    return(
        <div>
        <h2>Projects</h2>
        <div className="projects-container">
            {projects.map((project) => (
                <a href={project.url} key={project.name}>
                    <img
                    src={require(`../../assets/images/${project.name.replace(/\s/g, '')}.png`)}
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