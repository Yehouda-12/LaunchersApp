import express from "express"
import { verifyAdmin, verifyToken } from "../middleware/authMiddleware.js"
import { createUser, deleteUser, getAllUsers, getUser, login, updateUser } from "../controllers/authController.js"


const router = express.Router()


router.post('/register/create',verifyToken,verifyAdmin,createUser)
router.put('/register/update',verifyToken,verifyAdmin,updateUser)
router.delete('/register/delete/:id',verifyToken,verifyAdmin,deleteUser)
router.get('/users',verifyToken,verifyAdmin,getAllUsers)
router.post('/login',login)
router.get('/getUser',verifyToken,getUser)

export default router