import type { RequestHandler } from "express";
import playerRepository from "./PlayerRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const players = await playerRepository.readAll();
    res.json(players);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const player = await playerRepository.read(Number(req.params.id));
    player ? res.json(player) : res.sendStatus(404);
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const player = { id: Number(req.params.id), ...req.body };
    const affectedRows = await playerRepository.update(player);
    affectedRows === 0 ? res.sendStatus(404) : res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const insertId = await playerRepository.create(req.body);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const affectedRows = await playerRepository.delete(Number(req.params.id));
    affectedRows === 0 ? res.sendStatus(404) : res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, read, edit, add, delete: destroy };
