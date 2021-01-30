import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Resume() {
    return(
        <div className="resume-page">
            <Header />
       <section className="resume-body">
            <h2>Resume</h2>
            <p>You can download my resume <a href="https://drive.google.com/file/d/1QOqwSpGhqEdYPOGpKonb1T_AYe9kQDfb/view?usp=sharing">HERE</a>.</p>
            
            <h3>Technical Skills</h3>
            <ul>
                <li>MERN - MongoDB, Express.js, React.js, Node.js</li>
                <li>Mongoose</li>
                <li>SQL, MySQL</li>
                <li>Materialize-UI</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>HTML5</li>
                <li>CSS</li>
            </ul>
                
            <h3>Experience</h3>
            <h4>Account Executive</h4> 	
            <h5>AmeriFactors Financial Group | Celebration, FL</h5>
            <p>Manage accounts receivables portfolio totaling more than $6 million between from more than 40 businesses with over 300 vendors while maintaining strong client relationships</p> 
            

            <h3>Education</h3>
            <h4>Certificate of Completion Virtual Coding Bootcamp</h4> 
            <h5>University of Central Florida | Orlando, FL</h5> 
            Extensive 6 month program with a focus on full-stack development including  
            
            <h4>Bachelors of Business Administration, Accounting and Marketing</h4>
            <h5>Texas Tech University – Lubbock, TX</h5>

       </section> 
       <Footer className="resume-footer"/>
       </div>
    )
}

export default Resume;