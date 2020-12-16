import Axios from "axios";
import React from "react";
import "./Users.css";

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            Axios.get(
                "https://social-network.samuraijs.com/api/1.0/users"
            ).then((response) => {
                props.setUsers(response.data.items);
            });
        }
    };

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.users.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img
                                className="users_photo"
                                src={
                                    u.photos.small != null
                                        ? u.photos.small
                                        : "https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                                }
                                alt="img"
                            />
                        </div>
                        <div>
                            {u.followed ? (
                                <button
                                    onClick={() => {
                                        props.unfollow(u.id);
                                    }}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        props.follow(u.id);
                                    }}
                                >
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
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
