  import React from 'react';

function Nav() {
    const navOptions = [
       "About",
       "Projects",
       "Resume" 
    ];

    return(
            <ul className="tab-list">
                {navOptions.map((option) => (
                    <li key={option} className="tab hvr-radial-out">
                        <a href={`/${option}`}>
                            {option}
                        </a>
                    </li>
                )) }
            </ul>
    )
}

export default Nav;