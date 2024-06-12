import { PrismaClient, Equipo } from '@prisma/client';

const prisma = new PrismaClient();

export class EquipoDatasource {
  async findAll(): Promise<Equipo[]> {
    return prisma.equipo.findMany();
  }

  async findById(id: number): Promise<Equipo | null> {
    return prisma.equipo.findUnique({ where: { id } });
  }

  async create(data: Omit<Equipo, 'id'>): Promise<Equipo> {
    return prisma.equipo.create({ data });
  }

  async update(id: number, data: Partial<Equipo>): Promise<Equipo> {
    return prisma.equipo.update({ where: { id }, data });
  }

  async delete(id: number): Promise<void> {
    await prisma.equipo.delete({ where: { id } });
  }
}
