import React from "react";
import style from "./myposts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

	let postElements = props.state.postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>);

	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatcher(addPostActionCreator());
	};

	let updateNewPostText = () => {
		let text = newPostElement.current.value;
		props.dispatcher(updateNewPostTextActionCreator(text));
	};

	return (
		<div className={style.wrapper}>
			<div className={style.addPost}>
				<div>
					<textarea ref={newPostElement} onChange={updateNewPostText} value={props.state.newPostText}/>
				</div>
				<div>
					<button onClick={addPost}>Add Post</button>
				</div>
			</div>
			<h1>My Posts</h1>
			{postElements}
		</div>
	)
};

export default MyPosts;