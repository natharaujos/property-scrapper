import axios from "axios";

class RealtyService {
  static async createRealty(name: string, link: string): Promise<void> {
    axios
      .post("http://localhost:3333/realties", { name, link })
      .catch((error) => {
        throw error;
      });
  }
}

export default RealtyService;
