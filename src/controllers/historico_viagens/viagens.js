import redisClient from "../../database/redisClient";
import { ModelViagens } from "../../models/views/vwViagens";
import { makeGenericLog } from "../../share/make-history/generic.history";

export class CreateViagensController {
  async getViagens(request, response, next) {
    const { motorista, proprietario, veiculo, page, pagination } =
      request.query;
    const { authorization } = request.headers;

    try {
      const field = motorista
        ? "cpf_mot"
        : proprietario
        ? "cpf_cnpj_prop"
        : veiculo
        ? "placa"
        : null;

      if (!field) throw new Error("Filtro inválido");
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

      const key = `viagens-${field}-${value}`;
      console.log(key);

      let viagensData;
      viagensData = await redisClient.get(key);

      if (!viagensData) {
        let modelViagens = new ModelViagens();
        viagensData = await modelViagens.findByAnyField(field, value);
        if (viagensData.length > 0)
          await redisClient.set(key, JSON.stringify(viagensData), 60000);
        modelViagens = null;
      }

      await makeGenericLog({
        authorization,
        data: viagensData,
        palavra_pesquisa: JSON.stringify(request.query),
        tipo_pesquisa: request.path.replace("/", ""),
      });

      return response
        .status(200)
        .send(viagensData.length > 0 ? viagensData : { message: "no data" });
    } catch (error) {
      next(error);
    }
  }
}
