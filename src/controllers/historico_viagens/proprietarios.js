import redisClient from "../../database/redisClient";
import { ModelProprietarios } from "../../models/views/vwProprietarios";

export class CreateProprietariosController {
  async getProprietarios(request, response, next) {
    const { id, page } = request.query;

    try {
      if (!id || isNaN(parseInt(id))) throw new Error("ID do veiculo is required and must be a integer!");
      if (!page || isNaN(parseInt(page))) throw new Error("PAGE is required and must be a integer!");

      const key = `proprietarios-${id}-${page}`;

      let proprietariosData;
      await redisClient.connect();
      proprietariosData = await redisClient.get(key);

      if (!proprietariosData) {
        let modelProprietarios = new ModelProprietarios();
        let proprietario = await modelProprietarios.findByID({
          id: id,
          page,
        });

        if(!proprietario){
          await redisClient.disconnect();
          return response
          .status(200)
          .send({ message: "no data" });
        }

        proprietariosData = await modelProprietarios.findByCNPJ({
          cpf_cnpj_prop: proprietario.cpf_cnpj_prop,
          page,
        });
        if (proprietariosData.length > 0)
          await redisClient.set(key, JSON.stringify(proprietariosData), 60000);
        modelProprietarios = null;
      }

      await redisClient.disconnect();
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
