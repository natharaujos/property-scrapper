import { RealtyReturn } from "src/infrastructure/dbAdapters/entities/RealtyReturn";
import { RealtyOutput } from "../ports/RealtyOutput";

export class RealtyReturnMapper {
  mapRealtyReturnToRealtyOutput(realtyReturn: RealtyReturn[]): RealtyOutput[] {
    const realtyOutput = realtyReturn.map((realty) => realty as RealtyOutput);

    return realtyOutput;
  }
}
