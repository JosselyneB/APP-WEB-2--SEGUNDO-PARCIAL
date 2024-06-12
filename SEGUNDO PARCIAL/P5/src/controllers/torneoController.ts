import { Request, Response } from 'express';
import { TorneoRepository } from '../repositories/torneoRepository';

const torneoRepository = new TorneoRepository();

export const getTorneos = async (req: Request, res: Response) => {
  const torneos = await torneoRepository.findAll();
  res.json(torneos);
};

export const getTorneo = async (req: Request, res: Response) => {
  const torneo = await torneoRepository.findById(Number(req.params.id));
  if (torneo) {
    res.json(torneo);
  } else {
    res.status(404).json({ message: 'Torneo not found' });
  }
};

export const createTorneo = async (req: Request, res: Response) => {
  const torneo = await torneoRepository.create(req.body);
  res.status(201).json(torneo);
};

export const updateTorneo = async (req: Request, res: Response) => {
  const torneo = await torneoRepository.update(Number(req.params.id), req.body);
  res.json(torneo);
};

export const deleteTorneo = async (req: Request, res: Response) => {
  await torneoRepository.delete(Number(req.params.id));
  res.status(204).end();
};
