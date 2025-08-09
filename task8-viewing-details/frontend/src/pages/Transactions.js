import React, {useEffect, useState} from 'react';
import { API_BASE } from '../config';

export default function Transactions(){
  const [transactions,setTransactions] = useState([]);
  useEffect(()=> {
    fetch(`${API_BASE}/transactions`)
      .then(r=>r.json()).then(setTransactions).catch(console.error);
  },[]);
  return (
    <div>
      <h4>Transactions</h4>
      <div className="mb-2">
        <a className="btn btn-sm btn-outline-primary" href={`${API_BASE}/transactions/export/csv`}>Export CSV</a>
      </div>
      <table className="table table-striped">
        <thead><tr><th>Buyer</th><th>Product</th><th>Date</th><th>Quantity</th><th>Total</th><th>Status</th></tr></thead>
        <tbody>
          {transactions.map(t=>(
            <tr key={t._id}>
              <td>{t.buyer?.name}</td>
              <td>{t.product?.name}</td>
              <td>{new Date(t.date).toLocaleString()}</td>
              <td>{t.quantity}</td>
              <td>{t.totalAmount}</td>
              <td>{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
