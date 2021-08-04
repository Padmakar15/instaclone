import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../App";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  function notify() {
    toast("You are logged in successfully!", {
      position: "top-center",
    });
  }
  const redirect = () => {
    history.push("/");
  };
  const onSubmit = async (data) => {
    console.log("data", data);
    const res = await axios.post("/api/signin", {
      ...data,
    });
    console.log(res.data.user);
    if (res.status === 200) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      notify();
      dispatch({ type: "USER", payload: res.data.user });
      setTimeout(redirect, 1500);
    }
    console.log("response", res.data);
  };
  return (
    <div className="mycard">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card auth-card">
          <h2>Instagram</h2>
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
          <button className="btn waves-effect waves-light #64b5f6 blue darken-1">
            Login
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

export default Login;
