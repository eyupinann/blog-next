import axios from 'axios'

const api = axios.create({
    baseURL: 'https://node-blog-ms5e.onrender.com',
    headers: { 'Content-Type': 'application/json' },
});

export default api;
