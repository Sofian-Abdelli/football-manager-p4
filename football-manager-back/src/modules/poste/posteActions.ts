import type { RequestHandler } from "express";
import posteRepository from "./posteRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const postes = await posteRepository.readAll();
    res.json(postes);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const poste = await posteRepository.read(Number(req.params.id));
    poste ? res.json(poste) : res.sendStatus(404);
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const poste = { id: Number(req.params.id), ...req.body };
    const affectedRows = await posteRepository.update(poste);
    affectedRows === 0 ? res.sendStatus(404) : res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const insertId = await posteRepository.create(req.body);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const affectedRows = await posteRepository.delete(Number(req.params.id));
    affectedRows === 0 ? res.sendStatus(404) : res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, read, edit, add, delete: destroy };
