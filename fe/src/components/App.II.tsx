import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {

  // Constants and variables
  const endpoint = "http://localhost:4000/graphql";
  const queryAllStudents = {query: "{ name }"}
  const axiosConfig = {
    method: 'post',
    url:  endpoint,
    data: queryAllStudents
    // data: {query: "{ hello }"}
  }
  
  //Custom hook for API
  const useAPI = () =>{
  
    // Constants and variables
  const [_data, setData] = useState([]);

  useEffect(()=>{

    axios(axiosConfig)
    .then(data => setData(data.data['data']['name']))
    // .then(data => setData(Object.entries(data.data)[0][1]))
    
  },[])
 
  return _data;
}
    

  return (
   <> 
    <h3 >Returned: {useAPI()} </h3>
    
    
    </>
  );
}

export default App;
