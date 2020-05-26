import React from "react";
import style from "./post.module.css"

const Post = (props) => {
	return (
		<div className={style.wrapper}>
			{props.message}
			<div>
				<span className="like">{props.likesCount} likes</span>
			</div>
		</div>
	)
};

export default Post;