
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
    "prisma/generated/client2",
    "generated/client2",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

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

const dmmfString = "{\"datamodel\":{\"enums\":[{\"name\":\"enum_status_motorista\",\"values\":[{\"name\":\"Ativo\",\"dbName\":\"0\"},{\"name\":\"Vencido\",\"dbName\":\"1\"},{\"name\":\"Bloqueado\",\"dbName\":\"2\"}],\"dbName\":null},{\"name\":\"enum_status_proprietario\",\"values\":[{\"name\":\"Ativo\",\"dbName\":\"0\"},{\"name\":\"Vencido\",\"dbName\":\"1\"},{\"name\":\"Bloqueado\",\"dbName\":\"2\"}],\"dbName\":null},{\"name\":\"enum_status_veiculo\",\"values\":[{\"name\":\"Ativo\",\"dbName\":\"0\"},{\"name\":\"Vencido\",\"dbName\":\"1\"},{\"name\":\"Bloqueado\",\"dbName\":\"2\"}],\"dbName\":null},{\"name\":\"enum_viagem\",\"values\":[{\"name\":\"N\",\"dbName\":null},{\"name\":\"S\",\"dbName\":null}],\"dbName\":null}],\"models\":[{\"name\":\"veiculos\",\"dbName\":null,\"fields\":[{\"name\":\"idmongo\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"razaosocial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomefantasia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"placa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_veiculo\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"enum_status_veiculo\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"viagens\",\"dbName\":null,\"fields\":[{\"name\":\"idmongo\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dt_viagem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mercadoria\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cidade_origem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cidade_destino\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carreta1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carreta2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carreta3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carreta4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idmotorista\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_mot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cpf_mot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idveiculo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"placa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idproprietario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_prop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cpf_cnpj_prop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"razaosocial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomefantasia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_motorista\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"enum_status_motorista\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"motoristas\",\"dbName\":null,\"fields\":[{\"name\":\"idmongo\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"razaosocial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomefantasia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_mot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cpf_mot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_motorista\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"enum_status_motorista\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"cpf_mot\"]],\"uniqueIndexes\":[{\"name\":\"uq_motorista\",\"fields\":[\"cpf_mot\"]}],\"isGenerated\":false},{\"name\":\"proprietarios\",\"dbName\":null,\"fields\":[{\"name\":\"idmongo\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"razaosocial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomefantasia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_prop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cpf_cnpj_prop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_proprietario\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"enum_status_proprietario\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"veiculos\",\"plural\":\"veiculos\",\"findUnique\":\"findUniqueveiculos\",\"findUniqueOrThrow\":\"findUniqueveiculosOrThrow\",\"findFirst\":\"findFirstveiculos\",\"findFirstOrThrow\":\"findFirstveiculosOrThrow\",\"findMany\":\"findManyveiculos\",\"create\":\"createOneveiculos\",\"createMany\":\"createManyveiculos\",\"delete\":\"deleteOneveiculos\",\"update\":\"updateOneveiculos\",\"deleteMany\":\"deleteManyveiculos\",\"updateMany\":\"updateManyveiculos\",\"upsert\":\"upsertOneveiculos\",\"aggregate\":\"aggregateveiculos\",\"groupBy\":\"groupByveiculos\",\"findRaw\":\"findveiculosRaw\",\"aggregateRaw\":\"aggregateveiculosRaw\"},{\"model\":\"viagens\",\"plural\":\"viagens\",\"findUnique\":\"findUniqueviagens\",\"findUniqueOrThrow\":\"findUniqueviagensOrThrow\",\"findFirst\":\"findFirstviagens\",\"findFirstOrThrow\":\"findFirstviagensOrThrow\",\"findMany\":\"findManyviagens\",\"create\":\"createOneviagens\",\"createMany\":\"createManyviagens\",\"delete\":\"deleteOneviagens\",\"update\":\"updateOneviagens\",\"deleteMany\":\"deleteManyviagens\",\"updateMany\":\"updateManyviagens\",\"upsert\":\"upsertOneviagens\",\"aggregate\":\"aggregateviagens\",\"groupBy\":\"groupByviagens\",\"findRaw\":\"findviagensRaw\",\"aggregateRaw\":\"aggregateviagensRaw\"},{\"model\":\"motoristas\",\"plural\":\"motoristas\",\"findUnique\":\"findUniquemotoristas\",\"findUniqueOrThrow\":\"findUniquemotoristasOrThrow\",\"findFirst\":\"findFirstmotoristas\",\"findFirstOrThrow\":\"findFirstmotoristasOrThrow\",\"findMany\":\"findManymotoristas\",\"create\":\"createOnemotoristas\",\"createMany\":\"createManymotoristas\",\"delete\":\"deleteOnemotoristas\",\"update\":\"updateOnemotoristas\",\"deleteMany\":\"deleteManymotoristas\",\"updateMany\":\"updateManymotoristas\",\"upsert\":\"upsertOnemotoristas\",\"aggregate\":\"aggregatemotoristas\",\"groupBy\":\"groupBymotoristas\",\"findRaw\":\"findmotoristasRaw\",\"aggregateRaw\":\"aggregatemotoristasRaw\"},{\"model\":\"proprietarios\",\"plural\":\"proprietarios\",\"findUnique\":\"findUniqueproprietarios\",\"findUniqueOrThrow\":\"findUniqueproprietariosOrThrow\",\"findFirst\":\"findFirstproprietarios\",\"findFirstOrThrow\":\"findFirstproprietariosOrThrow\",\"findMany\":\"findManyproprietarios\",\"create\":\"createOneproprietarios\",\"createMany\":\"createManyproprietarios\",\"delete\":\"deleteOneproprietarios\",\"update\":\"updateOneproprietarios\",\"deleteMany\":\"deleteManyproprietarios\",\"updateMany\":\"updateManyproprietarios\",\"upsert\":\"upsertOneproprietarios\",\"aggregate\":\"aggregateproprietarios\",\"groupBy\":\"groupByproprietarios\",\"findRaw\":\"findproprietariosRaw\",\"aggregateRaw\":\"aggregateproprietariosRaw\"}],\"otherOperations\":{\"read\":[],\"write\":[\"runCommandRaw\"]}}}"
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
      "value": "/Users/anael.medeiros/Documents/Anael/Novel/api-flexconsulta-mongo/prisma/generated/client2",
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
  "activeProvider": "mongodb",
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
path.join(process.cwd(), "prisma/generated/client2/libquery_engine-darwin-arm64.dylib.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client2/schema.prisma")
