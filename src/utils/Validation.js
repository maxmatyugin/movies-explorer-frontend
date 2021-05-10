import React from "react";

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
  const [isValid, setIsValid] = React.useState(false);



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
    setIsValid(e.target.closest("form").checkValidity());
  };

  const resetForm = React.useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    isValid,
    handleChange,
    errors,
    values,
    resetForm,
    setIsValid,
  };
}

export default Validation;
