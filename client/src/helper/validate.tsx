import toast from "react-hot-toast";

// validate username
export async function usernameValidate(values: any) {
  const errors = usernameVerify({}, values);
  return errors;
}

function usernameVerify(error = {}, values: any) {
  if (!values.username) {
    // @ts-ignore
    error.username = toast.error("username required ");
  } else if (values.username.includes(" ")) {
    // @ts-ignore

    error.username = toast.error("invalid username");
  }
  return error;
}

// validate register

export async function registerValidation(values: any) {
  const errors = usernameVerify({}, values);
  passwordVerify({}, values);
  emailVerify({}, values);
  return errors;
}

// validate email
function emailVerify(error = {}, values: any) {
  if (!values.email) {
    // @ts-ignore
    error.email = toast.error("Email Required.");
  } else if (values.email.includes(" ")) {
    // @ts-ignore
    error.email = toast.error("Wrong Email...!");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    // @ts-ignore

    error.email = toast.error("Invalid email address...!");
  }
  return error;
}

// validate reset password
export async function resetPasswordValidation(values: any) {
  const errors = passwordVerify({}, values);
  if (values.password !== values.confirm_password) {
    // @ts-ignore
    errors.exist = toast.error("Password didn't match");
  }
  return errors;
}

// validate password
export async function passwordValidate(values: any) {
  const errors = passwordVerify({}, values);
  return errors;
}
function passwordVerify(error = {}, values: any) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (!values.password) {
    // @ts-ignore
    error.password = toast.error("Password Required.");
  } else if (values.password.includes(" ")) {
    // @ts-ignore

    error.password = toast.error("Password can't be empty.");
  } else if (values.password.length < 4) {
    // @ts-ignore

    error.password = toast.error("password must be more than 4");
  } else if (!specialChars.test(values.password)) {
    // @ts-ignore

    error.password = toast.error("password must have special chars");
  }
  return error;
}

// profile validation
export async function profileValidation(values: any) {
  const errors = emailVerify({}, values);
  return errors;
}
