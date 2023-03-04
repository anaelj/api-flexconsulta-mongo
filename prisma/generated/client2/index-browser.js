
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

exports.Prisma.MotoristasScalarFieldEnum = makeEnum({
  idmongo: 'idmongo',
  id: 'id',
  cnpj: 'cnpj',
  razaosocial: 'razaosocial',
  nomefantasia: 'nomefantasia',
  nome_mot: 'nome_mot',
  cpf_mot: 'cpf_mot',
  status_motorista: 'status_motorista'
});

exports.Prisma.ProprietariosScalarFieldEnum = makeEnum({
  idmongo: 'idmongo',
  id: 'id',
  cnpj: 'cnpj',
  razaosocial: 'razaosocial',
  nomefantasia: 'nomefantasia',
  nome_prop: 'nome_prop',
  cpf_cnpj_prop: 'cpf_cnpj_prop',
  status_proprietario: 'status_proprietario'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.VeiculosScalarFieldEnum = makeEnum({
  idmongo: 'idmongo',
  id: 'id',
  cnpj: 'cnpj',
  razaosocial: 'razaosocial',
  nomefantasia: 'nomefantasia',
  placa: 'placa',
  status_veiculo: 'status_veiculo'
});

exports.Prisma.ViagensScalarFieldEnum = makeEnum({
  idmongo: 'idmongo',
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

exports.Prisma.ModelName = makeEnum({
  veiculos: 'veiculos',
  viagens: 'viagens',
  motoristas: 'motoristas',
  proprietarios: 'proprietarios'
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
