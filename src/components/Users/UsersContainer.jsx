import React from "react";
import { connect } from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowingProgress,
    getUsers,
} from "../../redux/users-reducer";
import Users from "./Users";
import Loader from "../common/loader/loader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Loader /> : null}
                <Users
                    onPageChanged={this.onPageChanged}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        setTotalUsersCount,
        toggleFollowingProgress,
        getUsers,
    }),
    withAuthRedirect
)(UsersContainer);
