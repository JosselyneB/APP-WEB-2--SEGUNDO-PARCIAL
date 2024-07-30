import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import path from 'path';

// Cargar archivo de entorno adecuado
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: path.resolve(__dirname, `../${envFile}`) });

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Crear una vivienda
app.post('/viviendas', async (req, res) => {
  const { codigo, detallesVivienda, sector, tipo, valorAlquiler, fechaFinalizacionContrato, empresa } = req.body;
  try {
    const vivienda = await prisma.vivienda.create({
      data: {
        codigo,
        detallesVivienda,
        sector,
        tipo,
        valorAlquiler,
        fechaFinalizacionContrato: new Date(fechaFinalizacionContrato),
        empresa
      },
    });
    res.status(201).json(vivienda);
  } catch (error) {
    console.error('Error al crear la vivienda:', error);
    res.status(500).json({ error: 'Error al crear la vivienda' });
  }
});

// Obtener todas las viviendas
app.get('/viviendas', async (req, res) => {
  try {
    const viviendas = await prisma.vivienda.findMany();
    res.json(viviendas);
  } catch (error) {
    console.error('Error al obtener las viviendas:', error);
    res.status(500).json({ error: 'Error al obtener las viviendas' });
  }
});

// Obtener una vivienda por ID
app.get('/viviendas/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const vivienda = await prisma.vivienda.findUnique({
      where: { id: Number(id) },
    });
    if (vivienda) {
      res.json(vivienda);
    } else {
      res.status(404).json({ error: 'Vivienda no encontrada' });
    }
  } catch (error) {
    console.error('Error al obtener la vivienda:', error);
    res.status(500).json({ error: 'Error al obtener la vivienda' });
  }
});

// Actualizar una vivienda
app.put('/viviendas/:id', async (req, res) => {
  const { id } = req.params;
  const { codigo, detallesVivienda, sector, tipo, valorAlquiler, fechaFinalizacionContrato, empresa } = req.body;
  try {
    const vivienda = await prisma.vivienda.update({
      where: { id: Number(id) },
      data: {
        codigo,
        detallesVivienda,
        sector,
        tipo,
        valorAlquiler,
        fechaFinalizacionContrato: new Date(fechaFinalizacionContrato),
        empresa
      },
    });
    res.json(vivienda);
  } catch (error) {
    console.error('Error al actualizar la vivienda:', error);
    res.status(500).json({ error: 'Error al actualizar la vivienda' });
  }
});

// Agregar 100 elementos de prueba
app.post('/viviendas/agregar100', async (req, res) => {
  const viviendas = [];
  for (let i = 0; i < 100; i++) {
    viviendas.push({
      codigo: `V${i}`,
      detallesVivienda: `Detalle ${i}`,
      sector: `Sector ${i}`,
      tipo: `Tipo ${i}`,
      valorAlquiler: 1000 + i,
      fechaFinalizacionContrato: new Date(2025, i % 12, 1),
      empresa: `Empresa ${i % 10}`
    });
  }
  try {
    const result = await prisma.vivienda.createMany({
      data: viviendas,
    });
    res.status(201).json(result);
  } catch (error) {
    console.error('Error al agregar 100 viviendas de prueba:', error);
    res.status(500).json({ error: 'Error al agregar 100 viviendas de prueba' });
  }
});

// Actualización masiva de empresas
app.put('/viviendas/actualizarEmpresas', async (req, res) => {
  const { empresaOrigen, empresaDestino } = req.body;
  try {
    const result = await prisma.vivienda.updateMany({
      where: { empresa: empresaOrigen },
      data: { empresa: empresaDestino }
    });
    res.json(result);
  } catch (error) {
    console.error('Error al actualizar las empresas:', error);
    res.status(500).json({ error: 'Error al actualizar las empresas' });
  }
});

// Eliminación de elementos por IDs
app.delete('/viviendas/eliminarIDs', async (req, res) => {
  const { ids } = req.body;
  try {
    const result = await prisma.vivienda.deleteMany({
      where: {
        id: { in: ids }
      }
    });
    res.json(result);
  } catch (error) {
    console.error('Error al eliminar las viviendas por IDs:', error);
    res.status(500).json({ error: 'Error al eliminar las viviendas por IDs' });
  }
});

// Eliminar elementos por año
app.delete('/viviendas/eliminarPorAnio', async (req, res) => {
  const { anio } = req.body;
  try {
    const result = await prisma.vivienda.deleteMany({
      where: {
        fechaFinalizacionContrato: {
          gte: new Date(anio, 0, 1),
          lt: new Date(anio + 1, 0, 1)
        }
      }
    });
    res.json(result);
  } catch (error) {
    console.error('Error al eliminar las viviendas por año:', error);
    res.status(500).json({ error: 'Error al eliminar las viviendas por año' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
