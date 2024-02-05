import React,{ useState , useEffect } from 'react';
import '../App.css';
import Header from "./Header"
import TransactionBody from './TransactionBody';

function App(){
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
  
  }



/*function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      });
      console.log({transactions})
    }, []);

    return <div>
      <Header />
      
    </div>;

} */

export default App;