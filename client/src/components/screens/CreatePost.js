import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
const CreatePost = () => {
  const history = useHistory();
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  const onSubmit = async (data) => {
    const form = new FormData();
    form.append("file", data.post[0]);
    form.append("upload_preset", "insta-clone");
    form.append("cloud_name", "padmakar15");
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/padmakar15/image/upload",
      form
    );
    data.pic = res.data.url;
    console.log("data", data);
    const response = await axios.post(
      "http://localhost:5000/api/createpost",
      { ...data },
      { headers: headers }
    );
    if (response.status === 200) {
      history.push("/");
    }
    console.log("response", response.data);
  };
  return (
    <div
      className="card input-filed"
      style={{
        margin: "30px auto",
        maxWidth: "600px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="title"
          {...register("title", { required: true })}
          placeholder="title"
        />
        <input
          type="text"
          name="body"
          {...register("body", { required: true })}
          placeholder="body"
        />
        <div className="file-field input-field">
          <div className="btn #64b5f6 blue darken-1">
            <span>Upload Image</span>
            <input
              name="post"
              {...register("post", { required: true })}
              type="file"
            />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button className="btn waves-effect waves-light #64b5f6 blue darken-2">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
