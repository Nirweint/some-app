import Axios from "axios";
import React from "react";
import "./Users.css";

class Users extends React.Component {
    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
            (response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);

            }
        );
    }

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(
            (response) => {
                this.props.setUsers(response.data.items);
            }
        );
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for(let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className="users_block">
                <div>
                    {pages.map(p => {
                        return <span 
                        onClick={() => {this.onPageChanged(p);}}
                        className={this.props.currentPage === p && "selectedPage"}>{p}</span> 
                    })}
                    </div>
                {this.props.users.map((u) => (
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
                                            this.props.unfollow(u.id);
                                        }}
                                    >
                                        Unfollow
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            this.props.follow(u.id);
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
    }
}

export default Users;
