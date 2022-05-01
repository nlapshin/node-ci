
import { Router, Request, Response } from "express";

const router = Router();

router.get('/hello/:name', (req: Request, res: Response) => {
    const { name } = req.params;

    res.send(`Hello ${name} from express`);
  },
);

export default router;
