import React from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { passwordValidate } from "../helper/validate";
import { useFormik } from "formik";
// @ts-ignore
import styles from "../styles/Username.module.css";
// @ts-ignore
import avatar from "../../public/assets/profile.png";

const Password = () => {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      password: "admin@123",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container mx-auto ">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-[100%] py-10">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-3xl font-bold">Hello Again!</h4>
            <span className="py-4 text-sm w-2/3 text-center text-gray-500">
              Explore More by connecting with us.
            </span>
          </div>

          <form className="py-1" onSubmit={handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img src={avatar} className={styles.profile_img} alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center gap-2">
              <input
                className={styles.textbox}
                type="password"
                placeholder="password"
                name="password"
                onChange={handleChange}
              />
              <button className={styles.btn} type="submit">
                Sign In
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500 text-sm">
                Forgot Password?
                <Link className="text-red-500 m-2" to="/recovery">
                  Recover Now.
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
