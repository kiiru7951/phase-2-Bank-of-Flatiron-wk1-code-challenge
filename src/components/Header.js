import React from 'react';
import logo from "../assets/bank.png"
import "../Header.css"

function Header() {
    return (
        <div className='Header'>
            <header className='header'>
                <h2>BANK OF FLATIRON</h2>
                <img className="logo" src={logo} alt="bank logo"/>
            </header>
        </div>
    )
}

export default Header;

