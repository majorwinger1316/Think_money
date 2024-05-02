function validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.email === "") {
    error.email = "User ID cannot not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email didn't match";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Password cannot not be empty";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password didn't match";
  } else {
    error.password = "";
  }

  if (values.username === "") {
    error.username = "name cannot not be empty";
  }
  //   } else if (!password_pattern.test(values.password)) {
  //     error.password = "Password didn't match";
  //   }
  else {
    error.username = "";
  }

  if (values.user_id === "") {
    error.user_id = "user_id cannot not be empty";
  }
  //   } else if (!password_pattern.test(values.password)) {
  //     error.password = "Password didn't match";
  //   }
  else {
    error.user_id = "";
  }
  return error;
}

export default validation;
