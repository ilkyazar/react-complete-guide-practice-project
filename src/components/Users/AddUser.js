import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import { useState } from 'react';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const handleAddUser = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    console.log(enteredUsername, enteredAge);

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername('');
    setEnteredAge('');
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
          value={enteredUsername}
          onChange={handleUsernameChanged}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="text"
          value={enteredAge}
          onChange={handleAgeChanged}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
