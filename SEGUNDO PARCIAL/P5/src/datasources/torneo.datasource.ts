import { PrismaClient, Torneo } from '@prisma/client';

const prisma = new PrismaClient();

export class TorneoDatasource {
  async findAll(): Promise<Torneo[]> {
    return prisma.torneo.findMany();
  }

  async findById(id: number): Promise<Torneo | null> {
    return prisma.torneo.findUnique({ where: { id } });
  }

  async create(data: Omit<Torneo, 'id'>): Promise<Torneo> {
    return prisma.torneo.create({ data });
  }

  async update(id: number, data: Partial<Torneo>): Promise<Torneo> {
    return prisma.torneo.update({ where: { id }, data });
  }

  async delete(id: number): Promise<void> {
    await prisma.torneo.delete({ where: { id } });
  }
}

