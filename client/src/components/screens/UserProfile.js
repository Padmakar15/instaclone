import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  const { userid } = useParams();
  const [follow, setFollow] = useState(
    state ? !state.following.includes(userid) : true
  );
  console.log(userid);
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  const getUserProfile = async () => {
    const response = await axios.get(`/api/user/${userid}`, {
      headers: headers,
    });

    setProfile(response.data);
    console.log("response", response);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUserProfile();
    }
  }, []);
  console.log("data", data);
  const followUser = async () => {
    const res = await axios.put(
      "/api/follow",
      { followId: userid },
      {
        headers: headers,
      }
    );
    dispatch({
      type: "UPDATE",
      payload: { following: res.data.following, followers: res.data.followers },
    });
    localStorage.setItem("user", JSON.stringify(res.data));
    setProfile((prevState) => {
      return {
        ...prevState,
        user: {
          ...prevState.user,
          followers: [...prevState.user.followers, res.data._id],
        },
      };
    });
    setFollow(false);
    console.log("follow user res", res.data);
  };
  const unfollowUser = async () => {
    const res = await axios.put(
      "/api/unfollow",
      { unfollowId: userid },
      {
        headers: headers,
      }
    );
    dispatch({
      type: "UPDATE",
      payload: { following: res.data.following, followers: res.data.followers },
    });
    localStorage.setItem("user", JSON.stringify(res.data));
    setProfile((prevState) => {
      const newFollower = prevState.user.followers.filter(
        (item) => item !== res.data._id
      );
      return {
        ...prevState,
        user: {
          ...prevState.user,
          followers: newFollower,
        },
      };
    });
    setFollow(true);
    console.log("unfollow user res", res.data);
  };
  return (
    <>
      {profile ? (
        <div style={{ maxWidth: "550px", margin: "0px auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "18px 0",
              borderBottom: "1px solid gray",
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
                src={profile.user.picture}
                alt="profile"
              />
            </div>
            <div>
              <h4>{profile.user.name}</h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "108%",
                }}
              >
                <h6>{profile.posts.length} posts</h6>
                <h6>{profile.user.followers.length} followers</h6>
                <h6>{profile.user.following.length} following</h6>
              </div>
              {follow ? (
                <button
                  style={{ margin: "10px" }}
                  className="btn waves-effect waves-light #64b5f6 blue darken-1"
                  onClick={() => followUser()}
                >
                  follow
                </button>
              ) : (
                <button
                  style={{ margin: "10px" }}
                  className="btn waves-effect waves-light #64b5f6 blue darken-1"
                  onClick={() => unfollowUser()}
                >
                  unfollow
                </button>
              )}
            </div>
            <div></div>
          </div>
          <div className="gallery">
            {profile.posts.map((pics, index) => {
              return (
                <img
                  key={index}
                  className="item"
                  src={pics.photo}
                  alt="gallery"
                />
              );
            })}
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default UserProfile;
