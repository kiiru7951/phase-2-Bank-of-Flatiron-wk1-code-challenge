import React, { useState, useEffect } from 'react';

function TransactionTable({ filteredTransactions }) {
  const [transactions, setTransactions] = useState(filteredTransactions); // Original array


  useEffect(() => {
    setTransactions(filteredTransactions);
  }, [filteredTransactions]);

  // Handles form submission
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: transactions.length + 1, // Length of array + 1
      date: formData.date,
      description: formData.description,
      category: formData.category,
      amount: formData.amount
    };
    setTransactions([...transactions, newTransaction]);
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: ''
    });
  };


  // Handles transaction deletion
  const handleDelete = (id) => {
    const deleteTransaction = transactions.filter(transaction => transaction.id !== id);
    setTransactions(deleteTransaction); 
  };

  // 

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
        <button type="submit">Add Transaction</button>
      </form>

      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>
              <button type="button">
              Description
              </button>
            </th>
            <th>
              <button type="button">
              Category
              </button>
            </th>
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

/*onClick={() => setSortedField('description')}*/
