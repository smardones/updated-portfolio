  import React from 'react';

function Nav() {
    const navOptions = [
       "About",
       "Projects",
       "Contact" 
    ];

    return(
        <nav>
            <ul className="tab-list">
                <a href="/"><h1>Shaun Mardones</h1></a>
                {navOptions.map((option) => (
                    <li key={option} className="tab" sm={12} md={6} lg={4}>
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