import Api from './api';

class ListingService extends Api {
  constructor() {
    super(process.env.NEXT_PUBLIC_API_URL || '');
  }

  async getListings() {
    try {
      const response = await this.api.get('/listings');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async createListing(listingData: any) {
    try {
      const response = await this.api.post('/listings', listingData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new ListingService();