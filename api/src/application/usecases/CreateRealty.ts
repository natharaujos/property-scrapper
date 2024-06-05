import { Realty } from "../../domain/models/Realty";
import { IRealtyDbAdapter } from "../../infrastructure/dbAdapters/interfaces/IRealtyDbAdapter";
import { ICreateRealty } from "../interfaces/ICreateRealty";

export class CreateRealty implements ICreateRealty {
  private realtyDbAdapter: IRealtyDbAdapter;

  constructor(realtyDbAdapter: IRealtyDbAdapter) {
    this.realtyDbAdapter = realtyDbAdapter;
  }

  execute(name: string): void {
    const realty = new Realty("", name);
    this.realtyDbAdapter.save(realty);
  }
}
