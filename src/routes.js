import { Router } from "express";
import { CreateMotoristasController } from "./controllers/historico_viagens/motoristas";
import { CreateProprietariosController } from "./controllers/historico_viagens/proprietarios";
import { CreateVeiculosController } from "./controllers/historico_viagens/veiculos";
import { CreateViagensController } from "./controllers/historico_viagens/viagens";

const routes = Router();

// Histórico de viagens
const MotoristasController = new CreateMotoristasController();
const ProprietariosController = new CreateProprietariosController();
const VeiculosController = new CreateVeiculosController();
const ViagensController = new CreateViagensController();

routes.get("/veiculos/", VeiculosController.getVeiculos);
routes.get("/viagens/", ViagensController.getViagens);
routes.get("/motoristas/", MotoristasController.getMotoristas);
routes.get("/proprietarios/", ProprietariosController.getProprietarios);

export { routes };
