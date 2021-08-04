import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../App";

const Profile = () => {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  const [image, setImage] = useState("");
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  const getPosts = async () => {
    const response = await axios.get("/api/getPosts", {
      headers: headers,
    });
    setData(response.data);
    console.log("response", response.data);
  };
  useEffect(() => {
    getPosts();
  }, []);
  console.log("data", data);
  const updatePhoto = (file) => {
    setImage(file);
  };
  const updateProfile = async () => {
    const form = new FormData();
    form.append("file", image);
    form.append("upload_preset", "insta-clone");
    form.append("cloud_name", "padmakar15");
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/padmakar15/image/upload",
      form
    );

    const response = await axios.put(
      "/api/updateprofile",
      { profile: res.data.url },
      {
        headers: headers,
      }
    );
    localStorage.setItem(
      "user",
      JSON.stringify({ ...state, profile: response.data.profile })
    );
    dispatch({ type: "UPDATEPROFILE", payload: response.data.profile });
    console.log("update profile response", response.data);
  };
  useEffect(() => {
    updateProfile();
  }, [image]);
  return (
    <div style={{ maxWidth: "550px", margin: "0px auto" }}>
      <div
        style={{
          margin: "18px 0",
          borderBottom: "1px solid gray",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <img
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "80px",
                marginLeft: "-50px",
              }}
              src={state ? state.profile : ""}
              alt="profile"
            />
          </div>
          <div>
            <h4>{state && state.name}</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "108%",
              }}
            >
              <h6>{data ? data.length : 0} posts</h6>
              <h6>
                {state ? state.followers && state.followers.length + " " : "0"}
                followers
              </h6>
              <h6>
                {state ? state.following && state.following.length + " " : "0"}
                following
              </h6>
            </div>
          </div>
          <div></div>
        </div>
        <div className="file-field input-field">
          <div className="btn #64b5f6 blue darken-1">
            <span>Update Profile</span>
            <input
              type="file"
              onChange={(e) => updatePhoto(e.target.files[0])}
            />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
      </div>
      <div className="gallery">
        {data.map((pics, index) => {
          return (
            <img key={index} className="item" src={pics.photo} alt="gallery" />
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
