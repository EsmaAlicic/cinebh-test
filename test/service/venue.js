import httpClient from '../api/httpClient.js';
import { getVenues } from '../api/endpoints.js';

export async function getVenuesData() {
  try {
    const response = await httpClient.get(getVenues.url);
    console.log('Fetched venues:', response.data);
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}
