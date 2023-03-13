import { ModelMotoristas } from "../../models/views/vwMotoristas";
import redisClient from "../../database/redisClient";

export class CreateMotoristasController {
  async getMotoristas(request, response, next) {
    const { id, page } = request.query;

    try {
      if (!id || isNaN(parseInt(id))) throw new Error("ID do veiculo is required and must be a integer!");
      if (!page || isNaN(parseInt(page))) throw new Error("PAGE is required and must be a integer!");

      const key = `motoristas-${id}-${page}`;

      let motoristasData;
      await redisClient.connect();
      motoristasData = await redisClient.get(key);

      if (!motoristasData) {
        let modelMotoristas = new ModelMotoristas();

        let mototista = await modelMotoristas.findByID({
          id: id
        })

        if(!mototista){
          await redisClient.disconnect();
          return response
          .status(200)
          .send({ message: "no data" });
        }

        motoristasData = await modelMotoristas.findByCPF({
          cpf_mot: mototista.cpf_mot,
          page,
        });

        if (motoristasData.length > 0)
          await redisClient.set(key, JSON.stringify(motoristasData), 60000);
        modelMotoristas = null;
      }
      await redisClient.disconnect();
      return response
        .status(200)
        .send(
          motoristasData.length > 0 ? motoristasData : { message: "no data" }
        );
    } catch (error) {
      next(error);
    }
  }
}
