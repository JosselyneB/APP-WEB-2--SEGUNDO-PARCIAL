import { Router, Request, Response } from 'express';
import GithubRepository from '../repositories/gitHubRepository';





const router = Router();

router.get('/github/repos', async (req: Request, res: Response) => {
  try {
    const token = process.env.GITHUB_TOKEN; // Obtener el token de las variables de entorno

    if (!token) {
      return res.status(500).json({ error: 'GITHUB_TOKEN no está definido en las variables de entorno' });
    }

    const githubRepoRepository = new GithubRepository(token);
    const repos = await githubRepoRepository.getUserRepos();
    res.json(repos);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
});

export default router;

