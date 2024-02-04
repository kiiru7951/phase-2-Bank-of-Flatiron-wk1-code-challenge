import React from 'react';
import '../App.css';
import Header from "./Header"


async function fetchData() {
  const data = await import('../data/db.json');
  console.log(data.transactions);

  return <div>
    <Header />
    <TransactionsList />

    </div>;

}

/*function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data.transactions);
      });
      console.log({transactions})
    }, []);

    return <div>
      <Header />
      
    </div>;

} */

export default App;