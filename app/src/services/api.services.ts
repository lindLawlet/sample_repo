import axios from 'axios';
const baseURL = 'http://localhost:4444';

export const fetchPosts = async () => {
    return await axios.get(`${baseURL}/api/posts`);
};