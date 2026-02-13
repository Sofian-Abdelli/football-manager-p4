import express from "express";

const router = express.Router();

import coachActions from "./modules/coach/coachActions";
import playerActions from "./modules/player/playerActions";
import posteActions from "./modules/poste/posteActions";
import stadiumActions from "./modules/stadium/stadiumActions";
/* ************************************************************************* */
// IMPORT DES ACTIONS
/* ************************************************************************* */
import teamActions from "./modules/team/teamActions";
/* ************************************************************************* */
// ROUTES API
/* ************************************************************************* */

// --- 1. ÉQUIPES (TEAMS) ---
router.get("/api/teams", teamActions.browse);
router.get("/api/teams/:id", teamActions.getone);
router.put("/api/teams/:id", teamActions.edit);
router.post("/api/teams", teamActions.add);
router.delete("/api/teams/:id", teamActions.delete);

// --- 2. ENTRAÎNEURS (COACHES) ---
router.get("/api/coaches", coachActions.browse);
router.get("/api/coaches/:id", coachActions.read);
router.put("/api/coaches/:id", coachActions.edit);
router.post("/api/coaches", coachActions.add);
router.delete("/api/coaches/:id", coachActions.delete);

// --- 3. JOUEURS (PLAYERS) ---
router.get("/api/players", playerActions.browse);
router.get("/api/players/:id", playerActions.read);
router.put("/api/players/:id", playerActions.edit);
router.post("/api/players", playerActions.add);
router.delete("/api/players/:id", playerActions.delete);

// --- 4. POSTES ---
router.get("/api/postes", posteActions.browse);
router.get("/api/postes/:id", posteActions.read);
router.put("/api/postes/:id", posteActions.edit);
router.post("/api/postes", posteActions.add);
router.delete("/api/postes/:id", posteActions.delete);

// --- 5. STADES (STADIUMS) ---
router.get("/api/stadiums", stadiumActions.browse);
router.get("/api/stadiums/:id", stadiumActions.read);
router.put("/api/stadiums/:id", stadiumActions.edit);
router.post("/api/stadiums", stadiumActions.add);
router.delete("/api/stadiums/:id", stadiumActions.delete);

export default router;
