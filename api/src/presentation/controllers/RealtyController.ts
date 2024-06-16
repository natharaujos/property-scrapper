import { IGetRealties } from "src/application/interfaces/IGetRealties";
import { ICreateRealty } from "../../application/interfaces/ICreateRealty";
import { Request, Response } from "express";

export class RealtyController {
  private createRealty: ICreateRealty;
  private getRealties: IGetRealties;

  constructor(createRealty: ICreateRealty, getRealties: IGetRealties) {
    this.createRealty = createRealty;
    this.getRealties = getRealties;
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

  async getRealtyAsync(req: any, res: Response) {
    try {
      const result = await this.getRealties.execute();
      setTimeout(() => {
        res
          .status(201)
          .send({ message: "Get successfully emited.", data: result });
      }, 2000);
    } catch (error) {
      res.status(500).send("Erro na requisição");
    }
  }
}
