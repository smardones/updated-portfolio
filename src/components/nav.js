  import React from 'react';

function Nav() {
    const navOptions = [
       "About",
       "Projects",
       "Contact" 
    ];

    return(
            <ul className="tab-list">
                {navOptions.map((option) => (
                    <li key={option} className="tab">
                        <a href={`/${option}`}>
                            {option}
                        </a>
                    </li>
                )) }
            </ul>
    )
}

export default Nav;