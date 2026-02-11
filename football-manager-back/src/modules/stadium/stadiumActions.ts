import type { RequestHandler } from "express";
import stadiumRepository from "./stadiumRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const stadiums = await stadiumRepository.readAll();
    res.json(stadiums);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const stadium = await stadiumRepository.read(Number(req.params.id));
    stadium ? res.json(stadium) : res.sendStatus(404);
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const stadium = { id: Number(req.params.id), ...req.body };
    const affectedRows = await stadiumRepository.update(stadium);
    affectedRows === 0 ? res.sendStatus(404) : res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const insertId = await stadiumRepository.create(req.body);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const affectedRows = await stadiumRepository.delete(Number(req.params.id));
    affectedRows === 0 ? res.sendStatus(404) : res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, read, edit, add, delete: destroy };
