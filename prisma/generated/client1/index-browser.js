
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.9.0
 * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
 */
Prisma.prismaVersion = {
  client: "4.9.0",
  engine: "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.ClientesScalarFieldEnum = makeEnum({
  id: 'id',
  cnpj: 'cnpj',
  razaosocial: 'razaosocial',
  nomefantasia: 'nomefantasia',
  telefone: 'telefone',
  email: 'email',
  photo: 'photo',
  ativo: 'ativo',
  dt_criacao: 'dt_criacao',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.Contatos_motoristasScalarFieldEnum = makeEnum({
  id: 'id',
  idmotorista: 'idmotorista',
  idcliente: 'idcliente',
  contato: 'contato',
  tipo_contato: 'tipo_contato',
  dt_criacao: 'dt_criacao',
  dt_atualizacao: 'dt_atualizacao',
  clientesId: 'clientesId',
  motoristasId: 'motoristasId'
});

exports.Prisma.MotoristasScalarFieldEnum = makeEnum({
  id: 'id',
  nome_mot: 'nome_mot',
  cpf_mot: 'cpf_mot',
  cnh_mot: 'cnh_mot',
  nome_pai: 'nome_pai',
  nome_mae: 'nome_mae',
  categoria_cnh_mot: 'categoria_cnh_mot',
  cod_situacao_cnh_mot: 'cod_situacao_cnh_mot',
  dt_validade_cnh: 'dt_validade_cnh',
  dt_emissao_cnh: 'dt_emissao_cnh',
  dt_primeira_cnh: 'dt_primeira_cnh',
  dt_nascimento: 'dt_nascimento',
  foto_motorista: 'foto_motorista',
  ativo: 'ativo',
  cadastro_verificado: 'cadastro_verificado',
  dt_criacao: 'dt_criacao',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.ProprietariosScalarFieldEnum = makeEnum({
  id: 'id',
  nome_prop: 'nome_prop',
  antt_prop: 'antt_prop',
  status_antt: 'status_antt',
  dt_validade_antt: 'dt_validade_antt',
  cpf_cnpj_prop: 'cpf_cnpj_prop',
  ativo: 'ativo',
  cadastro_verificado: 'cadastro_verificado',
  dt_criacao: 'dt_criacao',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.Status_motoristasScalarFieldEnum = makeEnum({
  id: 'id',
  idmotorista: 'idmotorista',
  idcliente: 'idcliente',
  dt_cliente: 'dt_cliente',
  numero_cliente: 'numero_cliente',
  lote_arquivo: 'lote_arquivo',
  status_motorista: 'status_motorista',
  dt_criacao: 'dt_criacao',
  dt_atualizacao: 'dt_atualizacao',
  clientesId: 'clientesId',
  motoristasId: 'motoristasId'
});

exports.Prisma.Status_proprietariosScalarFieldEnum = makeEnum({
  id: 'id',
  idproprietario: 'idproprietario',
  idcliente: 'idcliente',
  lote_arquivo: 'lote_arquivo',
  dt_cliente: 'dt_cliente',
  numero_cliente: 'numero_cliente',
  status_proprietario: 'status_proprietario',
  dt_criacao: 'dt_criacao',
  dt_atualizacao: 'dt_atualizacao',
  clientesId: 'clientesId',
  proprietariosId: 'proprietariosId'
});

exports.Prisma.Status_veiculosScalarFieldEnum = makeEnum({
  id: 'id',
  idveiculo: 'idveiculo',
  idcliente: 'idcliente',
  lote_arquivo: 'lote_arquivo',
  dt_cliente: 'dt_cliente',
  numero_cliente: 'numero_cliente',
  status_veiculo: 'status_veiculo',
  dt_criacao: 'dt_criacao',
  dt_atualizacao: 'dt_atualizacao',
  clientesId: 'clientesId',
  veiculosId: 'veiculosId'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.VeiculosScalarFieldEnum = makeEnum({
  id: 'id',
  placa: 'placa',
  renavam: 'renavam',
  ativo: 'ativo',
  cadastro_verificado: 'cadastro_verificado',
  dt_criacao: 'dt_criacao',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.ViagensScalarFieldEnum = makeEnum({
  id: 'id',
  idcliente: 'idcliente',
  numero_cliente: 'numero_cliente',
  dt_viagem: 'dt_viagem',
  mercadoria: 'mercadoria',
  cidade_origem: 'cidade_origem',
  cidade_destino: 'cidade_destino',
  idmotorista: 'idmotorista',
  idproprietario: 'idproprietario',
  idveiculo: 'idveiculo',
  carreta1: 'carreta1',
  carreta2: 'carreta2',
  carreta3: 'carreta3',
  carreta4: 'carreta4',
  viagem_cancelado: 'viagem_cancelado',
  dt_cancelamento: 'dt_cancelamento',
  dt_cliente: 'dt_cliente',
  dt_criacao: 'dt_criacao',
  dt_atualizacao: 'dt_atualizacao',
  motoristasId: 'motoristasId',
  proprietariosId: 'proprietariosId',
  veiculosId: 'veiculosId'
});

exports.Prisma.VwMotoristasScalarFieldEnum = makeEnum({
  id: 'id',
  cnpj: 'cnpj',
  razaosocial: 'razaosocial',
  nomefantasia: 'nomefantasia',
  nome_mot: 'nome_mot',
  cpf_mot: 'cpf_mot',
  status_motorista: 'status_motorista'
});

exports.Prisma.VwProprietariosScalarFieldEnum = makeEnum({
  id: 'id',
  cnpj: 'cnpj',
  razaosocial: 'razaosocial',
  nomefantasia: 'nomefantasia',
  nome_prop: 'nome_prop',
  cpf_cnpj_prop: 'cpf_cnpj_prop',
  status_proprietario: 'status_proprietario'
});

exports.Prisma.VwVeiculosScalarFieldEnum = makeEnum({
  id: 'id',
  cnpj: 'cnpj',
  razaosocial: 'razaosocial',
  nomefantasia: 'nomefantasia',
  placa: 'placa',
  status_veiculo: 'status_veiculo'
});

exports.Prisma.VwViagensScalarFieldEnum = makeEnum({
  id: 'id',
  dt_viagem: 'dt_viagem',
  mercadoria: 'mercadoria',
  cidade_origem: 'cidade_origem',
  cidade_destino: 'cidade_destino',
  carreta1: 'carreta1',
  carreta2: 'carreta2',
  carreta3: 'carreta3',
  carreta4: 'carreta4',
  idmotorista: 'idmotorista',
  nome_mot: 'nome_mot',
  cpf_mot: 'cpf_mot',
  idveiculo: 'idveiculo',
  placa: 'placa',
  idproprietario: 'idproprietario',
  nome_prop: 'nome_prop',
  cpf_cnpj_prop: 'cpf_cnpj_prop',
  cnpj: 'cnpj',
  razaosocial: 'razaosocial',
  nomefantasia: 'nomefantasia',
  status_motorista: 'status_motorista'
});
exports.enum_status_motorista = makeEnum({
  Ativo: 'Ativo',
  Vencido: 'Vencido',
  Bloqueado: 'Bloqueado'
});

exports.enum_status_proprietario = makeEnum({
  Ativo: 'Ativo',
  Vencido: 'Vencido',
  Bloqueado: 'Bloqueado'
});

exports.enum_status_veiculo = makeEnum({
  Ativo: 'Ativo',
  Vencido: 'Vencido',
  Bloqueado: 'Bloqueado'
});

exports.enum_viagem = makeEnum({
  N: 'N',
  S: 'S'
});

exports.Prisma.ModelName = makeEnum({
  clientes: 'clientes',
  contatos_motoristas: 'contatos_motoristas',
  motoristas: 'motoristas',
  proprietarios: 'proprietarios',
  status_motoristas: 'status_motoristas',
  status_proprietarios: 'status_proprietarios',
  status_veiculos: 'status_veiculos',
  veiculos: 'veiculos',
  viagens: 'viagens',
  VwVeiculos: 'VwVeiculos',
  VwViagens: 'VwViagens',
  VwMotoristas: 'VwMotoristas',
  VwProprietarios: 'VwProprietarios'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
