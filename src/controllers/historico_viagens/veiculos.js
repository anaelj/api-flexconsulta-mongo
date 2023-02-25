import redisClient from "../../database/redisClient";
import { ModelVeiculos } from "../../models/views/vwVeiculos";
import { makeGenericLog } from "../../share/make-history/generic.history";

export class CreateVeiculosController {
  async getVeiculos(request, response, next) {
    const { placa } = request.query;
    const { authorization } = request.headers;

    try {
      if (!placa) throw new Error("invalid request!");

      const key = `veiculos-${placa}`;

      let veiculosData;
      veiculosData = await redisClient.get(key);

      if (!veiculosData) {
        let modelVeiculos = new ModelVeiculos();
        veiculosData = await modelVeiculos.findByPlaca(placa);
        if (veiculosData.length > 0)
          await redisClient.set(key, JSON.stringify(veiculosData), 60000);
        modelVeiculos = null;
      }
      await makeGenericLog({
        authorization,
        data: veiculosData,
        palavra_pesquisa: JSON.stringify(request.query),
        tipo_pesquisa: request.path.replace("/", ""),
      });

      return response
        .status(200)
        .send(veiculosData.length > 0 ? veiculosData : { message: "no data" });
    } catch (error) {
      next(error);
    }
  }
}
