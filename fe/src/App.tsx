import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  // Constants and variables
  const endpoint = "http://localhost:4000/graphql";
  let a;
  
  // const retrieveData = (data: string) => _data = data;
  
  const API = (route) =>{
  const [_data, setData] = useState([]);

  useEffect(()=>{

  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({query: "{ hello }"})
  })
    .then(r => r.json())
    
    .then(data => setData(Object.entries(data)[0][1]))
  },[route])
 
  return _data;
}
    

  return (
   <> 
    <h3 >Returned: {API("hello").hello} </h3>
    
    
    </>
  );
}

export default App;
