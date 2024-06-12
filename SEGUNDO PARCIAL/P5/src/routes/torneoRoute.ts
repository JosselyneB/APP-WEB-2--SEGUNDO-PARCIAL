import { Router } from 'express';
import { getTorneos, getTorneo, createTorneo, updateTorneo, deleteTorneo } from '../controllers/torneoController';

const router = Router();

router.get('/torneos', getTorneos);
router.get('/torneos/:id', getTorneo);
router.post('/torneos', createTorneo);
router.put('/torneos/:id', updateTorneo);
router.delete('/torneos/:id', deleteTorneo);

export default router;
