import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

import * as postService from '../services/posts.service';

export async function getAllPosts(_req: Request, res: Response, _next: NextFunction) {
    console.log('getting all posts');
    const response = await postService.getAllPosts();

    res.send({
        status: StatusCodes.OK,
        data: response,
    });
}