import { instance } from "../../../AxiosInstance";
import { RealtyDto } from "../interfaces/RealtyDto";

class RealtyService {
  static async createRealty(name: string, link: string): Promise<void> {
    instance
      .post("http://localhost:3333/realties", { name, link })
      .catch((error) => {
        throw error;
      });
  }

  static async getRealties(): Promise<RealtyDto[]> {
    return instance
      .get("http://localhost:3333/realties")
      .then((res) => res.data.data)
      .catch((error) => {
        throw error;
      });
  }
}

export default RealtyService;
