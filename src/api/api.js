import * as axios from "axios";

const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true,
	headers: {
		"API-KEY": "6e90b83b-bbb3-4933-bc97-443c5f1a3103"
	},
});

export const usersAPI = {
	follow(id) {
		return instance.post(`follow/${id}`).then(response => response.data)
	},
	unfollow(id) {
		return instance.delete(`follow/${id}`).then(response => response.data)
	},
	getUsers(pageSize, currentPage) {
		return instance.get(`users?count=${pageSize}&page=${currentPage}`)
			.then(response => response.data);
	},
	getProfile(id) {
		return instance.get(`profile/${id}`).then(response => response.data)
	},
};

export const authAPI = {
	authMe() {
		return instance.get("auth/me").then(response => response.data)
	}
};