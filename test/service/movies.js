import httpClient from '../api/httpClient.js';
import { getMovieById } from '../api/endpoints.js';

export async function getMovieByIdData(movieId) {
  try {
    const endpointConfig = getMovieById(movieId);
    const response = await httpClient({
      method: endpointConfig.method,
      url: endpointConfig.url,
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}

export async function getProjectionsByMovieAndDateData(movieId, date) {
  try {
    const endpointConfig = getProjectionsByMovieAndDate(movieId, date);
    const response = await httpClient({
      method: endpointConfig.method,
      url: endpointConfig.url,
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    if (error.response) {
      return { status: error.response.status, data: error.response.data };
    }
    return { status: 500, data: { message: 'Unknown error' } };
  }
}
