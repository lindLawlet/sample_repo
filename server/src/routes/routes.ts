import { Router } from 'express';

import postRoutes from './post';

const router = Router();

router.use('/posts', postRoutes);

export default router;
