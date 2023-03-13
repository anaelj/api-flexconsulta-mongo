import redisClient from "../../database/redisClient";
import { ModelVeiculos } from "../../models/views/vwVeiculos";

export class CreateVeiculosController {
  async getVeiculos(request, response, next) {
    const { id, page } = request.query;

    try {
      if (!id || isNaN(parseInt(id))) throw new Error("ID do veiculo is required and must be a integer!");
      if (!page || isNaN(parseInt(page))) throw new Error("PAGE is required and must be a integer!");

      const key = `veiculos-${id}-${page}`;

      let veiculosData;
      await redisClient.connect();
      veiculosData = await redisClient.get(key);

      if (!veiculosData) {
        let modelVeiculos = new ModelVeiculos();
        let veiculo = await modelVeiculos.findByID({ id });
        
        if(!veiculo){
          await redisClient.disconnect();
          return response
          .status(200)
          .send({ message: "no data" });
        }

        veiculosData = await modelVeiculos.findByPlaca({ placa : veiculo.placa , page });
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
