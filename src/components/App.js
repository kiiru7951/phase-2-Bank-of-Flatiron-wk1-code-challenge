import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from './Header';
import TransactionBody from './TransactionBody';
import db from '../data/db.json'; 

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(db.transactions);
  }, [data]);

  console.log(data);

  const transactions= data

  return (
    <div className='App'>
      <Header />
      <TransactionBody transactions={transactions} />
    </div>
  );
};

export default App;




/* function App(){
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch(error => console.error('Error fetching data:', error));
    }, []);
    console.log(data)
  return (
    <div className='App'>
      <Header />
      <TransactionBody/>
    </div>);
  
  } */