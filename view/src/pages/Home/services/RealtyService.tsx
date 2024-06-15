import { instance } from "../../../AxiosInstance";

class RealtyService {
  static async createRealty(name: string, link: string): Promise<void> {
    instance
      .post("http://localhost:3333/realties", { name, link })
      .catch((error) => {
        throw error;
      });
  }
}

export default RealtyService;
