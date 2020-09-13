import { Router, Request, Response } from 'express';

const router = Router();

router.get('/messages', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'Everthing is ok'
    });
});

router.post('/messages', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'POST ok'
    });
});


export default router;