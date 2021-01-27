import React from 'react';
import Nav from './nav';

function Header() {
    return(
        <header className="app-header">
            <a href="/"><h1>Shaun Mardones</h1></a>
            <Nav />
        </header>
    )
}

export default Header;