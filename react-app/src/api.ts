import axios from 'axios';
const BASE = 'http://localhost.com:5003';

export const api = {
    getCategories: async () => {
        const req = await axios.get(`${BASE}/categories`);
        return req.data.categories;
    }, 
    postToken: async (email: string, password: string) => {
        const response = await axios.post(`${BASE}/user/signin`, {
          email, password
        });
        return response.data;
    }
}