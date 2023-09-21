import express from 'express'
import { updateUser, deleteUser, getSingleUser, getAllUser } from './../controllers/userController.js'
const router = express.Router()

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

// Update new tour
router.put('/:id', verifyUser, updateUser)

// Delete new User
router.delete('/:id', verifyUser, deleteUser)

// Get single User
router.get('/:id', verifyUser, getSingleUser)

// Get all User
router.get('/',verifyAdmin, getAllUser)

export default router
