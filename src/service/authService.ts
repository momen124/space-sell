import Api from './api';

class AuthService extends Api {


  async login(email: string, password: string) {
    try {
      const response = await this.api.post('/auth/login', { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async register(email: string, password: string, name: string) {
    try {
      const response = await this.api.post('/auth/register', { email, password, name });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthService();