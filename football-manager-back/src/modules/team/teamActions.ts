import type { RequestHandler } from "express";

// Import access to data
import teamRepository from "./teamRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all teams
    const team = await teamRepository.readAll();

    // Respond with the teams in JSON format
    res.json(team);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific team based on the provided ID
    const teamId = Number(req.params.id);
    const team = await teamRepository.read(teamId);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (team == null) {
      res.sendStatus(404);
    } else {
      res.json(team);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the item data from the request body
    const newteam = {
      name: req.body.name, // On remplace .title par .name
      established: req.body.established, // Ajouté
      country: req.body.country, // Ajouté
      city: req.body.city, // Ajouté
      stadium: req.body.stadium, // Ajouté
      trophys: req.body.trophys, // Ajouté
      user_id: req.body.user_id,
    };

    // Create the item
    const insertId = await teamRepository.create(newteam);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add };
