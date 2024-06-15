import { ICreateRealty } from "../../application/interfaces/ICreateRealty";
import { Request, Response } from "express";

export class RealtyController {
  private createRealty: ICreateRealty;

  constructor(createRealty: ICreateRealty) {
    this.createRealty = createRealty;
  }

  async createRealtyAsync(req: Request<{}, {}, RealtyInput>, res: Response) {
    const { name, link } = req.body;

    try {
      this.createRealty.execute(name, link);
      setTimeout(() => {
        res.status(201).send("Post created successfully.");
      }, 2000);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
