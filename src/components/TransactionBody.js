import React, { useState } from 'react';
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
    <div>
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <TransactionTable transaction={filteredTransactions} />
    </div>
  );
};



export default Filter;
