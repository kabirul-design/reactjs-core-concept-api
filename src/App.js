import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <ExternalUser></ExternalUser>
    </div>
  );
}

function ExternalUser(){
  const [users, setUsers] = useState([0])
  // useEffect( ()=>{},[])
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h2>External User</h2>
      <p>{users.length}</p>
      {
        users.map(user => <Users name={user.name} email={user.email} address={user.address}></Users>)
      }
    </div>
  )
}
 function Users(props){
   return(
     <div style={{border:'2px solid red', margin: '10px'}}>
       <h2>Name : {props.name}</h2>
       <p>Email : {props.email}</p>
     </div>
   )
 }

export default App;
