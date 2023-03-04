import { prisma } from "../../database/prismaClient";

export class ModelProprietarios {
  async findMany(take, skip) {
    return await prisma.VwProprietarios.findMany({
      orderBy: [
        {
          cpf_cnpj_prop: "asc",
        },
      ],
      take,
      skip,
    });
  }
  async findByCNPJ({ cpf_cnpj_prop, page }) {
    let take = Number(process.env.DEFAULT_PAGINATION);
    let skip = page ? (page - 1) * take : 0;
    return await prisma.VwProprietarios.findMany({
      take,
      skip,
      where: {
        cpf_cnpj_prop,
      },
      orderBy: {
        id: "asc",
      },
    });
  }
}
