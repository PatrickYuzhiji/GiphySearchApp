/* eslint-disable camelcase */
import axios from 'axios';

// You could store your API key in an .env file and use process.env.REACT_APP_GIPHY_API_KEY
const API_KEY = 'vsXZ3QPT8NBDZO8OH0M8A3qFDlYdgr8D';
const BASE_URL = 'https://api.giphy.com/v1/gifs';

export const getTrendingGifs = async (limit = 16, offset = 0) => {
  try {
    const response = await axios.get(`${BASE_URL}/trending`, {
      params: {
        api_key: API_KEY,
        limit,
        offset,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching trending GIFs:', error);
    throw error;
  }
};

export const searchGifs = async (term, limit = 16, offset = 0) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        api_key: API_KEY,
        q: term,
        limit,
        offset,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error searching GIFs:', error);
    throw error;
  }
};
