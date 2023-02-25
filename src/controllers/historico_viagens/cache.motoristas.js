import { makeCacheMotoristas } from "../../share/make-cache/motoristas";

export class CreateMotoristaCacheController {
  async refresh(request, response) {
    await makeCacheMotoristas();
    response.status(200).send({ message: "ok" });
  }
}
