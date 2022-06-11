import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
import React, { useState, useRef } from 'react';

const AddUser = (props) => {
  const [error, setError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const handleAddUser = (event) => {
    event.preventDefault();

    console.log('nameInputRef: ', nameInputRef);
    console.log(nameInputRef.current.value);
    console.log('ageInputRef: ', ageInputRef);
    console.log(ageInputRef.current.value);

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (
      enteredName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message:
          'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    console.log(enteredName, enteredUserAge);

    props.onAddUser(enteredName, enteredUserAge);

    // Typically, you shouldn't do that
    // But it's only resetting the value that user entered, sooo...
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const resetError = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={resetError}
        />
      )}
      <Card cssClass={classes.input}>
        <form onSubmit={handleAddUser}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age</label>
          <input id="age" type="text" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
