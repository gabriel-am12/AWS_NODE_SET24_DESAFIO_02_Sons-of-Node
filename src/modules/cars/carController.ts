import { PrismaClient, Status } from '@prisma/client';
import { Request, Response, Handler } from 'express';

const prisma = new PrismaClient();

// Criar um novo carro com itens
export const createCar = async (req: Request, res: Response) => {
  const { plate, brand, model, km, year, items, price, status } = req.body;

  try {
    // Validação de ano (não pode ter mais de 11 anos a partir do ano atual)
    const currentYear = new Date().getFullYear();
    if (year < currentYear - 11) {
      return res.status(400).json({ error: "O carro não pode ter mais de 11 anos." });
    }

    // Validação de itens (no máximo 5 itens e sem duplicatas)
    if (items.length > 5 || new Set(items).size !== items.length) {
      return res.status(400).json({ error: "O carro deve ter no máximo 5 itens únicos." });
    }

    // Criar o carro com itens relacionados
    const car = await prisma.car.create({
      data: {
        plate,
        brand,
        model,
        km,
        year,
        price,
        status: status || 'ACTIVED',
        Items: {
          create: items.map((item: string) => ({ name: item })),
        },
      },
      include: { Items: true },
    });

    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar carro', details: error instanceof Error ? error.message : String(error) });
  }
};

// Listar todos os carros (com itens relacionados)
export const getCars = async (req: Request, res: Response) => {
  try {
    const { status, brand, model, minYear, maxYear, minPrice, maxPrice } = req.query;

    const cars = await prisma.car.findMany({
      where: {
        status: status ? status as Status : undefined,
        brand: brand ? String(brand) : undefined,
        model: model ? String(model) : undefined,
        year: {
          gte: minYear ? Number(minYear) : undefined,
          lte: maxYear ? Number(maxYear) : undefined,
        },
        price: {
          gte: minPrice ? Number(minPrice) : undefined,
          lte: maxPrice ? Number(maxPrice) : undefined,
        },
      },
      include: { Items: true },
    });

    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar carros', details: error instanceof Error ? error.message : String(error) });
  }
};

// Visualizar um carro por ID (com itens relacionados)
export const getCarById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { plate, brand, model, km, year, items, price, status } = req.body;

  try {
    const car = await prisma.car.findUnique({
      where: { id },
      include: { Items: true },
    });
    if (!car) {
      return res.status(404).json({ error: "Carro não encontrado" });
    }
    res.json(car);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar carro por id', details: error instanceof Error ? error.message : String(error) });
  }
};

// Atualizar um carro e seus itens
export const updateCar = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { plate, brand, model, km, year, items, price, status } = req.body;

  try {
    // Atualiza o carro e substitui itens existentes, se `items` estiver presente
    const updateData: any = {
      plate,
      brand,
      model,
      km,
      year,
      price,
      status,
    };

    // Verifique se `items` foi fornecido na requisição
    if (items) {
      updateData.Items = {
        deleteMany: {}, // Remove itens antigos
        create: items.map((item: string) => ({ name: item })), // Adiciona novos itens
      };
    }

    const car = await prisma.car.update({
      where: { id },
      data: updateData,
      include: { Items: true },
    });

    res.json(car);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar carro', details: error instanceof Error ? error.message : String(error) });
  }
};

// Excluir (soft delete) um carro
export const deleteCar = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const car = await prisma.car.update({
      where: { id },
      data: { status: Status.DELETED },
    });
    res.json(car);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar carro', details: error instanceof Error ? error.message : String(error) });
  }
};
