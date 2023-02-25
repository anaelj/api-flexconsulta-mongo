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
  async findByPlaca(placa) {
    return await prisma.VwVeiculos.findMany({
      where: {
        placa,
      },
    });
  }
}
