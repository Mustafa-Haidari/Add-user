import React, {useState} from 'react';
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";


function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {id: Math.floor(Math.random().toString() *1000),name: uName, age: uAge}]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
