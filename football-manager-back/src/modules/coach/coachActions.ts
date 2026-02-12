import type { RequestHandler } from "express";
import coachRepository from "./coachRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const coaches = await coachRepository.readAll();
    res.json(coaches);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const coach = await coachRepository.read(Number(req.params.id));
    coach ? res.json(coach) : res.sendStatus(404);
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const coach = { id: Number(req.params.id), ...req.body };
    const affectedRows = await coachRepository.update(coach);
    affectedRows === 0 ? res.sendStatus(404) : res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const insertId = await coachRepository.create(req.body);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const affectedRows = await coachRepository.delete(Number(req.params.id));
    affectedRows === 0 ? res.sendStatus(404) : res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, read, edit, add, delete: destroy };
