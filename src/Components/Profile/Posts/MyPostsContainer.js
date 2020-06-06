import React from "react";
import {addLike, addPost, updateNewPostText} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
	posts: state.profilePage.postsData,
	newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = {
	addPost,
	updateNewPostText,
	addLike,
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;