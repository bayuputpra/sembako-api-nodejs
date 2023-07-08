import express from 'express';
import * as sembakoController from '../controllers/sembakoController.js';

const router = express.Router();

router.get('/', sembakoController.getSembakoo);
router.get('/:id', sembakoController.getSembakoById);
router.post('/', sembakoController.createSembako);
router.put('/:id', sembakoController.updateSembako);
router.delete('/:id', sembakoController.deleteSembako);

export default router;