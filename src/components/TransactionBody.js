import React, { useState } from 'react';
import "../TransactionBody.css"
import TransactionTable from "./TransactionList";

function Filter(transactions){

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTransactions, setTransactions] = useState(transactions);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    filterTransactions(term);
  };

  const filterTransactions = (term) => {
    const filtered = transactions.filter((transaction) =>
      transaction.description.includes(term)
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
      </div>
      <div className='table'>
      <TransactionTable transaction={filteredTransactions} />
      </div>
    </div>
  );
};



export default Filter;
