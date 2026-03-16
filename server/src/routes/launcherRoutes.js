import express from "express"
import { createLauncher, deleteLaucher, getAllLaunchers, getLauncherById, updateLauncher } from "../controllers/launcherController.js"

const router = express.Router()

router.get('/',getAllLaunchers)
router.get('/:id',getLauncherById)
router.post('/',createLauncher)
router.delete('/:id',deleteLaucher)
router.put('/:id',updateLauncher)
export default router

