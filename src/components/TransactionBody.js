import React, { useState } from 'react';
import "../TransactionBody.css";
import TransactionTable from "./TransactionTable";

function Filter({ transactions }) { 

  const [searchTerm, setTerm] = useState('');
  const [filteredTransactions, setTransactions] = useState(transactions); 

  const handleSearch = (event) => {
    const term = event.target.value;
    setTerm(term);
    filterTransactions(term);
  };

  const filterTransactions = (term) => {
    term = term.toLowerCase(); //for case insensitivity
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(term)
    );
    setTransactions(filtered); 
  };

  return (
    <div className='TransactionBody'>
      <div className='filter'>
        <input
          type="text"
          placeholder="Search transactions..."
          value={searchTerm}
          onChange={handleSearch}
        />
       <button>Search</button>

      </div>
      <div>
        
      </div>
      <div className='table'>
        <TransactionTable filteredTransactions={filteredTransactions} />
      </div>
    </div>
  );
}

export default Filter;
