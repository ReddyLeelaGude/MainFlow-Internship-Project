import React, {useEffect, useState} from 'react';
import { API_BASE } from '../config';

export default function Products(){
  const [products,setProducts] = useState([]);
  const [q,setQ] = useState('');
  useEffect(()=> {
    fetch(`${API_BASE}/products?q=${encodeURIComponent(q)}`)
      .then(r=>r.json()).then(setProducts).catch(console.error);
  },[q]);
  return (
    <div>
      <h4>Products</h4>
      <div className="mb-2">
        <input className="form-control" placeholder="Search products" value={q} onChange={e=>setQ(e.target.value)} />
      </div>
      <table className="table table-striped">
        <thead><tr><th>Name</th><th>Category</th><th>Price</th><th>Stock</th></tr></thead>
        <tbody>
          {products.map(p=>(
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>{p.price}</td>
              <td>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
