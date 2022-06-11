import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import { useState } from 'react';

const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const handleAddUser = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
  };

  const handleUsernameChanged = (event) => {
    setEnteredUsername(event.target.value);
  };

  const handleAgeChanged = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card cssClass={classes.input}>
      <form onSubmit={handleAddUser}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={handleUsernameChanged}
        />
        <label htmlFor="age">Age</label>
        <input id="age" type="text" onChange={handleAgeChanged} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
