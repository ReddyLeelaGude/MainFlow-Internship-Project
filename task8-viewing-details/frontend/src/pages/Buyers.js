import React, {useEffect, useState} from 'react';
import { API_BASE } from '../config';

export default function Buyers(){
  const [buyers,setBuyers] = useState([]);
  const [q,setQ] = useState('');
  useEffect(()=> {
    fetch(`${API_BASE}/buyers?q=${encodeURIComponent(q)}`)
      .then(r=>r.json()).then(setBuyers).catch(console.error);
  },[q]);
  return (
    <div>
      <h4>Buyers</h4>
      <div className="mb-2">
        <input className="form-control" placeholder="Search by name, email, phone" value={q} onChange={e=>setQ(e.target.value)} />
      </div>
      <table className="table table-striped">
        <thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Address</th></tr></thead>
        <tbody>
          {buyers.map(b=>(
            <tr key={b._id}>
              <td>{b.name}</td>
              <td>{b.email}</td>
              <td>{b.phone}</td>
              <td>{b.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
