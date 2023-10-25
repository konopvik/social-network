import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => (<Post message={p.message} likesCount={p.likesCount}/>))

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText" placeholder="Post message"
                       validate={[required, maxLengthCreator(10)]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux =reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm)

export default MyPosts