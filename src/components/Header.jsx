import React from 'react';
import Searchbar from './Searchbar';
import Navbar from './Navbar';
import '../css/Header.css';
function Header() {
    return (
        <header className="App-header">
            <Searchbar />
            <Navbar />
        </header>

    );
}

export default Header;