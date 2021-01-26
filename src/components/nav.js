  import React from 'react';

function Nav() {
    const navOptions = [
       "About",
       "Projects",
       "Contact" 
    ];

    return(
        <nav>
            <a href="/"><h1>Shaun Mardones</h1></a>
            <ul className="tab-list">
                {navOptions.map((option) => (
                    <li key={option} className="tab">
                        <a href={`/${option}`}>
                            {option}
                        </a>
                    </li>
                )) }
            </ul>
        </nav>
    )
}

export default Nav;