import React from 'react';

function TransactionTable({filteredTransactions}){
  
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