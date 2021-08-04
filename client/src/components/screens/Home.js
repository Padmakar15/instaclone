import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  const getAllPosts = async () => {
    const response = await axios.get("http://localhost:5000/api/allposts", {
      headers: headers,
    });
    setData(response.data);
    console.log("response", response.data);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getAllPosts();
    }
  }, []);
  const likePost = async (id) => {
    console.log("id", id);
    const res = await axios.put(
      "http://localhost:5000/api/like",
      { postId: id },
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      }
    );
    const newData = data.map((item) => {
      if (item._id === res.data._id) {
        return res.data;
      } else {
        return item;
      }
    });
    setData(newData);
    console.log("like post res", res.data);
  };
  const unlikePost = async (id) => {
    console.log("id", id);
    const res = await axios.put(
      "http://localhost:5000/api/unlike",
      { postId: id },
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      }
    );
    const newData = data.map((item) => {
      if (item._id === res.data._id) {
        return res.data;
      } else {
        return item;
      }
    });
    setData(newData);
    console.log("unlike post res", res.data);
  };
  const makeComment = async (text, id) => {
    const res = await axios.put(
      "http://localhost:5000/api/comment",
      { text, postId: id },
      { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
    );
    const newData = data.map((item) => {
      if (item._id === res.data._id) {
        return res.data;
      } else {
        return item;
      }
    });
    setData(newData);
    console.log("comment res", res.data);
  };
  const deletePost = async (postId) => {
    const res = await axios.delete(
      `http://localhost:5000/api/deletepost/${postId}`,
      { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
    );
    const newData = data.filter((item) => {
      return item._id !== res.data._id;
    });
    setData(newData);
    console.log("delete res", res.data);
  };
  return (
    <div className="home">
      {data.map((item, index) => {
        return (
          <div key={index} className="card home-card">
            <h5>
              <Link
                to={
                  item.postedBy._id !== state._id
                    ? "/profile/" + item.postedBy._id
                    : "/profile"
                }
              >
                {item.postedBy.name}
              </Link>
              {item.postedBy._id === state._id && (
                <i
                  className="material-icons"
                  style={{ float: "right" }}
                  onClick={() => deletePost(item._id)}
                >
                  delete
                </i>
              )}
            </h5>
            <div className="card-image">
              <img src={item.photo} alt="post" />
            </div>
            <div className="card-content">
              <i className="material-icons" style={{ color: "red" }}>
                favorite
              </i>
              {item.likes.includes(state._id) ? (
                <i
                  className="material-icons"
                  onClick={() => {
                    unlikePost(item._id);
                  }}
                >
                  thumb_down
                </i>
              ) : (
                <i
                  className="material-icons"
                  onClick={() => {
                    likePost(item._id);
                  }}
                >
                  thumb_up
                </i>
              )}

              <h6>{item.likes.length > 0 && item.likes.length} likes</h6>
              <h6>{item.title}</h6>
              <p>{item.body}</p>
              {item.comments.map((record, index) => {
                return (
                  <h6 key={index}>
                    <span style={{ fontWeight: "500" }}>
                      {record.postedBy.name}
                    </span>
                    {" " + record.text}
                  </h6>
                );
              })}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  makeComment(e.target[0].value, item._id);
                }}
              >
                <input type="text" placeholder="add a comment" />
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
