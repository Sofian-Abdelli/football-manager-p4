import type { RequestHandler } from "express";

// Import access to data
import teamRepository from "./teamRepository";

// The B of BREAD - Browse (Read All) operation
const getone = (req, res) => {
  console.log("poulet");
};

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
    console.log(teamId);
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

// The E of BREAD - Edit (Update) operation
const edit: RequestHandler = async (req, res, next) => {
  try {
    // On extrait l'ID de l'URL et les données du corps de la requête
    const id = Number(req.params.id);
    const updatedTeam = {
      id: id,
      name: req.body.name,
      established: req.body.established,
      country: req.body.country,
      city: req.body.city,
      stadium: req.body.stadium,
      trophys: req.body.trophys,
      user_id: req.body.user_id,
    };

    // On appelle la méthode update du repository
    const affectedRows = await teamRepository.update(updatedTeam);

    // Si aucune ligne n'est touchée (affectedRows === 0), l'ID n'existait pas
    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204); // 204 = Succès, mais rien à renvoyer dans le corps
    }
  } catch (err) {
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
    console.log(newteam);

    // Create the item
    const insertId = await teamRepository.create(newteam);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Delete (Destroy) operation
const destroy: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    // On appelle la méthode delete du repository
    const affectedRows = await teamRepository.delete(id);

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read, edit, add, delete: destroy, getone };
