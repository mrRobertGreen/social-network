import React from "react";
import style from "./post.module.css"

const Post = (props) => {
	const onAddLike =  () => {
		props.addLike(props.id)
	};

	return (
		<div className={style.wrapper}>
			{props.message}
			<div className={style.likeWrapper}>
				<div>
					<span className={style.like}>{props.likesCount} likes</span>
				</div>
				<div>
					<button onClick={onAddLike} className={style.likeBtn}>Like</button>
				</div>
			</div>
		</div>
	)
};

export default Post;