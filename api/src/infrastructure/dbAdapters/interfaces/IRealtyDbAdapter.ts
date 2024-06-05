import { Realty } from "../../../domain/models/Realty";

export interface IRealtyDbAdapter {
  save(realty: Realty): void;
}
