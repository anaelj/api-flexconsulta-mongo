import { makeGenericLog } from "../../share/make-history/generic.history";
import { ModelMotoristas } from "../../models/views/vwMotoristas";
import redisClient from "../../database/redisClient";

export class CreateMotoristasController {
  async getMotoristas(request, response, next) {
    const { cpf } = request.query;
    const { authorization } = request.headers;

    try {
      if (!cpf) throw new Error("CPF is required");

      const key = `motoristas-${cpf}`;

      let motoristasData;
      motoristasData = await redisClient.get(key);

      if (!motoristasData) {
        let modelMotoristas = new ModelMotoristas();
        motoristasData = await modelMotoristas.findByCPF(cpf);
        if (motoristasData.length > 0)
          await redisClient.set(key, JSON.stringify(motoristasData), 60000);
        modelMotoristas = null;
      }

      await makeGenericLog({
        authorization,
        data: motoristasData,
        palavra_pesquisa: JSON.stringify(request.query),
        tipo_pesquisa: request.path.replace("/", ""),
      });

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
