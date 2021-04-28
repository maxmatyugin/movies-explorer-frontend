import React from "react";
import {initialProfile} from '../utils/constants';

function Validation() {
  const [errors, setErrors] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const [currentUser, setCurrentUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const [submitError, setSubmitError] = React.useState("");
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = React.useState(
    false
  );

  React.useEffect(() => {
    const { username, email, password} = initialProfile;
    setCurrentUser({
      ...currentUser,
      username: username,
      email: email,
      password: password,
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitError("API ещё не подключен");
    setCurrentUser({
      username: values.username,
      email: values.email,
      password: values.password,
    })
  };

  const handleChange = (e) => {
    const { name, validationMessage, value } = e.target;
    setErrors({
      ...errors,
      [name]: validationMessage,
    });
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    handleChange,
    handleSubmit,
    errors,
    values,
    submitError,
    isSubmitButtonDisabled,
    currentUser
  };
}

export default Validation;
