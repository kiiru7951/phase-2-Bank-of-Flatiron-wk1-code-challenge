import React from 'react';
import "../../public/bank.png"

function Header() {
    return (
        <header>
            <h2>BANK OF FLATIRON</h2>
            <img src="bank.png" alt="bank logo"/>
        </header>
    )
}

export default Header;

/*{transactions.map((transaction) => transaction.id)}*/