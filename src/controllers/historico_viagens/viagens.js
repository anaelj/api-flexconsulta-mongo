import redisClient from "../../database/redisClient";
import { ModelViagens } from "../../models/views/vwViagens";

export class CreateViagensController {
  async getViagens(request, response, next) {
    const { motorista, proprietario, veiculo, page } = request.query;

    try {
      const field = motorista
        ? "cpf_mot"
        : proprietario
        ? "cpf_cnpj_prop"
        : veiculo
        ? "placa"
        : null;

      if (!page) throw new Error("PAGE is required!");
      if (!field)
        throw new Error("Filtro inválido motorista, proprietario, or veiculo");
      if (motorista && proprietario)
        throw new Error("Informe apenas um parâmetro!");
      if (motorista && veiculo) throw new Error("Informe apenas um parâmetro!");
      if (veiculo && proprietario)
        throw new Error("Informe apenas um parâmetro!");

      const value = motorista
        ? motorista
        : proprietario
        ? proprietario
        : veiculo
        ? veiculo
        : null;

      const key = `viagens-${field}-${value}-${page}`;
      let viagensData;

      viagensData = await redisClient.get(key);

      if (!viagensData) {
        let modelViagens = new ModelViagens();
        viagensData = await modelViagens.findByAnyField({ field, value, page });
        if (viagensData.length > 0)
          await redisClient.set(key, JSON.stringify(viagensData), 60000);
        modelViagens = null;
      }

      return response
        .status(200)
        .send(viagensData.length > 0 ? viagensData : { message: "no data" });
    } catch (error) {
      next(error);
    }
  }
}
