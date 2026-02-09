import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import teamActions from "./modules/team/teamActions";

router.get("/api/teams", teamActions.browse);
router.get("/api/teams/:id", teamActions.read);
router.post("/api/teams", teamActions.add);

/* ************************************************************************* */

export default router;
