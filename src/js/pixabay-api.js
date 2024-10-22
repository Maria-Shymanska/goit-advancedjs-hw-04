import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

const API_KEY = '34465474-c3837bc3938f4efd53294c219';

export async function searchPhotos(query, page = 1, perPage = 15) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
  console.log('Fetching images with URL:', url);

  try {
    const response = await axios.get(url);
    console.log('Response received:', response);

    if (response.status !== 200) {
      console.error('Non-200 response:', response);
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again.',
      });
      return [];
    }

    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error.response || error.message);
    throw new Error('Failed to fetch images.');
  }
}