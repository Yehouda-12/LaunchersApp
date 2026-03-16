import express from "express"
import { createLauncher, deleteLaucher, getAllLaunchers, getLauncherById } from "../controllers/launcherController.js"

const router = express.Router()

router.get('/',getAllLaunchers)
router.get('/:id',getLauncherById)
router.post('/',createLauncher)
router.delete('/:id',deleteLaucher)

export default router

// "city":"iran"
// "rocketType":Shahab3
// "latitude" :45
// "longitude" :52
// "name":"haminay"