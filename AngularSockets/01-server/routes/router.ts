import { Router, Request, Response } from 'express';
import Server from '../classes/server';

const router = Router();

router.get('/messages', (req: Request, res: Response) => {

    res.json({
        ok: true,
        message: 'Everything is ok'
    });
});

router.post('/messages/:id', (req: Request, res: Response) => {

    const title = req.body.title;
    const message = req.body.message;
    const id = req.params.id;

    const payload = {
        title,
        message 
    };

    const server = Server.getInstance();
    server.io.in(id).emit('private-message', payload);

    res.json({
        ok: true,
        title,
        message
    });
});


export default router;