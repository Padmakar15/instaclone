import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  function notify() {
    toast("You are registered successfully!", {
      position: "top-center",
    });
  }

  const onSubmit = async (data) => {
    if (data.profile[0]) {
      const form = new FormData();
      form.append("file", data.profile[0]);
      form.append("upload_preset", "insta-clone");
      form.append("cloud_name", "padmakar15");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/padmakar15/image/upload",
        form
      );
      data.profile = res.data.url;
    }
    const response = await axios.post("/api/signup", {
      ...data,
    });
    if (response.status === 200) {
      notify();
    }
    console.log("response", response.data);
  };
  return (
    <div className="mycard">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card auth-card">
          <h2>Instagram</h2>
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
            placeholder="enter Name"
          />
          <input
            type="text"
            name="email"
            {...register("email", { required: true })}
            placeholder="enter email address"
          />
          <input
            type="text"
            name="password"
            {...register("password", { required: true })}
            placeholder="enter password"
          />
          <div className="file-field input-field">
            <div className="btn #64b5f6 blue darken-1">
              <span>Upload Profile</span>
              <input name="post" {...register("profile")} type="file" />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>
          <button className="btn waves-effect waves-light #64b5f6 blue darken-1">
            Signup
          </button>
          <h5>
            <Link to="signup">Already have an account ?</Link>
          </h5>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
