import axios from 'axios';

class GithubRepository {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  async getUserRepos() {
    try {
      const response = await axios.get('https://api.github.com/user/repos', {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch user repositories');
    }
  }
}

export default GithubRepository;
