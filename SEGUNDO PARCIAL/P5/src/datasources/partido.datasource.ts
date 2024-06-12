import { PrismaClient, Partido } from '@prisma/client';

const prisma = new PrismaClient();

export class PartidoDatasource {
  async findAll(): Promise<Partido[]> {
    return prisma.partido.findMany();
  }

  async findById(id: number): Promise<Partido | null> {
    return prisma.partido.findUnique({ where: { id } });
  }

  async create(data: Omit<Partido, 'id'>): Promise<Partido> {
    return prisma.partido.create({ data });
  }

  async update(id: number, data: Partial<Partido>): Promise<Partido> {
    return prisma.partido.update({ where: { id }, data });
  }

  async delete(id: number): Promise<void> {
    await prisma.partido.delete({ where: { id } });
  }
}
