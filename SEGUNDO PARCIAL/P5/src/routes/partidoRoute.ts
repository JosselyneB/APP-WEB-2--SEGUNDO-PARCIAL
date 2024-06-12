import { Router } from 'express';
import { getPartidos, getPartido, createPartido, updatePartido, deletePartido } from '../controllers/partidoController';

const router = Router();

router.get('/partidos', getPartidos);
router.get('/partidos/:id', getPartido);
router.post('/partidos', createPartido);
router.put('/partidos/:id', updatePartido);
router.delete('/partidos/:id', deletePartido);

export default router;
