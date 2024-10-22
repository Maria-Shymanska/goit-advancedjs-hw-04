import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '34465474-c3837bc3938f4efd53294c219';

export const searchPhotos = async (query, page) => {
  const axiosConfigs = {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  };

  try {
    const response = await axios.get('', axiosConfigs);

    if (response && response.data && response.data.hits) {
      return response.data;
    } else {
      throw new Error('Unexpected response structure');
    }
  } catch (error) {
    console.error('Something went wrong:', error.message || error);
    throw error;
  }
};
