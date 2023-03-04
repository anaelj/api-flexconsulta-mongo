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
  async findByCPF({ cpf_mot, page }) {
    let take = Number(process.env.DEFAULT_PAGINATION);
    let skip = page ? (page - 1) * take : 0;
    return await prisma.VwMotoristas.findMany({
      take,
      skip,
      where: {
        cpf_mot,
      },
      orderBy: {
        id: "asc",
      },
    });
  }
}
