import React from "react";
import Axios from "axios";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-state-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        Axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/2`
        ).then((response) => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />;
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profileState.profile,
    };
};

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
