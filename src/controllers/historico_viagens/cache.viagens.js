import { makeCacheViagens } from "../../share/make-cache/viagens";

export class CreateViagemCacheController {
  async refresh(request, response) {
    await makeCacheViagens();

    response.status(200).send({ message: "ok" });
  }
}
