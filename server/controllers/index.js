import {Router} from 'express';
//import api from './api';
import admin from './admin';
//import pages from './pages';

const router = Router();

//router.use('/api', api);
//router.use('/admin', admin);
router.use('/*', pages);

export default router;