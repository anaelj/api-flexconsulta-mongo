import { makeCacheVeiculos } from "../../share/make-cache/veiculos";

export class CreateVeiculoCacheController {
  async refresh(request, response) {
    await makeCacheVeiculos();

    response.status(200).send({ message: "ok" });
  }
}
