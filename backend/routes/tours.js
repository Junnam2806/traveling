import express from 'express';
import { createTour, updateTour, deleteTour, getSingleTour, getAllTour, getTourBySearch, getFeaturedTour, getTourCount} from './../controllers/tourController.js';

import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router()

// Create new tour
router.post('/', verifyAdmin, createTour)

// Update new tour
router.put('/:id', verifyAdmin, updateTour)

// Delete new tour
router.delete('/:id', verifyAdmin, deleteTour)

// Get single tour
router.get('/:id', getSingleTour)

// Get all tour
router.get('/', getAllTour)

// Get Tour by seach
router.get('/search/getTourBySearch', getTourBySearch)

// Get Tour by Feature
router.get('/search/getFeaturedTours', getFeaturedTour)

// Get Tour Count
router.get('/search/getTourCount', getTourCount)


export default router