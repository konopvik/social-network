import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/store";

const Profile = (props) => {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile
