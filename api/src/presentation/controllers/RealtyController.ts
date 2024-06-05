import { ICreateRealty } from "../../application/interfaces/ICreateRealty";
import { Request, Response } from "express";

export class RealtyController {
  private createRealty: ICreateRealty;

  constructor(createRealty: ICreateRealty) {
    this.createRealty = createRealty;
  }

  async createRealtyAsync(req: Request<{}, {}, RealtyInput>, res: Response) {
    const { name } = req.body;
    console.log(this.createRealty.execute);
    try {
      this.createRealty.execute(name);
      res.status(201).send("Post created successfully.");
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
