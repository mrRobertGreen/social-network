import profileReducer, {addPost, deletePost} from "./profileReducer";

let initialState = {
	postsData: [
		{id: 1, message: "Hello! How are you?", likesCount: 13, isLiked: false},
		{id: 2, message: "It's my first post", likesCount: 54, isLiked: false},
	]
};

test('posts length should be increment after adding post', () => {
	let action = addPost("text")
	let newState = profileReducer(initialState, action)
	expect(newState.postsData.length).toBe(3)
})

test('new post message should be correct', () => {
	let action = addPost("text")
	let newState = profileReducer(initialState, action)
	expect(newState.postsData[2].message).toBe("text")
})

test('posts length should be decrement after deleting post', () => {
	let action = deletePost(1)
	let newState = profileReducer(initialState, action)
	expect(newState.postsData.length).toBe(1)
})