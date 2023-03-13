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
    try{
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
    }catch(err){
      console.log(err)
    }
  }

  async findByID({ id }) {
    try{
    return await prisma.motoristas.findFirst({
      where: {
        id : parseInt(id),
      }
    });
    }catch(err){
      console.log(err)
    }
  }
}
