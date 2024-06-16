import { RealtyOutput } from "../ports/RealtyOutput";

export interface IGetRealties {
  execute(): Promise<RealtyOutput[]>;
}
