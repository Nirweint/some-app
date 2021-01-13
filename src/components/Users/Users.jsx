import React from "react";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";
import "./Users.css";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for(let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className="users_block">
    <div>
        {pages.map(p => {
            return <span 
            onClick={() => {props.onPageChanged(p);}}
            className={props.currentPage === p && "selectedPage"}>{p}</span> 
        })}
        </div>
    {props.users.map((u) => (
        <div key={u.id}>
            <span>
                <div>
                   <NavLink to={'/profile/' + u.id}> <img
                        className="users_photo"
                        src={u.photos.small != null ? u.photos.small : "https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"}
                        alt="img"
                    />
                   </NavLink>
                </div>
                <div>
                    {u.followed ? (
                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                usersAPI.unfollow(u.id)
                                .then((response) => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id);
                                    }
                                    props.toggleFollowingProgress(false, u.id);
                                });
                            }}
                        >
                            Unfollow
                        </button>
                    ) : (
                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                usersAPI.follow(u.id)
                                .then((response) => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id);
                                    }
                                    props.toggleFollowingProgress(false, u.id);
                                });
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
}

export default Users;