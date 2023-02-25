import { makeCacheProprietarios } from "../../share/make-cache/proprietarios";

export class CreateProprietarioCacheController {
  async refresh(request, response) {
    await makeCacheProprietarios();
    response.status(200).send({ message: "ok" });
  }
}
