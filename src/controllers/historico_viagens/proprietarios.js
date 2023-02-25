import { makeGenericLog } from "../../share/make-history/generic.history";
import redisClient from "../../database/redisClient";
import { ModelProprietarios } from "../../models/views/vwProprietarios";

export class CreateProprietariosController {
  async getProprietarios(request, response, next) {
    const { cpfcnpj } = request.query;
    const { authorization } = request.headers;

    try {
      if (!cpfcnpj) throw new Error("Invalid request!");

      const key = `proprietarios-${cpfcnpj}`;

      let proprietariosData;
      proprietariosData = await redisClient.get(key);

      if (!proprietariosData) {
        let modelProprietarios = new ModelProprietarios();
        proprietariosData = await modelProprietarios.findByCNPJ(cpfcnpj);
        if (proprietariosData.length > 0)
          await redisClient.set(key, JSON.stringify(proprietariosData), 60000);
        modelProprietarios = null;
      }

      await makeGenericLog({
        authorization,
        data: proprietariosData,
        palavra_pesquisa: JSON.stringify(request.query),
        tipo_pesquisa: request.path.replace("/", ""),
      });

      return response
        .status(200)
        .send(
          proprietariosData.length > 0
            ? proprietariosData
            : { message: "no data" }
        );
    } catch (error) {
      next(error);
    }
  }
}
