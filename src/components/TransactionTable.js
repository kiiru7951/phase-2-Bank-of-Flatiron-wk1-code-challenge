import React from 'react';

function TransactionTable({filteredTransactions}){
  
  // For submit form
  function handleSubmit(event) {
    event.preventDefault();
  }

  // For Table
  const rowElements = filteredTransactions.map((transaction) => {
    return (
    <tr key={transaction.id}>
      <td>{transaction.id}</td>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
    );
    });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="date" name="date" placeholder="Enter date..." />
        <input type="text" name="description" placeholder="Enter description..." />
        <input type="text" name="category" placeholder="Choose category..." />
        <input type="number" name="amount" placeholder="Enter amount..." />
      <button>Add Transaction</button>
    </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {rowElements}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionTable