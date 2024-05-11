import axios from "axios";

const URL = "http://localhost:6001";

// auth

export const register = async (data) => {
    const res = await axios.post(`${URL}/auth/register`, data);

    return res;
};

export const login = async (data) => {
    const res = await axios.post(`${URL}/auth/login`, data);

    return res;
};

// auth ends

// club

export const addclub = async (token, data) => {


    const res = await axios.post(`${URL}/user/addclub`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res;
};

export const getAllClub = async (token) => {
    const res = await axios.get(`${URL}/user/getAllClubs`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res;
};

export const getClub = async (token, id) => {
    const res = await axios.get(`${URL}/user/getClub/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res;
};

// export const updateClub = async (token, data, id) => {
//     const res = await axios.put(`${URL}/user/updateclub/${id}`, data, {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });

//     return res;
// };

export const joinclub = async (token, user, clubid) => {
    const res = await axios.post(`${URL}/user/joinclub/${clubid}`, user, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res;
};

// club ends

// query

export const addquery = async (token, data) => {
    const res = await axios.post(`${URL}/user/addquery`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res;
};

export const getAllquery = async (token) => {
    const res = await axios.get(`${URL}/user/getAllquerys`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res;
};

export const getquery = async (token, id) => {
    const res = await axios.get(`${URL}/user/getquery/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res;
};

export const updatequery = async (token, data, id) => {
    const res = await axios.put(`${URL}/user/updatequery/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res;
};

export const deleteQuery = async (token, id) => {
    const res = await axios.delete(`${URL}/user/deletequery/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res;
};

// query ends


// users


export const getAllusers = async (token, data) => {
    const res = await axios.get(`${URL}/user/getAlluser`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res;
};

export const getuser = async (token, data, id) => {
    const res = await axios.get(`${URL}/user/getuser/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res;
};

export const updateusers = async (token, data, id) => {
    const res = await axios.put(`${URL}/user/updateuser/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res;
};

// users ends


// post

export const addpost = async (data, token) => {
    const res = await axios.post(`${URL}/post/addpost`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res;
};

export const getAllpost = async () => {
    const res = await axios.get(`${URL}/post/getAllposts`);

    return res;
};

export const deletePost = async (id) => {
    const res = await axios.delete(`${URL}/post/deletepost/${id}`);
    return res;
};

// post ends
