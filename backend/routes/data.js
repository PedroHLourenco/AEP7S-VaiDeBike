import express from 'express';
import Progress from '../models/Progress.js';

const router = express.Router();

// Mock de rotas seguras
const rotas = [
  { id: 1, nome: 'Rota Parque do Ingá', km: 5.3 },
  { id: 2, nome: 'Rota Avenida Mandacaru', km: 3.1 },
  { id: 3, nome: 'Rota Jardim Alvorada', km: 4.7 }
];

// Mock de pontos de apoio
const pontos = [
  { nome: 'Bebedouro no Parque do Ingá', tipo: 'bebedouro' },
  { nome: 'Bicicletário Terminal Urbano', tipo: 'bicicletario' },
  { nome: 'Banheiro Praça Raposo Tavares', tipo: 'banheiro' }
];

// GET /api/data/rotas
router.get('/rotas', (_, res) => {
  res.json(rotas);
});

// GET /api/data/pontos
router.get('/pontos', (_, res) => {
  res.json(pontos);
});

// POST /api/data/progresso
router.post('/progresso', async (req, res) => {
  const { userId, km } = req.body;

  try {
    const registro = new Progress({ userId, km });
    await registro.save();
    res.status(201).json({ message: 'Progresso salvo com sucesso' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao salvar progresso' });
  }
});

export default router;