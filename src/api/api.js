import Axios from "axios";

const instance = Axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "9776f825-db80-4051-9f58-6c0d39788ac9",
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(
            `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
        );
    },
    unfollow(userId) {
        return instance.delete(
            `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
        );
    },
};

// export const getUsers2 = (currentPage = 1, pageSize = 5) => {
//     return instance
//         .get(`users?page=${currentPage}&count=${pageSize}`)
//         .then((response) => {
//             return response.data;
//         });
// };
