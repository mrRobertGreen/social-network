import React from "react";
import {addLike, addPost} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {reset} from 'redux-form'
import Post from "./Post/Post";
import style from "./myposts.module.css";
import AddNewPostForm from "./AddNewPostForm/AddNewPostForm";

const MyPosts = (props) => {
	let postElements = props.posts.map(post => <Post message={post.message}
	                                                 likesCount={post.likesCount}
	                                                 key={post.id}
	                                                 id={post.id}
	                                                 addLike={props.addLike}
	/>);

	let onAddPost = (formData) => {
		props.addPost(formData.newPostText);
		props.reset("post")
	};

	return (
		<div className={style.wrapper}>
			<div className={style.addPost}>
				<AddNewPostForm onSubmit={onAddPost}/>
			</div>
			<h1>My Posts</h1>
			{postElements}
		</div>
	)
};

const mapStateToProps = (state) => ({
	posts: state.profilePage.postsData,
	newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = {
	addPost,
	addLike,
	reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);