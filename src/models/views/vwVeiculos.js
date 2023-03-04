import { prisma } from "../../database/prismaClient";

export class ModelVeiculos {
  async findMany(take, skip) {
    return await prisma.VwVeiculos.findMany({
      orderBy: [
        {
          placa: "asc",
        },
      ],
      take,
      skip,
    });
  }
  async findByPlaca({ placa, page }) {
    let take = Number(process.env.DEFAULT_PAGINATION);
    let skip = page ? (page - 1) * take : 0;
    return await prisma.VwVeiculos.findMany({
      take,
      skip,
      where: {
        placa,
      },
      orderBy: {
        id: "asc",
      },
    });
  }
}
