import { Router } from "express";
import homeRoutes from "../modules/home/home.routes.js";

const router = Router();

router.use("/", homeRoutes);

router.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Rota não encontrada",
        path: req.originalUrl,
    });
});

export default router;