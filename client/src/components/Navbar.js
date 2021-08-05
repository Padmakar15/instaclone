import React, { useState, useContext, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";
import M from "materialize-css";
import axios from "axios";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [userDetails, setUserDetails] = useState([]);
  const searchModal = useRef(null);
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    M.Modal.init(searchModal.current);
  }, []);
  const fetchUsers = async (query) => {
    setSearch(query);
    const res = await axios.post("/api/searchusers", {
      query,
    });
    setUserDetails(res.data.user);
    console.log(" fetch users res", res.data);
  };
  const renderList = () => {
    if (state) {
      return (
        <ul id="nav-mobile" className="right">
          <li>
            <i
              data-target="modal1"
              className="large material-icons modal-trigger"
              style={{ color: "black" }}
            >
              search
            </i>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/create">Create Post</Link>
          </li>
          <li>
            <Link to="/myfollowingposts">My Following Post</Link>
          </li>
          <li>
            <button
              className="btn #c62828 red darken-1"
              onClick={() => {
                localStorage.clear();
                dispatch({ type: "CLEAR" });
                history.push("/login");
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      );
    } else {
      return (
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/login">Signin</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      );
    }
  };
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to={state ? "/" : "/login"} className="brand-logo left">
          Instagram
        </Link>

        {renderList()}
      </div>
      <div
        id="modal1"
        className="modal"
        ref={searchModal}
        style={{ color: "black" }}
      >
        <div className="modal-content">
          <input
            type="text"
            placeholder="search user"
            value={search}
            onChange={(e) => fetchUsers(e.target.value)}
          />
          <ul className="collection" style={{ color: "black" }}>
            {userDetails.map((item, index) => {
              return (
                <li key={index} className="collection-item">
                  <Link
                    to={
                      item._id !== state._id
                        ? "/profile/" + item._id
                        : "/profile"
                    }
                    onClick={() => {
                      M.Modal.getInstance(searchModal.current).close();
                      setSearch("");
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="modal-footer">
          <button
            onClick={() => setSearch("")}
            className="modal-close waves-effect waves-green btn-flat"
          >
            close
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
