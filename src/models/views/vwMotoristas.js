import { prisma } from "../../database/prismaClient";

export class ModelMotoristas {
  async findMany(take, skip) {
    return await prisma.VwMotoristas.findMany({
      orderBy: [
        {
          cpf_mot: "asc",
        },
      ],
      take,
      skip,
    });
  }
  async findByCPF(cpf_mot) {
    return await prisma.VwMotoristas.findMany({
      where: {
        cpf_mot,
      },
    });
  }
}
