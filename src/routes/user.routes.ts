import { Router } from "express";
import {
  lista,
  registro,
  obtenerUsuario,
  eliminarUsuario,
  actualizarUsuario,
} from "../controllers/user.controller";

const router = Router();

router.post("/api/users", registro);
router.delete("/api/users/:id", eliminarUsuario);
router.put("/api/users/:id", actualizarUsuario);
router.get("/api/users", lista);
router.get("/api/users/:id", obtenerUsuario);

export default router;
