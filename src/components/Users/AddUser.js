import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
  };
  return (
    <Card cssClass={classes.input}>
      <form>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" type="text" />
        <button type="submit" onClick={handleAddUser}>
          Add User
        </button>
      </form>
    </Card>
  );
};

export default AddUser;
