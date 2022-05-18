import { Router } from 'express';

import * as postsController from '../core/controllers/posts.controller';

const router = Router();

router.get('/', postsController.getAllPosts);

export default router;
