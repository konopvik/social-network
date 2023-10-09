import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "5a398490-d274-47d4-8d9d-a7faa12ba416"
    }

});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getAuthMe() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    getProfile(userId = 2) {
        return instance.get(`profile/` + userId).then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }

}



