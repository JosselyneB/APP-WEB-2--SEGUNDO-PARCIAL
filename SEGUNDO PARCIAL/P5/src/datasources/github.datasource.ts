// github.datasource.ts

import axios, { AxiosInstance } from 'axios';

class GithubDatasource {
  private readonly client: AxiosInstance;

  constructor(token: string) {
    this.client = axios.create({
      baseURL: 'https://api.github.com',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async getUserRepos(): Promise<any[]> {
    try {
      const response = await this.client.get('/user/repos');
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener los repositorios del usuario');
    }
  }
}

export default GithubDatasource;
