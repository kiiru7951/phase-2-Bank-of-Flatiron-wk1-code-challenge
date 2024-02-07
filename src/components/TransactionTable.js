import React, { useState } from 'react';

function TransactionTable({ filteredTransactions }) {
  const [transactions, setTransactions] = useState(filteredTransactions);
  const [formData, setFormData] = useState({

  });

  // For submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: transactions.length + 1,
      date: formData.date,
      description: formData.description,
      category: formData.category,
      amount: formData.amount
    };
    setTransactions([...transactions, newTransaction]);
    setFormData({rowElements}); // Initial values are the iterated row element
  };

  // For handling form inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // For deleting a transaction
  const handleDelete = (id) => {
    const remTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransactions(remTransactions);
  };

  // For Table
  const rowElements = transactions.map((transaction) => (
    <tr key={transaction.id}>
      <td>{transaction.id}</td>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td><button onClick={() => handleDelete(transaction.id)}>Delete</button></td>
    </tr>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="date" name="date" value={formData.date} onChange={handleChange} placeholder="Enter date..." />
        <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Enter description..." />
        <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Choose category..." />
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder="Enter amount..." />
        <button>Add Transaction</button>
      </form>

      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rowElements}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
