import { Router, Request, Response } from 'express';

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

    res.json({
        ok: true,
        title,
        message
    });
});


export default router;