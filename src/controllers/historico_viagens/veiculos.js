import redisClient from "../../database/redisClient";
import { ModelVeiculos } from "../../models/views/vwVeiculos";

export class CreateVeiculosController {
  async getVeiculos(request, response, next) {
    const { placa, page } = request.query;

    try {
      if (!placa) throw new Error("PLACA is required!");
      if (!page) throw new Error("PAGE is required!");

      const key = `veiculos-${placa}-${page}`;

      let veiculosData;
      await redisClient.connect();
      veiculosData = await redisClient.get(key);

      if (!veiculosData) {
        let modelVeiculos = new ModelVeiculos();
        veiculosData = await modelVeiculos.findByPlaca({ placa, page });
        if (veiculosData.length > 0)
          await redisClient.set(key, JSON.stringify(veiculosData), 60000);
        modelVeiculos = null;
      }

      await redisClient.disconnect();
      return response
        .status(200)
        .send(veiculosData.length > 0 ? veiculosData : { message: "no data" });
    } catch (error) {
      next(error);
    }
  }
}
