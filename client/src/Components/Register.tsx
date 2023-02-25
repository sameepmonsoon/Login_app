import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { registerValidation } from "../helper/validate";
import { useFormik } from "formik";
import converToBase64 from "../helper/convert";

// @ts-ignore
import styles from "../styles/Username.module.css";
// @ts-ignore
import avatar from "../../public/assets/profile.png";

const Register = () => {
  const [file, setFile] = useState<File | any>();

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
      console.log(values);
    },
  });
  //@ts-ignore
  const onUpload = async (e: any) => {
    const base64 = await converToBase64(e.target.files[0]);
    setFile(base64);
    console.log(file);
  };
  return (
    <div className="container mx-auto ">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-[100%] py-10">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-3xl font-bold">Register!</h4>
            <span className="py-4 text-sm w-2/3 text-center text-gray-500">
              Happy to Join
            </span>
          </div>

          <form className="py-1" onSubmit={handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img
                  src={file || avatar}
                  className={styles.profile_img}
                  alt="avatar"
                />
                <input
                  type="file"
                  name="profile"
                  id="profile"
                  onChange={onUpload}
                />
              </label>

              <div className="flex bg-slate-600"></div>
            </div>

            <div className="textbox flex flex-col items-center gap-2">
              <input
                className={styles.textbox}
                type="email"
                placeholder="Email*"
                name="email"
                onChange={handleChange}
              />
              <input
                className={styles.textbox}
                type="username"
                placeholder="Username *"
                name="username"
                onChange={handleChange}
              />
              <input
                className={styles.textbox}
                type="password"
                placeholder="Password*"
                name="password"
                onChange={handleChange}
              />
              <button className={styles.btn} type="submit">
                Register
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500 text-sm">
                Already Registered?
                <Link className="text-red-500 m-2" to="/">
                  Log in
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
