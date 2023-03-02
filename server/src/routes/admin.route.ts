import { Router } from "express";
import AdminController from "../controllers/admin.controller";

const adminRoutes = Router();

adminRoutes.post("/create", AdminController.create);
adminRoutes.post("/login", AdminController.login);

export default adminRoutes;
