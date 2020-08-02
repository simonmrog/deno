import { Router, Request, Response } from "../deps.ts";

const router = new Router();

router.get("/", function(req: Request, res: Response) {
  res.status(200).send({ status: "ok", message: "Welcome to the Deno API"});
});

router.get("/:id", function(req: Request, res: Response) {
  res.status(200).send({ status: "ok", idReceived: `${req.params.id}`});
});

export default router;
