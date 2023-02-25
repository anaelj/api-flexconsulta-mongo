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
  async findByCNPJ(cpf_cnpj_prop) {
    return await prisma.VwProprietarios.findMany({
      where: {
        cpf_cnpj_prop,
      },
    });
  }
}
