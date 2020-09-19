import { Router, Request, Response } from 'express';
import Server from '../classes/server';
import { usersConnected } from '../sockets/socket';
import { GraficaData } from '../classes/grafica';

const router = Router();

const graphic = new GraficaData();

router.get('/grafica', (req: Request, res: Response) => {
    res.json(graphic.getDataGraphic());
});

router.post('/grafica', (req: Request, res: Response) => {

    const month = req.body.month;
    const units = Number(req.body.units);
    graphic.incremetnValue(month, units);

    const server = Server.getInstance();
    server.io.emit('change-graphic', graphic.getDataGraphic());

    res.json(graphic.getDataGraphic());
});

router.post('/messages', (req: Request, res: Response) => {

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

// Obtener usuarios y nombres
router.get('/usuarios/detalle', (req: Request, res: Response) => {

    res.json({
        ok: true,
        clients: usersConnected.getList()
    });
});

export default router;