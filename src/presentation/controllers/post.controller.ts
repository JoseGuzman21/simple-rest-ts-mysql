import { Request, Response } from 'express';
import { connect } from '../../database';
import { Post } from '../../interfaces/post.interface';

export const getPosts = async (req: Request, res: Response): Promise<Response> => {
    try {
        const coon = await connect();

        const posts = await coon.query('SELECT * FROM posts');

        return res.json({ data: posts[0] })

    } catch (err: any) {
        return res.status(500).json({ message: err.message })
    }
}

export const getPostById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { postId } = req.params;

        const coon = await connect();

        const postFound = await coon.query('SELECT * FROM posts WHERE id = ?', [postId])

        return res.json({ message: 'Post Created', data: postFound[0] });

    } catch (err: any) {
        return res.status(500).json({ message: err.message })
    }
}

export const addPost = async (req: Request, res: Response): Promise<Response> => {
    try {
        const newPost: Post = req.body;

        const coon = await connect();

        await coon.query('INSERT INTO posts SET ?', [newPost])

        return res.status(201).json({ message: 'Post Created', data: newPost });

    } catch (err: any) {
        return res.status(500).json({ message: err.message })
    }
}

export const updatePost = async (req: Request, res: Response): Promise<Response> => {
    try {
        const updatePost: Post = req.body;

        const { postId } = req.params;

        console.log(updatePost);

        console.log(postId);

        const coon = await connect();

        await coon.query('UPDATE posts SET ? where id = ?', [updatePost, postId])

        return res.status(200).json({ message: 'Post Updated' });

    } catch (err: any) {
        return res.status(500).json({ message: err.message })
    }
}

export const deletePostById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { postId } = req.params;

        const coon = await connect();

        const postFound = await coon.query('DELETE FROM posts WHERE id = ?', [postId])

        return res.json({ message: 'Post Deleted' });

    } catch (err: any) {
        return res.status(500).json({ message: err.message })
    }
}