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

  async findByAnyField(field, value) {
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

    console.log("where", where);

    return await prisma.VwViagens.findMany({
      where,
    });
  }
}
