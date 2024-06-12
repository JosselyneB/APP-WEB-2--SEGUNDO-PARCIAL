import express from 'express';
import equipoRoutes from './routes/equipoRoute';
import torneoRoutes from './routes/torneoRoute';
import partidoRoutes from './routes/partidoRoute';
import githubRoutes from './routes/gitHubRoutes';

const app = express();

app.use(express.json());

app.use('/api', equipoRoutes);
app.use('/api', torneoRoutes);
app.use('/api', partidoRoutes);
app.use('/api', githubRoutes);

export default app;
