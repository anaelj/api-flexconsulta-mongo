import { prisma } from "../../database/prismaClient";

export class ModelViagens {
  async findMany(take, skip) {
    return await prisma.VwViagens.findMany({
      orderBy: [
        {
          cpf_mot: "asc",
        },
      ],
      take,
      skip,
    });
  }

  async findByAnyField({ field, value, page }) {
    let take = Number(process.env.DEFAULT_PAGINATION);
    let skip = page ? (page - 1) * take : 0;

    let where;
    console.log(field);
    switch (field) {
      case "cpf_mot":
        where = { cpf_mot: value };
        break;
      case "cpf_cnpj_prop":
        where = { cpf_cnpj_prop: value };
        break;
      case "placa":
        where = { placa: value };
        break;
      default:
        break;
    }

    return await prisma.VwViagens.findMany({
      take,
      skip,
      where,
      orderBy: {
        id: "asc",
      },
    });
  }
}
