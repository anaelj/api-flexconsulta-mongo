import redisClient from "../../database/redisClient";
import { ModelProprietarios } from "../../models/views/vwProprietarios";

export class CreateProprietariosController {
  async getProprietarios(request, response, next) {
    const { cpfcnpj, page } = request.query;

    try {
      if (!cpfcnpj) throw new Error("CPFCNPJ is required!");
      if (!page) throw new Error("PAGE is required!");

      const key = `proprietarios-${cpfcnpj}-${page}`;

      let proprietariosData;
      proprietariosData = await redisClient.get(key);

      if (!proprietariosData) {
        let modelProprietarios = new ModelProprietarios();
        proprietariosData = await modelProprietarios.findByCNPJ({
          cpf_cnpj_prop: cpfcnpj,
          page,
        });
        if (proprietariosData.length > 0)
          await redisClient.set(key, JSON.stringify(proprietariosData), 60000);
        modelProprietarios = null;
      }

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
