import React from 'react';
import self from '../assets/images/self.jpg';
import Header from '../components/header';
import Footer from '../components/footer';


function About() {
    return(
        <section className="page-body">
            <Header />

            <h2 className="section-title">About Me</h2>
            <div className="about-wrapper">
                
                <img className="self-portrait" src={self} alt="Me"/>
                <p>My name is Shaun Mardones, a full-stack web developer currently located in Central Florida who recently obtained a cerftificate of completion from the University of Central Florida’s full-stack web development bootcamp.</p> 
                <p>With a decade of experience in finance and customer service under my belt, I bring a unique perspective that delivers flexibility, quick-thinking, and the ability to quickly pick up new concepts.</p>
                <p>Most recently, I have applied these skills on a project that allows players to track obtained items in the video game <em>Animal Crossing New Horizons</em>. I plan to continue improving this app over time as well as create new projects focusing around my love of gaming.</p>
                <p>I am open to new work opportunities so I invite you to reach out if you would like to learn more.</p>
            </div>
            <Footer />
        </section>
    )
}

export default About;