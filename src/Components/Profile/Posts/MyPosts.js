import React from "react";
import style from "./myposts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
	let postElements = props.posts.map(post => <Post message={post.message}
	                                                 likesCount={post.likesCount}
	                                                 id={post.id}
	                                                 addLike={props.addLike}
	/>);

	let onAddPost = () => {
		props.addPost()
	};

	let onChangeNewPostText = (event) => {
		let text = event.target.value;
		props.updateNewPostText(text)
	};

	return (
		<div className={style.wrapper}>
			<div className={style.addPost}>
				<div>
					<textarea onChange={onChangeNewPostText} value={props.newPostText}/>
				</div>
				<div>
					<button onClick={onAddPost}>Add Post</button>
				</div>
			</div>
			<h1>My Posts</h1>
			{postElements}
		</div>
	)
};

export default MyPosts;