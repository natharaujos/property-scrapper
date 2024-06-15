import { Realty } from "../../../domain/models/Realty";

export interface IRealtyDbAdapter {
  createRealty(realty: Realty): void;
}
