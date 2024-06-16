import { RealtyOutput } from "src/application/ports/RealtyOutput";

export class RealtyReturn {
  name: string;
  link: string;

  constructor(name: string, link: string) {
    this.name = name;
    this.link = link;
  }

  mapRealtyReturnToRealtyOutput(this: RealtyReturn[]): RealtyOutput[] {
    const realtyOutput = this.map((realty) => realty as RealtyOutput);

    return realtyOutput;
  }
}
