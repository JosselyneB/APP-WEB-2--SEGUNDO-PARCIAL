import { Request, Response } from 'express';
import { PartidoRepository } from '../repositories/partidoRepository';

const partidoRepository = new PartidoRepository();

export const getPartidos = async (req: Request, res: Response) => {
  const partidos = await partidoRepository.findAll();
  res.json(partidos);
};

export const getPartido = async (req: Request, res: Response) => {
  const partido = await partidoRepository.findById(Number(req.params.id));
  if (partido) {
    res.json(partido);
  } else {
    res.status(404).json({ message: 'Partido not found' });
  }
};

export const createPartido = async (req: Request, res: Response) => {
  const partido = await partidoRepository.create(req.body);
  res.status(201).json(partido);
};

export const updatePartido = async (req: Request, res: Response) => {
  const partido = await partidoRepository.update(Number(req.params.id), req.body);
  res.json(partido);
};

export const deletePartido = async (req: Request, res: Response) => {
  await partidoRepository.delete(Number(req.params.id));
  res.status(204).end();
};
