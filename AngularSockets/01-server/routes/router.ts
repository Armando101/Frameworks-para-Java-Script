import { Router, Request, Response } from 'express';
import Server from '../classes/server';

const router = Router();

router.get('/messages', (req: Request, res: Response) => {

    const from = req.body.from;
    const message = req.body.message;

    const payload = {
        from,
        message 
    };

    const server = Server.getInstance();
    server.io.emit('new-message', payload);

    res.json({
        ok: true,
        message: 'Everything is ok'
    });
});

router.post('/messages/:id', (req: Request, res: Response) => {

    const from = req.body.from;
    const message = req.body.message;
    const id = req.params.id;

    const payload = {
        from,
        message 
    };

    const server = Server.getInstance();
    server.io.in(id).emit('private-message', payload);

    res.json({
        ok: true,
        from,
        message
    });
});

// Servicio apra obtener id de los usuarios
router.get('/usuarios', (req: Request, res: Response) => {
    const server = Server.getInstance();

    server.io.clients((err: any, clients: string[]) => {
        if (err) {
            res.json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            clients
        })
    });
});

export default router;