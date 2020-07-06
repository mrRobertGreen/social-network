import * as axios from "axios";

const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true,
	headers: {
		"API-KEY": "f3669b07-24ed-4505-9bc7-11496ed93362"
	},
});

export const usersAPI = {
	follow(userId) {
		return instance.post(`follow/${userId}`).then(response => response.data)
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`).then(response => response.data)
	},
	getUsers(pageSize, currentPage) {
		return instance.get(`users?count=${pageSize}&page=${currentPage}`)
			.then(response => response.data);
	},
	getProfile(userId) {
		console.log("Obsolete method! Please, use profileAPI.getProfile()");
		return profileAPI.getProfile(userId)
	},
};

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`).then(response => response.data)
	},
	getUserStatus(userId) {
		return instance.get(`/profile/status/${userId}`).then(response => response.data)
	},
	updateUserStatus(status) {
		return instance.put(`/profile/status`, {status}).then(response => response.data)
	},
};

export const authAPI = {
	authMe() {
		return instance.get("auth/me").then(response => response.data)
	},
	logIn(email, password, rememberMe, captcha) {
		return instance.post("auth/login", {email, password, rememberMe, captcha})
			.then(response => response.data)
	},
	logOut() {
		return instance.delete("auth/login").then(response => response.data)
	},
};