import React, { useState } from 'react';
import Wrapper from './components/Helpers/Wrapper';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const handleAddUser = (newUsername, newAge) => {
    console.log('Adding', newUsername, newAge);
    setUsersList((prevList) => {
      return [
        ...prevList,
        {
          name: newUsername,
          age: newAge,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <Wrapper>
      <AddUser onAddUser={handleAddUser} />
      <UsersList users={usersList} />
    </Wrapper>
  );
}

export default App;
