import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
  


function TransactionTable({id, date, description, category, amount}) {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'date', headerName: 'Date', type: 'Date', width: 130 },
        { field: 'description', headerName: 'Description', width: 400 },
        { field: 'category', headerName: 'Category', width: 150,},
        { field: 'amount', headerName: 'Amount',type: 'Number', width: 150,},
      ];
      
      const rows =  [
            { id:{id}, date:{date}, description:{description}, category:{category}, amount:{amount}},
          ]

    return (
        <div style={{ height: 400, width: '75%' }} className='TransactionTable'>
            <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
            pagination: {
            paginationModel: { page: 0, pageSize: 5 },
        },
        }}
        pageSizeOptions={[5, 5]}
        checkboxSelection
    
      />
        </div>
    )
}

export default TransactionTable;



    /* <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            {/* Add other table headers */
       /*     </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td>{transaction.amount}</td>
                  {/* Add other table cells */
        /*        </tr>
              ))}
            </tbody>
          </table>
        </div>

        */

/*       const rows = transactions.map((transaction) => {
        return ( [
            { id:transaction.id, date:transaction.date, description:transaction.description, category:transaction.category, amount:transaction.amount },
          ]);
        });

*/