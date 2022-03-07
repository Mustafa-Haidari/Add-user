import React, { useState, useRef } from "react";
import Wrapper from "../Helper/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState()

  const addUserHandler = (event) => {
    const enteredName = (nameInputRef.current.value)
    const enteredUserAge = (ageInputRef.current.value)
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    }
    if (enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  };

  const myErrorHandler = () => {
    setError(null)
  }

  return (
    <React.Fragment>
      {error && <ErrorModal onConfirm={myErrorHandler} title={error.title} message={error.message}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />

          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
