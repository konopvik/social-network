import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/avatar-icon.jpg";
import {NavLink, Route, Routes} from "react-router-dom";
import Profile from "../Profile/Profile";
import {usersAPI} from "../../api/api";
import {pagination} from "../../redux/pagination";

let Users = (props) => {
    return (
        <div>
            <div>
                {pagination(props.currentPage, props.totalUsersCount, props.pageSize).map((p) => {
                    return (
                        <span
                            className={props.currentPage === p ? styles.selectedPage : ""}
                            onClick={() => {
                                props.onPageChanged(p);
                            }}
                        >
              {p}
            </span>
                    );
                })}
            </div>
            {props.users.map((u) => (
                <div key={u.id}>
          <span>
            <div>
              <Routes>
                <Route
                    path={`/profile/${u.id}`}
                    element={<Profile/>}
                />
              </Routes>
              <NavLink to={`/profile/${u.id}`}>
                <img
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                    className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                  <button onClick={() => {
                      usersAPI.unfollow(u.id).then(data => {
                          if (data.resultCode == 0) {
                              props.unfollow(u.id)
                          }
                      })
                  }}>
                      Unfollow
                  </button>
              ) : (
                  <button onClick={() => {
                      usersAPI.follow(u.id).then(data => {
                          if (data.resultCode == 0) {
                              props.follow(u.id)
                          }
                      })
                  }}>
                      Follow
                  </button>
              )}
            </div>
          </span>
                    <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </span>
          </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
