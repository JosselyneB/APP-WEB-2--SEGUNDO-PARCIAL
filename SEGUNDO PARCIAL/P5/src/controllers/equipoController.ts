import { Request, Response } from 'express';
import { EquipoRepository } from '../repositories/equipoRepository';

const equipoRepository = new EquipoRepository();

export const getEquipos = async (req: Request, res: Response) => {
  const equipos = await equipoRepository.findAll();
  res.json(equipos);
};

export const getEquipo = async (req: Request, res: Response) => {
  const equipo = await equipoRepository.findById(Number(req.params.id));
  if (equipo) {
    res.json(equipo);
  } else {
    res.status(404).json({ message: 'Equipo not found' });
  }
};

export const createEquipo = async (req: Request, res: Response) => {
  const equipo = await equipoRepository.create(req.body);
  res.status(201).json(equipo);
};

export const updateEquipo = async (req: Request, res: Response) => {
  const equipo = await equipoRepository.update(Number(req.params.id), req.body);
  res.json(equipo);
};

export const deleteEquipo = async (req: Request, res: Response) => {
  await equipoRepository.delete(Number(req.params.id));
  res.status(204).end();
};
