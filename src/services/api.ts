import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000'; // Flask backend URL

export const fetchPrediction = async (scenario: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/predict`, { scenario });
    return response.data; // Return the result from the backend
  } catch (error) {
    console.error('Error fetching prediction:', error);
    throw new Error('Failed to fetch prediction. Please try again.');
  }
};
