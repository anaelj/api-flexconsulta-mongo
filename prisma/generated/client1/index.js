
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} = require('./runtime/index')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
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


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "prisma/generated/client1",
    "generated/client1",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

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

exports.Prisma.LogApiRequestValidacaoCNHScalarFieldEnum = makeEnum({
  id: 'id',
  data_validacao: 'data_validacao',
  data_resposta: 'data_resposta',
  cpf_motorista: 'cpf_motorista',
  nome_motorista: 'nome_motorista',
  email_usuario: 'email_usuario',
  status_requisicao: 'status_requisicao',
  link_photo: 'link_photo',
  formulario_request: 'formulario_request',
  resposta_request: 'resposta_request',
  token_request: 'token_request',
  tipo_request: 'tipo_request',
  nome_cliente: 'nome_cliente',
  cnpj_cliente: 'cnpj_cliente',
  dt_criacao: 'dt_criacao',
  dt_atualizacao: 'dt_atualizacao'
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

exports.Prisma.Reg_temporarios_motoristasScalarFieldEnum = makeEnum({
  id: 'id',
  cpf_mot: 'cpf_mot',
  idcliente: 'idcliente',
  tipo_erro: 'tipo_erro',
  lote_arquivo: 'lote_arquivo',
  message: 'message',
  dados: 'dados',
  dt_criacao: 'dt_criacao',
  dt_atualizacao: 'dt_atualizacao',
  clientesId: 'clientesId'
});

exports.Prisma.Reg_temporarios_proprietariosScalarFieldEnum = makeEnum({
  id: 'id',
  cpf_cnpj_prop: 'cpf_cnpj_prop',
  idcliente: 'idcliente',
  lote_arquivo: 'lote_arquivo',
  tipo_erro: 'tipo_erro',
  message: 'message',
  dados: 'dados',
  dt_criacao: 'dt_criacao',
  dt_atualizacao: 'dt_atualizacao',
  clientesId: 'clientesId'
});

exports.Prisma.Reg_temporarios_veiculosScalarFieldEnum = makeEnum({
  id: 'id',
  placa: 'placa',
  idcliente: 'idcliente',
  tipo_erro: 'tipo_erro',
  lote_arquivo: 'lote_arquivo',
  message: 'message',
  dados: 'dados',
  dt_criacao: 'dt_criacao',
  dt_atualizacao: 'dt_atualizacao',
  clientesId: 'clientesId'
});

exports.Prisma.Reg_temporarios_viagensScalarFieldEnum = makeEnum({
  id: 'id',
  numero_cliente: 'numero_cliente',
  idcliente: 'idcliente',
  tipo_erro: 'tipo_erro',
  lote_arquivo: 'lote_arquivo',
  message: 'message',
  dados: 'dados',
  dt_criacao: 'dt_criacao',
  dt_atualizacao: 'dt_atualizacao',
  clientesId: 'clientesId'
});

exports.Prisma.SequelizeMetaScalarFieldEnum = makeEnum({
  name: 'name'
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
  SequelizeMeta: 'SequelizeMeta',
  clientes: 'clientes',
  contatos_motoristas: 'contatos_motoristas',
  motoristas: 'motoristas',
  proprietarios: 'proprietarios',
  reg_temporarios_motoristas: 'reg_temporarios_motoristas',
  reg_temporarios_proprietarios: 'reg_temporarios_proprietarios',
  reg_temporarios_veiculos: 'reg_temporarios_veiculos',
  reg_temporarios_viagens: 'reg_temporarios_viagens',
  status_motoristas: 'status_motoristas',
  status_proprietarios: 'status_proprietarios',
  status_veiculos: 'status_veiculos',
  veiculos: 'veiculos',
  viagens: 'viagens',
  VwVeiculos: 'VwVeiculos',
  logApiRequestValidacaoCNH: 'logApiRequestValidacaoCNH',
  VwViagens: 'VwViagens',
  VwMotoristas: 'VwMotoristas',
  VwProprietarios: 'VwProprietarios'
});

const dmmfString = "{\"datamodel\":{\"enums\":[{\"name\":\"enum_status_motorista\",\"values\":[{\"name\":\"Ativo\",\"dbName\":\"0\"},{\"name\":\"Vencido\",\"dbName\":\"1\"},{\"name\":\"Bloqueado\",\"dbName\":\"2\"}],\"dbName\":null},{\"name\":\"enum_status_proprietario\",\"values\":[{\"name\":\"Ativo\",\"dbName\":\"0\"},{\"name\":\"Vencido\",\"dbName\":\"1\"},{\"name\":\"Bloqueado\",\"dbName\":\"2\"}],\"dbName\":null},{\"name\":\"enum_status_veiculo\",\"values\":[{\"name\":\"Ativo\",\"dbName\":\"0\"},{\"name\":\"Vencido\",\"dbName\":\"1\"},{\"name\":\"Bloqueado\",\"dbName\":\"2\"}],\"dbName\":null},{\"name\":\"enum_viagem\",\"values\":[{\"name\":\"N\",\"dbName\":null},{\"name\":\"S\",\"dbName\":null}],\"dbName\":null}],\"models\":[{\"name\":\"SequelizeMeta\",\"dbName\":null,\"fields\":[{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"clientes\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"razaosocial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomefantasia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"photo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ativo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contatos_motoristas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"contatos_motoristas\",\"relationName\":\"clientesTocontatos_motoristas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reg_temporarios_motoristas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reg_temporarios_motoristas\",\"relationName\":\"clientesToreg_temporarios_motoristas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reg_temporarios_proprietarios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reg_temporarios_proprietarios\",\"relationName\":\"clientesToreg_temporarios_proprietarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reg_temporarios_veiculos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reg_temporarios_veiculos\",\"relationName\":\"clientesToreg_temporarios_veiculos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reg_temporarios_viagens\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reg_temporarios_viagens\",\"relationName\":\"clientesToreg_temporarios_viagens\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_motoristas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"status_motoristas\",\"relationName\":\"clientesTostatus_motoristas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_proprietarios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"status_proprietarios\",\"relationName\":\"clientesTostatus_proprietarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_veiculos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"status_veiculos\",\"relationName\":\"clientesTostatus_veiculos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"viagens\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"viagens\",\"relationName\":\"clientesToviagens\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"contatos_motoristas\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idmotorista\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idcliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contato\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_contato\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientes\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"clientes\",\"relationName\":\"clientesTocontatos_motoristas\",\"relationFromFields\":[\"clientesId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientesId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motoristas\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"motoristas\",\"relationName\":\"contatos_motoristasTomotoristas\",\"relationFromFields\":[\"motoristasId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motoristasId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"motoristas\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_mot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cpf_mot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnh_mot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_pai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_mae\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoria_cnh_mot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cod_situacao_cnh_mot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_validade_cnh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_emissao_cnh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_primeira_cnh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_nascimento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"foto_motorista\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ativo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cadastro_verificado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contatos_motoristas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"contatos_motoristas\",\"relationName\":\"contatos_motoristasTomotoristas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_motoristas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"status_motoristas\",\"relationName\":\"motoristasTostatus_motoristas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"viagens\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"viagens\",\"relationName\":\"motoristasToviagens\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"proprietarios\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_prop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"antt_prop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_antt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_validade_antt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cpf_cnpj_prop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ativo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cadastro_verificado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_proprietarios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"status_proprietarios\",\"relationName\":\"proprietariosTostatus_proprietarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"viagens\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"viagens\",\"relationName\":\"proprietariosToviagens\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"reg_temporarios_motoristas\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cpf_mot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idcliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_erro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lote_arquivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientes\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"clientes\",\"relationName\":\"clientesToreg_temporarios_motoristas\",\"relationFromFields\":[\"clientesId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientesId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"reg_temporarios_proprietarios\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cpf_cnpj_prop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idcliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lote_arquivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_erro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientes\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"clientes\",\"relationName\":\"clientesToreg_temporarios_proprietarios\",\"relationFromFields\":[\"clientesId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientesId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"reg_temporarios_veiculos\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"placa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idcliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_erro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lote_arquivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientes\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"clientes\",\"relationName\":\"clientesToreg_temporarios_veiculos\",\"relationFromFields\":[\"clientesId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientesId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"reg_temporarios_viagens\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idcliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_erro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lote_arquivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientes\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"clientes\",\"relationName\":\"clientesToreg_temporarios_viagens\",\"relationFromFields\":[\"clientesId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientesId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"status_motoristas\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idmotorista\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idcliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lote_arquivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_motorista\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"enum_status_motorista\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientes\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"clientes\",\"relationName\":\"clientesTostatus_motoristas\",\"relationFromFields\":[\"clientesId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientesId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motoristas\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"motoristas\",\"relationName\":\"motoristasTostatus_motoristas\",\"relationFromFields\":[\"motoristasId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motoristasId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"idmotorista\",\"idcliente\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"idmotorista\",\"idcliente\"]}],\"isGenerated\":false},{\"name\":\"status_proprietarios\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idproprietario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idcliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lote_arquivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_proprietario\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"enum_status_proprietario\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientes\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"clientes\",\"relationName\":\"clientesTostatus_proprietarios\",\"relationFromFields\":[\"clientesId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientesId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"proprietarios\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"proprietarios\",\"relationName\":\"proprietariosTostatus_proprietarios\",\"relationFromFields\":[\"proprietariosId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"proprietariosId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"idproprietario\",\"idcliente\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"idproprietario\",\"idcliente\"]}],\"isGenerated\":false},{\"name\":\"status_veiculos\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idveiculo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idcliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lote_arquivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_veiculo\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"enum_status_veiculo\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientes\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"clientes\",\"relationName\":\"clientesTostatus_veiculos\",\"relationFromFields\":[\"clientesId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientesId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"veiculos\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"veiculos\",\"relationName\":\"status_veiculosToveiculos\",\"relationFromFields\":[\"veiculosId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"veiculosId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"idveiculo\",\"idcliente\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"idveiculo\",\"idcliente\"]}],\"isGenerated\":false},{\"name\":\"veiculos\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"placa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"renavam\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ativo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cadastro_verificado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_veiculos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"status_veiculos\",\"relationName\":\"status_veiculosToveiculos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"viagens\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"viagens\",\"relationName\":\"veiculosToviagens\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"viagens\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idcliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_viagem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mercadoria\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cidade_origem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cidade_destino\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idmotorista\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idproprietario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idveiculo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carreta1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carreta2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carreta3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carreta4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"viagem_cancelado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"enum_viagem\",\"default\":\"N\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_cancelamento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientes\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"clientes\",\"relationName\":\"clientesToviagens\",\"relationFromFields\":[\"idcliente\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motoristas\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"motoristas\",\"relationName\":\"motoristasToviagens\",\"relationFromFields\":[\"motoristasId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motoristasId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"proprietarios\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"proprietarios\",\"relationName\":\"proprietariosToviagens\",\"relationFromFields\":[\"proprietariosId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"proprietariosId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"veiculos\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"veiculos\",\"relationName\":\"veiculosToviagens\",\"relationFromFields\":[\"veiculosId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"veiculosId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"numero_cliente\",\"idcliente\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"numero_cliente\",\"idcliente\"]}],\"isGenerated\":false},{\"name\":\"VwVeiculos\",\"dbName\":\"vwstatusveiculos\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"razaosocial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomefantasia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"placa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_veiculo\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"enum_status_veiculo\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"logApiRequestValidacaoCNH\",\"dbName\":\"logs_validacao_cnh_acesso_externo\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_validacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_resposta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cpf_motorista\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_motorista\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_requisicao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link_photo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"formulario_request\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resposta_request\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token_request\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_request\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"VwViagens\",\"dbName\":\"vwapiviagens\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_viagem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mercadoria\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cidade_origem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cidade_destino\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carreta1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carreta2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carreta3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carreta4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idmotorista\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_mot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cpf_mot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idveiculo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"placa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idproprietario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_prop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cpf_cnpj_prop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"razaosocial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomefantasia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_motorista\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"enum_status_motorista\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"VwMotoristas\",\"dbName\":\"vwstatusmotoristas\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"razaosocial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomefantasia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_mot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cpf_mot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_motorista\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"enum_status_motorista\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"VwProprietarios\",\"dbName\":\"vwstatusproprietarios\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"razaosocial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomefantasia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_prop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cpf_cnpj_prop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_proprietario\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"enum_status_proprietario\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"SequelizeMeta\",\"plural\":\"sequelizeMetas\",\"findUnique\":\"findUniqueSequelizeMeta\",\"findUniqueOrThrow\":\"findUniqueSequelizeMetaOrThrow\",\"findFirst\":\"findFirstSequelizeMeta\",\"findFirstOrThrow\":\"findFirstSequelizeMetaOrThrow\",\"findMany\":\"findManySequelizeMeta\",\"create\":\"createOneSequelizeMeta\",\"createMany\":\"createManySequelizeMeta\",\"delete\":\"deleteOneSequelizeMeta\",\"update\":\"updateOneSequelizeMeta\",\"deleteMany\":\"deleteManySequelizeMeta\",\"updateMany\":\"updateManySequelizeMeta\",\"upsert\":\"upsertOneSequelizeMeta\",\"aggregate\":\"aggregateSequelizeMeta\",\"groupBy\":\"groupBySequelizeMeta\"},{\"model\":\"clientes\",\"plural\":\"clientes\",\"findUnique\":\"findUniqueclientes\",\"findUniqueOrThrow\":\"findUniqueclientesOrThrow\",\"findFirst\":\"findFirstclientes\",\"findFirstOrThrow\":\"findFirstclientesOrThrow\",\"findMany\":\"findManyclientes\",\"create\":\"createOneclientes\",\"createMany\":\"createManyclientes\",\"delete\":\"deleteOneclientes\",\"update\":\"updateOneclientes\",\"deleteMany\":\"deleteManyclientes\",\"updateMany\":\"updateManyclientes\",\"upsert\":\"upsertOneclientes\",\"aggregate\":\"aggregateclientes\",\"groupBy\":\"groupByclientes\"},{\"model\":\"contatos_motoristas\",\"plural\":\"contatos_motoristas\",\"findUnique\":\"findUniquecontatos_motoristas\",\"findUniqueOrThrow\":\"findUniquecontatos_motoristasOrThrow\",\"findFirst\":\"findFirstcontatos_motoristas\",\"findFirstOrThrow\":\"findFirstcontatos_motoristasOrThrow\",\"findMany\":\"findManycontatos_motoristas\",\"create\":\"createOnecontatos_motoristas\",\"createMany\":\"createManycontatos_motoristas\",\"delete\":\"deleteOnecontatos_motoristas\",\"update\":\"updateOnecontatos_motoristas\",\"deleteMany\":\"deleteManycontatos_motoristas\",\"updateMany\":\"updateManycontatos_motoristas\",\"upsert\":\"upsertOnecontatos_motoristas\",\"aggregate\":\"aggregatecontatos_motoristas\",\"groupBy\":\"groupBycontatos_motoristas\"},{\"model\":\"motoristas\",\"plural\":\"motoristas\",\"findUnique\":\"findUniquemotoristas\",\"findUniqueOrThrow\":\"findUniquemotoristasOrThrow\",\"findFirst\":\"findFirstmotoristas\",\"findFirstOrThrow\":\"findFirstmotoristasOrThrow\",\"findMany\":\"findManymotoristas\",\"create\":\"createOnemotoristas\",\"createMany\":\"createManymotoristas\",\"delete\":\"deleteOnemotoristas\",\"update\":\"updateOnemotoristas\",\"deleteMany\":\"deleteManymotoristas\",\"updateMany\":\"updateManymotoristas\",\"upsert\":\"upsertOnemotoristas\",\"aggregate\":\"aggregatemotoristas\",\"groupBy\":\"groupBymotoristas\"},{\"model\":\"proprietarios\",\"plural\":\"proprietarios\",\"findUnique\":\"findUniqueproprietarios\",\"findUniqueOrThrow\":\"findUniqueproprietariosOrThrow\",\"findFirst\":\"findFirstproprietarios\",\"findFirstOrThrow\":\"findFirstproprietariosOrThrow\",\"findMany\":\"findManyproprietarios\",\"create\":\"createOneproprietarios\",\"createMany\":\"createManyproprietarios\",\"delete\":\"deleteOneproprietarios\",\"update\":\"updateOneproprietarios\",\"deleteMany\":\"deleteManyproprietarios\",\"updateMany\":\"updateManyproprietarios\",\"upsert\":\"upsertOneproprietarios\",\"aggregate\":\"aggregateproprietarios\",\"groupBy\":\"groupByproprietarios\"},{\"model\":\"reg_temporarios_motoristas\",\"plural\":\"reg_temporarios_motoristas\",\"findUnique\":\"findUniquereg_temporarios_motoristas\",\"findUniqueOrThrow\":\"findUniquereg_temporarios_motoristasOrThrow\",\"findFirst\":\"findFirstreg_temporarios_motoristas\",\"findFirstOrThrow\":\"findFirstreg_temporarios_motoristasOrThrow\",\"findMany\":\"findManyreg_temporarios_motoristas\",\"create\":\"createOnereg_temporarios_motoristas\",\"createMany\":\"createManyreg_temporarios_motoristas\",\"delete\":\"deleteOnereg_temporarios_motoristas\",\"update\":\"updateOnereg_temporarios_motoristas\",\"deleteMany\":\"deleteManyreg_temporarios_motoristas\",\"updateMany\":\"updateManyreg_temporarios_motoristas\",\"upsert\":\"upsertOnereg_temporarios_motoristas\",\"aggregate\":\"aggregatereg_temporarios_motoristas\",\"groupBy\":\"groupByreg_temporarios_motoristas\"},{\"model\":\"reg_temporarios_proprietarios\",\"plural\":\"reg_temporarios_proprietarios\",\"findUnique\":\"findUniquereg_temporarios_proprietarios\",\"findUniqueOrThrow\":\"findUniquereg_temporarios_proprietariosOrThrow\",\"findFirst\":\"findFirstreg_temporarios_proprietarios\",\"findFirstOrThrow\":\"findFirstreg_temporarios_proprietariosOrThrow\",\"findMany\":\"findManyreg_temporarios_proprietarios\",\"create\":\"createOnereg_temporarios_proprietarios\",\"createMany\":\"createManyreg_temporarios_proprietarios\",\"delete\":\"deleteOnereg_temporarios_proprietarios\",\"update\":\"updateOnereg_temporarios_proprietarios\",\"deleteMany\":\"deleteManyreg_temporarios_proprietarios\",\"updateMany\":\"updateManyreg_temporarios_proprietarios\",\"upsert\":\"upsertOnereg_temporarios_proprietarios\",\"aggregate\":\"aggregatereg_temporarios_proprietarios\",\"groupBy\":\"groupByreg_temporarios_proprietarios\"},{\"model\":\"reg_temporarios_veiculos\",\"plural\":\"reg_temporarios_veiculos\",\"findUnique\":\"findUniquereg_temporarios_veiculos\",\"findUniqueOrThrow\":\"findUniquereg_temporarios_veiculosOrThrow\",\"findFirst\":\"findFirstreg_temporarios_veiculos\",\"findFirstOrThrow\":\"findFirstreg_temporarios_veiculosOrThrow\",\"findMany\":\"findManyreg_temporarios_veiculos\",\"create\":\"createOnereg_temporarios_veiculos\",\"createMany\":\"createManyreg_temporarios_veiculos\",\"delete\":\"deleteOnereg_temporarios_veiculos\",\"update\":\"updateOnereg_temporarios_veiculos\",\"deleteMany\":\"deleteManyreg_temporarios_veiculos\",\"updateMany\":\"updateManyreg_temporarios_veiculos\",\"upsert\":\"upsertOnereg_temporarios_veiculos\",\"aggregate\":\"aggregatereg_temporarios_veiculos\",\"groupBy\":\"groupByreg_temporarios_veiculos\"},{\"model\":\"reg_temporarios_viagens\",\"plural\":\"reg_temporarios_viagens\",\"findUnique\":\"findUniquereg_temporarios_viagens\",\"findUniqueOrThrow\":\"findUniquereg_temporarios_viagensOrThrow\",\"findFirst\":\"findFirstreg_temporarios_viagens\",\"findFirstOrThrow\":\"findFirstreg_temporarios_viagensOrThrow\",\"findMany\":\"findManyreg_temporarios_viagens\",\"create\":\"createOnereg_temporarios_viagens\",\"createMany\":\"createManyreg_temporarios_viagens\",\"delete\":\"deleteOnereg_temporarios_viagens\",\"update\":\"updateOnereg_temporarios_viagens\",\"deleteMany\":\"deleteManyreg_temporarios_viagens\",\"updateMany\":\"updateManyreg_temporarios_viagens\",\"upsert\":\"upsertOnereg_temporarios_viagens\",\"aggregate\":\"aggregatereg_temporarios_viagens\",\"groupBy\":\"groupByreg_temporarios_viagens\"},{\"model\":\"status_motoristas\",\"plural\":\"status_motoristas\",\"findUnique\":\"findUniquestatus_motoristas\",\"findUniqueOrThrow\":\"findUniquestatus_motoristasOrThrow\",\"findFirst\":\"findFirststatus_motoristas\",\"findFirstOrThrow\":\"findFirststatus_motoristasOrThrow\",\"findMany\":\"findManystatus_motoristas\",\"create\":\"createOnestatus_motoristas\",\"createMany\":\"createManystatus_motoristas\",\"delete\":\"deleteOnestatus_motoristas\",\"update\":\"updateOnestatus_motoristas\",\"deleteMany\":\"deleteManystatus_motoristas\",\"updateMany\":\"updateManystatus_motoristas\",\"upsert\":\"upsertOnestatus_motoristas\",\"aggregate\":\"aggregatestatus_motoristas\",\"groupBy\":\"groupBystatus_motoristas\"},{\"model\":\"status_proprietarios\",\"plural\":\"status_proprietarios\",\"findUnique\":\"findUniquestatus_proprietarios\",\"findUniqueOrThrow\":\"findUniquestatus_proprietariosOrThrow\",\"findFirst\":\"findFirststatus_proprietarios\",\"findFirstOrThrow\":\"findFirststatus_proprietariosOrThrow\",\"findMany\":\"findManystatus_proprietarios\",\"create\":\"createOnestatus_proprietarios\",\"createMany\":\"createManystatus_proprietarios\",\"delete\":\"deleteOnestatus_proprietarios\",\"update\":\"updateOnestatus_proprietarios\",\"deleteMany\":\"deleteManystatus_proprietarios\",\"updateMany\":\"updateManystatus_proprietarios\",\"upsert\":\"upsertOnestatus_proprietarios\",\"aggregate\":\"aggregatestatus_proprietarios\",\"groupBy\":\"groupBystatus_proprietarios\"},{\"model\":\"status_veiculos\",\"plural\":\"status_veiculos\",\"findUnique\":\"findUniquestatus_veiculos\",\"findUniqueOrThrow\":\"findUniquestatus_veiculosOrThrow\",\"findFirst\":\"findFirststatus_veiculos\",\"findFirstOrThrow\":\"findFirststatus_veiculosOrThrow\",\"findMany\":\"findManystatus_veiculos\",\"create\":\"createOnestatus_veiculos\",\"createMany\":\"createManystatus_veiculos\",\"delete\":\"deleteOnestatus_veiculos\",\"update\":\"updateOnestatus_veiculos\",\"deleteMany\":\"deleteManystatus_veiculos\",\"updateMany\":\"updateManystatus_veiculos\",\"upsert\":\"upsertOnestatus_veiculos\",\"aggregate\":\"aggregatestatus_veiculos\",\"groupBy\":\"groupBystatus_veiculos\"},{\"model\":\"veiculos\",\"plural\":\"veiculos\",\"findUnique\":\"findUniqueveiculos\",\"findUniqueOrThrow\":\"findUniqueveiculosOrThrow\",\"findFirst\":\"findFirstveiculos\",\"findFirstOrThrow\":\"findFirstveiculosOrThrow\",\"findMany\":\"findManyveiculos\",\"create\":\"createOneveiculos\",\"createMany\":\"createManyveiculos\",\"delete\":\"deleteOneveiculos\",\"update\":\"updateOneveiculos\",\"deleteMany\":\"deleteManyveiculos\",\"updateMany\":\"updateManyveiculos\",\"upsert\":\"upsertOneveiculos\",\"aggregate\":\"aggregateveiculos\",\"groupBy\":\"groupByveiculos\"},{\"model\":\"viagens\",\"plural\":\"viagens\",\"findUnique\":\"findUniqueviagens\",\"findUniqueOrThrow\":\"findUniqueviagensOrThrow\",\"findFirst\":\"findFirstviagens\",\"findFirstOrThrow\":\"findFirstviagensOrThrow\",\"findMany\":\"findManyviagens\",\"create\":\"createOneviagens\",\"createMany\":\"createManyviagens\",\"delete\":\"deleteOneviagens\",\"update\":\"updateOneviagens\",\"deleteMany\":\"deleteManyviagens\",\"updateMany\":\"updateManyviagens\",\"upsert\":\"upsertOneviagens\",\"aggregate\":\"aggregateviagens\",\"groupBy\":\"groupByviagens\"},{\"model\":\"VwVeiculos\",\"plural\":\"vwVeiculos\",\"findUnique\":\"findUniqueVwVeiculos\",\"findUniqueOrThrow\":\"findUniqueVwVeiculosOrThrow\",\"findFirst\":\"findFirstVwVeiculos\",\"findFirstOrThrow\":\"findFirstVwVeiculosOrThrow\",\"findMany\":\"findManyVwVeiculos\",\"create\":\"createOneVwVeiculos\",\"createMany\":\"createManyVwVeiculos\",\"delete\":\"deleteOneVwVeiculos\",\"update\":\"updateOneVwVeiculos\",\"deleteMany\":\"deleteManyVwVeiculos\",\"updateMany\":\"updateManyVwVeiculos\",\"upsert\":\"upsertOneVwVeiculos\",\"aggregate\":\"aggregateVwVeiculos\",\"groupBy\":\"groupByVwVeiculos\"},{\"model\":\"logApiRequestValidacaoCNH\",\"plural\":\"logApiRequestValidacaoCNHS\",\"findUnique\":\"findUniquelogApiRequestValidacaoCNH\",\"findUniqueOrThrow\":\"findUniquelogApiRequestValidacaoCNHOrThrow\",\"findFirst\":\"findFirstlogApiRequestValidacaoCNH\",\"findFirstOrThrow\":\"findFirstlogApiRequestValidacaoCNHOrThrow\",\"findMany\":\"findManylogApiRequestValidacaoCNH\",\"create\":\"createOnelogApiRequestValidacaoCNH\",\"createMany\":\"createManylogApiRequestValidacaoCNH\",\"delete\":\"deleteOnelogApiRequestValidacaoCNH\",\"update\":\"updateOnelogApiRequestValidacaoCNH\",\"deleteMany\":\"deleteManylogApiRequestValidacaoCNH\",\"updateMany\":\"updateManylogApiRequestValidacaoCNH\",\"upsert\":\"upsertOnelogApiRequestValidacaoCNH\",\"aggregate\":\"aggregatelogApiRequestValidacaoCNH\",\"groupBy\":\"groupBylogApiRequestValidacaoCNH\"},{\"model\":\"VwViagens\",\"plural\":\"vwViagens\",\"findUnique\":\"findUniqueVwViagens\",\"findUniqueOrThrow\":\"findUniqueVwViagensOrThrow\",\"findFirst\":\"findFirstVwViagens\",\"findFirstOrThrow\":\"findFirstVwViagensOrThrow\",\"findMany\":\"findManyVwViagens\",\"create\":\"createOneVwViagens\",\"createMany\":\"createManyVwViagens\",\"delete\":\"deleteOneVwViagens\",\"update\":\"updateOneVwViagens\",\"deleteMany\":\"deleteManyVwViagens\",\"updateMany\":\"updateManyVwViagens\",\"upsert\":\"upsertOneVwViagens\",\"aggregate\":\"aggregateVwViagens\",\"groupBy\":\"groupByVwViagens\"},{\"model\":\"VwMotoristas\",\"plural\":\"vwMotoristas\",\"findUnique\":\"findUniqueVwMotoristas\",\"findUniqueOrThrow\":\"findUniqueVwMotoristasOrThrow\",\"findFirst\":\"findFirstVwMotoristas\",\"findFirstOrThrow\":\"findFirstVwMotoristasOrThrow\",\"findMany\":\"findManyVwMotoristas\",\"create\":\"createOneVwMotoristas\",\"createMany\":\"createManyVwMotoristas\",\"delete\":\"deleteOneVwMotoristas\",\"update\":\"updateOneVwMotoristas\",\"deleteMany\":\"deleteManyVwMotoristas\",\"updateMany\":\"updateManyVwMotoristas\",\"upsert\":\"upsertOneVwMotoristas\",\"aggregate\":\"aggregateVwMotoristas\",\"groupBy\":\"groupByVwMotoristas\"},{\"model\":\"VwProprietarios\",\"plural\":\"vwProprietarios\",\"findUnique\":\"findUniqueVwProprietarios\",\"findUniqueOrThrow\":\"findUniqueVwProprietariosOrThrow\",\"findFirst\":\"findFirstVwProprietarios\",\"findFirstOrThrow\":\"findFirstVwProprietariosOrThrow\",\"findMany\":\"findManyVwProprietarios\",\"create\":\"createOneVwProprietarios\",\"createMany\":\"createManyVwProprietarios\",\"delete\":\"deleteOneVwProprietarios\",\"update\":\"updateOneVwProprietarios\",\"deleteMany\":\"deleteManyVwProprietarios\",\"updateMany\":\"updateManyVwProprietarios\",\"upsert\":\"upsertOneVwProprietarios\",\"aggregate\":\"aggregateVwProprietarios\",\"groupBy\":\"groupByVwProprietarios\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/anael.medeiros/Documents/Anael/Novel/api-flexconsulta-externo/prisma/generated/client1",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "4.9.0",
  "engineVersion": "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "prisma/generated/client1/libquery_engine-darwin-arm64.dylib.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client1/schema.prisma")
