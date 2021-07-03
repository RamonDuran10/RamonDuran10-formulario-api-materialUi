import React, { useState, useEffect }from 'react';
import DataTable from "./Components/DataTable";
import axios from "axios"

function App() {
  const [infoUsers, setInfoUsers] = useState([]);
  

  const handleDelete =(id) =>{
    const newUser = infoUsers.filter((user) =>user.id !== id);
    setInfoUsers(newUser)
  };

  useEffect(() =>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => setInfoUsers(response.data))
    

  },[])

  return (
    
    <div className="App"> 
     <DataTable
     infoUsers={infoUsers}
     handleDelete={handleDelete}
     />
    </div>
  );
}

export default App;
