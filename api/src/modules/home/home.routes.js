import express from "express";
import controller from "./home.controller.js";

const router = express.Router();

router.get("/", controller.index);

export default router;
