import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Components/Card';

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  

  const handleSearch = async () => {
    
    const res = await axios.get("https://api.github.com/search/users", {
      params: {
        q:query,
      }
    })
      .then((res)=>{
        setData(res.data.items);
        // console.log(data);
        // console.log(res.data.items);
      
    })

  }


  return (
    <div className="App">
      <h2>GitHub Search</h2>
      <input value={query} placeholder="Enter User Name" onChange={(e) => {
        setQuery(e.target.value);
      }}></input>
      <button onClick={handleSearch}>Search</button>
      <Card users={data} />
      
      {/* {
        data.map((e) => {
          
          return  ( <p key={e.id}>{e.login}</p>)
          
         
         
        })
          } */}
       
    </div>
  );
}

export default App;
