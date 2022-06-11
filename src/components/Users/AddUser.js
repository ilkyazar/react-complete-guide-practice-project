const AddUser = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
  };
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age</label>
      <input id="age" type="text" />
      <button type="submit" onClick={handleAddUser}>
        Add User
      </button>
    </form>
  );
};

export default AddUser;
