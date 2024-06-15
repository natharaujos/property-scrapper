import { Realty } from "../../domain/models/Realty";
import { IRealtyDbAdapter } from "../../infrastructure/dbAdapters/interfaces/IRealtyDbAdapter";
import { ICreateRealty } from "../interfaces/ICreateRealty";

export class CreateRealty implements ICreateRealty {
  private realtyDbAdapter: IRealtyDbAdapter;

  constructor(realtyDbAdapter: IRealtyDbAdapter) {
    this.realtyDbAdapter = realtyDbAdapter;
  }

  execute(name: string, link: string): void {
    const realty = new Realty("", name, link);
    this.realtyDbAdapter.createRealty(realty);
  }
}
