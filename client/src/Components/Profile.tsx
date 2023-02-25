import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { profileValidation } from "../helper/validate";
import { useFormik } from "formik";
import converToBase64 from "../helper/convert";
// @ts-ignore
import extend from "../styles/profile.module.css";

// @ts-ignore
import styles from "../styles/Username.module.css";
// @ts-ignore
import avatar from "../../public/assets/profile.png";

const Profile = () => {
  const [file, setFile] = useState<File | any>();

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      email: "",
      firstname: "",
      lastname: "",
      mobileno: "",
      address: "",
    },
    validate: profileValidation,
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
        <div className={`${styles.glass}`}>
          <div className="title flex flex-col items-center">
            <h4 className="text-3xl font-bold">Profile</h4>
            <span className="py-4 text-sm w-2/3 text-center text-gray-500">
              Update your profile
            </span>
          </div>

          <form className="py-1" onSubmit={handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img
                  src={file || avatar}
                  className={`${styles.profile_img}`}
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
              <div className="name flex w-3/4 gap-10">
                <input
                  className={`${styles.textbox}`}
                  type="text"
                  placeholder="First name"
                  name="firstname"
                  onChange={handleChange}
                />
                <input
                  className={`${styles.textbox}`}
                  type="text"
                  placeholder="Last name"
                  name="lastname"
                  onChange={handleChange}
                />
              </div>
              <div className="name flex w-3/4 gap-10">
                <input
                  className={`${styles.textbox}`}
                  type="text"
                  placeholder="Mobile"
                  name="mobileno"
                  onChange={handleChange}
                />
                <input
                  className={`${styles.textbox}`}
                  type="email"
                  placeholder="Email*"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <input
                className={`${styles.textbox}`}
                type="text"
                placeholder="Address"
                name="address"
                onChange={handleChange}
              />

              <button className={styles.btn} type="submit">
                Update
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500 text-sm">
                Come back later?
                <Link className="text-red-500 m-2" to="/">
                  Log out
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
