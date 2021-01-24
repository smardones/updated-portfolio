import React from 'react';


function Home() {
    return (
        <section className="homeContainer">
            <div className="jumbotron">
                <span className="hero-banner">Hi, I'm <em>Shaun</em> and I'm a <em>Full Stack Web Developer</em></span>
            </div>
            <div className="link" id="aboutlink">
                <span className="link-title">About Me</span>
            </div>
            <div className="link" id="worklink">
                <span className="link-title">Projects</span>
            </div>
            <div className="link" id="contactlink">
                <span className="link-title">Contact Me</span>
            </div>
        </section>
    )
} 

export default Home;