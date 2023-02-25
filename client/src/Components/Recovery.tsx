import React from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { passwordValidate } from "../helper/validate";
import { useFormik } from "formik";
// @ts-ignore
import styles from "../styles/Username.module.css";
// @ts-ignore
import avatar from "../../public/assets/profile.png";

const Recovery = () => {
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
              Enter OTP to recover Password
            </span>
          </div>

          <form className="py-20" onSubmit={handleSubmit}>
            <div className="textbox flex flex-col items-center gap-2 ">
              <span className="py-4 text-xl text-left text-gray-500">
                Enter 6 digit otp
              </span>
              <input
                className={styles.textbox}
                type="text"
                placeholder="OTP"
                onChange={handleChange}
              />
              <button className={styles.btn} type="submit">
                Recover
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500 text-sm">
                Didn't get OTP?
                <button className="text-red-500 m-2">Resend</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
