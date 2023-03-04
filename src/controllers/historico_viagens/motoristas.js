import { ModelMotoristas } from "../../models/views/vwMotoristas";
import redisClient from "../../database/redisClient";

export class CreateMotoristasController {
  async getMotoristas(request, response, next) {
    const { cpf, page } = request.query;

    try {
      if (!cpf) throw new Error("CPF is required");
      if (!page) throw new Error("PAGE is required");

      const key = `motoristas-${cpf}-${page}`;

      let motoristasData;
      motoristasData = await redisClient.get(key);

      if (!motoristasData) {
        let modelMotoristas = new ModelMotoristas();
        motoristasData = await modelMotoristas.findByCPF({
          cpf_mot: cpf,
          page,
        });

        if (motoristasData.length > 0)
          await redisClient.set(key, JSON.stringify(motoristasData), 60000);
        modelMotoristas = null;
      }

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
