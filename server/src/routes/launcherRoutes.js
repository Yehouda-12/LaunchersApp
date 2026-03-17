import express from "express"
import { createLauncher, deleteLaucher, getAllLaunchers, getLauncherById, updateLauncher } from "../controllers/launcherController.js"
import { verifyIntelligence, verifyToken } from "../middleware/authMiddleware.js"

const router = express.Router()

router.get('/',verifyToken,getAllLaunchers)
router.get('/:id',verifyToken,getLauncherById)
router.post('/',verifyToken,verifyIntelligence,createLauncher)
router.delete('/:id',verifyToken,verifyIntelligence,deleteLaucher)
router.put('/:id',verifyToken,verifyIntelligence,updateLauncher)


export default router

