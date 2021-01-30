import React from 'react';


function Home() {
    return (
        <section className="home-container">
            <div className="jumbotron">
                <p className="hero-banner">Hi, I'm <em>Shaun</em> and I'm a <em>Full Stack Web Developer</em></p>
            </div>
            <div className="link-panel" id="aboutlink">
                <a href="/about">
                    <span className="link"></span>
                </a>
                <p className="link-title about-link">About Me</p>
            </div>
            <div className="link-panel" id="worklink">
                <a href="/projects">
                    <span className="link"></span>
                </a>
                <p className="link-title">Projects</p>
            </div>
            <div className="link-panel" id="contactlink">
                <a href="/resume">
                    <span className="link"></span>
                </a>
                <p className="link-title">Resume &amp; Contact</p>
            </div>
        </section>
    )
} 

export default Home;