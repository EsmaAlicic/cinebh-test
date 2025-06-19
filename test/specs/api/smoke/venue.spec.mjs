import { getVenuesData } from '../../../service/venue.js';

describe('Smoke Tests - Venues API', () => {
  it('Should return 200 and a list of venues', async () => {
    const response = await getVenuesData();

    expect(response.status).toBe(200);
    
    expect(response.data.hasOwnProperty('totalElements')).toBeTrue();
    expect(response.data.hasOwnProperty('totalPages')).toBeTrue();
    expect(response.data.hasOwnProperty('content')).toBeTrue();
    expect(Array.isArray(response.data.content)).toBeTrue();

    if (response.data.content.length > 0) {
      const venue = response.data.content[0];
      expect(venue.hasOwnProperty('id')).toBeTrue();
      expect(venue.hasOwnProperty('name')).toBeTrue();
      expect(venue.hasOwnProperty('imageUrl')).toBeTrue();
      expect(venue.hasOwnProperty('street')).toBeTrue();
      expect(venue.hasOwnProperty('cityName')).toBeTrue();
    }
  });
});
