import axios from 'axios';

const API_URL = 'http://localhost:1337/api';

export const getPortfolioItems = async () => {
    try {
        const response = await axios.get(`${API_URL}/portfolio-items?populate=*`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching portfolio items:", error);
        throw error;
    }
};