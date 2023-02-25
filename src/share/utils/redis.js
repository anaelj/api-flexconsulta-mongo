import client from "../../database/redisClient";
import { GetMotoristas } from "../../models/views/vwMotoristas";
import { motoristaRepository } from "../../database/redis-schema/motoristas";
import { proprietarioRepository } from "../../database/redis-schema/proprietarios";
import { veiculoRepository } from "../../database/redis-schema/veiculos";
import { viagemRepository } from "../../database/redis-schema/viagens";
import { GetProprietarios } from "../../models/views/vwProprietarios";
import { GetVeiculos } from "../../models/views/vwVeiculos";
import { GetViagens } from "../../models/views/vwViagens";

export const makeCache = async () => {
  //   client.execute(["flushall"]);

  //   console.log("---Creating cache of motorista---");
  //   const motoristas = new GetMotoristas();
  //   const result = await motoristas.findMany({});
  //   result.map(async (item) => {
  //     try {
  //       await motoristaRepository.createAndSave(item);
  //     } catch (error) {
  //       console.log(error?.message);
  //     }
  //   });
  //   console.log("---Create index on motorista---");
  //   await motoristaRepository.createIndex();
  //   console.log("---Finished cache of motorista---");

  //   console.log(" ");

  //   console.log("---Creating cache of proprietários---");
  //   const proprietarios = new GetProprietarios();
  //   const proprietariosData = await proprietarios.findMany({});
  //   proprietariosData.map(async (item, idx) => {
  //     try {
  //       await proprietarioRepository.createAndSave(item);
  //     } catch (error) {
  //       console.log(error?.message);
  //     }
  //   });
  //   console.log("---Create index on proprietário---");
  //   await proprietarioRepository.createIndex();
  //   console.log("---Finished cache of proprietário---");

  //   console.log(" ");

  //   console.log("---Creating cache of veículo---");
  //   const veiculo = new GetVeiculos();
  //   const veiculosData = await veiculo.findMany({});
  //   veiculosData.map(async (item) => {
  //     try {
  //       await veiculoRepository.createAndSave(item);
  //     } catch (error) {
  //       console.log(error?.message);
  //     }
  //   });
  //   console.log("---Create index on veículo---");
  //   await veiculoRepository.createIndex();
  //   console.log("---Finished cache of veículo---");

  console.log(" ");

  console.log("---Creating cache of viagens---");
  const viagens = new GetViagens();
  const viagensData = await viagens.findMany({ take: 10 });
  console.log(viagensData);

  viagensData.map(async (item, idx) => {
    try {
      await viagemRepository.createAndSave(item);
    } catch (error) {
      console.log(error?.message);
    }
  });
  await viagemRepository.createIndex();
  console.log("---Finished cache of viagens---");

  console.log("finish");
};
