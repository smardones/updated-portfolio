import React from 'react';

function About() {
    return(
        <section>
            <h2 className="section-title">About Me</h2>
            <div className="about-wrapper">
                
                <img className="self-portrait" src={require("../assets/images/self.jpg")} alt="Me"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nulla nec mi scelerisque tincidunt in id nulla. Fusce enim magna, tincidunt a leo et, placerat facilisis sem. Quisque et bibendum nulla. Donec metus elit, cursus quis posuere eu, laoreet ac purus. Donec et sapien at nulla lobortis suscipit non eu augue. Suspendisse vel metus commodo, tincidunt enim nec, tincidunt erat. Aenean eget enim pulvinar, lacinia tellus ut, hendrerit leo. Aenean commodo volutpat porta. Proin lacus orci, lobortis in augue at, scelerisque tristique magna. Mauris id interdum nunc, posuere porttitor nisi.

                    Vestibulum commodo nisl vel purus tincidunt lobortis. Fusce tincidunt tristique quam, quis imperdiet justo semper ac. Curabitur molestie mi elit, eget faucibus sapien bibendum in. Integer fermentum sollicitudin dolor et hendrerit. Mauris tincidunt venenatis dui at euismod. Nam dapibus euismod nisi, ut scelerisque purus suscipit quis. Quisque ultricies arcu sodales, tincidunt justo eget, egestas diam. Integer ultrices faucibus est, ultricies bibendum ante gravida at. Maecenas tincidunt mauris sit amet augue dapibus placerat. In nisl metus, porta dictum dignissim sit amet, dapibus quis felis.</p>
            </div>
        </section>
    )
}

export default About;