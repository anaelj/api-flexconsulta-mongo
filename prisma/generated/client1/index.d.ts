
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export interface PrismaPromise<A> extends Promise<A> {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model clientes
 * 
 */
export type clientes = {
  id: number
  cnpj: string
  razaosocial: string
  nomefantasia: string
  telefone: string | null
  email: string
  photo: string | null
  ativo: boolean
  dt_criacao: Date
  dt_atualizacao: Date
}

/**
 * Model contatos_motoristas
 * 
 */
export type contatos_motoristas = {
  id: number
  idmotorista: bigint
  idcliente: bigint
  contato: string
  tipo_contato: string
  dt_criacao: Date
  dt_atualizacao: Date
  clientesId: number | null
  motoristasId: number | null
}

/**
 * Model motoristas
 * 
 */
export type motoristas = {
  id: number
  nome_mot: string
  cpf_mot: string
  cnh_mot: string | null
  nome_pai: string | null
  nome_mae: string | null
  categoria_cnh_mot: string | null
  cod_situacao_cnh_mot: string | null
  dt_validade_cnh: Date | null
  dt_emissao_cnh: Date | null
  dt_primeira_cnh: Date | null
  dt_nascimento: Date | null
  foto_motorista: string | null
  ativo: boolean
  cadastro_verificado: boolean
  dt_criacao: Date
  dt_atualizacao: Date
}

/**
 * Model proprietarios
 * 
 */
export type proprietarios = {
  id: number
  nome_prop: string
  antt_prop: string | null
  status_antt: string | null
  dt_validade_antt: Date | null
  cpf_cnpj_prop: string
  ativo: boolean
  cadastro_verificado: boolean
  dt_criacao: Date
  dt_atualizacao: Date
}

/**
 * Model status_motoristas
 * 
 */
export type status_motoristas = {
  id: number
  idmotorista: bigint
  idcliente: bigint
  dt_cliente: Date
  numero_cliente: string | null
  lote_arquivo: string | null
  status_motorista: enum_status_motorista
  dt_criacao: Date
  dt_atualizacao: Date
  clientesId: number | null
  motoristasId: number | null
}

/**
 * Model status_proprietarios
 * 
 */
export type status_proprietarios = {
  id: number
  idproprietario: bigint
  idcliente: bigint
  lote_arquivo: string | null
  dt_cliente: Date
  numero_cliente: string | null
  status_proprietario: enum_status_proprietario
  dt_criacao: Date
  dt_atualizacao: Date
  clientesId: number | null
  proprietariosId: number | null
}

/**
 * Model status_veiculos
 * 
 */
export type status_veiculos = {
  id: number
  idveiculo: bigint
  idcliente: bigint
  lote_arquivo: string | null
  dt_cliente: Date
  numero_cliente: string | null
  status_veiculo: enum_status_veiculo
  dt_criacao: Date
  dt_atualizacao: Date
  clientesId: number | null
  veiculosId: number | null
}

/**
 * Model veiculos
 * 
 */
export type veiculos = {
  id: number
  placa: string
  renavam: string | null
  ativo: boolean
  cadastro_verificado: boolean
  dt_criacao: Date
  dt_atualizacao: Date
}

/**
 * Model viagens
 * 
 */
export type viagens = {
  id: number
  idcliente: number
  numero_cliente: string
  dt_viagem: Date
  mercadoria: string
  cidade_origem: string
  cidade_destino: string
  idmotorista: bigint
  idproprietario: bigint
  idveiculo: bigint
  carreta1: string | null
  carreta2: string | null
  carreta3: string | null
  carreta4: string | null
  viagem_cancelado: enum_viagem
  dt_cancelamento: Date | null
  dt_cliente: Date
  dt_criacao: Date
  dt_atualizacao: Date
  motoristasId: number | null
  proprietariosId: number | null
  veiculosId: number | null
}

/**
 * Model VwVeiculos
 * 
 */
export type VwVeiculos = {
  id: number
  cnpj: string
  razaosocial: string
  nomefantasia: string
  placa: string
  status_veiculo: enum_status_veiculo
}

/**
 * Model VwViagens
 * 
 */
export type VwViagens = {
  id: number
  dt_viagem: Date
  mercadoria: string | null
  cidade_origem: string | null
  cidade_destino: string | null
  carreta1: string | null
  carreta2: string | null
  carreta3: string | null
  carreta4: string | null
  idmotorista: number
  nome_mot: string
  cpf_mot: string
  idveiculo: number
  placa: string
  idproprietario: number
  nome_prop: string
  cpf_cnpj_prop: string
  cnpj: string
  razaosocial: string | null
  nomefantasia: string | null
  status_motorista: enum_status_motorista | null
}

/**
 * Model VwMotoristas
 * 
 */
export type VwMotoristas = {
  id: number
  cnpj: string
  razaosocial: string | null
  nomefantasia: string | null
  nome_mot: string
  cpf_mot: string
  status_motorista: enum_status_motorista
}

/**
 * Model VwProprietarios
 * 
 */
export type VwProprietarios = {
  id: number
  cnpj: string
  razaosocial: string | null
  nomefantasia: string | null
  nome_prop: string
  cpf_cnpj_prop: string
  status_proprietario: enum_status_proprietario
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const enum_status_motorista: {
  Ativo: 'Ativo',
  Vencido: 'Vencido',
  Bloqueado: 'Bloqueado'
};

export type enum_status_motorista = (typeof enum_status_motorista)[keyof typeof enum_status_motorista]


export const enum_status_proprietario: {
  Ativo: 'Ativo',
  Vencido: 'Vencido',
  Bloqueado: 'Bloqueado'
};

export type enum_status_proprietario = (typeof enum_status_proprietario)[keyof typeof enum_status_proprietario]


export const enum_status_veiculo: {
  Ativo: 'Ativo',
  Vencido: 'Vencido',
  Bloqueado: 'Bloqueado'
};

export type enum_status_veiculo = (typeof enum_status_veiculo)[keyof typeof enum_status_veiculo]


export const enum_viagem: {
  N: 'N',
  S: 'S'
};

export type enum_viagem = (typeof enum_viagem)[keyof typeof enum_viagem]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.clientes.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clientes
   * const clientes = await prisma.clientes.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.clientes`: Exposes CRUD operations for the **clientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.clientes.findMany()
    * ```
    */
  get clientes(): Prisma.clientesDelegate<GlobalReject>;

  /**
   * `prisma.contatos_motoristas`: Exposes CRUD operations for the **contatos_motoristas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contatos_motoristas
    * const contatos_motoristas = await prisma.contatos_motoristas.findMany()
    * ```
    */
  get contatos_motoristas(): Prisma.contatos_motoristasDelegate<GlobalReject>;

  /**
   * `prisma.motoristas`: Exposes CRUD operations for the **motoristas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Motoristas
    * const motoristas = await prisma.motoristas.findMany()
    * ```
    */
  get motoristas(): Prisma.motoristasDelegate<GlobalReject>;

  /**
   * `prisma.proprietarios`: Exposes CRUD operations for the **proprietarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proprietarios
    * const proprietarios = await prisma.proprietarios.findMany()
    * ```
    */
  get proprietarios(): Prisma.proprietariosDelegate<GlobalReject>;

  /**
   * `prisma.status_motoristas`: Exposes CRUD operations for the **status_motoristas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Status_motoristas
    * const status_motoristas = await prisma.status_motoristas.findMany()
    * ```
    */
  get status_motoristas(): Prisma.status_motoristasDelegate<GlobalReject>;

  /**
   * `prisma.status_proprietarios`: Exposes CRUD operations for the **status_proprietarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Status_proprietarios
    * const status_proprietarios = await prisma.status_proprietarios.findMany()
    * ```
    */
  get status_proprietarios(): Prisma.status_proprietariosDelegate<GlobalReject>;

  /**
   * `prisma.status_veiculos`: Exposes CRUD operations for the **status_veiculos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Status_veiculos
    * const status_veiculos = await prisma.status_veiculos.findMany()
    * ```
    */
  get status_veiculos(): Prisma.status_veiculosDelegate<GlobalReject>;

  /**
   * `prisma.veiculos`: Exposes CRUD operations for the **veiculos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Veiculos
    * const veiculos = await prisma.veiculos.findMany()
    * ```
    */
  get veiculos(): Prisma.veiculosDelegate<GlobalReject>;

  /**
   * `prisma.viagens`: Exposes CRUD operations for the **viagens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Viagens
    * const viagens = await prisma.viagens.findMany()
    * ```
    */
  get viagens(): Prisma.viagensDelegate<GlobalReject>;

  /**
   * `prisma.vwVeiculos`: Exposes CRUD operations for the **VwVeiculos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VwVeiculos
    * const vwVeiculos = await prisma.vwVeiculos.findMany()
    * ```
    */
  get vwVeiculos(): Prisma.VwVeiculosDelegate<GlobalReject>;

  /**
   * `prisma.vwViagens`: Exposes CRUD operations for the **VwViagens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VwViagens
    * const vwViagens = await prisma.vwViagens.findMany()
    * ```
    */
  get vwViagens(): Prisma.VwViagensDelegate<GlobalReject>;

  /**
   * `prisma.vwMotoristas`: Exposes CRUD operations for the **VwMotoristas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VwMotoristas
    * const vwMotoristas = await prisma.vwMotoristas.findMany()
    * ```
    */
  get vwMotoristas(): Prisma.VwMotoristasDelegate<GlobalReject>;

  /**
   * `prisma.vwProprietarios`: Exposes CRUD operations for the **VwProprietarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VwProprietarios
    * const vwProprietarios = await prisma.vwProprietarios.findMany()
    * ```
    */
  get vwProprietarios(): Prisma.VwProprietariosDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.9.0
   * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
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
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientesCountOutputType
   */


  export type ClientesCountOutputType = {
    contatos_motoristas: number
    status_motoristas: number
    status_proprietarios: number
    status_veiculos: number
    viagens: number
  }

  export type ClientesCountOutputTypeSelect = {
    contatos_motoristas?: boolean
    status_motoristas?: boolean
    status_proprietarios?: boolean
    status_veiculos?: boolean
    viagens?: boolean
  }

  export type ClientesCountOutputTypeGetPayload<S extends boolean | null | undefined | ClientesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ClientesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ClientesCountOutputTypeArgs)
    ? ClientesCountOutputType 
    : S extends { select: any } & (ClientesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ClientesCountOutputType ? ClientesCountOutputType[P] : never
  } 
      : ClientesCountOutputType




  // Custom InputTypes

  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ClientesCountOutputType
     */
    select?: ClientesCountOutputTypeSelect | null
  }



  /**
   * Count Type MotoristasCountOutputType
   */


  export type MotoristasCountOutputType = {
    contatos_motoristas: number
    status_motoristas: number
    viagens: number
  }

  export type MotoristasCountOutputTypeSelect = {
    contatos_motoristas?: boolean
    status_motoristas?: boolean
    viagens?: boolean
  }

  export type MotoristasCountOutputTypeGetPayload<S extends boolean | null | undefined | MotoristasCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MotoristasCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (MotoristasCountOutputTypeArgs)
    ? MotoristasCountOutputType 
    : S extends { select: any } & (MotoristasCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof MotoristasCountOutputType ? MotoristasCountOutputType[P] : never
  } 
      : MotoristasCountOutputType




  // Custom InputTypes

  /**
   * MotoristasCountOutputType without action
   */
  export type MotoristasCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MotoristasCountOutputType
     */
    select?: MotoristasCountOutputTypeSelect | null
  }



  /**
   * Count Type ProprietariosCountOutputType
   */


  export type ProprietariosCountOutputType = {
    status_proprietarios: number
    viagens: number
  }

  export type ProprietariosCountOutputTypeSelect = {
    status_proprietarios?: boolean
    viagens?: boolean
  }

  export type ProprietariosCountOutputTypeGetPayload<S extends boolean | null | undefined | ProprietariosCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProprietariosCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProprietariosCountOutputTypeArgs)
    ? ProprietariosCountOutputType 
    : S extends { select: any } & (ProprietariosCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProprietariosCountOutputType ? ProprietariosCountOutputType[P] : never
  } 
      : ProprietariosCountOutputType




  // Custom InputTypes

  /**
   * ProprietariosCountOutputType without action
   */
  export type ProprietariosCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProprietariosCountOutputType
     */
    select?: ProprietariosCountOutputTypeSelect | null
  }



  /**
   * Count Type VeiculosCountOutputType
   */


  export type VeiculosCountOutputType = {
    status_veiculos: number
    viagens: number
  }

  export type VeiculosCountOutputTypeSelect = {
    status_veiculos?: boolean
    viagens?: boolean
  }

  export type VeiculosCountOutputTypeGetPayload<S extends boolean | null | undefined | VeiculosCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VeiculosCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (VeiculosCountOutputTypeArgs)
    ? VeiculosCountOutputType 
    : S extends { select: any } & (VeiculosCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof VeiculosCountOutputType ? VeiculosCountOutputType[P] : never
  } 
      : VeiculosCountOutputType




  // Custom InputTypes

  /**
   * VeiculosCountOutputType without action
   */
  export type VeiculosCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the VeiculosCountOutputType
     */
    select?: VeiculosCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model clientes
   */


  export type AggregateClientes = {
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  export type ClientesAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientesSumAggregateOutputType = {
    id: number | null
  }

  export type ClientesMinAggregateOutputType = {
    id: number | null
    cnpj: string | null
    razaosocial: string | null
    nomefantasia: string | null
    telefone: string | null
    email: string | null
    photo: string | null
    ativo: boolean | null
    dt_criacao: Date | null
    dt_atualizacao: Date | null
  }

  export type ClientesMaxAggregateOutputType = {
    id: number | null
    cnpj: string | null
    razaosocial: string | null
    nomefantasia: string | null
    telefone: string | null
    email: string | null
    photo: string | null
    ativo: boolean | null
    dt_criacao: Date | null
    dt_atualizacao: Date | null
  }

  export type ClientesCountAggregateOutputType = {
    id: number
    cnpj: number
    razaosocial: number
    nomefantasia: number
    telefone: number
    email: number
    photo: number
    ativo: number
    dt_criacao: number
    dt_atualizacao: number
    _all: number
  }


  export type ClientesAvgAggregateInputType = {
    id?: true
  }

  export type ClientesSumAggregateInputType = {
    id?: true
  }

  export type ClientesMinAggregateInputType = {
    id?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    telefone?: true
    email?: true
    photo?: true
    ativo?: true
    dt_criacao?: true
    dt_atualizacao?: true
  }

  export type ClientesMaxAggregateInputType = {
    id?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    telefone?: true
    email?: true
    photo?: true
    ativo?: true
    dt_criacao?: true
    dt_atualizacao?: true
  }

  export type ClientesCountAggregateInputType = {
    id?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    telefone?: true
    email?: true
    photo?: true
    ativo?: true
    dt_criacao?: true
    dt_atualizacao?: true
    _all?: true
  }

  export type ClientesAggregateArgs = {
    /**
     * Filter which clientes to aggregate.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: Enumerable<clientesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientes
    **/
    _count?: true | ClientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientesMaxAggregateInputType
  }

  export type GetClientesAggregateType<T extends ClientesAggregateArgs> = {
        [P in keyof T & keyof AggregateClientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientes[P]>
      : GetScalarType<T[P], AggregateClientes[P]>
  }




  export type ClientesGroupByArgs = {
    where?: clientesWhereInput
    orderBy?: Enumerable<clientesOrderByWithAggregationInput>
    by: ClientesScalarFieldEnum[]
    having?: clientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientesCountAggregateInputType | true
    _avg?: ClientesAvgAggregateInputType
    _sum?: ClientesSumAggregateInputType
    _min?: ClientesMinAggregateInputType
    _max?: ClientesMaxAggregateInputType
  }


  export type ClientesGroupByOutputType = {
    id: number
    cnpj: string
    razaosocial: string
    nomefantasia: string
    telefone: string | null
    email: string
    photo: string | null
    ativo: boolean
    dt_criacao: Date
    dt_atualizacao: Date
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  type GetClientesGroupByPayload<T extends ClientesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ClientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientesGroupByOutputType[P]>
            : GetScalarType<T[P], ClientesGroupByOutputType[P]>
        }
      >
    >


  export type clientesSelect = {
    id?: boolean
    cnpj?: boolean
    razaosocial?: boolean
    nomefantasia?: boolean
    telefone?: boolean
    email?: boolean
    photo?: boolean
    ativo?: boolean
    dt_criacao?: boolean
    dt_atualizacao?: boolean
    contatos_motoristas?: boolean | clientes$contatos_motoristasArgs
    status_motoristas?: boolean | clientes$status_motoristasArgs
    status_proprietarios?: boolean | clientes$status_proprietariosArgs
    status_veiculos?: boolean | clientes$status_veiculosArgs
    viagens?: boolean | clientes$viagensArgs
    _count?: boolean | ClientesCountOutputTypeArgs
  }


  export type clientesInclude = {
    contatos_motoristas?: boolean | clientes$contatos_motoristasArgs
    status_motoristas?: boolean | clientes$status_motoristasArgs
    status_proprietarios?: boolean | clientes$status_proprietariosArgs
    status_veiculos?: boolean | clientes$status_veiculosArgs
    viagens?: boolean | clientes$viagensArgs
    _count?: boolean | ClientesCountOutputTypeArgs
  }

  export type clientesGetPayload<S extends boolean | null | undefined | clientesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? clientes :
    S extends undefined ? never :
    S extends { include: any } & (clientesArgs | clientesFindManyArgs)
    ? clientes  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'contatos_motoristas' ? Array < contatos_motoristasGetPayload<S['include'][P]>>  :
        P extends 'status_motoristas' ? Array < status_motoristasGetPayload<S['include'][P]>>  :
        P extends 'status_proprietarios' ? Array < status_proprietariosGetPayload<S['include'][P]>>  :
        P extends 'status_veiculos' ? Array < status_veiculosGetPayload<S['include'][P]>>  :
        P extends 'viagens' ? Array < viagensGetPayload<S['include'][P]>>  :
        P extends '_count' ? ClientesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (clientesArgs | clientesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'contatos_motoristas' ? Array < contatos_motoristasGetPayload<S['select'][P]>>  :
        P extends 'status_motoristas' ? Array < status_motoristasGetPayload<S['select'][P]>>  :
        P extends 'status_proprietarios' ? Array < status_proprietariosGetPayload<S['select'][P]>>  :
        P extends 'status_veiculos' ? Array < status_veiculosGetPayload<S['select'][P]>>  :
        P extends 'viagens' ? Array < viagensGetPayload<S['select'][P]>>  :
        P extends '_count' ? ClientesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof clientes ? clientes[P] : never
  } 
      : clientes


  type clientesCountArgs = 
    Omit<clientesFindManyArgs, 'select' | 'include'> & {
      select?: ClientesCountAggregateInputType | true
    }

  export interface clientesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Clientes that matches the filter.
     * @param {clientesFindUniqueArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends clientesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, clientesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'clientes'> extends True ? Prisma__clientesClient<clientesGetPayload<T>> : Prisma__clientesClient<clientesGetPayload<T> | null, null>

    /**
     * Find one Clientes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {clientesFindUniqueOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends clientesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, clientesFindUniqueOrThrowArgs>
    ): Prisma__clientesClient<clientesGetPayload<T>>

    /**
     * Find the first Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindFirstArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends clientesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, clientesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'clientes'> extends True ? Prisma__clientesClient<clientesGetPayload<T>> : Prisma__clientesClient<clientesGetPayload<T> | null, null>

    /**
     * Find the first Clientes that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindFirstOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends clientesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, clientesFindFirstOrThrowArgs>
    ): Prisma__clientesClient<clientesGetPayload<T>>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.clientes.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.clientes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientesWithIdOnly = await prisma.clientes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends clientesFindManyArgs>(
      args?: SelectSubset<T, clientesFindManyArgs>
    ): PrismaPromise<Array<clientesGetPayload<T>>>

    /**
     * Create a Clientes.
     * @param {clientesCreateArgs} args - Arguments to create a Clientes.
     * @example
     * // Create one Clientes
     * const Clientes = await prisma.clientes.create({
     *   data: {
     *     // ... data to create a Clientes
     *   }
     * })
     * 
    **/
    create<T extends clientesCreateArgs>(
      args: SelectSubset<T, clientesCreateArgs>
    ): Prisma__clientesClient<clientesGetPayload<T>>

    /**
     * Create many Clientes.
     *     @param {clientesCreateManyArgs} args - Arguments to create many Clientes.
     *     @example
     *     // Create many Clientes
     *     const clientes = await prisma.clientes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends clientesCreateManyArgs>(
      args?: SelectSubset<T, clientesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Clientes.
     * @param {clientesDeleteArgs} args - Arguments to delete one Clientes.
     * @example
     * // Delete one Clientes
     * const Clientes = await prisma.clientes.delete({
     *   where: {
     *     // ... filter to delete one Clientes
     *   }
     * })
     * 
    **/
    delete<T extends clientesDeleteArgs>(
      args: SelectSubset<T, clientesDeleteArgs>
    ): Prisma__clientesClient<clientesGetPayload<T>>

    /**
     * Update one Clientes.
     * @param {clientesUpdateArgs} args - Arguments to update one Clientes.
     * @example
     * // Update one Clientes
     * const clientes = await prisma.clientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends clientesUpdateArgs>(
      args: SelectSubset<T, clientesUpdateArgs>
    ): Prisma__clientesClient<clientesGetPayload<T>>

    /**
     * Delete zero or more Clientes.
     * @param {clientesDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.clientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends clientesDeleteManyArgs>(
      args?: SelectSubset<T, clientesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends clientesUpdateManyArgs>(
      args: SelectSubset<T, clientesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Clientes.
     * @param {clientesUpsertArgs} args - Arguments to update or create a Clientes.
     * @example
     * // Update or create a Clientes
     * const clientes = await prisma.clientes.upsert({
     *   create: {
     *     // ... data to create a Clientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clientes we want to update
     *   }
     * })
    **/
    upsert<T extends clientesUpsertArgs>(
      args: SelectSubset<T, clientesUpsertArgs>
    ): Prisma__clientesClient<clientesGetPayload<T>>

    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.clientes.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends clientesCountArgs>(
      args?: Subset<T, clientesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientesAggregateArgs>(args: Subset<T, ClientesAggregateArgs>): PrismaPromise<GetClientesAggregateType<T>>

    /**
     * Group by Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientesGroupByArgs['orderBy'] }
        : { orderBy?: ClientesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for clientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__clientesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    contatos_motoristas<T extends clientes$contatos_motoristasArgs= {}>(args?: Subset<T, clientes$contatos_motoristasArgs>): PrismaPromise<Array<contatos_motoristasGetPayload<T>>| Null>;

    status_motoristas<T extends clientes$status_motoristasArgs= {}>(args?: Subset<T, clientes$status_motoristasArgs>): PrismaPromise<Array<status_motoristasGetPayload<T>>| Null>;

    status_proprietarios<T extends clientes$status_proprietariosArgs= {}>(args?: Subset<T, clientes$status_proprietariosArgs>): PrismaPromise<Array<status_proprietariosGetPayload<T>>| Null>;

    status_veiculos<T extends clientes$status_veiculosArgs= {}>(args?: Subset<T, clientes$status_veiculosArgs>): PrismaPromise<Array<status_veiculosGetPayload<T>>| Null>;

    viagens<T extends clientes$viagensArgs= {}>(args?: Subset<T, clientes$viagensArgs>): PrismaPromise<Array<viagensGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * clientes base type for findUnique actions
   */
  export type clientesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientesInclude | null
    /**
     * Filter, which clientes to fetch.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes findUnique
   */
  export interface clientesFindUniqueArgs extends clientesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * clientes findUniqueOrThrow
   */
  export type clientesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientesInclude | null
    /**
     * Filter, which clientes to fetch.
     */
    where: clientesWhereUniqueInput
  }


  /**
   * clientes base type for findFirst actions
   */
  export type clientesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientesInclude | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: Enumerable<clientesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: Enumerable<ClientesScalarFieldEnum>
  }

  /**
   * clientes findFirst
   */
  export interface clientesFindFirstArgs extends clientesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * clientes findFirstOrThrow
   */
  export type clientesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientesInclude | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: Enumerable<clientesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: Enumerable<ClientesScalarFieldEnum>
  }


  /**
   * clientes findMany
   */
  export type clientesFindManyArgs = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientesInclude | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: Enumerable<clientesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    distinct?: Enumerable<ClientesScalarFieldEnum>
  }


  /**
   * clientes create
   */
  export type clientesCreateArgs = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientesInclude | null
    /**
     * The data needed to create a clientes.
     */
    data: XOR<clientesCreateInput, clientesUncheckedCreateInput>
  }


  /**
   * clientes createMany
   */
  export type clientesCreateManyArgs = {
    /**
     * The data used to create many clientes.
     */
    data: Enumerable<clientesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * clientes update
   */
  export type clientesUpdateArgs = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientesInclude | null
    /**
     * The data needed to update a clientes.
     */
    data: XOR<clientesUpdateInput, clientesUncheckedUpdateInput>
    /**
     * Choose, which clientes to update.
     */
    where: clientesWhereUniqueInput
  }


  /**
   * clientes updateMany
   */
  export type clientesUpdateManyArgs = {
    /**
     * The data used to update clientes.
     */
    data: XOR<clientesUpdateManyMutationInput, clientesUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clientesWhereInput
  }


  /**
   * clientes upsert
   */
  export type clientesUpsertArgs = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientesInclude | null
    /**
     * The filter to search for the clientes to update in case it exists.
     */
    where: clientesWhereUniqueInput
    /**
     * In case the clientes found by the `where` argument doesn't exist, create a new clientes with this data.
     */
    create: XOR<clientesCreateInput, clientesUncheckedCreateInput>
    /**
     * In case the clientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientesUpdateInput, clientesUncheckedUpdateInput>
  }


  /**
   * clientes delete
   */
  export type clientesDeleteArgs = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientesInclude | null
    /**
     * Filter which clientes to delete.
     */
    where: clientesWhereUniqueInput
  }


  /**
   * clientes deleteMany
   */
  export type clientesDeleteManyArgs = {
    /**
     * Filter which clientes to delete
     */
    where?: clientesWhereInput
  }


  /**
   * clientes.contatos_motoristas
   */
  export type clientes$contatos_motoristasArgs = {
    /**
     * Select specific fields to fetch from the contatos_motoristas
     */
    select?: contatos_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contatos_motoristasInclude | null
    where?: contatos_motoristasWhereInput
    orderBy?: Enumerable<contatos_motoristasOrderByWithRelationInput>
    cursor?: contatos_motoristasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Contatos_motoristasScalarFieldEnum>
  }


  /**
   * clientes.status_motoristas
   */
  export type clientes$status_motoristasArgs = {
    /**
     * Select specific fields to fetch from the status_motoristas
     */
    select?: status_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_motoristasInclude | null
    where?: status_motoristasWhereInput
    orderBy?: Enumerable<status_motoristasOrderByWithRelationInput>
    cursor?: status_motoristasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Status_motoristasScalarFieldEnum>
  }


  /**
   * clientes.status_proprietarios
   */
  export type clientes$status_proprietariosArgs = {
    /**
     * Select specific fields to fetch from the status_proprietarios
     */
    select?: status_proprietariosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_proprietariosInclude | null
    where?: status_proprietariosWhereInput
    orderBy?: Enumerable<status_proprietariosOrderByWithRelationInput>
    cursor?: status_proprietariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Status_proprietariosScalarFieldEnum>
  }


  /**
   * clientes.status_veiculos
   */
  export type clientes$status_veiculosArgs = {
    /**
     * Select specific fields to fetch from the status_veiculos
     */
    select?: status_veiculosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_veiculosInclude | null
    where?: status_veiculosWhereInput
    orderBy?: Enumerable<status_veiculosOrderByWithRelationInput>
    cursor?: status_veiculosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Status_veiculosScalarFieldEnum>
  }


  /**
   * clientes.viagens
   */
  export type clientes$viagensArgs = {
    /**
     * Select specific fields to fetch from the viagens
     */
    select?: viagensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viagensInclude | null
    where?: viagensWhereInput
    orderBy?: Enumerable<viagensOrderByWithRelationInput>
    cursor?: viagensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ViagensScalarFieldEnum>
  }


  /**
   * clientes without action
   */
  export type clientesArgs = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientesInclude | null
  }



  /**
   * Model contatos_motoristas
   */


  export type AggregateContatos_motoristas = {
    _count: Contatos_motoristasCountAggregateOutputType | null
    _avg: Contatos_motoristasAvgAggregateOutputType | null
    _sum: Contatos_motoristasSumAggregateOutputType | null
    _min: Contatos_motoristasMinAggregateOutputType | null
    _max: Contatos_motoristasMaxAggregateOutputType | null
  }

  export type Contatos_motoristasAvgAggregateOutputType = {
    id: number | null
    idmotorista: number | null
    idcliente: number | null
    clientesId: number | null
    motoristasId: number | null
  }

  export type Contatos_motoristasSumAggregateOutputType = {
    id: number | null
    idmotorista: bigint | null
    idcliente: bigint | null
    clientesId: number | null
    motoristasId: number | null
  }

  export type Contatos_motoristasMinAggregateOutputType = {
    id: number | null
    idmotorista: bigint | null
    idcliente: bigint | null
    contato: string | null
    tipo_contato: string | null
    dt_criacao: Date | null
    dt_atualizacao: Date | null
    clientesId: number | null
    motoristasId: number | null
  }

  export type Contatos_motoristasMaxAggregateOutputType = {
    id: number | null
    idmotorista: bigint | null
    idcliente: bigint | null
    contato: string | null
    tipo_contato: string | null
    dt_criacao: Date | null
    dt_atualizacao: Date | null
    clientesId: number | null
    motoristasId: number | null
  }

  export type Contatos_motoristasCountAggregateOutputType = {
    id: number
    idmotorista: number
    idcliente: number
    contato: number
    tipo_contato: number
    dt_criacao: number
    dt_atualizacao: number
    clientesId: number
    motoristasId: number
    _all: number
  }


  export type Contatos_motoristasAvgAggregateInputType = {
    id?: true
    idmotorista?: true
    idcliente?: true
    clientesId?: true
    motoristasId?: true
  }

  export type Contatos_motoristasSumAggregateInputType = {
    id?: true
    idmotorista?: true
    idcliente?: true
    clientesId?: true
    motoristasId?: true
  }

  export type Contatos_motoristasMinAggregateInputType = {
    id?: true
    idmotorista?: true
    idcliente?: true
    contato?: true
    tipo_contato?: true
    dt_criacao?: true
    dt_atualizacao?: true
    clientesId?: true
    motoristasId?: true
  }

  export type Contatos_motoristasMaxAggregateInputType = {
    id?: true
    idmotorista?: true
    idcliente?: true
    contato?: true
    tipo_contato?: true
    dt_criacao?: true
    dt_atualizacao?: true
    clientesId?: true
    motoristasId?: true
  }

  export type Contatos_motoristasCountAggregateInputType = {
    id?: true
    idmotorista?: true
    idcliente?: true
    contato?: true
    tipo_contato?: true
    dt_criacao?: true
    dt_atualizacao?: true
    clientesId?: true
    motoristasId?: true
    _all?: true
  }

  export type Contatos_motoristasAggregateArgs = {
    /**
     * Filter which contatos_motoristas to aggregate.
     */
    where?: contatos_motoristasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contatos_motoristas to fetch.
     */
    orderBy?: Enumerable<contatos_motoristasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contatos_motoristasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contatos_motoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contatos_motoristas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contatos_motoristas
    **/
    _count?: true | Contatos_motoristasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Contatos_motoristasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Contatos_motoristasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Contatos_motoristasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Contatos_motoristasMaxAggregateInputType
  }

  export type GetContatos_motoristasAggregateType<T extends Contatos_motoristasAggregateArgs> = {
        [P in keyof T & keyof AggregateContatos_motoristas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContatos_motoristas[P]>
      : GetScalarType<T[P], AggregateContatos_motoristas[P]>
  }




  export type Contatos_motoristasGroupByArgs = {
    where?: contatos_motoristasWhereInput
    orderBy?: Enumerable<contatos_motoristasOrderByWithAggregationInput>
    by: Contatos_motoristasScalarFieldEnum[]
    having?: contatos_motoristasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Contatos_motoristasCountAggregateInputType | true
    _avg?: Contatos_motoristasAvgAggregateInputType
    _sum?: Contatos_motoristasSumAggregateInputType
    _min?: Contatos_motoristasMinAggregateInputType
    _max?: Contatos_motoristasMaxAggregateInputType
  }


  export type Contatos_motoristasGroupByOutputType = {
    id: number
    idmotorista: bigint
    idcliente: bigint
    contato: string
    tipo_contato: string
    dt_criacao: Date
    dt_atualizacao: Date
    clientesId: number | null
    motoristasId: number | null
    _count: Contatos_motoristasCountAggregateOutputType | null
    _avg: Contatos_motoristasAvgAggregateOutputType | null
    _sum: Contatos_motoristasSumAggregateOutputType | null
    _min: Contatos_motoristasMinAggregateOutputType | null
    _max: Contatos_motoristasMaxAggregateOutputType | null
  }

  type GetContatos_motoristasGroupByPayload<T extends Contatos_motoristasGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Contatos_motoristasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Contatos_motoristasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Contatos_motoristasGroupByOutputType[P]>
            : GetScalarType<T[P], Contatos_motoristasGroupByOutputType[P]>
        }
      >
    >


  export type contatos_motoristasSelect = {
    id?: boolean
    idmotorista?: boolean
    idcliente?: boolean
    contato?: boolean
    tipo_contato?: boolean
    dt_criacao?: boolean
    dt_atualizacao?: boolean
    clientes?: boolean | clientesArgs
    clientesId?: boolean
    motoristas?: boolean | motoristasArgs
    motoristasId?: boolean
  }


  export type contatos_motoristasInclude = {
    clientes?: boolean | clientesArgs
    motoristas?: boolean | motoristasArgs
  }

  export type contatos_motoristasGetPayload<S extends boolean | null | undefined | contatos_motoristasArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? contatos_motoristas :
    S extends undefined ? never :
    S extends { include: any } & (contatos_motoristasArgs | contatos_motoristasFindManyArgs)
    ? contatos_motoristas  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'clientes' ? clientesGetPayload<S['include'][P]> | null :
        P extends 'motoristas' ? motoristasGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (contatos_motoristasArgs | contatos_motoristasFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'clientes' ? clientesGetPayload<S['select'][P]> | null :
        P extends 'motoristas' ? motoristasGetPayload<S['select'][P]> | null :  P extends keyof contatos_motoristas ? contatos_motoristas[P] : never
  } 
      : contatos_motoristas


  type contatos_motoristasCountArgs = 
    Omit<contatos_motoristasFindManyArgs, 'select' | 'include'> & {
      select?: Contatos_motoristasCountAggregateInputType | true
    }

  export interface contatos_motoristasDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Contatos_motoristas that matches the filter.
     * @param {contatos_motoristasFindUniqueArgs} args - Arguments to find a Contatos_motoristas
     * @example
     * // Get one Contatos_motoristas
     * const contatos_motoristas = await prisma.contatos_motoristas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends contatos_motoristasFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, contatos_motoristasFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'contatos_motoristas'> extends True ? Prisma__contatos_motoristasClient<contatos_motoristasGetPayload<T>> : Prisma__contatos_motoristasClient<contatos_motoristasGetPayload<T> | null, null>

    /**
     * Find one Contatos_motoristas that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {contatos_motoristasFindUniqueOrThrowArgs} args - Arguments to find a Contatos_motoristas
     * @example
     * // Get one Contatos_motoristas
     * const contatos_motoristas = await prisma.contatos_motoristas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends contatos_motoristasFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, contatos_motoristasFindUniqueOrThrowArgs>
    ): Prisma__contatos_motoristasClient<contatos_motoristasGetPayload<T>>

    /**
     * Find the first Contatos_motoristas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contatos_motoristasFindFirstArgs} args - Arguments to find a Contatos_motoristas
     * @example
     * // Get one Contatos_motoristas
     * const contatos_motoristas = await prisma.contatos_motoristas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends contatos_motoristasFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, contatos_motoristasFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'contatos_motoristas'> extends True ? Prisma__contatos_motoristasClient<contatos_motoristasGetPayload<T>> : Prisma__contatos_motoristasClient<contatos_motoristasGetPayload<T> | null, null>

    /**
     * Find the first Contatos_motoristas that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contatos_motoristasFindFirstOrThrowArgs} args - Arguments to find a Contatos_motoristas
     * @example
     * // Get one Contatos_motoristas
     * const contatos_motoristas = await prisma.contatos_motoristas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends contatos_motoristasFindFirstOrThrowArgs>(
      args?: SelectSubset<T, contatos_motoristasFindFirstOrThrowArgs>
    ): Prisma__contatos_motoristasClient<contatos_motoristasGetPayload<T>>

    /**
     * Find zero or more Contatos_motoristas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contatos_motoristasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contatos_motoristas
     * const contatos_motoristas = await prisma.contatos_motoristas.findMany()
     * 
     * // Get first 10 Contatos_motoristas
     * const contatos_motoristas = await prisma.contatos_motoristas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contatos_motoristasWithIdOnly = await prisma.contatos_motoristas.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends contatos_motoristasFindManyArgs>(
      args?: SelectSubset<T, contatos_motoristasFindManyArgs>
    ): PrismaPromise<Array<contatos_motoristasGetPayload<T>>>

    /**
     * Create a Contatos_motoristas.
     * @param {contatos_motoristasCreateArgs} args - Arguments to create a Contatos_motoristas.
     * @example
     * // Create one Contatos_motoristas
     * const Contatos_motoristas = await prisma.contatos_motoristas.create({
     *   data: {
     *     // ... data to create a Contatos_motoristas
     *   }
     * })
     * 
    **/
    create<T extends contatos_motoristasCreateArgs>(
      args: SelectSubset<T, contatos_motoristasCreateArgs>
    ): Prisma__contatos_motoristasClient<contatos_motoristasGetPayload<T>>

    /**
     * Create many Contatos_motoristas.
     *     @param {contatos_motoristasCreateManyArgs} args - Arguments to create many Contatos_motoristas.
     *     @example
     *     // Create many Contatos_motoristas
     *     const contatos_motoristas = await prisma.contatos_motoristas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends contatos_motoristasCreateManyArgs>(
      args?: SelectSubset<T, contatos_motoristasCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Contatos_motoristas.
     * @param {contatos_motoristasDeleteArgs} args - Arguments to delete one Contatos_motoristas.
     * @example
     * // Delete one Contatos_motoristas
     * const Contatos_motoristas = await prisma.contatos_motoristas.delete({
     *   where: {
     *     // ... filter to delete one Contatos_motoristas
     *   }
     * })
     * 
    **/
    delete<T extends contatos_motoristasDeleteArgs>(
      args: SelectSubset<T, contatos_motoristasDeleteArgs>
    ): Prisma__contatos_motoristasClient<contatos_motoristasGetPayload<T>>

    /**
     * Update one Contatos_motoristas.
     * @param {contatos_motoristasUpdateArgs} args - Arguments to update one Contatos_motoristas.
     * @example
     * // Update one Contatos_motoristas
     * const contatos_motoristas = await prisma.contatos_motoristas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends contatos_motoristasUpdateArgs>(
      args: SelectSubset<T, contatos_motoristasUpdateArgs>
    ): Prisma__contatos_motoristasClient<contatos_motoristasGetPayload<T>>

    /**
     * Delete zero or more Contatos_motoristas.
     * @param {contatos_motoristasDeleteManyArgs} args - Arguments to filter Contatos_motoristas to delete.
     * @example
     * // Delete a few Contatos_motoristas
     * const { count } = await prisma.contatos_motoristas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends contatos_motoristasDeleteManyArgs>(
      args?: SelectSubset<T, contatos_motoristasDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contatos_motoristas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contatos_motoristasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contatos_motoristas
     * const contatos_motoristas = await prisma.contatos_motoristas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends contatos_motoristasUpdateManyArgs>(
      args: SelectSubset<T, contatos_motoristasUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Contatos_motoristas.
     * @param {contatos_motoristasUpsertArgs} args - Arguments to update or create a Contatos_motoristas.
     * @example
     * // Update or create a Contatos_motoristas
     * const contatos_motoristas = await prisma.contatos_motoristas.upsert({
     *   create: {
     *     // ... data to create a Contatos_motoristas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contatos_motoristas we want to update
     *   }
     * })
    **/
    upsert<T extends contatos_motoristasUpsertArgs>(
      args: SelectSubset<T, contatos_motoristasUpsertArgs>
    ): Prisma__contatos_motoristasClient<contatos_motoristasGetPayload<T>>

    /**
     * Count the number of Contatos_motoristas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contatos_motoristasCountArgs} args - Arguments to filter Contatos_motoristas to count.
     * @example
     * // Count the number of Contatos_motoristas
     * const count = await prisma.contatos_motoristas.count({
     *   where: {
     *     // ... the filter for the Contatos_motoristas we want to count
     *   }
     * })
    **/
    count<T extends contatos_motoristasCountArgs>(
      args?: Subset<T, contatos_motoristasCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Contatos_motoristasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contatos_motoristas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contatos_motoristasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Contatos_motoristasAggregateArgs>(args: Subset<T, Contatos_motoristasAggregateArgs>): PrismaPromise<GetContatos_motoristasAggregateType<T>>

    /**
     * Group by Contatos_motoristas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contatos_motoristasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Contatos_motoristasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Contatos_motoristasGroupByArgs['orderBy'] }
        : { orderBy?: Contatos_motoristasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Contatos_motoristasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContatos_motoristasGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for contatos_motoristas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__contatos_motoristasClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    clientes<T extends clientesArgs= {}>(args?: Subset<T, clientesArgs>): Prisma__clientesClient<clientesGetPayload<T> | Null>;

    motoristas<T extends motoristasArgs= {}>(args?: Subset<T, motoristasArgs>): Prisma__motoristasClient<motoristasGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * contatos_motoristas base type for findUnique actions
   */
  export type contatos_motoristasFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the contatos_motoristas
     */
    select?: contatos_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contatos_motoristasInclude | null
    /**
     * Filter, which contatos_motoristas to fetch.
     */
    where: contatos_motoristasWhereUniqueInput
  }

  /**
   * contatos_motoristas findUnique
   */
  export interface contatos_motoristasFindUniqueArgs extends contatos_motoristasFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * contatos_motoristas findUniqueOrThrow
   */
  export type contatos_motoristasFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the contatos_motoristas
     */
    select?: contatos_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contatos_motoristasInclude | null
    /**
     * Filter, which contatos_motoristas to fetch.
     */
    where: contatos_motoristasWhereUniqueInput
  }


  /**
   * contatos_motoristas base type for findFirst actions
   */
  export type contatos_motoristasFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the contatos_motoristas
     */
    select?: contatos_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contatos_motoristasInclude | null
    /**
     * Filter, which contatos_motoristas to fetch.
     */
    where?: contatos_motoristasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contatos_motoristas to fetch.
     */
    orderBy?: Enumerable<contatos_motoristasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contatos_motoristas.
     */
    cursor?: contatos_motoristasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contatos_motoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contatos_motoristas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contatos_motoristas.
     */
    distinct?: Enumerable<Contatos_motoristasScalarFieldEnum>
  }

  /**
   * contatos_motoristas findFirst
   */
  export interface contatos_motoristasFindFirstArgs extends contatos_motoristasFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * contatos_motoristas findFirstOrThrow
   */
  export type contatos_motoristasFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the contatos_motoristas
     */
    select?: contatos_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contatos_motoristasInclude | null
    /**
     * Filter, which contatos_motoristas to fetch.
     */
    where?: contatos_motoristasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contatos_motoristas to fetch.
     */
    orderBy?: Enumerable<contatos_motoristasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contatos_motoristas.
     */
    cursor?: contatos_motoristasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contatos_motoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contatos_motoristas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contatos_motoristas.
     */
    distinct?: Enumerable<Contatos_motoristasScalarFieldEnum>
  }


  /**
   * contatos_motoristas findMany
   */
  export type contatos_motoristasFindManyArgs = {
    /**
     * Select specific fields to fetch from the contatos_motoristas
     */
    select?: contatos_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contatos_motoristasInclude | null
    /**
     * Filter, which contatos_motoristas to fetch.
     */
    where?: contatos_motoristasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contatos_motoristas to fetch.
     */
    orderBy?: Enumerable<contatos_motoristasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contatos_motoristas.
     */
    cursor?: contatos_motoristasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contatos_motoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contatos_motoristas.
     */
    skip?: number
    distinct?: Enumerable<Contatos_motoristasScalarFieldEnum>
  }


  /**
   * contatos_motoristas create
   */
  export type contatos_motoristasCreateArgs = {
    /**
     * Select specific fields to fetch from the contatos_motoristas
     */
    select?: contatos_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contatos_motoristasInclude | null
    /**
     * The data needed to create a contatos_motoristas.
     */
    data: XOR<contatos_motoristasCreateInput, contatos_motoristasUncheckedCreateInput>
  }


  /**
   * contatos_motoristas createMany
   */
  export type contatos_motoristasCreateManyArgs = {
    /**
     * The data used to create many contatos_motoristas.
     */
    data: Enumerable<contatos_motoristasCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * contatos_motoristas update
   */
  export type contatos_motoristasUpdateArgs = {
    /**
     * Select specific fields to fetch from the contatos_motoristas
     */
    select?: contatos_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contatos_motoristasInclude | null
    /**
     * The data needed to update a contatos_motoristas.
     */
    data: XOR<contatos_motoristasUpdateInput, contatos_motoristasUncheckedUpdateInput>
    /**
     * Choose, which contatos_motoristas to update.
     */
    where: contatos_motoristasWhereUniqueInput
  }


  /**
   * contatos_motoristas updateMany
   */
  export type contatos_motoristasUpdateManyArgs = {
    /**
     * The data used to update contatos_motoristas.
     */
    data: XOR<contatos_motoristasUpdateManyMutationInput, contatos_motoristasUncheckedUpdateManyInput>
    /**
     * Filter which contatos_motoristas to update
     */
    where?: contatos_motoristasWhereInput
  }


  /**
   * contatos_motoristas upsert
   */
  export type contatos_motoristasUpsertArgs = {
    /**
     * Select specific fields to fetch from the contatos_motoristas
     */
    select?: contatos_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contatos_motoristasInclude | null
    /**
     * The filter to search for the contatos_motoristas to update in case it exists.
     */
    where: contatos_motoristasWhereUniqueInput
    /**
     * In case the contatos_motoristas found by the `where` argument doesn't exist, create a new contatos_motoristas with this data.
     */
    create: XOR<contatos_motoristasCreateInput, contatos_motoristasUncheckedCreateInput>
    /**
     * In case the contatos_motoristas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contatos_motoristasUpdateInput, contatos_motoristasUncheckedUpdateInput>
  }


  /**
   * contatos_motoristas delete
   */
  export type contatos_motoristasDeleteArgs = {
    /**
     * Select specific fields to fetch from the contatos_motoristas
     */
    select?: contatos_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contatos_motoristasInclude | null
    /**
     * Filter which contatos_motoristas to delete.
     */
    where: contatos_motoristasWhereUniqueInput
  }


  /**
   * contatos_motoristas deleteMany
   */
  export type contatos_motoristasDeleteManyArgs = {
    /**
     * Filter which contatos_motoristas to delete
     */
    where?: contatos_motoristasWhereInput
  }


  /**
   * contatos_motoristas without action
   */
  export type contatos_motoristasArgs = {
    /**
     * Select specific fields to fetch from the contatos_motoristas
     */
    select?: contatos_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contatos_motoristasInclude | null
  }



  /**
   * Model motoristas
   */


  export type AggregateMotoristas = {
    _count: MotoristasCountAggregateOutputType | null
    _avg: MotoristasAvgAggregateOutputType | null
    _sum: MotoristasSumAggregateOutputType | null
    _min: MotoristasMinAggregateOutputType | null
    _max: MotoristasMaxAggregateOutputType | null
  }

  export type MotoristasAvgAggregateOutputType = {
    id: number | null
  }

  export type MotoristasSumAggregateOutputType = {
    id: number | null
  }

  export type MotoristasMinAggregateOutputType = {
    id: number | null
    nome_mot: string | null
    cpf_mot: string | null
    cnh_mot: string | null
    nome_pai: string | null
    nome_mae: string | null
    categoria_cnh_mot: string | null
    cod_situacao_cnh_mot: string | null
    dt_validade_cnh: Date | null
    dt_emissao_cnh: Date | null
    dt_primeira_cnh: Date | null
    dt_nascimento: Date | null
    foto_motorista: string | null
    ativo: boolean | null
    cadastro_verificado: boolean | null
    dt_criacao: Date | null
    dt_atualizacao: Date | null
  }

  export type MotoristasMaxAggregateOutputType = {
    id: number | null
    nome_mot: string | null
    cpf_mot: string | null
    cnh_mot: string | null
    nome_pai: string | null
    nome_mae: string | null
    categoria_cnh_mot: string | null
    cod_situacao_cnh_mot: string | null
    dt_validade_cnh: Date | null
    dt_emissao_cnh: Date | null
    dt_primeira_cnh: Date | null
    dt_nascimento: Date | null
    foto_motorista: string | null
    ativo: boolean | null
    cadastro_verificado: boolean | null
    dt_criacao: Date | null
    dt_atualizacao: Date | null
  }

  export type MotoristasCountAggregateOutputType = {
    id: number
    nome_mot: number
    cpf_mot: number
    cnh_mot: number
    nome_pai: number
    nome_mae: number
    categoria_cnh_mot: number
    cod_situacao_cnh_mot: number
    dt_validade_cnh: number
    dt_emissao_cnh: number
    dt_primeira_cnh: number
    dt_nascimento: number
    foto_motorista: number
    ativo: number
    cadastro_verificado: number
    dt_criacao: number
    dt_atualizacao: number
    _all: number
  }


  export type MotoristasAvgAggregateInputType = {
    id?: true
  }

  export type MotoristasSumAggregateInputType = {
    id?: true
  }

  export type MotoristasMinAggregateInputType = {
    id?: true
    nome_mot?: true
    cpf_mot?: true
    cnh_mot?: true
    nome_pai?: true
    nome_mae?: true
    categoria_cnh_mot?: true
    cod_situacao_cnh_mot?: true
    dt_validade_cnh?: true
    dt_emissao_cnh?: true
    dt_primeira_cnh?: true
    dt_nascimento?: true
    foto_motorista?: true
    ativo?: true
    cadastro_verificado?: true
    dt_criacao?: true
    dt_atualizacao?: true
  }

  export type MotoristasMaxAggregateInputType = {
    id?: true
    nome_mot?: true
    cpf_mot?: true
    cnh_mot?: true
    nome_pai?: true
    nome_mae?: true
    categoria_cnh_mot?: true
    cod_situacao_cnh_mot?: true
    dt_validade_cnh?: true
    dt_emissao_cnh?: true
    dt_primeira_cnh?: true
    dt_nascimento?: true
    foto_motorista?: true
    ativo?: true
    cadastro_verificado?: true
    dt_criacao?: true
    dt_atualizacao?: true
  }

  export type MotoristasCountAggregateInputType = {
    id?: true
    nome_mot?: true
    cpf_mot?: true
    cnh_mot?: true
    nome_pai?: true
    nome_mae?: true
    categoria_cnh_mot?: true
    cod_situacao_cnh_mot?: true
    dt_validade_cnh?: true
    dt_emissao_cnh?: true
    dt_primeira_cnh?: true
    dt_nascimento?: true
    foto_motorista?: true
    ativo?: true
    cadastro_verificado?: true
    dt_criacao?: true
    dt_atualizacao?: true
    _all?: true
  }

  export type MotoristasAggregateArgs = {
    /**
     * Filter which motoristas to aggregate.
     */
    where?: motoristasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of motoristas to fetch.
     */
    orderBy?: Enumerable<motoristasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: motoristasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` motoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` motoristas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned motoristas
    **/
    _count?: true | MotoristasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MotoristasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MotoristasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MotoristasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MotoristasMaxAggregateInputType
  }

  export type GetMotoristasAggregateType<T extends MotoristasAggregateArgs> = {
        [P in keyof T & keyof AggregateMotoristas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMotoristas[P]>
      : GetScalarType<T[P], AggregateMotoristas[P]>
  }




  export type MotoristasGroupByArgs = {
    where?: motoristasWhereInput
    orderBy?: Enumerable<motoristasOrderByWithAggregationInput>
    by: MotoristasScalarFieldEnum[]
    having?: motoristasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MotoristasCountAggregateInputType | true
    _avg?: MotoristasAvgAggregateInputType
    _sum?: MotoristasSumAggregateInputType
    _min?: MotoristasMinAggregateInputType
    _max?: MotoristasMaxAggregateInputType
  }


  export type MotoristasGroupByOutputType = {
    id: number
    nome_mot: string
    cpf_mot: string
    cnh_mot: string | null
    nome_pai: string | null
    nome_mae: string | null
    categoria_cnh_mot: string | null
    cod_situacao_cnh_mot: string | null
    dt_validade_cnh: Date | null
    dt_emissao_cnh: Date | null
    dt_primeira_cnh: Date | null
    dt_nascimento: Date | null
    foto_motorista: string | null
    ativo: boolean
    cadastro_verificado: boolean
    dt_criacao: Date
    dt_atualizacao: Date
    _count: MotoristasCountAggregateOutputType | null
    _avg: MotoristasAvgAggregateOutputType | null
    _sum: MotoristasSumAggregateOutputType | null
    _min: MotoristasMinAggregateOutputType | null
    _max: MotoristasMaxAggregateOutputType | null
  }

  type GetMotoristasGroupByPayload<T extends MotoristasGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MotoristasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MotoristasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MotoristasGroupByOutputType[P]>
            : GetScalarType<T[P], MotoristasGroupByOutputType[P]>
        }
      >
    >


  export type motoristasSelect = {
    id?: boolean
    nome_mot?: boolean
    cpf_mot?: boolean
    cnh_mot?: boolean
    nome_pai?: boolean
    nome_mae?: boolean
    categoria_cnh_mot?: boolean
    cod_situacao_cnh_mot?: boolean
    dt_validade_cnh?: boolean
    dt_emissao_cnh?: boolean
    dt_primeira_cnh?: boolean
    dt_nascimento?: boolean
    foto_motorista?: boolean
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao?: boolean
    dt_atualizacao?: boolean
    contatos_motoristas?: boolean | motoristas$contatos_motoristasArgs
    status_motoristas?: boolean | motoristas$status_motoristasArgs
    viagens?: boolean | motoristas$viagensArgs
    _count?: boolean | MotoristasCountOutputTypeArgs
  }


  export type motoristasInclude = {
    contatos_motoristas?: boolean | motoristas$contatos_motoristasArgs
    status_motoristas?: boolean | motoristas$status_motoristasArgs
    viagens?: boolean | motoristas$viagensArgs
    _count?: boolean | MotoristasCountOutputTypeArgs
  }

  export type motoristasGetPayload<S extends boolean | null | undefined | motoristasArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? motoristas :
    S extends undefined ? never :
    S extends { include: any } & (motoristasArgs | motoristasFindManyArgs)
    ? motoristas  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'contatos_motoristas' ? Array < contatos_motoristasGetPayload<S['include'][P]>>  :
        P extends 'status_motoristas' ? Array < status_motoristasGetPayload<S['include'][P]>>  :
        P extends 'viagens' ? Array < viagensGetPayload<S['include'][P]>>  :
        P extends '_count' ? MotoristasCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (motoristasArgs | motoristasFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'contatos_motoristas' ? Array < contatos_motoristasGetPayload<S['select'][P]>>  :
        P extends 'status_motoristas' ? Array < status_motoristasGetPayload<S['select'][P]>>  :
        P extends 'viagens' ? Array < viagensGetPayload<S['select'][P]>>  :
        P extends '_count' ? MotoristasCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof motoristas ? motoristas[P] : never
  } 
      : motoristas


  type motoristasCountArgs = 
    Omit<motoristasFindManyArgs, 'select' | 'include'> & {
      select?: MotoristasCountAggregateInputType | true
    }

  export interface motoristasDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Motoristas that matches the filter.
     * @param {motoristasFindUniqueArgs} args - Arguments to find a Motoristas
     * @example
     * // Get one Motoristas
     * const motoristas = await prisma.motoristas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends motoristasFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, motoristasFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'motoristas'> extends True ? Prisma__motoristasClient<motoristasGetPayload<T>> : Prisma__motoristasClient<motoristasGetPayload<T> | null, null>

    /**
     * Find one Motoristas that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {motoristasFindUniqueOrThrowArgs} args - Arguments to find a Motoristas
     * @example
     * // Get one Motoristas
     * const motoristas = await prisma.motoristas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends motoristasFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, motoristasFindUniqueOrThrowArgs>
    ): Prisma__motoristasClient<motoristasGetPayload<T>>

    /**
     * Find the first Motoristas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {motoristasFindFirstArgs} args - Arguments to find a Motoristas
     * @example
     * // Get one Motoristas
     * const motoristas = await prisma.motoristas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends motoristasFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, motoristasFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'motoristas'> extends True ? Prisma__motoristasClient<motoristasGetPayload<T>> : Prisma__motoristasClient<motoristasGetPayload<T> | null, null>

    /**
     * Find the first Motoristas that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {motoristasFindFirstOrThrowArgs} args - Arguments to find a Motoristas
     * @example
     * // Get one Motoristas
     * const motoristas = await prisma.motoristas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends motoristasFindFirstOrThrowArgs>(
      args?: SelectSubset<T, motoristasFindFirstOrThrowArgs>
    ): Prisma__motoristasClient<motoristasGetPayload<T>>

    /**
     * Find zero or more Motoristas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {motoristasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Motoristas
     * const motoristas = await prisma.motoristas.findMany()
     * 
     * // Get first 10 Motoristas
     * const motoristas = await prisma.motoristas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const motoristasWithIdOnly = await prisma.motoristas.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends motoristasFindManyArgs>(
      args?: SelectSubset<T, motoristasFindManyArgs>
    ): PrismaPromise<Array<motoristasGetPayload<T>>>

    /**
     * Create a Motoristas.
     * @param {motoristasCreateArgs} args - Arguments to create a Motoristas.
     * @example
     * // Create one Motoristas
     * const Motoristas = await prisma.motoristas.create({
     *   data: {
     *     // ... data to create a Motoristas
     *   }
     * })
     * 
    **/
    create<T extends motoristasCreateArgs>(
      args: SelectSubset<T, motoristasCreateArgs>
    ): Prisma__motoristasClient<motoristasGetPayload<T>>

    /**
     * Create many Motoristas.
     *     @param {motoristasCreateManyArgs} args - Arguments to create many Motoristas.
     *     @example
     *     // Create many Motoristas
     *     const motoristas = await prisma.motoristas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends motoristasCreateManyArgs>(
      args?: SelectSubset<T, motoristasCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Motoristas.
     * @param {motoristasDeleteArgs} args - Arguments to delete one Motoristas.
     * @example
     * // Delete one Motoristas
     * const Motoristas = await prisma.motoristas.delete({
     *   where: {
     *     // ... filter to delete one Motoristas
     *   }
     * })
     * 
    **/
    delete<T extends motoristasDeleteArgs>(
      args: SelectSubset<T, motoristasDeleteArgs>
    ): Prisma__motoristasClient<motoristasGetPayload<T>>

    /**
     * Update one Motoristas.
     * @param {motoristasUpdateArgs} args - Arguments to update one Motoristas.
     * @example
     * // Update one Motoristas
     * const motoristas = await prisma.motoristas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends motoristasUpdateArgs>(
      args: SelectSubset<T, motoristasUpdateArgs>
    ): Prisma__motoristasClient<motoristasGetPayload<T>>

    /**
     * Delete zero or more Motoristas.
     * @param {motoristasDeleteManyArgs} args - Arguments to filter Motoristas to delete.
     * @example
     * // Delete a few Motoristas
     * const { count } = await prisma.motoristas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends motoristasDeleteManyArgs>(
      args?: SelectSubset<T, motoristasDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Motoristas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {motoristasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Motoristas
     * const motoristas = await prisma.motoristas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends motoristasUpdateManyArgs>(
      args: SelectSubset<T, motoristasUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Motoristas.
     * @param {motoristasUpsertArgs} args - Arguments to update or create a Motoristas.
     * @example
     * // Update or create a Motoristas
     * const motoristas = await prisma.motoristas.upsert({
     *   create: {
     *     // ... data to create a Motoristas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Motoristas we want to update
     *   }
     * })
    **/
    upsert<T extends motoristasUpsertArgs>(
      args: SelectSubset<T, motoristasUpsertArgs>
    ): Prisma__motoristasClient<motoristasGetPayload<T>>

    /**
     * Count the number of Motoristas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {motoristasCountArgs} args - Arguments to filter Motoristas to count.
     * @example
     * // Count the number of Motoristas
     * const count = await prisma.motoristas.count({
     *   where: {
     *     // ... the filter for the Motoristas we want to count
     *   }
     * })
    **/
    count<T extends motoristasCountArgs>(
      args?: Subset<T, motoristasCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MotoristasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Motoristas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotoristasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MotoristasAggregateArgs>(args: Subset<T, MotoristasAggregateArgs>): PrismaPromise<GetMotoristasAggregateType<T>>

    /**
     * Group by Motoristas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotoristasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MotoristasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MotoristasGroupByArgs['orderBy'] }
        : { orderBy?: MotoristasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MotoristasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMotoristasGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for motoristas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__motoristasClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    contatos_motoristas<T extends motoristas$contatos_motoristasArgs= {}>(args?: Subset<T, motoristas$contatos_motoristasArgs>): PrismaPromise<Array<contatos_motoristasGetPayload<T>>| Null>;

    status_motoristas<T extends motoristas$status_motoristasArgs= {}>(args?: Subset<T, motoristas$status_motoristasArgs>): PrismaPromise<Array<status_motoristasGetPayload<T>>| Null>;

    viagens<T extends motoristas$viagensArgs= {}>(args?: Subset<T, motoristas$viagensArgs>): PrismaPromise<Array<viagensGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * motoristas base type for findUnique actions
   */
  export type motoristasFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the motoristas
     */
    select?: motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: motoristasInclude | null
    /**
     * Filter, which motoristas to fetch.
     */
    where: motoristasWhereUniqueInput
  }

  /**
   * motoristas findUnique
   */
  export interface motoristasFindUniqueArgs extends motoristasFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * motoristas findUniqueOrThrow
   */
  export type motoristasFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the motoristas
     */
    select?: motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: motoristasInclude | null
    /**
     * Filter, which motoristas to fetch.
     */
    where: motoristasWhereUniqueInput
  }


  /**
   * motoristas base type for findFirst actions
   */
  export type motoristasFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the motoristas
     */
    select?: motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: motoristasInclude | null
    /**
     * Filter, which motoristas to fetch.
     */
    where?: motoristasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of motoristas to fetch.
     */
    orderBy?: Enumerable<motoristasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for motoristas.
     */
    cursor?: motoristasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` motoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` motoristas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of motoristas.
     */
    distinct?: Enumerable<MotoristasScalarFieldEnum>
  }

  /**
   * motoristas findFirst
   */
  export interface motoristasFindFirstArgs extends motoristasFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * motoristas findFirstOrThrow
   */
  export type motoristasFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the motoristas
     */
    select?: motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: motoristasInclude | null
    /**
     * Filter, which motoristas to fetch.
     */
    where?: motoristasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of motoristas to fetch.
     */
    orderBy?: Enumerable<motoristasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for motoristas.
     */
    cursor?: motoristasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` motoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` motoristas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of motoristas.
     */
    distinct?: Enumerable<MotoristasScalarFieldEnum>
  }


  /**
   * motoristas findMany
   */
  export type motoristasFindManyArgs = {
    /**
     * Select specific fields to fetch from the motoristas
     */
    select?: motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: motoristasInclude | null
    /**
     * Filter, which motoristas to fetch.
     */
    where?: motoristasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of motoristas to fetch.
     */
    orderBy?: Enumerable<motoristasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing motoristas.
     */
    cursor?: motoristasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` motoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` motoristas.
     */
    skip?: number
    distinct?: Enumerable<MotoristasScalarFieldEnum>
  }


  /**
   * motoristas create
   */
  export type motoristasCreateArgs = {
    /**
     * Select specific fields to fetch from the motoristas
     */
    select?: motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: motoristasInclude | null
    /**
     * The data needed to create a motoristas.
     */
    data: XOR<motoristasCreateInput, motoristasUncheckedCreateInput>
  }


  /**
   * motoristas createMany
   */
  export type motoristasCreateManyArgs = {
    /**
     * The data used to create many motoristas.
     */
    data: Enumerable<motoristasCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * motoristas update
   */
  export type motoristasUpdateArgs = {
    /**
     * Select specific fields to fetch from the motoristas
     */
    select?: motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: motoristasInclude | null
    /**
     * The data needed to update a motoristas.
     */
    data: XOR<motoristasUpdateInput, motoristasUncheckedUpdateInput>
    /**
     * Choose, which motoristas to update.
     */
    where: motoristasWhereUniqueInput
  }


  /**
   * motoristas updateMany
   */
  export type motoristasUpdateManyArgs = {
    /**
     * The data used to update motoristas.
     */
    data: XOR<motoristasUpdateManyMutationInput, motoristasUncheckedUpdateManyInput>
    /**
     * Filter which motoristas to update
     */
    where?: motoristasWhereInput
  }


  /**
   * motoristas upsert
   */
  export type motoristasUpsertArgs = {
    /**
     * Select specific fields to fetch from the motoristas
     */
    select?: motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: motoristasInclude | null
    /**
     * The filter to search for the motoristas to update in case it exists.
     */
    where: motoristasWhereUniqueInput
    /**
     * In case the motoristas found by the `where` argument doesn't exist, create a new motoristas with this data.
     */
    create: XOR<motoristasCreateInput, motoristasUncheckedCreateInput>
    /**
     * In case the motoristas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<motoristasUpdateInput, motoristasUncheckedUpdateInput>
  }


  /**
   * motoristas delete
   */
  export type motoristasDeleteArgs = {
    /**
     * Select specific fields to fetch from the motoristas
     */
    select?: motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: motoristasInclude | null
    /**
     * Filter which motoristas to delete.
     */
    where: motoristasWhereUniqueInput
  }


  /**
   * motoristas deleteMany
   */
  export type motoristasDeleteManyArgs = {
    /**
     * Filter which motoristas to delete
     */
    where?: motoristasWhereInput
  }


  /**
   * motoristas.contatos_motoristas
   */
  export type motoristas$contatos_motoristasArgs = {
    /**
     * Select specific fields to fetch from the contatos_motoristas
     */
    select?: contatos_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contatos_motoristasInclude | null
    where?: contatos_motoristasWhereInput
    orderBy?: Enumerable<contatos_motoristasOrderByWithRelationInput>
    cursor?: contatos_motoristasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Contatos_motoristasScalarFieldEnum>
  }


  /**
   * motoristas.status_motoristas
   */
  export type motoristas$status_motoristasArgs = {
    /**
     * Select specific fields to fetch from the status_motoristas
     */
    select?: status_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_motoristasInclude | null
    where?: status_motoristasWhereInput
    orderBy?: Enumerable<status_motoristasOrderByWithRelationInput>
    cursor?: status_motoristasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Status_motoristasScalarFieldEnum>
  }


  /**
   * motoristas.viagens
   */
  export type motoristas$viagensArgs = {
    /**
     * Select specific fields to fetch from the viagens
     */
    select?: viagensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viagensInclude | null
    where?: viagensWhereInput
    orderBy?: Enumerable<viagensOrderByWithRelationInput>
    cursor?: viagensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ViagensScalarFieldEnum>
  }


  /**
   * motoristas without action
   */
  export type motoristasArgs = {
    /**
     * Select specific fields to fetch from the motoristas
     */
    select?: motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: motoristasInclude | null
  }



  /**
   * Model proprietarios
   */


  export type AggregateProprietarios = {
    _count: ProprietariosCountAggregateOutputType | null
    _avg: ProprietariosAvgAggregateOutputType | null
    _sum: ProprietariosSumAggregateOutputType | null
    _min: ProprietariosMinAggregateOutputType | null
    _max: ProprietariosMaxAggregateOutputType | null
  }

  export type ProprietariosAvgAggregateOutputType = {
    id: number | null
  }

  export type ProprietariosSumAggregateOutputType = {
    id: number | null
  }

  export type ProprietariosMinAggregateOutputType = {
    id: number | null
    nome_prop: string | null
    antt_prop: string | null
    status_antt: string | null
    dt_validade_antt: Date | null
    cpf_cnpj_prop: string | null
    ativo: boolean | null
    cadastro_verificado: boolean | null
    dt_criacao: Date | null
    dt_atualizacao: Date | null
  }

  export type ProprietariosMaxAggregateOutputType = {
    id: number | null
    nome_prop: string | null
    antt_prop: string | null
    status_antt: string | null
    dt_validade_antt: Date | null
    cpf_cnpj_prop: string | null
    ativo: boolean | null
    cadastro_verificado: boolean | null
    dt_criacao: Date | null
    dt_atualizacao: Date | null
  }

  export type ProprietariosCountAggregateOutputType = {
    id: number
    nome_prop: number
    antt_prop: number
    status_antt: number
    dt_validade_antt: number
    cpf_cnpj_prop: number
    ativo: number
    cadastro_verificado: number
    dt_criacao: number
    dt_atualizacao: number
    _all: number
  }


  export type ProprietariosAvgAggregateInputType = {
    id?: true
  }

  export type ProprietariosSumAggregateInputType = {
    id?: true
  }

  export type ProprietariosMinAggregateInputType = {
    id?: true
    nome_prop?: true
    antt_prop?: true
    status_antt?: true
    dt_validade_antt?: true
    cpf_cnpj_prop?: true
    ativo?: true
    cadastro_verificado?: true
    dt_criacao?: true
    dt_atualizacao?: true
  }

  export type ProprietariosMaxAggregateInputType = {
    id?: true
    nome_prop?: true
    antt_prop?: true
    status_antt?: true
    dt_validade_antt?: true
    cpf_cnpj_prop?: true
    ativo?: true
    cadastro_verificado?: true
    dt_criacao?: true
    dt_atualizacao?: true
  }

  export type ProprietariosCountAggregateInputType = {
    id?: true
    nome_prop?: true
    antt_prop?: true
    status_antt?: true
    dt_validade_antt?: true
    cpf_cnpj_prop?: true
    ativo?: true
    cadastro_verificado?: true
    dt_criacao?: true
    dt_atualizacao?: true
    _all?: true
  }

  export type ProprietariosAggregateArgs = {
    /**
     * Filter which proprietarios to aggregate.
     */
    where?: proprietariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proprietarios to fetch.
     */
    orderBy?: Enumerable<proprietariosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: proprietariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proprietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proprietarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned proprietarios
    **/
    _count?: true | ProprietariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProprietariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProprietariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProprietariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProprietariosMaxAggregateInputType
  }

  export type GetProprietariosAggregateType<T extends ProprietariosAggregateArgs> = {
        [P in keyof T & keyof AggregateProprietarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProprietarios[P]>
      : GetScalarType<T[P], AggregateProprietarios[P]>
  }




  export type ProprietariosGroupByArgs = {
    where?: proprietariosWhereInput
    orderBy?: Enumerable<proprietariosOrderByWithAggregationInput>
    by: ProprietariosScalarFieldEnum[]
    having?: proprietariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProprietariosCountAggregateInputType | true
    _avg?: ProprietariosAvgAggregateInputType
    _sum?: ProprietariosSumAggregateInputType
    _min?: ProprietariosMinAggregateInputType
    _max?: ProprietariosMaxAggregateInputType
  }


  export type ProprietariosGroupByOutputType = {
    id: number
    nome_prop: string
    antt_prop: string | null
    status_antt: string | null
    dt_validade_antt: Date | null
    cpf_cnpj_prop: string
    ativo: boolean
    cadastro_verificado: boolean
    dt_criacao: Date
    dt_atualizacao: Date
    _count: ProprietariosCountAggregateOutputType | null
    _avg: ProprietariosAvgAggregateOutputType | null
    _sum: ProprietariosSumAggregateOutputType | null
    _min: ProprietariosMinAggregateOutputType | null
    _max: ProprietariosMaxAggregateOutputType | null
  }

  type GetProprietariosGroupByPayload<T extends ProprietariosGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProprietariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProprietariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProprietariosGroupByOutputType[P]>
            : GetScalarType<T[P], ProprietariosGroupByOutputType[P]>
        }
      >
    >


  export type proprietariosSelect = {
    id?: boolean
    nome_prop?: boolean
    antt_prop?: boolean
    status_antt?: boolean
    dt_validade_antt?: boolean
    cpf_cnpj_prop?: boolean
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao?: boolean
    dt_atualizacao?: boolean
    status_proprietarios?: boolean | proprietarios$status_proprietariosArgs
    viagens?: boolean | proprietarios$viagensArgs
    _count?: boolean | ProprietariosCountOutputTypeArgs
  }


  export type proprietariosInclude = {
    status_proprietarios?: boolean | proprietarios$status_proprietariosArgs
    viagens?: boolean | proprietarios$viagensArgs
    _count?: boolean | ProprietariosCountOutputTypeArgs
  }

  export type proprietariosGetPayload<S extends boolean | null | undefined | proprietariosArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? proprietarios :
    S extends undefined ? never :
    S extends { include: any } & (proprietariosArgs | proprietariosFindManyArgs)
    ? proprietarios  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'status_proprietarios' ? Array < status_proprietariosGetPayload<S['include'][P]>>  :
        P extends 'viagens' ? Array < viagensGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProprietariosCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (proprietariosArgs | proprietariosFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'status_proprietarios' ? Array < status_proprietariosGetPayload<S['select'][P]>>  :
        P extends 'viagens' ? Array < viagensGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProprietariosCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof proprietarios ? proprietarios[P] : never
  } 
      : proprietarios


  type proprietariosCountArgs = 
    Omit<proprietariosFindManyArgs, 'select' | 'include'> & {
      select?: ProprietariosCountAggregateInputType | true
    }

  export interface proprietariosDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Proprietarios that matches the filter.
     * @param {proprietariosFindUniqueArgs} args - Arguments to find a Proprietarios
     * @example
     * // Get one Proprietarios
     * const proprietarios = await prisma.proprietarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends proprietariosFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, proprietariosFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'proprietarios'> extends True ? Prisma__proprietariosClient<proprietariosGetPayload<T>> : Prisma__proprietariosClient<proprietariosGetPayload<T> | null, null>

    /**
     * Find one Proprietarios that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {proprietariosFindUniqueOrThrowArgs} args - Arguments to find a Proprietarios
     * @example
     * // Get one Proprietarios
     * const proprietarios = await prisma.proprietarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends proprietariosFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, proprietariosFindUniqueOrThrowArgs>
    ): Prisma__proprietariosClient<proprietariosGetPayload<T>>

    /**
     * Find the first Proprietarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proprietariosFindFirstArgs} args - Arguments to find a Proprietarios
     * @example
     * // Get one Proprietarios
     * const proprietarios = await prisma.proprietarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends proprietariosFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, proprietariosFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'proprietarios'> extends True ? Prisma__proprietariosClient<proprietariosGetPayload<T>> : Prisma__proprietariosClient<proprietariosGetPayload<T> | null, null>

    /**
     * Find the first Proprietarios that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proprietariosFindFirstOrThrowArgs} args - Arguments to find a Proprietarios
     * @example
     * // Get one Proprietarios
     * const proprietarios = await prisma.proprietarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends proprietariosFindFirstOrThrowArgs>(
      args?: SelectSubset<T, proprietariosFindFirstOrThrowArgs>
    ): Prisma__proprietariosClient<proprietariosGetPayload<T>>

    /**
     * Find zero or more Proprietarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proprietariosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proprietarios
     * const proprietarios = await prisma.proprietarios.findMany()
     * 
     * // Get first 10 Proprietarios
     * const proprietarios = await prisma.proprietarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proprietariosWithIdOnly = await prisma.proprietarios.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends proprietariosFindManyArgs>(
      args?: SelectSubset<T, proprietariosFindManyArgs>
    ): PrismaPromise<Array<proprietariosGetPayload<T>>>

    /**
     * Create a Proprietarios.
     * @param {proprietariosCreateArgs} args - Arguments to create a Proprietarios.
     * @example
     * // Create one Proprietarios
     * const Proprietarios = await prisma.proprietarios.create({
     *   data: {
     *     // ... data to create a Proprietarios
     *   }
     * })
     * 
    **/
    create<T extends proprietariosCreateArgs>(
      args: SelectSubset<T, proprietariosCreateArgs>
    ): Prisma__proprietariosClient<proprietariosGetPayload<T>>

    /**
     * Create many Proprietarios.
     *     @param {proprietariosCreateManyArgs} args - Arguments to create many Proprietarios.
     *     @example
     *     // Create many Proprietarios
     *     const proprietarios = await prisma.proprietarios.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends proprietariosCreateManyArgs>(
      args?: SelectSubset<T, proprietariosCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Proprietarios.
     * @param {proprietariosDeleteArgs} args - Arguments to delete one Proprietarios.
     * @example
     * // Delete one Proprietarios
     * const Proprietarios = await prisma.proprietarios.delete({
     *   where: {
     *     // ... filter to delete one Proprietarios
     *   }
     * })
     * 
    **/
    delete<T extends proprietariosDeleteArgs>(
      args: SelectSubset<T, proprietariosDeleteArgs>
    ): Prisma__proprietariosClient<proprietariosGetPayload<T>>

    /**
     * Update one Proprietarios.
     * @param {proprietariosUpdateArgs} args - Arguments to update one Proprietarios.
     * @example
     * // Update one Proprietarios
     * const proprietarios = await prisma.proprietarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends proprietariosUpdateArgs>(
      args: SelectSubset<T, proprietariosUpdateArgs>
    ): Prisma__proprietariosClient<proprietariosGetPayload<T>>

    /**
     * Delete zero or more Proprietarios.
     * @param {proprietariosDeleteManyArgs} args - Arguments to filter Proprietarios to delete.
     * @example
     * // Delete a few Proprietarios
     * const { count } = await prisma.proprietarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends proprietariosDeleteManyArgs>(
      args?: SelectSubset<T, proprietariosDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proprietarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proprietariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proprietarios
     * const proprietarios = await prisma.proprietarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends proprietariosUpdateManyArgs>(
      args: SelectSubset<T, proprietariosUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Proprietarios.
     * @param {proprietariosUpsertArgs} args - Arguments to update or create a Proprietarios.
     * @example
     * // Update or create a Proprietarios
     * const proprietarios = await prisma.proprietarios.upsert({
     *   create: {
     *     // ... data to create a Proprietarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proprietarios we want to update
     *   }
     * })
    **/
    upsert<T extends proprietariosUpsertArgs>(
      args: SelectSubset<T, proprietariosUpsertArgs>
    ): Prisma__proprietariosClient<proprietariosGetPayload<T>>

    /**
     * Count the number of Proprietarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proprietariosCountArgs} args - Arguments to filter Proprietarios to count.
     * @example
     * // Count the number of Proprietarios
     * const count = await prisma.proprietarios.count({
     *   where: {
     *     // ... the filter for the Proprietarios we want to count
     *   }
     * })
    **/
    count<T extends proprietariosCountArgs>(
      args?: Subset<T, proprietariosCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProprietariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proprietarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProprietariosAggregateArgs>(args: Subset<T, ProprietariosAggregateArgs>): PrismaPromise<GetProprietariosAggregateType<T>>

    /**
     * Group by Proprietarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProprietariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProprietariosGroupByArgs['orderBy'] }
        : { orderBy?: ProprietariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProprietariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProprietariosGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for proprietarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__proprietariosClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    status_proprietarios<T extends proprietarios$status_proprietariosArgs= {}>(args?: Subset<T, proprietarios$status_proprietariosArgs>): PrismaPromise<Array<status_proprietariosGetPayload<T>>| Null>;

    viagens<T extends proprietarios$viagensArgs= {}>(args?: Subset<T, proprietarios$viagensArgs>): PrismaPromise<Array<viagensGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * proprietarios base type for findUnique actions
   */
  export type proprietariosFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the proprietarios
     */
    select?: proprietariosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proprietariosInclude | null
    /**
     * Filter, which proprietarios to fetch.
     */
    where: proprietariosWhereUniqueInput
  }

  /**
   * proprietarios findUnique
   */
  export interface proprietariosFindUniqueArgs extends proprietariosFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * proprietarios findUniqueOrThrow
   */
  export type proprietariosFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the proprietarios
     */
    select?: proprietariosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proprietariosInclude | null
    /**
     * Filter, which proprietarios to fetch.
     */
    where: proprietariosWhereUniqueInput
  }


  /**
   * proprietarios base type for findFirst actions
   */
  export type proprietariosFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the proprietarios
     */
    select?: proprietariosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proprietariosInclude | null
    /**
     * Filter, which proprietarios to fetch.
     */
    where?: proprietariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proprietarios to fetch.
     */
    orderBy?: Enumerable<proprietariosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for proprietarios.
     */
    cursor?: proprietariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proprietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proprietarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proprietarios.
     */
    distinct?: Enumerable<ProprietariosScalarFieldEnum>
  }

  /**
   * proprietarios findFirst
   */
  export interface proprietariosFindFirstArgs extends proprietariosFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * proprietarios findFirstOrThrow
   */
  export type proprietariosFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the proprietarios
     */
    select?: proprietariosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proprietariosInclude | null
    /**
     * Filter, which proprietarios to fetch.
     */
    where?: proprietariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proprietarios to fetch.
     */
    orderBy?: Enumerable<proprietariosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for proprietarios.
     */
    cursor?: proprietariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proprietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proprietarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proprietarios.
     */
    distinct?: Enumerable<ProprietariosScalarFieldEnum>
  }


  /**
   * proprietarios findMany
   */
  export type proprietariosFindManyArgs = {
    /**
     * Select specific fields to fetch from the proprietarios
     */
    select?: proprietariosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proprietariosInclude | null
    /**
     * Filter, which proprietarios to fetch.
     */
    where?: proprietariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proprietarios to fetch.
     */
    orderBy?: Enumerable<proprietariosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing proprietarios.
     */
    cursor?: proprietariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proprietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proprietarios.
     */
    skip?: number
    distinct?: Enumerable<ProprietariosScalarFieldEnum>
  }


  /**
   * proprietarios create
   */
  export type proprietariosCreateArgs = {
    /**
     * Select specific fields to fetch from the proprietarios
     */
    select?: proprietariosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proprietariosInclude | null
    /**
     * The data needed to create a proprietarios.
     */
    data: XOR<proprietariosCreateInput, proprietariosUncheckedCreateInput>
  }


  /**
   * proprietarios createMany
   */
  export type proprietariosCreateManyArgs = {
    /**
     * The data used to create many proprietarios.
     */
    data: Enumerable<proprietariosCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * proprietarios update
   */
  export type proprietariosUpdateArgs = {
    /**
     * Select specific fields to fetch from the proprietarios
     */
    select?: proprietariosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proprietariosInclude | null
    /**
     * The data needed to update a proprietarios.
     */
    data: XOR<proprietariosUpdateInput, proprietariosUncheckedUpdateInput>
    /**
     * Choose, which proprietarios to update.
     */
    where: proprietariosWhereUniqueInput
  }


  /**
   * proprietarios updateMany
   */
  export type proprietariosUpdateManyArgs = {
    /**
     * The data used to update proprietarios.
     */
    data: XOR<proprietariosUpdateManyMutationInput, proprietariosUncheckedUpdateManyInput>
    /**
     * Filter which proprietarios to update
     */
    where?: proprietariosWhereInput
  }


  /**
   * proprietarios upsert
   */
  export type proprietariosUpsertArgs = {
    /**
     * Select specific fields to fetch from the proprietarios
     */
    select?: proprietariosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proprietariosInclude | null
    /**
     * The filter to search for the proprietarios to update in case it exists.
     */
    where: proprietariosWhereUniqueInput
    /**
     * In case the proprietarios found by the `where` argument doesn't exist, create a new proprietarios with this data.
     */
    create: XOR<proprietariosCreateInput, proprietariosUncheckedCreateInput>
    /**
     * In case the proprietarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<proprietariosUpdateInput, proprietariosUncheckedUpdateInput>
  }


  /**
   * proprietarios delete
   */
  export type proprietariosDeleteArgs = {
    /**
     * Select specific fields to fetch from the proprietarios
     */
    select?: proprietariosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proprietariosInclude | null
    /**
     * Filter which proprietarios to delete.
     */
    where: proprietariosWhereUniqueInput
  }


  /**
   * proprietarios deleteMany
   */
  export type proprietariosDeleteManyArgs = {
    /**
     * Filter which proprietarios to delete
     */
    where?: proprietariosWhereInput
  }


  /**
   * proprietarios.status_proprietarios
   */
  export type proprietarios$status_proprietariosArgs = {
    /**
     * Select specific fields to fetch from the status_proprietarios
     */
    select?: status_proprietariosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_proprietariosInclude | null
    where?: status_proprietariosWhereInput
    orderBy?: Enumerable<status_proprietariosOrderByWithRelationInput>
    cursor?: status_proprietariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Status_proprietariosScalarFieldEnum>
  }


  /**
   * proprietarios.viagens
   */
  export type proprietarios$viagensArgs = {
    /**
     * Select specific fields to fetch from the viagens
     */
    select?: viagensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viagensInclude | null
    where?: viagensWhereInput
    orderBy?: Enumerable<viagensOrderByWithRelationInput>
    cursor?: viagensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ViagensScalarFieldEnum>
  }


  /**
   * proprietarios without action
   */
  export type proprietariosArgs = {
    /**
     * Select specific fields to fetch from the proprietarios
     */
    select?: proprietariosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proprietariosInclude | null
  }



  /**
   * Model status_motoristas
   */


  export type AggregateStatus_motoristas = {
    _count: Status_motoristasCountAggregateOutputType | null
    _avg: Status_motoristasAvgAggregateOutputType | null
    _sum: Status_motoristasSumAggregateOutputType | null
    _min: Status_motoristasMinAggregateOutputType | null
    _max: Status_motoristasMaxAggregateOutputType | null
  }

  export type Status_motoristasAvgAggregateOutputType = {
    id: number | null
    idmotorista: number | null
    idcliente: number | null
    clientesId: number | null
    motoristasId: number | null
  }

  export type Status_motoristasSumAggregateOutputType = {
    id: number | null
    idmotorista: bigint | null
    idcliente: bigint | null
    clientesId: number | null
    motoristasId: number | null
  }

  export type Status_motoristasMinAggregateOutputType = {
    id: number | null
    idmotorista: bigint | null
    idcliente: bigint | null
    dt_cliente: Date | null
    numero_cliente: string | null
    lote_arquivo: string | null
    status_motorista: enum_status_motorista | null
    dt_criacao: Date | null
    dt_atualizacao: Date | null
    clientesId: number | null
    motoristasId: number | null
  }

  export type Status_motoristasMaxAggregateOutputType = {
    id: number | null
    idmotorista: bigint | null
    idcliente: bigint | null
    dt_cliente: Date | null
    numero_cliente: string | null
    lote_arquivo: string | null
    status_motorista: enum_status_motorista | null
    dt_criacao: Date | null
    dt_atualizacao: Date | null
    clientesId: number | null
    motoristasId: number | null
  }

  export type Status_motoristasCountAggregateOutputType = {
    id: number
    idmotorista: number
    idcliente: number
    dt_cliente: number
    numero_cliente: number
    lote_arquivo: number
    status_motorista: number
    dt_criacao: number
    dt_atualizacao: number
    clientesId: number
    motoristasId: number
    _all: number
  }


  export type Status_motoristasAvgAggregateInputType = {
    id?: true
    idmotorista?: true
    idcliente?: true
    clientesId?: true
    motoristasId?: true
  }

  export type Status_motoristasSumAggregateInputType = {
    id?: true
    idmotorista?: true
    idcliente?: true
    clientesId?: true
    motoristasId?: true
  }

  export type Status_motoristasMinAggregateInputType = {
    id?: true
    idmotorista?: true
    idcliente?: true
    dt_cliente?: true
    numero_cliente?: true
    lote_arquivo?: true
    status_motorista?: true
    dt_criacao?: true
    dt_atualizacao?: true
    clientesId?: true
    motoristasId?: true
  }

  export type Status_motoristasMaxAggregateInputType = {
    id?: true
    idmotorista?: true
    idcliente?: true
    dt_cliente?: true
    numero_cliente?: true
    lote_arquivo?: true
    status_motorista?: true
    dt_criacao?: true
    dt_atualizacao?: true
    clientesId?: true
    motoristasId?: true
  }

  export type Status_motoristasCountAggregateInputType = {
    id?: true
    idmotorista?: true
    idcliente?: true
    dt_cliente?: true
    numero_cliente?: true
    lote_arquivo?: true
    status_motorista?: true
    dt_criacao?: true
    dt_atualizacao?: true
    clientesId?: true
    motoristasId?: true
    _all?: true
  }

  export type Status_motoristasAggregateArgs = {
    /**
     * Filter which status_motoristas to aggregate.
     */
    where?: status_motoristasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of status_motoristas to fetch.
     */
    orderBy?: Enumerable<status_motoristasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: status_motoristasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` status_motoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` status_motoristas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned status_motoristas
    **/
    _count?: true | Status_motoristasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Status_motoristasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Status_motoristasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Status_motoristasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Status_motoristasMaxAggregateInputType
  }

  export type GetStatus_motoristasAggregateType<T extends Status_motoristasAggregateArgs> = {
        [P in keyof T & keyof AggregateStatus_motoristas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatus_motoristas[P]>
      : GetScalarType<T[P], AggregateStatus_motoristas[P]>
  }




  export type Status_motoristasGroupByArgs = {
    where?: status_motoristasWhereInput
    orderBy?: Enumerable<status_motoristasOrderByWithAggregationInput>
    by: Status_motoristasScalarFieldEnum[]
    having?: status_motoristasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Status_motoristasCountAggregateInputType | true
    _avg?: Status_motoristasAvgAggregateInputType
    _sum?: Status_motoristasSumAggregateInputType
    _min?: Status_motoristasMinAggregateInputType
    _max?: Status_motoristasMaxAggregateInputType
  }


  export type Status_motoristasGroupByOutputType = {
    id: number
    idmotorista: bigint
    idcliente: bigint
    dt_cliente: Date
    numero_cliente: string | null
    lote_arquivo: string | null
    status_motorista: enum_status_motorista
    dt_criacao: Date
    dt_atualizacao: Date
    clientesId: number | null
    motoristasId: number | null
    _count: Status_motoristasCountAggregateOutputType | null
    _avg: Status_motoristasAvgAggregateOutputType | null
    _sum: Status_motoristasSumAggregateOutputType | null
    _min: Status_motoristasMinAggregateOutputType | null
    _max: Status_motoristasMaxAggregateOutputType | null
  }

  type GetStatus_motoristasGroupByPayload<T extends Status_motoristasGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Status_motoristasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Status_motoristasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Status_motoristasGroupByOutputType[P]>
            : GetScalarType<T[P], Status_motoristasGroupByOutputType[P]>
        }
      >
    >


  export type status_motoristasSelect = {
    id?: boolean
    idmotorista?: boolean
    idcliente?: boolean
    dt_cliente?: boolean
    numero_cliente?: boolean
    lote_arquivo?: boolean
    status_motorista?: boolean
    dt_criacao?: boolean
    dt_atualizacao?: boolean
    clientes?: boolean | clientesArgs
    clientesId?: boolean
    motoristas?: boolean | motoristasArgs
    motoristasId?: boolean
  }


  export type status_motoristasInclude = {
    clientes?: boolean | clientesArgs
    motoristas?: boolean | motoristasArgs
  }

  export type status_motoristasGetPayload<S extends boolean | null | undefined | status_motoristasArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? status_motoristas :
    S extends undefined ? never :
    S extends { include: any } & (status_motoristasArgs | status_motoristasFindManyArgs)
    ? status_motoristas  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'clientes' ? clientesGetPayload<S['include'][P]> | null :
        P extends 'motoristas' ? motoristasGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (status_motoristasArgs | status_motoristasFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'clientes' ? clientesGetPayload<S['select'][P]> | null :
        P extends 'motoristas' ? motoristasGetPayload<S['select'][P]> | null :  P extends keyof status_motoristas ? status_motoristas[P] : never
  } 
      : status_motoristas


  type status_motoristasCountArgs = 
    Omit<status_motoristasFindManyArgs, 'select' | 'include'> & {
      select?: Status_motoristasCountAggregateInputType | true
    }

  export interface status_motoristasDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Status_motoristas that matches the filter.
     * @param {status_motoristasFindUniqueArgs} args - Arguments to find a Status_motoristas
     * @example
     * // Get one Status_motoristas
     * const status_motoristas = await prisma.status_motoristas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends status_motoristasFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, status_motoristasFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'status_motoristas'> extends True ? Prisma__status_motoristasClient<status_motoristasGetPayload<T>> : Prisma__status_motoristasClient<status_motoristasGetPayload<T> | null, null>

    /**
     * Find one Status_motoristas that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {status_motoristasFindUniqueOrThrowArgs} args - Arguments to find a Status_motoristas
     * @example
     * // Get one Status_motoristas
     * const status_motoristas = await prisma.status_motoristas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends status_motoristasFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, status_motoristasFindUniqueOrThrowArgs>
    ): Prisma__status_motoristasClient<status_motoristasGetPayload<T>>

    /**
     * Find the first Status_motoristas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {status_motoristasFindFirstArgs} args - Arguments to find a Status_motoristas
     * @example
     * // Get one Status_motoristas
     * const status_motoristas = await prisma.status_motoristas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends status_motoristasFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, status_motoristasFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'status_motoristas'> extends True ? Prisma__status_motoristasClient<status_motoristasGetPayload<T>> : Prisma__status_motoristasClient<status_motoristasGetPayload<T> | null, null>

    /**
     * Find the first Status_motoristas that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {status_motoristasFindFirstOrThrowArgs} args - Arguments to find a Status_motoristas
     * @example
     * // Get one Status_motoristas
     * const status_motoristas = await prisma.status_motoristas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends status_motoristasFindFirstOrThrowArgs>(
      args?: SelectSubset<T, status_motoristasFindFirstOrThrowArgs>
    ): Prisma__status_motoristasClient<status_motoristasGetPayload<T>>

    /**
     * Find zero or more Status_motoristas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {status_motoristasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Status_motoristas
     * const status_motoristas = await prisma.status_motoristas.findMany()
     * 
     * // Get first 10 Status_motoristas
     * const status_motoristas = await prisma.status_motoristas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const status_motoristasWithIdOnly = await prisma.status_motoristas.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends status_motoristasFindManyArgs>(
      args?: SelectSubset<T, status_motoristasFindManyArgs>
    ): PrismaPromise<Array<status_motoristasGetPayload<T>>>

    /**
     * Create a Status_motoristas.
     * @param {status_motoristasCreateArgs} args - Arguments to create a Status_motoristas.
     * @example
     * // Create one Status_motoristas
     * const Status_motoristas = await prisma.status_motoristas.create({
     *   data: {
     *     // ... data to create a Status_motoristas
     *   }
     * })
     * 
    **/
    create<T extends status_motoristasCreateArgs>(
      args: SelectSubset<T, status_motoristasCreateArgs>
    ): Prisma__status_motoristasClient<status_motoristasGetPayload<T>>

    /**
     * Create many Status_motoristas.
     *     @param {status_motoristasCreateManyArgs} args - Arguments to create many Status_motoristas.
     *     @example
     *     // Create many Status_motoristas
     *     const status_motoristas = await prisma.status_motoristas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends status_motoristasCreateManyArgs>(
      args?: SelectSubset<T, status_motoristasCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Status_motoristas.
     * @param {status_motoristasDeleteArgs} args - Arguments to delete one Status_motoristas.
     * @example
     * // Delete one Status_motoristas
     * const Status_motoristas = await prisma.status_motoristas.delete({
     *   where: {
     *     // ... filter to delete one Status_motoristas
     *   }
     * })
     * 
    **/
    delete<T extends status_motoristasDeleteArgs>(
      args: SelectSubset<T, status_motoristasDeleteArgs>
    ): Prisma__status_motoristasClient<status_motoristasGetPayload<T>>

    /**
     * Update one Status_motoristas.
     * @param {status_motoristasUpdateArgs} args - Arguments to update one Status_motoristas.
     * @example
     * // Update one Status_motoristas
     * const status_motoristas = await prisma.status_motoristas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends status_motoristasUpdateArgs>(
      args: SelectSubset<T, status_motoristasUpdateArgs>
    ): Prisma__status_motoristasClient<status_motoristasGetPayload<T>>

    /**
     * Delete zero or more Status_motoristas.
     * @param {status_motoristasDeleteManyArgs} args - Arguments to filter Status_motoristas to delete.
     * @example
     * // Delete a few Status_motoristas
     * const { count } = await prisma.status_motoristas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends status_motoristasDeleteManyArgs>(
      args?: SelectSubset<T, status_motoristasDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Status_motoristas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {status_motoristasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Status_motoristas
     * const status_motoristas = await prisma.status_motoristas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends status_motoristasUpdateManyArgs>(
      args: SelectSubset<T, status_motoristasUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Status_motoristas.
     * @param {status_motoristasUpsertArgs} args - Arguments to update or create a Status_motoristas.
     * @example
     * // Update or create a Status_motoristas
     * const status_motoristas = await prisma.status_motoristas.upsert({
     *   create: {
     *     // ... data to create a Status_motoristas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Status_motoristas we want to update
     *   }
     * })
    **/
    upsert<T extends status_motoristasUpsertArgs>(
      args: SelectSubset<T, status_motoristasUpsertArgs>
    ): Prisma__status_motoristasClient<status_motoristasGetPayload<T>>

    /**
     * Count the number of Status_motoristas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {status_motoristasCountArgs} args - Arguments to filter Status_motoristas to count.
     * @example
     * // Count the number of Status_motoristas
     * const count = await prisma.status_motoristas.count({
     *   where: {
     *     // ... the filter for the Status_motoristas we want to count
     *   }
     * })
    **/
    count<T extends status_motoristasCountArgs>(
      args?: Subset<T, status_motoristasCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Status_motoristasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Status_motoristas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Status_motoristasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Status_motoristasAggregateArgs>(args: Subset<T, Status_motoristasAggregateArgs>): PrismaPromise<GetStatus_motoristasAggregateType<T>>

    /**
     * Group by Status_motoristas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Status_motoristasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Status_motoristasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Status_motoristasGroupByArgs['orderBy'] }
        : { orderBy?: Status_motoristasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Status_motoristasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatus_motoristasGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for status_motoristas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__status_motoristasClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    clientes<T extends clientesArgs= {}>(args?: Subset<T, clientesArgs>): Prisma__clientesClient<clientesGetPayload<T> | Null>;

    motoristas<T extends motoristasArgs= {}>(args?: Subset<T, motoristasArgs>): Prisma__motoristasClient<motoristasGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * status_motoristas base type for findUnique actions
   */
  export type status_motoristasFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the status_motoristas
     */
    select?: status_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_motoristasInclude | null
    /**
     * Filter, which status_motoristas to fetch.
     */
    where: status_motoristasWhereUniqueInput
  }

  /**
   * status_motoristas findUnique
   */
  export interface status_motoristasFindUniqueArgs extends status_motoristasFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * status_motoristas findUniqueOrThrow
   */
  export type status_motoristasFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the status_motoristas
     */
    select?: status_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_motoristasInclude | null
    /**
     * Filter, which status_motoristas to fetch.
     */
    where: status_motoristasWhereUniqueInput
  }


  /**
   * status_motoristas base type for findFirst actions
   */
  export type status_motoristasFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the status_motoristas
     */
    select?: status_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_motoristasInclude | null
    /**
     * Filter, which status_motoristas to fetch.
     */
    where?: status_motoristasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of status_motoristas to fetch.
     */
    orderBy?: Enumerable<status_motoristasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for status_motoristas.
     */
    cursor?: status_motoristasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` status_motoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` status_motoristas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of status_motoristas.
     */
    distinct?: Enumerable<Status_motoristasScalarFieldEnum>
  }

  /**
   * status_motoristas findFirst
   */
  export interface status_motoristasFindFirstArgs extends status_motoristasFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * status_motoristas findFirstOrThrow
   */
  export type status_motoristasFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the status_motoristas
     */
    select?: status_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_motoristasInclude | null
    /**
     * Filter, which status_motoristas to fetch.
     */
    where?: status_motoristasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of status_motoristas to fetch.
     */
    orderBy?: Enumerable<status_motoristasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for status_motoristas.
     */
    cursor?: status_motoristasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` status_motoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` status_motoristas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of status_motoristas.
     */
    distinct?: Enumerable<Status_motoristasScalarFieldEnum>
  }


  /**
   * status_motoristas findMany
   */
  export type status_motoristasFindManyArgs = {
    /**
     * Select specific fields to fetch from the status_motoristas
     */
    select?: status_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_motoristasInclude | null
    /**
     * Filter, which status_motoristas to fetch.
     */
    where?: status_motoristasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of status_motoristas to fetch.
     */
    orderBy?: Enumerable<status_motoristasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing status_motoristas.
     */
    cursor?: status_motoristasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` status_motoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` status_motoristas.
     */
    skip?: number
    distinct?: Enumerable<Status_motoristasScalarFieldEnum>
  }


  /**
   * status_motoristas create
   */
  export type status_motoristasCreateArgs = {
    /**
     * Select specific fields to fetch from the status_motoristas
     */
    select?: status_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_motoristasInclude | null
    /**
     * The data needed to create a status_motoristas.
     */
    data: XOR<status_motoristasCreateInput, status_motoristasUncheckedCreateInput>
  }


  /**
   * status_motoristas createMany
   */
  export type status_motoristasCreateManyArgs = {
    /**
     * The data used to create many status_motoristas.
     */
    data: Enumerable<status_motoristasCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * status_motoristas update
   */
  export type status_motoristasUpdateArgs = {
    /**
     * Select specific fields to fetch from the status_motoristas
     */
    select?: status_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_motoristasInclude | null
    /**
     * The data needed to update a status_motoristas.
     */
    data: XOR<status_motoristasUpdateInput, status_motoristasUncheckedUpdateInput>
    /**
     * Choose, which status_motoristas to update.
     */
    where: status_motoristasWhereUniqueInput
  }


  /**
   * status_motoristas updateMany
   */
  export type status_motoristasUpdateManyArgs = {
    /**
     * The data used to update status_motoristas.
     */
    data: XOR<status_motoristasUpdateManyMutationInput, status_motoristasUncheckedUpdateManyInput>
    /**
     * Filter which status_motoristas to update
     */
    where?: status_motoristasWhereInput
  }


  /**
   * status_motoristas upsert
   */
  export type status_motoristasUpsertArgs = {
    /**
     * Select specific fields to fetch from the status_motoristas
     */
    select?: status_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_motoristasInclude | null
    /**
     * The filter to search for the status_motoristas to update in case it exists.
     */
    where: status_motoristasWhereUniqueInput
    /**
     * In case the status_motoristas found by the `where` argument doesn't exist, create a new status_motoristas with this data.
     */
    create: XOR<status_motoristasCreateInput, status_motoristasUncheckedCreateInput>
    /**
     * In case the status_motoristas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<status_motoristasUpdateInput, status_motoristasUncheckedUpdateInput>
  }


  /**
   * status_motoristas delete
   */
  export type status_motoristasDeleteArgs = {
    /**
     * Select specific fields to fetch from the status_motoristas
     */
    select?: status_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_motoristasInclude | null
    /**
     * Filter which status_motoristas to delete.
     */
    where: status_motoristasWhereUniqueInput
  }


  /**
   * status_motoristas deleteMany
   */
  export type status_motoristasDeleteManyArgs = {
    /**
     * Filter which status_motoristas to delete
     */
    where?: status_motoristasWhereInput
  }


  /**
   * status_motoristas without action
   */
  export type status_motoristasArgs = {
    /**
     * Select specific fields to fetch from the status_motoristas
     */
    select?: status_motoristasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_motoristasInclude | null
  }



  /**
   * Model status_proprietarios
   */


  export type AggregateStatus_proprietarios = {
    _count: Status_proprietariosCountAggregateOutputType | null
    _avg: Status_proprietariosAvgAggregateOutputType | null
    _sum: Status_proprietariosSumAggregateOutputType | null
    _min: Status_proprietariosMinAggregateOutputType | null
    _max: Status_proprietariosMaxAggregateOutputType | null
  }

  export type Status_proprietariosAvgAggregateOutputType = {
    id: number | null
    idproprietario: number | null
    idcliente: number | null
    clientesId: number | null
    proprietariosId: number | null
  }

  export type Status_proprietariosSumAggregateOutputType = {
    id: number | null
    idproprietario: bigint | null
    idcliente: bigint | null
    clientesId: number | null
    proprietariosId: number | null
  }

  export type Status_proprietariosMinAggregateOutputType = {
    id: number | null
    idproprietario: bigint | null
    idcliente: bigint | null
    lote_arquivo: string | null
    dt_cliente: Date | null
    numero_cliente: string | null
    status_proprietario: enum_status_proprietario | null
    dt_criacao: Date | null
    dt_atualizacao: Date | null
    clientesId: number | null
    proprietariosId: number | null
  }

  export type Status_proprietariosMaxAggregateOutputType = {
    id: number | null
    idproprietario: bigint | null
    idcliente: bigint | null
    lote_arquivo: string | null
    dt_cliente: Date | null
    numero_cliente: string | null
    status_proprietario: enum_status_proprietario | null
    dt_criacao: Date | null
    dt_atualizacao: Date | null
    clientesId: number | null
    proprietariosId: number | null
  }

  export type Status_proprietariosCountAggregateOutputType = {
    id: number
    idproprietario: number
    idcliente: number
    lote_arquivo: number
    dt_cliente: number
    numero_cliente: number
    status_proprietario: number
    dt_criacao: number
    dt_atualizacao: number
    clientesId: number
    proprietariosId: number
    _all: number
  }


  export type Status_proprietariosAvgAggregateInputType = {
    id?: true
    idproprietario?: true
    idcliente?: true
    clientesId?: true
    proprietariosId?: true
  }

  export type Status_proprietariosSumAggregateInputType = {
    id?: true
    idproprietario?: true
    idcliente?: true
    clientesId?: true
    proprietariosId?: true
  }

  export type Status_proprietariosMinAggregateInputType = {
    id?: true
    idproprietario?: true
    idcliente?: true
    lote_arquivo?: true
    dt_cliente?: true
    numero_cliente?: true
    status_proprietario?: true
    dt_criacao?: true
    dt_atualizacao?: true
    clientesId?: true
    proprietariosId?: true
  }

  export type Status_proprietariosMaxAggregateInputType = {
    id?: true
    idproprietario?: true
    idcliente?: true
    lote_arquivo?: true
    dt_cliente?: true
    numero_cliente?: true
    status_proprietario?: true
    dt_criacao?: true
    dt_atualizacao?: true
    clientesId?: true
    proprietariosId?: true
  }

  export type Status_proprietariosCountAggregateInputType = {
    id?: true
    idproprietario?: true
    idcliente?: true
    lote_arquivo?: true
    dt_cliente?: true
    numero_cliente?: true
    status_proprietario?: true
    dt_criacao?: true
    dt_atualizacao?: true
    clientesId?: true
    proprietariosId?: true
    _all?: true
  }

  export type Status_proprietariosAggregateArgs = {
    /**
     * Filter which status_proprietarios to aggregate.
     */
    where?: status_proprietariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of status_proprietarios to fetch.
     */
    orderBy?: Enumerable<status_proprietariosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: status_proprietariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` status_proprietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` status_proprietarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned status_proprietarios
    **/
    _count?: true | Status_proprietariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Status_proprietariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Status_proprietariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Status_proprietariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Status_proprietariosMaxAggregateInputType
  }

  export type GetStatus_proprietariosAggregateType<T extends Status_proprietariosAggregateArgs> = {
        [P in keyof T & keyof AggregateStatus_proprietarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatus_proprietarios[P]>
      : GetScalarType<T[P], AggregateStatus_proprietarios[P]>
  }




  export type Status_proprietariosGroupByArgs = {
    where?: status_proprietariosWhereInput
    orderBy?: Enumerable<status_proprietariosOrderByWithAggregationInput>
    by: Status_proprietariosScalarFieldEnum[]
    having?: status_proprietariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Status_proprietariosCountAggregateInputType | true
    _avg?: Status_proprietariosAvgAggregateInputType
    _sum?: Status_proprietariosSumAggregateInputType
    _min?: Status_proprietariosMinAggregateInputType
    _max?: Status_proprietariosMaxAggregateInputType
  }


  export type Status_proprietariosGroupByOutputType = {
    id: number
    idproprietario: bigint
    idcliente: bigint
    lote_arquivo: string | null
    dt_cliente: Date
    numero_cliente: string | null
    status_proprietario: enum_status_proprietario
    dt_criacao: Date
    dt_atualizacao: Date
    clientesId: number | null
    proprietariosId: number | null
    _count: Status_proprietariosCountAggregateOutputType | null
    _avg: Status_proprietariosAvgAggregateOutputType | null
    _sum: Status_proprietariosSumAggregateOutputType | null
    _min: Status_proprietariosMinAggregateOutputType | null
    _max: Status_proprietariosMaxAggregateOutputType | null
  }

  type GetStatus_proprietariosGroupByPayload<T extends Status_proprietariosGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Status_proprietariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Status_proprietariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Status_proprietariosGroupByOutputType[P]>
            : GetScalarType<T[P], Status_proprietariosGroupByOutputType[P]>
        }
      >
    >


  export type status_proprietariosSelect = {
    id?: boolean
    idproprietario?: boolean
    idcliente?: boolean
    lote_arquivo?: boolean
    dt_cliente?: boolean
    numero_cliente?: boolean
    status_proprietario?: boolean
    dt_criacao?: boolean
    dt_atualizacao?: boolean
    clientes?: boolean | clientesArgs
    clientesId?: boolean
    proprietarios?: boolean | proprietariosArgs
    proprietariosId?: boolean
  }


  export type status_proprietariosInclude = {
    clientes?: boolean | clientesArgs
    proprietarios?: boolean | proprietariosArgs
  }

  export type status_proprietariosGetPayload<S extends boolean | null | undefined | status_proprietariosArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? status_proprietarios :
    S extends undefined ? never :
    S extends { include: any } & (status_proprietariosArgs | status_proprietariosFindManyArgs)
    ? status_proprietarios  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'clientes' ? clientesGetPayload<S['include'][P]> | null :
        P extends 'proprietarios' ? proprietariosGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (status_proprietariosArgs | status_proprietariosFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'clientes' ? clientesGetPayload<S['select'][P]> | null :
        P extends 'proprietarios' ? proprietariosGetPayload<S['select'][P]> | null :  P extends keyof status_proprietarios ? status_proprietarios[P] : never
  } 
      : status_proprietarios


  type status_proprietariosCountArgs = 
    Omit<status_proprietariosFindManyArgs, 'select' | 'include'> & {
      select?: Status_proprietariosCountAggregateInputType | true
    }

  export interface status_proprietariosDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Status_proprietarios that matches the filter.
     * @param {status_proprietariosFindUniqueArgs} args - Arguments to find a Status_proprietarios
     * @example
     * // Get one Status_proprietarios
     * const status_proprietarios = await prisma.status_proprietarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends status_proprietariosFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, status_proprietariosFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'status_proprietarios'> extends True ? Prisma__status_proprietariosClient<status_proprietariosGetPayload<T>> : Prisma__status_proprietariosClient<status_proprietariosGetPayload<T> | null, null>

    /**
     * Find one Status_proprietarios that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {status_proprietariosFindUniqueOrThrowArgs} args - Arguments to find a Status_proprietarios
     * @example
     * // Get one Status_proprietarios
     * const status_proprietarios = await prisma.status_proprietarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends status_proprietariosFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, status_proprietariosFindUniqueOrThrowArgs>
    ): Prisma__status_proprietariosClient<status_proprietariosGetPayload<T>>

    /**
     * Find the first Status_proprietarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {status_proprietariosFindFirstArgs} args - Arguments to find a Status_proprietarios
     * @example
     * // Get one Status_proprietarios
     * const status_proprietarios = await prisma.status_proprietarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends status_proprietariosFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, status_proprietariosFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'status_proprietarios'> extends True ? Prisma__status_proprietariosClient<status_proprietariosGetPayload<T>> : Prisma__status_proprietariosClient<status_proprietariosGetPayload<T> | null, null>

    /**
     * Find the first Status_proprietarios that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {status_proprietariosFindFirstOrThrowArgs} args - Arguments to find a Status_proprietarios
     * @example
     * // Get one Status_proprietarios
     * const status_proprietarios = await prisma.status_proprietarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends status_proprietariosFindFirstOrThrowArgs>(
      args?: SelectSubset<T, status_proprietariosFindFirstOrThrowArgs>
    ): Prisma__status_proprietariosClient<status_proprietariosGetPayload<T>>

    /**
     * Find zero or more Status_proprietarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {status_proprietariosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Status_proprietarios
     * const status_proprietarios = await prisma.status_proprietarios.findMany()
     * 
     * // Get first 10 Status_proprietarios
     * const status_proprietarios = await prisma.status_proprietarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const status_proprietariosWithIdOnly = await prisma.status_proprietarios.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends status_proprietariosFindManyArgs>(
      args?: SelectSubset<T, status_proprietariosFindManyArgs>
    ): PrismaPromise<Array<status_proprietariosGetPayload<T>>>

    /**
     * Create a Status_proprietarios.
     * @param {status_proprietariosCreateArgs} args - Arguments to create a Status_proprietarios.
     * @example
     * // Create one Status_proprietarios
     * const Status_proprietarios = await prisma.status_proprietarios.create({
     *   data: {
     *     // ... data to create a Status_proprietarios
     *   }
     * })
     * 
    **/
    create<T extends status_proprietariosCreateArgs>(
      args: SelectSubset<T, status_proprietariosCreateArgs>
    ): Prisma__status_proprietariosClient<status_proprietariosGetPayload<T>>

    /**
     * Create many Status_proprietarios.
     *     @param {status_proprietariosCreateManyArgs} args - Arguments to create many Status_proprietarios.
     *     @example
     *     // Create many Status_proprietarios
     *     const status_proprietarios = await prisma.status_proprietarios.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends status_proprietariosCreateManyArgs>(
      args?: SelectSubset<T, status_proprietariosCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Status_proprietarios.
     * @param {status_proprietariosDeleteArgs} args - Arguments to delete one Status_proprietarios.
     * @example
     * // Delete one Status_proprietarios
     * const Status_proprietarios = await prisma.status_proprietarios.delete({
     *   where: {
     *     // ... filter to delete one Status_proprietarios
     *   }
     * })
     * 
    **/
    delete<T extends status_proprietariosDeleteArgs>(
      args: SelectSubset<T, status_proprietariosDeleteArgs>
    ): Prisma__status_proprietariosClient<status_proprietariosGetPayload<T>>

    /**
     * Update one Status_proprietarios.
     * @param {status_proprietariosUpdateArgs} args - Arguments to update one Status_proprietarios.
     * @example
     * // Update one Status_proprietarios
     * const status_proprietarios = await prisma.status_proprietarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends status_proprietariosUpdateArgs>(
      args: SelectSubset<T, status_proprietariosUpdateArgs>
    ): Prisma__status_proprietariosClient<status_proprietariosGetPayload<T>>

    /**
     * Delete zero or more Status_proprietarios.
     * @param {status_proprietariosDeleteManyArgs} args - Arguments to filter Status_proprietarios to delete.
     * @example
     * // Delete a few Status_proprietarios
     * const { count } = await prisma.status_proprietarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends status_proprietariosDeleteManyArgs>(
      args?: SelectSubset<T, status_proprietariosDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Status_proprietarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {status_proprietariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Status_proprietarios
     * const status_proprietarios = await prisma.status_proprietarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends status_proprietariosUpdateManyArgs>(
      args: SelectSubset<T, status_proprietariosUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Status_proprietarios.
     * @param {status_proprietariosUpsertArgs} args - Arguments to update or create a Status_proprietarios.
     * @example
     * // Update or create a Status_proprietarios
     * const status_proprietarios = await prisma.status_proprietarios.upsert({
     *   create: {
     *     // ... data to create a Status_proprietarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Status_proprietarios we want to update
     *   }
     * })
    **/
    upsert<T extends status_proprietariosUpsertArgs>(
      args: SelectSubset<T, status_proprietariosUpsertArgs>
    ): Prisma__status_proprietariosClient<status_proprietariosGetPayload<T>>

    /**
     * Count the number of Status_proprietarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {status_proprietariosCountArgs} args - Arguments to filter Status_proprietarios to count.
     * @example
     * // Count the number of Status_proprietarios
     * const count = await prisma.status_proprietarios.count({
     *   where: {
     *     // ... the filter for the Status_proprietarios we want to count
     *   }
     * })
    **/
    count<T extends status_proprietariosCountArgs>(
      args?: Subset<T, status_proprietariosCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Status_proprietariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Status_proprietarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Status_proprietariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Status_proprietariosAggregateArgs>(args: Subset<T, Status_proprietariosAggregateArgs>): PrismaPromise<GetStatus_proprietariosAggregateType<T>>

    /**
     * Group by Status_proprietarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Status_proprietariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Status_proprietariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Status_proprietariosGroupByArgs['orderBy'] }
        : { orderBy?: Status_proprietariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Status_proprietariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatus_proprietariosGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for status_proprietarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__status_proprietariosClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    clientes<T extends clientesArgs= {}>(args?: Subset<T, clientesArgs>): Prisma__clientesClient<clientesGetPayload<T> | Null>;

    proprietarios<T extends proprietariosArgs= {}>(args?: Subset<T, proprietariosArgs>): Prisma__proprietariosClient<proprietariosGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * status_proprietarios base type for findUnique actions
   */
  export type status_proprietariosFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the status_proprietarios
     */
    select?: status_proprietariosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_proprietariosInclude | null
    /**
     * Filter, which status_proprietarios to fetch.
     */
    where: status_proprietariosWhereUniqueInput
  }

  /**
   * status_proprietarios findUnique
   */
  export interface status_proprietariosFindUniqueArgs extends status_proprietariosFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * status_proprietarios findUniqueOrThrow
   */
  export type status_proprietariosFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the status_proprietarios
     */
    select?: status_proprietariosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_proprietariosInclude | null
    /**
     * Filter, which status_proprietarios to fetch.
     */
    where: status_proprietariosWhereUniqueInput
  }


  /**
   * status_proprietarios base type for findFirst actions
   */
  export type status_proprietariosFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the status_proprietarios
     */
    select?: status_proprietariosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_proprietariosInclude | null
    /**
     * Filter, which status_proprietarios to fetch.
     */
    where?: status_proprietariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of status_proprietarios to fetch.
     */
    orderBy?: Enumerable<status_proprietariosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for status_proprietarios.
     */
    cursor?: status_proprietariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` status_proprietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` status_proprietarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of status_proprietarios.
     */
    distinct?: Enumerable<Status_proprietariosScalarFieldEnum>
  }

  /**
   * status_proprietarios findFirst
   */
  export interface status_proprietariosFindFirstArgs extends status_proprietariosFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * status_proprietarios findFirstOrThrow
   */
  export type status_proprietariosFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the status_proprietarios
     */
    select?: status_proprietariosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_proprietariosInclude | null
    /**
     * Filter, which status_proprietarios to fetch.
     */
    where?: status_proprietariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of status_proprietarios to fetch.
     */
    orderBy?: Enumerable<status_proprietariosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for status_proprietarios.
     */
    cursor?: status_proprietariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` status_proprietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` status_proprietarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of status_proprietarios.
     */
    distinct?: Enumerable<Status_proprietariosScalarFieldEnum>
  }


  /**
   * status_proprietarios findMany
   */
  export type status_proprietariosFindManyArgs = {
    /**
     * Select specific fields to fetch from the status_proprietarios
     */
    select?: status_proprietariosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_proprietariosInclude | null
    /**
     * Filter, which status_proprietarios to fetch.
     */
    where?: status_proprietariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of status_proprietarios to fetch.
     */
    orderBy?: Enumerable<status_proprietariosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing status_proprietarios.
     */
    cursor?: status_proprietariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` status_proprietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` status_proprietarios.
     */
    skip?: number
    distinct?: Enumerable<Status_proprietariosScalarFieldEnum>
  }


  /**
   * status_proprietarios create
   */
  export type status_proprietariosCreateArgs = {
    /**
     * Select specific fields to fetch from the status_proprietarios
     */
    select?: status_proprietariosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_proprietariosInclude | null
    /**
     * The data needed to create a status_proprietarios.
     */
    data: XOR<status_proprietariosCreateInput, status_proprietariosUncheckedCreateInput>
  }


  /**
   * status_proprietarios createMany
   */
  export type status_proprietariosCreateManyArgs = {
    /**
     * The data used to create many status_proprietarios.
     */
    data: Enumerable<status_proprietariosCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * status_proprietarios update
   */
  export type status_proprietariosUpdateArgs = {
    /**
     * Select specific fields to fetch from the status_proprietarios
     */
    select?: status_proprietariosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_proprietariosInclude | null
    /**
     * The data needed to update a status_proprietarios.
     */
    data: XOR<status_proprietariosUpdateInput, status_proprietariosUncheckedUpdateInput>
    /**
     * Choose, which status_proprietarios to update.
     */
    where: status_proprietariosWhereUniqueInput
  }


  /**
   * status_proprietarios updateMany
   */
  export type status_proprietariosUpdateManyArgs = {
    /**
     * The data used to update status_proprietarios.
     */
    data: XOR<status_proprietariosUpdateManyMutationInput, status_proprietariosUncheckedUpdateManyInput>
    /**
     * Filter which status_proprietarios to update
     */
    where?: status_proprietariosWhereInput
  }


  /**
   * status_proprietarios upsert
   */
  export type status_proprietariosUpsertArgs = {
    /**
     * Select specific fields to fetch from the status_proprietarios
     */
    select?: status_proprietariosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_proprietariosInclude | null
    /**
     * The filter to search for the status_proprietarios to update in case it exists.
     */
    where: status_proprietariosWhereUniqueInput
    /**
     * In case the status_proprietarios found by the `where` argument doesn't exist, create a new status_proprietarios with this data.
     */
    create: XOR<status_proprietariosCreateInput, status_proprietariosUncheckedCreateInput>
    /**
     * In case the status_proprietarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<status_proprietariosUpdateInput, status_proprietariosUncheckedUpdateInput>
  }


  /**
   * status_proprietarios delete
   */
  export type status_proprietariosDeleteArgs = {
    /**
     * Select specific fields to fetch from the status_proprietarios
     */
    select?: status_proprietariosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_proprietariosInclude | null
    /**
     * Filter which status_proprietarios to delete.
     */
    where: status_proprietariosWhereUniqueInput
  }


  /**
   * status_proprietarios deleteMany
   */
  export type status_proprietariosDeleteManyArgs = {
    /**
     * Filter which status_proprietarios to delete
     */
    where?: status_proprietariosWhereInput
  }


  /**
   * status_proprietarios without action
   */
  export type status_proprietariosArgs = {
    /**
     * Select specific fields to fetch from the status_proprietarios
     */
    select?: status_proprietariosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_proprietariosInclude | null
  }



  /**
   * Model status_veiculos
   */


  export type AggregateStatus_veiculos = {
    _count: Status_veiculosCountAggregateOutputType | null
    _avg: Status_veiculosAvgAggregateOutputType | null
    _sum: Status_veiculosSumAggregateOutputType | null
    _min: Status_veiculosMinAggregateOutputType | null
    _max: Status_veiculosMaxAggregateOutputType | null
  }

  export type Status_veiculosAvgAggregateOutputType = {
    id: number | null
    idveiculo: number | null
    idcliente: number | null
    clientesId: number | null
    veiculosId: number | null
  }

  export type Status_veiculosSumAggregateOutputType = {
    id: number | null
    idveiculo: bigint | null
    idcliente: bigint | null
    clientesId: number | null
    veiculosId: number | null
  }

  export type Status_veiculosMinAggregateOutputType = {
    id: number | null
    idveiculo: bigint | null
    idcliente: bigint | null
    lote_arquivo: string | null
    dt_cliente: Date | null
    numero_cliente: string | null
    status_veiculo: enum_status_veiculo | null
    dt_criacao: Date | null
    dt_atualizacao: Date | null
    clientesId: number | null
    veiculosId: number | null
  }

  export type Status_veiculosMaxAggregateOutputType = {
    id: number | null
    idveiculo: bigint | null
    idcliente: bigint | null
    lote_arquivo: string | null
    dt_cliente: Date | null
    numero_cliente: string | null
    status_veiculo: enum_status_veiculo | null
    dt_criacao: Date | null
    dt_atualizacao: Date | null
    clientesId: number | null
    veiculosId: number | null
  }

  export type Status_veiculosCountAggregateOutputType = {
    id: number
    idveiculo: number
    idcliente: number
    lote_arquivo: number
    dt_cliente: number
    numero_cliente: number
    status_veiculo: number
    dt_criacao: number
    dt_atualizacao: number
    clientesId: number
    veiculosId: number
    _all: number
  }


  export type Status_veiculosAvgAggregateInputType = {
    id?: true
    idveiculo?: true
    idcliente?: true
    clientesId?: true
    veiculosId?: true
  }

  export type Status_veiculosSumAggregateInputType = {
    id?: true
    idveiculo?: true
    idcliente?: true
    clientesId?: true
    veiculosId?: true
  }

  export type Status_veiculosMinAggregateInputType = {
    id?: true
    idveiculo?: true
    idcliente?: true
    lote_arquivo?: true
    dt_cliente?: true
    numero_cliente?: true
    status_veiculo?: true
    dt_criacao?: true
    dt_atualizacao?: true
    clientesId?: true
    veiculosId?: true
  }

  export type Status_veiculosMaxAggregateInputType = {
    id?: true
    idveiculo?: true
    idcliente?: true
    lote_arquivo?: true
    dt_cliente?: true
    numero_cliente?: true
    status_veiculo?: true
    dt_criacao?: true
    dt_atualizacao?: true
    clientesId?: true
    veiculosId?: true
  }

  export type Status_veiculosCountAggregateInputType = {
    id?: true
    idveiculo?: true
    idcliente?: true
    lote_arquivo?: true
    dt_cliente?: true
    numero_cliente?: true
    status_veiculo?: true
    dt_criacao?: true
    dt_atualizacao?: true
    clientesId?: true
    veiculosId?: true
    _all?: true
  }

  export type Status_veiculosAggregateArgs = {
    /**
     * Filter which status_veiculos to aggregate.
     */
    where?: status_veiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of status_veiculos to fetch.
     */
    orderBy?: Enumerable<status_veiculosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: status_veiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` status_veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` status_veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned status_veiculos
    **/
    _count?: true | Status_veiculosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Status_veiculosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Status_veiculosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Status_veiculosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Status_veiculosMaxAggregateInputType
  }

  export type GetStatus_veiculosAggregateType<T extends Status_veiculosAggregateArgs> = {
        [P in keyof T & keyof AggregateStatus_veiculos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatus_veiculos[P]>
      : GetScalarType<T[P], AggregateStatus_veiculos[P]>
  }




  export type Status_veiculosGroupByArgs = {
    where?: status_veiculosWhereInput
    orderBy?: Enumerable<status_veiculosOrderByWithAggregationInput>
    by: Status_veiculosScalarFieldEnum[]
    having?: status_veiculosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Status_veiculosCountAggregateInputType | true
    _avg?: Status_veiculosAvgAggregateInputType
    _sum?: Status_veiculosSumAggregateInputType
    _min?: Status_veiculosMinAggregateInputType
    _max?: Status_veiculosMaxAggregateInputType
  }


  export type Status_veiculosGroupByOutputType = {
    id: number
    idveiculo: bigint
    idcliente: bigint
    lote_arquivo: string | null
    dt_cliente: Date
    numero_cliente: string | null
    status_veiculo: enum_status_veiculo
    dt_criacao: Date
    dt_atualizacao: Date
    clientesId: number | null
    veiculosId: number | null
    _count: Status_veiculosCountAggregateOutputType | null
    _avg: Status_veiculosAvgAggregateOutputType | null
    _sum: Status_veiculosSumAggregateOutputType | null
    _min: Status_veiculosMinAggregateOutputType | null
    _max: Status_veiculosMaxAggregateOutputType | null
  }

  type GetStatus_veiculosGroupByPayload<T extends Status_veiculosGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Status_veiculosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Status_veiculosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Status_veiculosGroupByOutputType[P]>
            : GetScalarType<T[P], Status_veiculosGroupByOutputType[P]>
        }
      >
    >


  export type status_veiculosSelect = {
    id?: boolean
    idveiculo?: boolean
    idcliente?: boolean
    lote_arquivo?: boolean
    dt_cliente?: boolean
    numero_cliente?: boolean
    status_veiculo?: boolean
    dt_criacao?: boolean
    dt_atualizacao?: boolean
    clientes?: boolean | clientesArgs
    clientesId?: boolean
    veiculos?: boolean | veiculosArgs
    veiculosId?: boolean
  }


  export type status_veiculosInclude = {
    clientes?: boolean | clientesArgs
    veiculos?: boolean | veiculosArgs
  }

  export type status_veiculosGetPayload<S extends boolean | null | undefined | status_veiculosArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? status_veiculos :
    S extends undefined ? never :
    S extends { include: any } & (status_veiculosArgs | status_veiculosFindManyArgs)
    ? status_veiculos  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'clientes' ? clientesGetPayload<S['include'][P]> | null :
        P extends 'veiculos' ? veiculosGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (status_veiculosArgs | status_veiculosFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'clientes' ? clientesGetPayload<S['select'][P]> | null :
        P extends 'veiculos' ? veiculosGetPayload<S['select'][P]> | null :  P extends keyof status_veiculos ? status_veiculos[P] : never
  } 
      : status_veiculos


  type status_veiculosCountArgs = 
    Omit<status_veiculosFindManyArgs, 'select' | 'include'> & {
      select?: Status_veiculosCountAggregateInputType | true
    }

  export interface status_veiculosDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Status_veiculos that matches the filter.
     * @param {status_veiculosFindUniqueArgs} args - Arguments to find a Status_veiculos
     * @example
     * // Get one Status_veiculos
     * const status_veiculos = await prisma.status_veiculos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends status_veiculosFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, status_veiculosFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'status_veiculos'> extends True ? Prisma__status_veiculosClient<status_veiculosGetPayload<T>> : Prisma__status_veiculosClient<status_veiculosGetPayload<T> | null, null>

    /**
     * Find one Status_veiculos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {status_veiculosFindUniqueOrThrowArgs} args - Arguments to find a Status_veiculos
     * @example
     * // Get one Status_veiculos
     * const status_veiculos = await prisma.status_veiculos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends status_veiculosFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, status_veiculosFindUniqueOrThrowArgs>
    ): Prisma__status_veiculosClient<status_veiculosGetPayload<T>>

    /**
     * Find the first Status_veiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {status_veiculosFindFirstArgs} args - Arguments to find a Status_veiculos
     * @example
     * // Get one Status_veiculos
     * const status_veiculos = await prisma.status_veiculos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends status_veiculosFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, status_veiculosFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'status_veiculos'> extends True ? Prisma__status_veiculosClient<status_veiculosGetPayload<T>> : Prisma__status_veiculosClient<status_veiculosGetPayload<T> | null, null>

    /**
     * Find the first Status_veiculos that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {status_veiculosFindFirstOrThrowArgs} args - Arguments to find a Status_veiculos
     * @example
     * // Get one Status_veiculos
     * const status_veiculos = await prisma.status_veiculos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends status_veiculosFindFirstOrThrowArgs>(
      args?: SelectSubset<T, status_veiculosFindFirstOrThrowArgs>
    ): Prisma__status_veiculosClient<status_veiculosGetPayload<T>>

    /**
     * Find zero or more Status_veiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {status_veiculosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Status_veiculos
     * const status_veiculos = await prisma.status_veiculos.findMany()
     * 
     * // Get first 10 Status_veiculos
     * const status_veiculos = await prisma.status_veiculos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const status_veiculosWithIdOnly = await prisma.status_veiculos.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends status_veiculosFindManyArgs>(
      args?: SelectSubset<T, status_veiculosFindManyArgs>
    ): PrismaPromise<Array<status_veiculosGetPayload<T>>>

    /**
     * Create a Status_veiculos.
     * @param {status_veiculosCreateArgs} args - Arguments to create a Status_veiculos.
     * @example
     * // Create one Status_veiculos
     * const Status_veiculos = await prisma.status_veiculos.create({
     *   data: {
     *     // ... data to create a Status_veiculos
     *   }
     * })
     * 
    **/
    create<T extends status_veiculosCreateArgs>(
      args: SelectSubset<T, status_veiculosCreateArgs>
    ): Prisma__status_veiculosClient<status_veiculosGetPayload<T>>

    /**
     * Create many Status_veiculos.
     *     @param {status_veiculosCreateManyArgs} args - Arguments to create many Status_veiculos.
     *     @example
     *     // Create many Status_veiculos
     *     const status_veiculos = await prisma.status_veiculos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends status_veiculosCreateManyArgs>(
      args?: SelectSubset<T, status_veiculosCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Status_veiculos.
     * @param {status_veiculosDeleteArgs} args - Arguments to delete one Status_veiculos.
     * @example
     * // Delete one Status_veiculos
     * const Status_veiculos = await prisma.status_veiculos.delete({
     *   where: {
     *     // ... filter to delete one Status_veiculos
     *   }
     * })
     * 
    **/
    delete<T extends status_veiculosDeleteArgs>(
      args: SelectSubset<T, status_veiculosDeleteArgs>
    ): Prisma__status_veiculosClient<status_veiculosGetPayload<T>>

    /**
     * Update one Status_veiculos.
     * @param {status_veiculosUpdateArgs} args - Arguments to update one Status_veiculos.
     * @example
     * // Update one Status_veiculos
     * const status_veiculos = await prisma.status_veiculos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends status_veiculosUpdateArgs>(
      args: SelectSubset<T, status_veiculosUpdateArgs>
    ): Prisma__status_veiculosClient<status_veiculosGetPayload<T>>

    /**
     * Delete zero or more Status_veiculos.
     * @param {status_veiculosDeleteManyArgs} args - Arguments to filter Status_veiculos to delete.
     * @example
     * // Delete a few Status_veiculos
     * const { count } = await prisma.status_veiculos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends status_veiculosDeleteManyArgs>(
      args?: SelectSubset<T, status_veiculosDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Status_veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {status_veiculosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Status_veiculos
     * const status_veiculos = await prisma.status_veiculos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends status_veiculosUpdateManyArgs>(
      args: SelectSubset<T, status_veiculosUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Status_veiculos.
     * @param {status_veiculosUpsertArgs} args - Arguments to update or create a Status_veiculos.
     * @example
     * // Update or create a Status_veiculos
     * const status_veiculos = await prisma.status_veiculos.upsert({
     *   create: {
     *     // ... data to create a Status_veiculos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Status_veiculos we want to update
     *   }
     * })
    **/
    upsert<T extends status_veiculosUpsertArgs>(
      args: SelectSubset<T, status_veiculosUpsertArgs>
    ): Prisma__status_veiculosClient<status_veiculosGetPayload<T>>

    /**
     * Count the number of Status_veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {status_veiculosCountArgs} args - Arguments to filter Status_veiculos to count.
     * @example
     * // Count the number of Status_veiculos
     * const count = await prisma.status_veiculos.count({
     *   where: {
     *     // ... the filter for the Status_veiculos we want to count
     *   }
     * })
    **/
    count<T extends status_veiculosCountArgs>(
      args?: Subset<T, status_veiculosCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Status_veiculosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Status_veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Status_veiculosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Status_veiculosAggregateArgs>(args: Subset<T, Status_veiculosAggregateArgs>): PrismaPromise<GetStatus_veiculosAggregateType<T>>

    /**
     * Group by Status_veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Status_veiculosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Status_veiculosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Status_veiculosGroupByArgs['orderBy'] }
        : { orderBy?: Status_veiculosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Status_veiculosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatus_veiculosGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for status_veiculos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__status_veiculosClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    clientes<T extends clientesArgs= {}>(args?: Subset<T, clientesArgs>): Prisma__clientesClient<clientesGetPayload<T> | Null>;

    veiculos<T extends veiculosArgs= {}>(args?: Subset<T, veiculosArgs>): Prisma__veiculosClient<veiculosGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * status_veiculos base type for findUnique actions
   */
  export type status_veiculosFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the status_veiculos
     */
    select?: status_veiculosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_veiculosInclude | null
    /**
     * Filter, which status_veiculos to fetch.
     */
    where: status_veiculosWhereUniqueInput
  }

  /**
   * status_veiculos findUnique
   */
  export interface status_veiculosFindUniqueArgs extends status_veiculosFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * status_veiculos findUniqueOrThrow
   */
  export type status_veiculosFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the status_veiculos
     */
    select?: status_veiculosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_veiculosInclude | null
    /**
     * Filter, which status_veiculos to fetch.
     */
    where: status_veiculosWhereUniqueInput
  }


  /**
   * status_veiculos base type for findFirst actions
   */
  export type status_veiculosFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the status_veiculos
     */
    select?: status_veiculosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_veiculosInclude | null
    /**
     * Filter, which status_veiculos to fetch.
     */
    where?: status_veiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of status_veiculos to fetch.
     */
    orderBy?: Enumerable<status_veiculosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for status_veiculos.
     */
    cursor?: status_veiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` status_veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` status_veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of status_veiculos.
     */
    distinct?: Enumerable<Status_veiculosScalarFieldEnum>
  }

  /**
   * status_veiculos findFirst
   */
  export interface status_veiculosFindFirstArgs extends status_veiculosFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * status_veiculos findFirstOrThrow
   */
  export type status_veiculosFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the status_veiculos
     */
    select?: status_veiculosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_veiculosInclude | null
    /**
     * Filter, which status_veiculos to fetch.
     */
    where?: status_veiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of status_veiculos to fetch.
     */
    orderBy?: Enumerable<status_veiculosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for status_veiculos.
     */
    cursor?: status_veiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` status_veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` status_veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of status_veiculos.
     */
    distinct?: Enumerable<Status_veiculosScalarFieldEnum>
  }


  /**
   * status_veiculos findMany
   */
  export type status_veiculosFindManyArgs = {
    /**
     * Select specific fields to fetch from the status_veiculos
     */
    select?: status_veiculosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_veiculosInclude | null
    /**
     * Filter, which status_veiculos to fetch.
     */
    where?: status_veiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of status_veiculos to fetch.
     */
    orderBy?: Enumerable<status_veiculosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing status_veiculos.
     */
    cursor?: status_veiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` status_veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` status_veiculos.
     */
    skip?: number
    distinct?: Enumerable<Status_veiculosScalarFieldEnum>
  }


  /**
   * status_veiculos create
   */
  export type status_veiculosCreateArgs = {
    /**
     * Select specific fields to fetch from the status_veiculos
     */
    select?: status_veiculosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_veiculosInclude | null
    /**
     * The data needed to create a status_veiculos.
     */
    data: XOR<status_veiculosCreateInput, status_veiculosUncheckedCreateInput>
  }


  /**
   * status_veiculos createMany
   */
  export type status_veiculosCreateManyArgs = {
    /**
     * The data used to create many status_veiculos.
     */
    data: Enumerable<status_veiculosCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * status_veiculos update
   */
  export type status_veiculosUpdateArgs = {
    /**
     * Select specific fields to fetch from the status_veiculos
     */
    select?: status_veiculosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_veiculosInclude | null
    /**
     * The data needed to update a status_veiculos.
     */
    data: XOR<status_veiculosUpdateInput, status_veiculosUncheckedUpdateInput>
    /**
     * Choose, which status_veiculos to update.
     */
    where: status_veiculosWhereUniqueInput
  }


  /**
   * status_veiculos updateMany
   */
  export type status_veiculosUpdateManyArgs = {
    /**
     * The data used to update status_veiculos.
     */
    data: XOR<status_veiculosUpdateManyMutationInput, status_veiculosUncheckedUpdateManyInput>
    /**
     * Filter which status_veiculos to update
     */
    where?: status_veiculosWhereInput
  }


  /**
   * status_veiculos upsert
   */
  export type status_veiculosUpsertArgs = {
    /**
     * Select specific fields to fetch from the status_veiculos
     */
    select?: status_veiculosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_veiculosInclude | null
    /**
     * The filter to search for the status_veiculos to update in case it exists.
     */
    where: status_veiculosWhereUniqueInput
    /**
     * In case the status_veiculos found by the `where` argument doesn't exist, create a new status_veiculos with this data.
     */
    create: XOR<status_veiculosCreateInput, status_veiculosUncheckedCreateInput>
    /**
     * In case the status_veiculos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<status_veiculosUpdateInput, status_veiculosUncheckedUpdateInput>
  }


  /**
   * status_veiculos delete
   */
  export type status_veiculosDeleteArgs = {
    /**
     * Select specific fields to fetch from the status_veiculos
     */
    select?: status_veiculosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_veiculosInclude | null
    /**
     * Filter which status_veiculos to delete.
     */
    where: status_veiculosWhereUniqueInput
  }


  /**
   * status_veiculos deleteMany
   */
  export type status_veiculosDeleteManyArgs = {
    /**
     * Filter which status_veiculos to delete
     */
    where?: status_veiculosWhereInput
  }


  /**
   * status_veiculos without action
   */
  export type status_veiculosArgs = {
    /**
     * Select specific fields to fetch from the status_veiculos
     */
    select?: status_veiculosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_veiculosInclude | null
  }



  /**
   * Model veiculos
   */


  export type AggregateVeiculos = {
    _count: VeiculosCountAggregateOutputType | null
    _avg: VeiculosAvgAggregateOutputType | null
    _sum: VeiculosSumAggregateOutputType | null
    _min: VeiculosMinAggregateOutputType | null
    _max: VeiculosMaxAggregateOutputType | null
  }

  export type VeiculosAvgAggregateOutputType = {
    id: number | null
  }

  export type VeiculosSumAggregateOutputType = {
    id: number | null
  }

  export type VeiculosMinAggregateOutputType = {
    id: number | null
    placa: string | null
    renavam: string | null
    ativo: boolean | null
    cadastro_verificado: boolean | null
    dt_criacao: Date | null
    dt_atualizacao: Date | null
  }

  export type VeiculosMaxAggregateOutputType = {
    id: number | null
    placa: string | null
    renavam: string | null
    ativo: boolean | null
    cadastro_verificado: boolean | null
    dt_criacao: Date | null
    dt_atualizacao: Date | null
  }

  export type VeiculosCountAggregateOutputType = {
    id: number
    placa: number
    renavam: number
    ativo: number
    cadastro_verificado: number
    dt_criacao: number
    dt_atualizacao: number
    _all: number
  }


  export type VeiculosAvgAggregateInputType = {
    id?: true
  }

  export type VeiculosSumAggregateInputType = {
    id?: true
  }

  export type VeiculosMinAggregateInputType = {
    id?: true
    placa?: true
    renavam?: true
    ativo?: true
    cadastro_verificado?: true
    dt_criacao?: true
    dt_atualizacao?: true
  }

  export type VeiculosMaxAggregateInputType = {
    id?: true
    placa?: true
    renavam?: true
    ativo?: true
    cadastro_verificado?: true
    dt_criacao?: true
    dt_atualizacao?: true
  }

  export type VeiculosCountAggregateInputType = {
    id?: true
    placa?: true
    renavam?: true
    ativo?: true
    cadastro_verificado?: true
    dt_criacao?: true
    dt_atualizacao?: true
    _all?: true
  }

  export type VeiculosAggregateArgs = {
    /**
     * Filter which veiculos to aggregate.
     */
    where?: veiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veiculos to fetch.
     */
    orderBy?: Enumerable<veiculosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: veiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned veiculos
    **/
    _count?: true | VeiculosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VeiculosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VeiculosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeiculosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeiculosMaxAggregateInputType
  }

  export type GetVeiculosAggregateType<T extends VeiculosAggregateArgs> = {
        [P in keyof T & keyof AggregateVeiculos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeiculos[P]>
      : GetScalarType<T[P], AggregateVeiculos[P]>
  }




  export type VeiculosGroupByArgs = {
    where?: veiculosWhereInput
    orderBy?: Enumerable<veiculosOrderByWithAggregationInput>
    by: VeiculosScalarFieldEnum[]
    having?: veiculosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeiculosCountAggregateInputType | true
    _avg?: VeiculosAvgAggregateInputType
    _sum?: VeiculosSumAggregateInputType
    _min?: VeiculosMinAggregateInputType
    _max?: VeiculosMaxAggregateInputType
  }


  export type VeiculosGroupByOutputType = {
    id: number
    placa: string
    renavam: string | null
    ativo: boolean
    cadastro_verificado: boolean
    dt_criacao: Date
    dt_atualizacao: Date
    _count: VeiculosCountAggregateOutputType | null
    _avg: VeiculosAvgAggregateOutputType | null
    _sum: VeiculosSumAggregateOutputType | null
    _min: VeiculosMinAggregateOutputType | null
    _max: VeiculosMaxAggregateOutputType | null
  }

  type GetVeiculosGroupByPayload<T extends VeiculosGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VeiculosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeiculosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeiculosGroupByOutputType[P]>
            : GetScalarType<T[P], VeiculosGroupByOutputType[P]>
        }
      >
    >


  export type veiculosSelect = {
    id?: boolean
    placa?: boolean
    renavam?: boolean
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao?: boolean
    dt_atualizacao?: boolean
    status_veiculos?: boolean | veiculos$status_veiculosArgs
    viagens?: boolean | veiculos$viagensArgs
    _count?: boolean | VeiculosCountOutputTypeArgs
  }


  export type veiculosInclude = {
    status_veiculos?: boolean | veiculos$status_veiculosArgs
    viagens?: boolean | veiculos$viagensArgs
    _count?: boolean | VeiculosCountOutputTypeArgs
  }

  export type veiculosGetPayload<S extends boolean | null | undefined | veiculosArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? veiculos :
    S extends undefined ? never :
    S extends { include: any } & (veiculosArgs | veiculosFindManyArgs)
    ? veiculos  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'status_veiculos' ? Array < status_veiculosGetPayload<S['include'][P]>>  :
        P extends 'viagens' ? Array < viagensGetPayload<S['include'][P]>>  :
        P extends '_count' ? VeiculosCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (veiculosArgs | veiculosFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'status_veiculos' ? Array < status_veiculosGetPayload<S['select'][P]>>  :
        P extends 'viagens' ? Array < viagensGetPayload<S['select'][P]>>  :
        P extends '_count' ? VeiculosCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof veiculos ? veiculos[P] : never
  } 
      : veiculos


  type veiculosCountArgs = 
    Omit<veiculosFindManyArgs, 'select' | 'include'> & {
      select?: VeiculosCountAggregateInputType | true
    }

  export interface veiculosDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Veiculos that matches the filter.
     * @param {veiculosFindUniqueArgs} args - Arguments to find a Veiculos
     * @example
     * // Get one Veiculos
     * const veiculos = await prisma.veiculos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends veiculosFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, veiculosFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'veiculos'> extends True ? Prisma__veiculosClient<veiculosGetPayload<T>> : Prisma__veiculosClient<veiculosGetPayload<T> | null, null>

    /**
     * Find one Veiculos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {veiculosFindUniqueOrThrowArgs} args - Arguments to find a Veiculos
     * @example
     * // Get one Veiculos
     * const veiculos = await prisma.veiculos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends veiculosFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, veiculosFindUniqueOrThrowArgs>
    ): Prisma__veiculosClient<veiculosGetPayload<T>>

    /**
     * Find the first Veiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veiculosFindFirstArgs} args - Arguments to find a Veiculos
     * @example
     * // Get one Veiculos
     * const veiculos = await prisma.veiculos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends veiculosFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, veiculosFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'veiculos'> extends True ? Prisma__veiculosClient<veiculosGetPayload<T>> : Prisma__veiculosClient<veiculosGetPayload<T> | null, null>

    /**
     * Find the first Veiculos that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veiculosFindFirstOrThrowArgs} args - Arguments to find a Veiculos
     * @example
     * // Get one Veiculos
     * const veiculos = await prisma.veiculos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends veiculosFindFirstOrThrowArgs>(
      args?: SelectSubset<T, veiculosFindFirstOrThrowArgs>
    ): Prisma__veiculosClient<veiculosGetPayload<T>>

    /**
     * Find zero or more Veiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veiculosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Veiculos
     * const veiculos = await prisma.veiculos.findMany()
     * 
     * // Get first 10 Veiculos
     * const veiculos = await prisma.veiculos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const veiculosWithIdOnly = await prisma.veiculos.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends veiculosFindManyArgs>(
      args?: SelectSubset<T, veiculosFindManyArgs>
    ): PrismaPromise<Array<veiculosGetPayload<T>>>

    /**
     * Create a Veiculos.
     * @param {veiculosCreateArgs} args - Arguments to create a Veiculos.
     * @example
     * // Create one Veiculos
     * const Veiculos = await prisma.veiculos.create({
     *   data: {
     *     // ... data to create a Veiculos
     *   }
     * })
     * 
    **/
    create<T extends veiculosCreateArgs>(
      args: SelectSubset<T, veiculosCreateArgs>
    ): Prisma__veiculosClient<veiculosGetPayload<T>>

    /**
     * Create many Veiculos.
     *     @param {veiculosCreateManyArgs} args - Arguments to create many Veiculos.
     *     @example
     *     // Create many Veiculos
     *     const veiculos = await prisma.veiculos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends veiculosCreateManyArgs>(
      args?: SelectSubset<T, veiculosCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Veiculos.
     * @param {veiculosDeleteArgs} args - Arguments to delete one Veiculos.
     * @example
     * // Delete one Veiculos
     * const Veiculos = await prisma.veiculos.delete({
     *   where: {
     *     // ... filter to delete one Veiculos
     *   }
     * })
     * 
    **/
    delete<T extends veiculosDeleteArgs>(
      args: SelectSubset<T, veiculosDeleteArgs>
    ): Prisma__veiculosClient<veiculosGetPayload<T>>

    /**
     * Update one Veiculos.
     * @param {veiculosUpdateArgs} args - Arguments to update one Veiculos.
     * @example
     * // Update one Veiculos
     * const veiculos = await prisma.veiculos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends veiculosUpdateArgs>(
      args: SelectSubset<T, veiculosUpdateArgs>
    ): Prisma__veiculosClient<veiculosGetPayload<T>>

    /**
     * Delete zero or more Veiculos.
     * @param {veiculosDeleteManyArgs} args - Arguments to filter Veiculos to delete.
     * @example
     * // Delete a few Veiculos
     * const { count } = await prisma.veiculos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends veiculosDeleteManyArgs>(
      args?: SelectSubset<T, veiculosDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veiculosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Veiculos
     * const veiculos = await prisma.veiculos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends veiculosUpdateManyArgs>(
      args: SelectSubset<T, veiculosUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Veiculos.
     * @param {veiculosUpsertArgs} args - Arguments to update or create a Veiculos.
     * @example
     * // Update or create a Veiculos
     * const veiculos = await prisma.veiculos.upsert({
     *   create: {
     *     // ... data to create a Veiculos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Veiculos we want to update
     *   }
     * })
    **/
    upsert<T extends veiculosUpsertArgs>(
      args: SelectSubset<T, veiculosUpsertArgs>
    ): Prisma__veiculosClient<veiculosGetPayload<T>>

    /**
     * Count the number of Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veiculosCountArgs} args - Arguments to filter Veiculos to count.
     * @example
     * // Count the number of Veiculos
     * const count = await prisma.veiculos.count({
     *   where: {
     *     // ... the filter for the Veiculos we want to count
     *   }
     * })
    **/
    count<T extends veiculosCountArgs>(
      args?: Subset<T, veiculosCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeiculosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VeiculosAggregateArgs>(args: Subset<T, VeiculosAggregateArgs>): PrismaPromise<GetVeiculosAggregateType<T>>

    /**
     * Group by Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VeiculosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VeiculosGroupByArgs['orderBy'] }
        : { orderBy?: VeiculosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VeiculosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeiculosGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for veiculos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__veiculosClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    status_veiculos<T extends veiculos$status_veiculosArgs= {}>(args?: Subset<T, veiculos$status_veiculosArgs>): PrismaPromise<Array<status_veiculosGetPayload<T>>| Null>;

    viagens<T extends veiculos$viagensArgs= {}>(args?: Subset<T, veiculos$viagensArgs>): PrismaPromise<Array<viagensGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * veiculos base type for findUnique actions
   */
  export type veiculosFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the veiculos
     */
    select?: veiculosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: veiculosInclude | null
    /**
     * Filter, which veiculos to fetch.
     */
    where: veiculosWhereUniqueInput
  }

  /**
   * veiculos findUnique
   */
  export interface veiculosFindUniqueArgs extends veiculosFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * veiculos findUniqueOrThrow
   */
  export type veiculosFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the veiculos
     */
    select?: veiculosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: veiculosInclude | null
    /**
     * Filter, which veiculos to fetch.
     */
    where: veiculosWhereUniqueInput
  }


  /**
   * veiculos base type for findFirst actions
   */
  export type veiculosFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the veiculos
     */
    select?: veiculosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: veiculosInclude | null
    /**
     * Filter, which veiculos to fetch.
     */
    where?: veiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veiculos to fetch.
     */
    orderBy?: Enumerable<veiculosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for veiculos.
     */
    cursor?: veiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of veiculos.
     */
    distinct?: Enumerable<VeiculosScalarFieldEnum>
  }

  /**
   * veiculos findFirst
   */
  export interface veiculosFindFirstArgs extends veiculosFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * veiculos findFirstOrThrow
   */
  export type veiculosFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the veiculos
     */
    select?: veiculosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: veiculosInclude | null
    /**
     * Filter, which veiculos to fetch.
     */
    where?: veiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veiculos to fetch.
     */
    orderBy?: Enumerable<veiculosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for veiculos.
     */
    cursor?: veiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of veiculos.
     */
    distinct?: Enumerable<VeiculosScalarFieldEnum>
  }


  /**
   * veiculos findMany
   */
  export type veiculosFindManyArgs = {
    /**
     * Select specific fields to fetch from the veiculos
     */
    select?: veiculosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: veiculosInclude | null
    /**
     * Filter, which veiculos to fetch.
     */
    where?: veiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veiculos to fetch.
     */
    orderBy?: Enumerable<veiculosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing veiculos.
     */
    cursor?: veiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veiculos.
     */
    skip?: number
    distinct?: Enumerable<VeiculosScalarFieldEnum>
  }


  /**
   * veiculos create
   */
  export type veiculosCreateArgs = {
    /**
     * Select specific fields to fetch from the veiculos
     */
    select?: veiculosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: veiculosInclude | null
    /**
     * The data needed to create a veiculos.
     */
    data: XOR<veiculosCreateInput, veiculosUncheckedCreateInput>
  }


  /**
   * veiculos createMany
   */
  export type veiculosCreateManyArgs = {
    /**
     * The data used to create many veiculos.
     */
    data: Enumerable<veiculosCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * veiculos update
   */
  export type veiculosUpdateArgs = {
    /**
     * Select specific fields to fetch from the veiculos
     */
    select?: veiculosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: veiculosInclude | null
    /**
     * The data needed to update a veiculos.
     */
    data: XOR<veiculosUpdateInput, veiculosUncheckedUpdateInput>
    /**
     * Choose, which veiculos to update.
     */
    where: veiculosWhereUniqueInput
  }


  /**
   * veiculos updateMany
   */
  export type veiculosUpdateManyArgs = {
    /**
     * The data used to update veiculos.
     */
    data: XOR<veiculosUpdateManyMutationInput, veiculosUncheckedUpdateManyInput>
    /**
     * Filter which veiculos to update
     */
    where?: veiculosWhereInput
  }


  /**
   * veiculos upsert
   */
  export type veiculosUpsertArgs = {
    /**
     * Select specific fields to fetch from the veiculos
     */
    select?: veiculosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: veiculosInclude | null
    /**
     * The filter to search for the veiculos to update in case it exists.
     */
    where: veiculosWhereUniqueInput
    /**
     * In case the veiculos found by the `where` argument doesn't exist, create a new veiculos with this data.
     */
    create: XOR<veiculosCreateInput, veiculosUncheckedCreateInput>
    /**
     * In case the veiculos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<veiculosUpdateInput, veiculosUncheckedUpdateInput>
  }


  /**
   * veiculos delete
   */
  export type veiculosDeleteArgs = {
    /**
     * Select specific fields to fetch from the veiculos
     */
    select?: veiculosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: veiculosInclude | null
    /**
     * Filter which veiculos to delete.
     */
    where: veiculosWhereUniqueInput
  }


  /**
   * veiculos deleteMany
   */
  export type veiculosDeleteManyArgs = {
    /**
     * Filter which veiculos to delete
     */
    where?: veiculosWhereInput
  }


  /**
   * veiculos.status_veiculos
   */
  export type veiculos$status_veiculosArgs = {
    /**
     * Select specific fields to fetch from the status_veiculos
     */
    select?: status_veiculosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: status_veiculosInclude | null
    where?: status_veiculosWhereInput
    orderBy?: Enumerable<status_veiculosOrderByWithRelationInput>
    cursor?: status_veiculosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Status_veiculosScalarFieldEnum>
  }


  /**
   * veiculos.viagens
   */
  export type veiculos$viagensArgs = {
    /**
     * Select specific fields to fetch from the viagens
     */
    select?: viagensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viagensInclude | null
    where?: viagensWhereInput
    orderBy?: Enumerable<viagensOrderByWithRelationInput>
    cursor?: viagensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ViagensScalarFieldEnum>
  }


  /**
   * veiculos without action
   */
  export type veiculosArgs = {
    /**
     * Select specific fields to fetch from the veiculos
     */
    select?: veiculosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: veiculosInclude | null
  }



  /**
   * Model viagens
   */


  export type AggregateViagens = {
    _count: ViagensCountAggregateOutputType | null
    _avg: ViagensAvgAggregateOutputType | null
    _sum: ViagensSumAggregateOutputType | null
    _min: ViagensMinAggregateOutputType | null
    _max: ViagensMaxAggregateOutputType | null
  }

  export type ViagensAvgAggregateOutputType = {
    id: number | null
    idcliente: number | null
    idmotorista: number | null
    idproprietario: number | null
    idveiculo: number | null
    motoristasId: number | null
    proprietariosId: number | null
    veiculosId: number | null
  }

  export type ViagensSumAggregateOutputType = {
    id: number | null
    idcliente: number | null
    idmotorista: bigint | null
    idproprietario: bigint | null
    idveiculo: bigint | null
    motoristasId: number | null
    proprietariosId: number | null
    veiculosId: number | null
  }

  export type ViagensMinAggregateOutputType = {
    id: number | null
    idcliente: number | null
    numero_cliente: string | null
    dt_viagem: Date | null
    mercadoria: string | null
    cidade_origem: string | null
    cidade_destino: string | null
    idmotorista: bigint | null
    idproprietario: bigint | null
    idveiculo: bigint | null
    carreta1: string | null
    carreta2: string | null
    carreta3: string | null
    carreta4: string | null
    viagem_cancelado: enum_viagem | null
    dt_cancelamento: Date | null
    dt_cliente: Date | null
    dt_criacao: Date | null
    dt_atualizacao: Date | null
    motoristasId: number | null
    proprietariosId: number | null
    veiculosId: number | null
  }

  export type ViagensMaxAggregateOutputType = {
    id: number | null
    idcliente: number | null
    numero_cliente: string | null
    dt_viagem: Date | null
    mercadoria: string | null
    cidade_origem: string | null
    cidade_destino: string | null
    idmotorista: bigint | null
    idproprietario: bigint | null
    idveiculo: bigint | null
    carreta1: string | null
    carreta2: string | null
    carreta3: string | null
    carreta4: string | null
    viagem_cancelado: enum_viagem | null
    dt_cancelamento: Date | null
    dt_cliente: Date | null
    dt_criacao: Date | null
    dt_atualizacao: Date | null
    motoristasId: number | null
    proprietariosId: number | null
    veiculosId: number | null
  }

  export type ViagensCountAggregateOutputType = {
    id: number
    idcliente: number
    numero_cliente: number
    dt_viagem: number
    mercadoria: number
    cidade_origem: number
    cidade_destino: number
    idmotorista: number
    idproprietario: number
    idveiculo: number
    carreta1: number
    carreta2: number
    carreta3: number
    carreta4: number
    viagem_cancelado: number
    dt_cancelamento: number
    dt_cliente: number
    dt_criacao: number
    dt_atualizacao: number
    motoristasId: number
    proprietariosId: number
    veiculosId: number
    _all: number
  }


  export type ViagensAvgAggregateInputType = {
    id?: true
    idcliente?: true
    idmotorista?: true
    idproprietario?: true
    idveiculo?: true
    motoristasId?: true
    proprietariosId?: true
    veiculosId?: true
  }

  export type ViagensSumAggregateInputType = {
    id?: true
    idcliente?: true
    idmotorista?: true
    idproprietario?: true
    idveiculo?: true
    motoristasId?: true
    proprietariosId?: true
    veiculosId?: true
  }

  export type ViagensMinAggregateInputType = {
    id?: true
    idcliente?: true
    numero_cliente?: true
    dt_viagem?: true
    mercadoria?: true
    cidade_origem?: true
    cidade_destino?: true
    idmotorista?: true
    idproprietario?: true
    idveiculo?: true
    carreta1?: true
    carreta2?: true
    carreta3?: true
    carreta4?: true
    viagem_cancelado?: true
    dt_cancelamento?: true
    dt_cliente?: true
    dt_criacao?: true
    dt_atualizacao?: true
    motoristasId?: true
    proprietariosId?: true
    veiculosId?: true
  }

  export type ViagensMaxAggregateInputType = {
    id?: true
    idcliente?: true
    numero_cliente?: true
    dt_viagem?: true
    mercadoria?: true
    cidade_origem?: true
    cidade_destino?: true
    idmotorista?: true
    idproprietario?: true
    idveiculo?: true
    carreta1?: true
    carreta2?: true
    carreta3?: true
    carreta4?: true
    viagem_cancelado?: true
    dt_cancelamento?: true
    dt_cliente?: true
    dt_criacao?: true
    dt_atualizacao?: true
    motoristasId?: true
    proprietariosId?: true
    veiculosId?: true
  }

  export type ViagensCountAggregateInputType = {
    id?: true
    idcliente?: true
    numero_cliente?: true
    dt_viagem?: true
    mercadoria?: true
    cidade_origem?: true
    cidade_destino?: true
    idmotorista?: true
    idproprietario?: true
    idveiculo?: true
    carreta1?: true
    carreta2?: true
    carreta3?: true
    carreta4?: true
    viagem_cancelado?: true
    dt_cancelamento?: true
    dt_cliente?: true
    dt_criacao?: true
    dt_atualizacao?: true
    motoristasId?: true
    proprietariosId?: true
    veiculosId?: true
    _all?: true
  }

  export type ViagensAggregateArgs = {
    /**
     * Filter which viagens to aggregate.
     */
    where?: viagensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of viagens to fetch.
     */
    orderBy?: Enumerable<viagensOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: viagensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` viagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` viagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned viagens
    **/
    _count?: true | ViagensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViagensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViagensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViagensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViagensMaxAggregateInputType
  }

  export type GetViagensAggregateType<T extends ViagensAggregateArgs> = {
        [P in keyof T & keyof AggregateViagens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViagens[P]>
      : GetScalarType<T[P], AggregateViagens[P]>
  }




  export type ViagensGroupByArgs = {
    where?: viagensWhereInput
    orderBy?: Enumerable<viagensOrderByWithAggregationInput>
    by: ViagensScalarFieldEnum[]
    having?: viagensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViagensCountAggregateInputType | true
    _avg?: ViagensAvgAggregateInputType
    _sum?: ViagensSumAggregateInputType
    _min?: ViagensMinAggregateInputType
    _max?: ViagensMaxAggregateInputType
  }


  export type ViagensGroupByOutputType = {
    id: number
    idcliente: number
    numero_cliente: string
    dt_viagem: Date
    mercadoria: string
    cidade_origem: string
    cidade_destino: string
    idmotorista: bigint
    idproprietario: bigint
    idveiculo: bigint
    carreta1: string | null
    carreta2: string | null
    carreta3: string | null
    carreta4: string | null
    viagem_cancelado: enum_viagem
    dt_cancelamento: Date | null
    dt_cliente: Date
    dt_criacao: Date
    dt_atualizacao: Date
    motoristasId: number | null
    proprietariosId: number | null
    veiculosId: number | null
    _count: ViagensCountAggregateOutputType | null
    _avg: ViagensAvgAggregateOutputType | null
    _sum: ViagensSumAggregateOutputType | null
    _min: ViagensMinAggregateOutputType | null
    _max: ViagensMaxAggregateOutputType | null
  }

  type GetViagensGroupByPayload<T extends ViagensGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ViagensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViagensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViagensGroupByOutputType[P]>
            : GetScalarType<T[P], ViagensGroupByOutputType[P]>
        }
      >
    >


  export type viagensSelect = {
    id?: boolean
    idcliente?: boolean
    numero_cliente?: boolean
    dt_viagem?: boolean
    mercadoria?: boolean
    cidade_origem?: boolean
    cidade_destino?: boolean
    idmotorista?: boolean
    idproprietario?: boolean
    idveiculo?: boolean
    carreta1?: boolean
    carreta2?: boolean
    carreta3?: boolean
    carreta4?: boolean
    viagem_cancelado?: boolean
    dt_cancelamento?: boolean
    dt_cliente?: boolean
    dt_criacao?: boolean
    dt_atualizacao?: boolean
    clientes?: boolean | clientesArgs
    motoristas?: boolean | motoristasArgs
    motoristasId?: boolean
    proprietarios?: boolean | proprietariosArgs
    proprietariosId?: boolean
    veiculos?: boolean | veiculosArgs
    veiculosId?: boolean
  }


  export type viagensInclude = {
    clientes?: boolean | clientesArgs
    motoristas?: boolean | motoristasArgs
    proprietarios?: boolean | proprietariosArgs
    veiculos?: boolean | veiculosArgs
  }

  export type viagensGetPayload<S extends boolean | null | undefined | viagensArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? viagens :
    S extends undefined ? never :
    S extends { include: any } & (viagensArgs | viagensFindManyArgs)
    ? viagens  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'clientes' ? clientesGetPayload<S['include'][P]> :
        P extends 'motoristas' ? motoristasGetPayload<S['include'][P]> | null :
        P extends 'proprietarios' ? proprietariosGetPayload<S['include'][P]> | null :
        P extends 'veiculos' ? veiculosGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (viagensArgs | viagensFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'clientes' ? clientesGetPayload<S['select'][P]> :
        P extends 'motoristas' ? motoristasGetPayload<S['select'][P]> | null :
        P extends 'proprietarios' ? proprietariosGetPayload<S['select'][P]> | null :
        P extends 'veiculos' ? veiculosGetPayload<S['select'][P]> | null :  P extends keyof viagens ? viagens[P] : never
  } 
      : viagens


  type viagensCountArgs = 
    Omit<viagensFindManyArgs, 'select' | 'include'> & {
      select?: ViagensCountAggregateInputType | true
    }

  export interface viagensDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Viagens that matches the filter.
     * @param {viagensFindUniqueArgs} args - Arguments to find a Viagens
     * @example
     * // Get one Viagens
     * const viagens = await prisma.viagens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends viagensFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, viagensFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'viagens'> extends True ? Prisma__viagensClient<viagensGetPayload<T>> : Prisma__viagensClient<viagensGetPayload<T> | null, null>

    /**
     * Find one Viagens that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {viagensFindUniqueOrThrowArgs} args - Arguments to find a Viagens
     * @example
     * // Get one Viagens
     * const viagens = await prisma.viagens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends viagensFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, viagensFindUniqueOrThrowArgs>
    ): Prisma__viagensClient<viagensGetPayload<T>>

    /**
     * Find the first Viagens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viagensFindFirstArgs} args - Arguments to find a Viagens
     * @example
     * // Get one Viagens
     * const viagens = await prisma.viagens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends viagensFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, viagensFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'viagens'> extends True ? Prisma__viagensClient<viagensGetPayload<T>> : Prisma__viagensClient<viagensGetPayload<T> | null, null>

    /**
     * Find the first Viagens that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viagensFindFirstOrThrowArgs} args - Arguments to find a Viagens
     * @example
     * // Get one Viagens
     * const viagens = await prisma.viagens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends viagensFindFirstOrThrowArgs>(
      args?: SelectSubset<T, viagensFindFirstOrThrowArgs>
    ): Prisma__viagensClient<viagensGetPayload<T>>

    /**
     * Find zero or more Viagens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viagensFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Viagens
     * const viagens = await prisma.viagens.findMany()
     * 
     * // Get first 10 Viagens
     * const viagens = await prisma.viagens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viagensWithIdOnly = await prisma.viagens.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends viagensFindManyArgs>(
      args?: SelectSubset<T, viagensFindManyArgs>
    ): PrismaPromise<Array<viagensGetPayload<T>>>

    /**
     * Create a Viagens.
     * @param {viagensCreateArgs} args - Arguments to create a Viagens.
     * @example
     * // Create one Viagens
     * const Viagens = await prisma.viagens.create({
     *   data: {
     *     // ... data to create a Viagens
     *   }
     * })
     * 
    **/
    create<T extends viagensCreateArgs>(
      args: SelectSubset<T, viagensCreateArgs>
    ): Prisma__viagensClient<viagensGetPayload<T>>

    /**
     * Create many Viagens.
     *     @param {viagensCreateManyArgs} args - Arguments to create many Viagens.
     *     @example
     *     // Create many Viagens
     *     const viagens = await prisma.viagens.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends viagensCreateManyArgs>(
      args?: SelectSubset<T, viagensCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Viagens.
     * @param {viagensDeleteArgs} args - Arguments to delete one Viagens.
     * @example
     * // Delete one Viagens
     * const Viagens = await prisma.viagens.delete({
     *   where: {
     *     // ... filter to delete one Viagens
     *   }
     * })
     * 
    **/
    delete<T extends viagensDeleteArgs>(
      args: SelectSubset<T, viagensDeleteArgs>
    ): Prisma__viagensClient<viagensGetPayload<T>>

    /**
     * Update one Viagens.
     * @param {viagensUpdateArgs} args - Arguments to update one Viagens.
     * @example
     * // Update one Viagens
     * const viagens = await prisma.viagens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends viagensUpdateArgs>(
      args: SelectSubset<T, viagensUpdateArgs>
    ): Prisma__viagensClient<viagensGetPayload<T>>

    /**
     * Delete zero or more Viagens.
     * @param {viagensDeleteManyArgs} args - Arguments to filter Viagens to delete.
     * @example
     * // Delete a few Viagens
     * const { count } = await prisma.viagens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends viagensDeleteManyArgs>(
      args?: SelectSubset<T, viagensDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Viagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viagensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Viagens
     * const viagens = await prisma.viagens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends viagensUpdateManyArgs>(
      args: SelectSubset<T, viagensUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Viagens.
     * @param {viagensUpsertArgs} args - Arguments to update or create a Viagens.
     * @example
     * // Update or create a Viagens
     * const viagens = await prisma.viagens.upsert({
     *   create: {
     *     // ... data to create a Viagens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Viagens we want to update
     *   }
     * })
    **/
    upsert<T extends viagensUpsertArgs>(
      args: SelectSubset<T, viagensUpsertArgs>
    ): Prisma__viagensClient<viagensGetPayload<T>>

    /**
     * Count the number of Viagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viagensCountArgs} args - Arguments to filter Viagens to count.
     * @example
     * // Count the number of Viagens
     * const count = await prisma.viagens.count({
     *   where: {
     *     // ... the filter for the Viagens we want to count
     *   }
     * })
    **/
    count<T extends viagensCountArgs>(
      args?: Subset<T, viagensCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViagensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Viagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViagensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViagensAggregateArgs>(args: Subset<T, ViagensAggregateArgs>): PrismaPromise<GetViagensAggregateType<T>>

    /**
     * Group by Viagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViagensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ViagensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViagensGroupByArgs['orderBy'] }
        : { orderBy?: ViagensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ViagensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViagensGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for viagens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__viagensClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    clientes<T extends clientesArgs= {}>(args?: Subset<T, clientesArgs>): Prisma__clientesClient<clientesGetPayload<T> | Null>;

    motoristas<T extends motoristasArgs= {}>(args?: Subset<T, motoristasArgs>): Prisma__motoristasClient<motoristasGetPayload<T> | Null>;

    proprietarios<T extends proprietariosArgs= {}>(args?: Subset<T, proprietariosArgs>): Prisma__proprietariosClient<proprietariosGetPayload<T> | Null>;

    veiculos<T extends veiculosArgs= {}>(args?: Subset<T, veiculosArgs>): Prisma__veiculosClient<veiculosGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * viagens base type for findUnique actions
   */
  export type viagensFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the viagens
     */
    select?: viagensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viagensInclude | null
    /**
     * Filter, which viagens to fetch.
     */
    where: viagensWhereUniqueInput
  }

  /**
   * viagens findUnique
   */
  export interface viagensFindUniqueArgs extends viagensFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * viagens findUniqueOrThrow
   */
  export type viagensFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the viagens
     */
    select?: viagensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viagensInclude | null
    /**
     * Filter, which viagens to fetch.
     */
    where: viagensWhereUniqueInput
  }


  /**
   * viagens base type for findFirst actions
   */
  export type viagensFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the viagens
     */
    select?: viagensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viagensInclude | null
    /**
     * Filter, which viagens to fetch.
     */
    where?: viagensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of viagens to fetch.
     */
    orderBy?: Enumerable<viagensOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for viagens.
     */
    cursor?: viagensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` viagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` viagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of viagens.
     */
    distinct?: Enumerable<ViagensScalarFieldEnum>
  }

  /**
   * viagens findFirst
   */
  export interface viagensFindFirstArgs extends viagensFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * viagens findFirstOrThrow
   */
  export type viagensFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the viagens
     */
    select?: viagensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viagensInclude | null
    /**
     * Filter, which viagens to fetch.
     */
    where?: viagensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of viagens to fetch.
     */
    orderBy?: Enumerable<viagensOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for viagens.
     */
    cursor?: viagensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` viagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` viagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of viagens.
     */
    distinct?: Enumerable<ViagensScalarFieldEnum>
  }


  /**
   * viagens findMany
   */
  export type viagensFindManyArgs = {
    /**
     * Select specific fields to fetch from the viagens
     */
    select?: viagensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viagensInclude | null
    /**
     * Filter, which viagens to fetch.
     */
    where?: viagensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of viagens to fetch.
     */
    orderBy?: Enumerable<viagensOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing viagens.
     */
    cursor?: viagensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` viagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` viagens.
     */
    skip?: number
    distinct?: Enumerable<ViagensScalarFieldEnum>
  }


  /**
   * viagens create
   */
  export type viagensCreateArgs = {
    /**
     * Select specific fields to fetch from the viagens
     */
    select?: viagensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viagensInclude | null
    /**
     * The data needed to create a viagens.
     */
    data: XOR<viagensCreateInput, viagensUncheckedCreateInput>
  }


  /**
   * viagens createMany
   */
  export type viagensCreateManyArgs = {
    /**
     * The data used to create many viagens.
     */
    data: Enumerable<viagensCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * viagens update
   */
  export type viagensUpdateArgs = {
    /**
     * Select specific fields to fetch from the viagens
     */
    select?: viagensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viagensInclude | null
    /**
     * The data needed to update a viagens.
     */
    data: XOR<viagensUpdateInput, viagensUncheckedUpdateInput>
    /**
     * Choose, which viagens to update.
     */
    where: viagensWhereUniqueInput
  }


  /**
   * viagens updateMany
   */
  export type viagensUpdateManyArgs = {
    /**
     * The data used to update viagens.
     */
    data: XOR<viagensUpdateManyMutationInput, viagensUncheckedUpdateManyInput>
    /**
     * Filter which viagens to update
     */
    where?: viagensWhereInput
  }


  /**
   * viagens upsert
   */
  export type viagensUpsertArgs = {
    /**
     * Select specific fields to fetch from the viagens
     */
    select?: viagensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viagensInclude | null
    /**
     * The filter to search for the viagens to update in case it exists.
     */
    where: viagensWhereUniqueInput
    /**
     * In case the viagens found by the `where` argument doesn't exist, create a new viagens with this data.
     */
    create: XOR<viagensCreateInput, viagensUncheckedCreateInput>
    /**
     * In case the viagens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<viagensUpdateInput, viagensUncheckedUpdateInput>
  }


  /**
   * viagens delete
   */
  export type viagensDeleteArgs = {
    /**
     * Select specific fields to fetch from the viagens
     */
    select?: viagensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viagensInclude | null
    /**
     * Filter which viagens to delete.
     */
    where: viagensWhereUniqueInput
  }


  /**
   * viagens deleteMany
   */
  export type viagensDeleteManyArgs = {
    /**
     * Filter which viagens to delete
     */
    where?: viagensWhereInput
  }


  /**
   * viagens without action
   */
  export type viagensArgs = {
    /**
     * Select specific fields to fetch from the viagens
     */
    select?: viagensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viagensInclude | null
  }



  /**
   * Model VwVeiculos
   */


  export type AggregateVwVeiculos = {
    _count: VwVeiculosCountAggregateOutputType | null
    _avg: VwVeiculosAvgAggregateOutputType | null
    _sum: VwVeiculosSumAggregateOutputType | null
    _min: VwVeiculosMinAggregateOutputType | null
    _max: VwVeiculosMaxAggregateOutputType | null
  }

  export type VwVeiculosAvgAggregateOutputType = {
    id: number | null
  }

  export type VwVeiculosSumAggregateOutputType = {
    id: number | null
  }

  export type VwVeiculosMinAggregateOutputType = {
    id: number | null
    cnpj: string | null
    razaosocial: string | null
    nomefantasia: string | null
    placa: string | null
    status_veiculo: enum_status_veiculo | null
  }

  export type VwVeiculosMaxAggregateOutputType = {
    id: number | null
    cnpj: string | null
    razaosocial: string | null
    nomefantasia: string | null
    placa: string | null
    status_veiculo: enum_status_veiculo | null
  }

  export type VwVeiculosCountAggregateOutputType = {
    id: number
    cnpj: number
    razaosocial: number
    nomefantasia: number
    placa: number
    status_veiculo: number
    _all: number
  }


  export type VwVeiculosAvgAggregateInputType = {
    id?: true
  }

  export type VwVeiculosSumAggregateInputType = {
    id?: true
  }

  export type VwVeiculosMinAggregateInputType = {
    id?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    placa?: true
    status_veiculo?: true
  }

  export type VwVeiculosMaxAggregateInputType = {
    id?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    placa?: true
    status_veiculo?: true
  }

  export type VwVeiculosCountAggregateInputType = {
    id?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    placa?: true
    status_veiculo?: true
    _all?: true
  }

  export type VwVeiculosAggregateArgs = {
    /**
     * Filter which VwVeiculos to aggregate.
     */
    where?: VwVeiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VwVeiculos to fetch.
     */
    orderBy?: Enumerable<VwVeiculosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VwVeiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VwVeiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VwVeiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VwVeiculos
    **/
    _count?: true | VwVeiculosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VwVeiculosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VwVeiculosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VwVeiculosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VwVeiculosMaxAggregateInputType
  }

  export type GetVwVeiculosAggregateType<T extends VwVeiculosAggregateArgs> = {
        [P in keyof T & keyof AggregateVwVeiculos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVwVeiculos[P]>
      : GetScalarType<T[P], AggregateVwVeiculos[P]>
  }




  export type VwVeiculosGroupByArgs = {
    where?: VwVeiculosWhereInput
    orderBy?: Enumerable<VwVeiculosOrderByWithAggregationInput>
    by: VwVeiculosScalarFieldEnum[]
    having?: VwVeiculosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VwVeiculosCountAggregateInputType | true
    _avg?: VwVeiculosAvgAggregateInputType
    _sum?: VwVeiculosSumAggregateInputType
    _min?: VwVeiculosMinAggregateInputType
    _max?: VwVeiculosMaxAggregateInputType
  }


  export type VwVeiculosGroupByOutputType = {
    id: number
    cnpj: string
    razaosocial: string
    nomefantasia: string
    placa: string
    status_veiculo: enum_status_veiculo
    _count: VwVeiculosCountAggregateOutputType | null
    _avg: VwVeiculosAvgAggregateOutputType | null
    _sum: VwVeiculosSumAggregateOutputType | null
    _min: VwVeiculosMinAggregateOutputType | null
    _max: VwVeiculosMaxAggregateOutputType | null
  }

  type GetVwVeiculosGroupByPayload<T extends VwVeiculosGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VwVeiculosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VwVeiculosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VwVeiculosGroupByOutputType[P]>
            : GetScalarType<T[P], VwVeiculosGroupByOutputType[P]>
        }
      >
    >


  export type VwVeiculosSelect = {
    id?: boolean
    cnpj?: boolean
    razaosocial?: boolean
    nomefantasia?: boolean
    placa?: boolean
    status_veiculo?: boolean
  }


  export type VwVeiculosGetPayload<S extends boolean | null | undefined | VwVeiculosArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VwVeiculos :
    S extends undefined ? never :
    S extends { include: any } & (VwVeiculosArgs | VwVeiculosFindManyArgs)
    ? VwVeiculos 
    : S extends { select: any } & (VwVeiculosArgs | VwVeiculosFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof VwVeiculos ? VwVeiculos[P] : never
  } 
      : VwVeiculos


  type VwVeiculosCountArgs = 
    Omit<VwVeiculosFindManyArgs, 'select' | 'include'> & {
      select?: VwVeiculosCountAggregateInputType | true
    }

  export interface VwVeiculosDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one VwVeiculos that matches the filter.
     * @param {VwVeiculosFindUniqueArgs} args - Arguments to find a VwVeiculos
     * @example
     * // Get one VwVeiculos
     * const vwVeiculos = await prisma.vwVeiculos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VwVeiculosFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VwVeiculosFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VwVeiculos'> extends True ? Prisma__VwVeiculosClient<VwVeiculosGetPayload<T>> : Prisma__VwVeiculosClient<VwVeiculosGetPayload<T> | null, null>

    /**
     * Find one VwVeiculos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VwVeiculosFindUniqueOrThrowArgs} args - Arguments to find a VwVeiculos
     * @example
     * // Get one VwVeiculos
     * const vwVeiculos = await prisma.vwVeiculos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VwVeiculosFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VwVeiculosFindUniqueOrThrowArgs>
    ): Prisma__VwVeiculosClient<VwVeiculosGetPayload<T>>

    /**
     * Find the first VwVeiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwVeiculosFindFirstArgs} args - Arguments to find a VwVeiculos
     * @example
     * // Get one VwVeiculos
     * const vwVeiculos = await prisma.vwVeiculos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VwVeiculosFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VwVeiculosFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VwVeiculos'> extends True ? Prisma__VwVeiculosClient<VwVeiculosGetPayload<T>> : Prisma__VwVeiculosClient<VwVeiculosGetPayload<T> | null, null>

    /**
     * Find the first VwVeiculos that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwVeiculosFindFirstOrThrowArgs} args - Arguments to find a VwVeiculos
     * @example
     * // Get one VwVeiculos
     * const vwVeiculos = await prisma.vwVeiculos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VwVeiculosFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VwVeiculosFindFirstOrThrowArgs>
    ): Prisma__VwVeiculosClient<VwVeiculosGetPayload<T>>

    /**
     * Find zero or more VwVeiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwVeiculosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VwVeiculos
     * const vwVeiculos = await prisma.vwVeiculos.findMany()
     * 
     * // Get first 10 VwVeiculos
     * const vwVeiculos = await prisma.vwVeiculos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vwVeiculosWithIdOnly = await prisma.vwVeiculos.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VwVeiculosFindManyArgs>(
      args?: SelectSubset<T, VwVeiculosFindManyArgs>
    ): PrismaPromise<Array<VwVeiculosGetPayload<T>>>

    /**
     * Create a VwVeiculos.
     * @param {VwVeiculosCreateArgs} args - Arguments to create a VwVeiculos.
     * @example
     * // Create one VwVeiculos
     * const VwVeiculos = await prisma.vwVeiculos.create({
     *   data: {
     *     // ... data to create a VwVeiculos
     *   }
     * })
     * 
    **/
    create<T extends VwVeiculosCreateArgs>(
      args: SelectSubset<T, VwVeiculosCreateArgs>
    ): Prisma__VwVeiculosClient<VwVeiculosGetPayload<T>>

    /**
     * Create many VwVeiculos.
     *     @param {VwVeiculosCreateManyArgs} args - Arguments to create many VwVeiculos.
     *     @example
     *     // Create many VwVeiculos
     *     const vwVeiculos = await prisma.vwVeiculos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VwVeiculosCreateManyArgs>(
      args?: SelectSubset<T, VwVeiculosCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a VwVeiculos.
     * @param {VwVeiculosDeleteArgs} args - Arguments to delete one VwVeiculos.
     * @example
     * // Delete one VwVeiculos
     * const VwVeiculos = await prisma.vwVeiculos.delete({
     *   where: {
     *     // ... filter to delete one VwVeiculos
     *   }
     * })
     * 
    **/
    delete<T extends VwVeiculosDeleteArgs>(
      args: SelectSubset<T, VwVeiculosDeleteArgs>
    ): Prisma__VwVeiculosClient<VwVeiculosGetPayload<T>>

    /**
     * Update one VwVeiculos.
     * @param {VwVeiculosUpdateArgs} args - Arguments to update one VwVeiculos.
     * @example
     * // Update one VwVeiculos
     * const vwVeiculos = await prisma.vwVeiculos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VwVeiculosUpdateArgs>(
      args: SelectSubset<T, VwVeiculosUpdateArgs>
    ): Prisma__VwVeiculosClient<VwVeiculosGetPayload<T>>

    /**
     * Delete zero or more VwVeiculos.
     * @param {VwVeiculosDeleteManyArgs} args - Arguments to filter VwVeiculos to delete.
     * @example
     * // Delete a few VwVeiculos
     * const { count } = await prisma.vwVeiculos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VwVeiculosDeleteManyArgs>(
      args?: SelectSubset<T, VwVeiculosDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more VwVeiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwVeiculosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VwVeiculos
     * const vwVeiculos = await prisma.vwVeiculos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VwVeiculosUpdateManyArgs>(
      args: SelectSubset<T, VwVeiculosUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one VwVeiculos.
     * @param {VwVeiculosUpsertArgs} args - Arguments to update or create a VwVeiculos.
     * @example
     * // Update or create a VwVeiculos
     * const vwVeiculos = await prisma.vwVeiculos.upsert({
     *   create: {
     *     // ... data to create a VwVeiculos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VwVeiculos we want to update
     *   }
     * })
    **/
    upsert<T extends VwVeiculosUpsertArgs>(
      args: SelectSubset<T, VwVeiculosUpsertArgs>
    ): Prisma__VwVeiculosClient<VwVeiculosGetPayload<T>>

    /**
     * Count the number of VwVeiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwVeiculosCountArgs} args - Arguments to filter VwVeiculos to count.
     * @example
     * // Count the number of VwVeiculos
     * const count = await prisma.vwVeiculos.count({
     *   where: {
     *     // ... the filter for the VwVeiculos we want to count
     *   }
     * })
    **/
    count<T extends VwVeiculosCountArgs>(
      args?: Subset<T, VwVeiculosCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VwVeiculosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VwVeiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwVeiculosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VwVeiculosAggregateArgs>(args: Subset<T, VwVeiculosAggregateArgs>): PrismaPromise<GetVwVeiculosAggregateType<T>>

    /**
     * Group by VwVeiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwVeiculosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VwVeiculosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VwVeiculosGroupByArgs['orderBy'] }
        : { orderBy?: VwVeiculosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VwVeiculosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVwVeiculosGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for VwVeiculos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VwVeiculosClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * VwVeiculos base type for findUnique actions
   */
  export type VwVeiculosFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the VwVeiculos
     */
    select?: VwVeiculosSelect | null
    /**
     * Filter, which VwVeiculos to fetch.
     */
    where: VwVeiculosWhereUniqueInput
  }

  /**
   * VwVeiculos findUnique
   */
  export interface VwVeiculosFindUniqueArgs extends VwVeiculosFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VwVeiculos findUniqueOrThrow
   */
  export type VwVeiculosFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VwVeiculos
     */
    select?: VwVeiculosSelect | null
    /**
     * Filter, which VwVeiculos to fetch.
     */
    where: VwVeiculosWhereUniqueInput
  }


  /**
   * VwVeiculos base type for findFirst actions
   */
  export type VwVeiculosFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the VwVeiculos
     */
    select?: VwVeiculosSelect | null
    /**
     * Filter, which VwVeiculos to fetch.
     */
    where?: VwVeiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VwVeiculos to fetch.
     */
    orderBy?: Enumerable<VwVeiculosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VwVeiculos.
     */
    cursor?: VwVeiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VwVeiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VwVeiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VwVeiculos.
     */
    distinct?: Enumerable<VwVeiculosScalarFieldEnum>
  }

  /**
   * VwVeiculos findFirst
   */
  export interface VwVeiculosFindFirstArgs extends VwVeiculosFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VwVeiculos findFirstOrThrow
   */
  export type VwVeiculosFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VwVeiculos
     */
    select?: VwVeiculosSelect | null
    /**
     * Filter, which VwVeiculos to fetch.
     */
    where?: VwVeiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VwVeiculos to fetch.
     */
    orderBy?: Enumerable<VwVeiculosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VwVeiculos.
     */
    cursor?: VwVeiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VwVeiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VwVeiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VwVeiculos.
     */
    distinct?: Enumerable<VwVeiculosScalarFieldEnum>
  }


  /**
   * VwVeiculos findMany
   */
  export type VwVeiculosFindManyArgs = {
    /**
     * Select specific fields to fetch from the VwVeiculos
     */
    select?: VwVeiculosSelect | null
    /**
     * Filter, which VwVeiculos to fetch.
     */
    where?: VwVeiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VwVeiculos to fetch.
     */
    orderBy?: Enumerable<VwVeiculosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VwVeiculos.
     */
    cursor?: VwVeiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VwVeiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VwVeiculos.
     */
    skip?: number
    distinct?: Enumerable<VwVeiculosScalarFieldEnum>
  }


  /**
   * VwVeiculos create
   */
  export type VwVeiculosCreateArgs = {
    /**
     * Select specific fields to fetch from the VwVeiculos
     */
    select?: VwVeiculosSelect | null
    /**
     * The data needed to create a VwVeiculos.
     */
    data: XOR<VwVeiculosCreateInput, VwVeiculosUncheckedCreateInput>
  }


  /**
   * VwVeiculos createMany
   */
  export type VwVeiculosCreateManyArgs = {
    /**
     * The data used to create many VwVeiculos.
     */
    data: Enumerable<VwVeiculosCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * VwVeiculos update
   */
  export type VwVeiculosUpdateArgs = {
    /**
     * Select specific fields to fetch from the VwVeiculos
     */
    select?: VwVeiculosSelect | null
    /**
     * The data needed to update a VwVeiculos.
     */
    data: XOR<VwVeiculosUpdateInput, VwVeiculosUncheckedUpdateInput>
    /**
     * Choose, which VwVeiculos to update.
     */
    where: VwVeiculosWhereUniqueInput
  }


  /**
   * VwVeiculos updateMany
   */
  export type VwVeiculosUpdateManyArgs = {
    /**
     * The data used to update VwVeiculos.
     */
    data: XOR<VwVeiculosUpdateManyMutationInput, VwVeiculosUncheckedUpdateManyInput>
    /**
     * Filter which VwVeiculos to update
     */
    where?: VwVeiculosWhereInput
  }


  /**
   * VwVeiculos upsert
   */
  export type VwVeiculosUpsertArgs = {
    /**
     * Select specific fields to fetch from the VwVeiculos
     */
    select?: VwVeiculosSelect | null
    /**
     * The filter to search for the VwVeiculos to update in case it exists.
     */
    where: VwVeiculosWhereUniqueInput
    /**
     * In case the VwVeiculos found by the `where` argument doesn't exist, create a new VwVeiculos with this data.
     */
    create: XOR<VwVeiculosCreateInput, VwVeiculosUncheckedCreateInput>
    /**
     * In case the VwVeiculos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VwVeiculosUpdateInput, VwVeiculosUncheckedUpdateInput>
  }


  /**
   * VwVeiculos delete
   */
  export type VwVeiculosDeleteArgs = {
    /**
     * Select specific fields to fetch from the VwVeiculos
     */
    select?: VwVeiculosSelect | null
    /**
     * Filter which VwVeiculos to delete.
     */
    where: VwVeiculosWhereUniqueInput
  }


  /**
   * VwVeiculos deleteMany
   */
  export type VwVeiculosDeleteManyArgs = {
    /**
     * Filter which VwVeiculos to delete
     */
    where?: VwVeiculosWhereInput
  }


  /**
   * VwVeiculos without action
   */
  export type VwVeiculosArgs = {
    /**
     * Select specific fields to fetch from the VwVeiculos
     */
    select?: VwVeiculosSelect | null
  }



  /**
   * Model VwViagens
   */


  export type AggregateVwViagens = {
    _count: VwViagensCountAggregateOutputType | null
    _avg: VwViagensAvgAggregateOutputType | null
    _sum: VwViagensSumAggregateOutputType | null
    _min: VwViagensMinAggregateOutputType | null
    _max: VwViagensMaxAggregateOutputType | null
  }

  export type VwViagensAvgAggregateOutputType = {
    id: number | null
    idmotorista: number | null
    idveiculo: number | null
    idproprietario: number | null
  }

  export type VwViagensSumAggregateOutputType = {
    id: number | null
    idmotorista: number | null
    idveiculo: number | null
    idproprietario: number | null
  }

  export type VwViagensMinAggregateOutputType = {
    id: number | null
    dt_viagem: Date | null
    mercadoria: string | null
    cidade_origem: string | null
    cidade_destino: string | null
    carreta1: string | null
    carreta2: string | null
    carreta3: string | null
    carreta4: string | null
    idmotorista: number | null
    nome_mot: string | null
    cpf_mot: string | null
    idveiculo: number | null
    placa: string | null
    idproprietario: number | null
    nome_prop: string | null
    cpf_cnpj_prop: string | null
    cnpj: string | null
    razaosocial: string | null
    nomefantasia: string | null
    status_motorista: enum_status_motorista | null
  }

  export type VwViagensMaxAggregateOutputType = {
    id: number | null
    dt_viagem: Date | null
    mercadoria: string | null
    cidade_origem: string | null
    cidade_destino: string | null
    carreta1: string | null
    carreta2: string | null
    carreta3: string | null
    carreta4: string | null
    idmotorista: number | null
    nome_mot: string | null
    cpf_mot: string | null
    idveiculo: number | null
    placa: string | null
    idproprietario: number | null
    nome_prop: string | null
    cpf_cnpj_prop: string | null
    cnpj: string | null
    razaosocial: string | null
    nomefantasia: string | null
    status_motorista: enum_status_motorista | null
  }

  export type VwViagensCountAggregateOutputType = {
    id: number
    dt_viagem: number
    mercadoria: number
    cidade_origem: number
    cidade_destino: number
    carreta1: number
    carreta2: number
    carreta3: number
    carreta4: number
    idmotorista: number
    nome_mot: number
    cpf_mot: number
    idveiculo: number
    placa: number
    idproprietario: number
    nome_prop: number
    cpf_cnpj_prop: number
    cnpj: number
    razaosocial: number
    nomefantasia: number
    status_motorista: number
    _all: number
  }


  export type VwViagensAvgAggregateInputType = {
    id?: true
    idmotorista?: true
    idveiculo?: true
    idproprietario?: true
  }

  export type VwViagensSumAggregateInputType = {
    id?: true
    idmotorista?: true
    idveiculo?: true
    idproprietario?: true
  }

  export type VwViagensMinAggregateInputType = {
    id?: true
    dt_viagem?: true
    mercadoria?: true
    cidade_origem?: true
    cidade_destino?: true
    carreta1?: true
    carreta2?: true
    carreta3?: true
    carreta4?: true
    idmotorista?: true
    nome_mot?: true
    cpf_mot?: true
    idveiculo?: true
    placa?: true
    idproprietario?: true
    nome_prop?: true
    cpf_cnpj_prop?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    status_motorista?: true
  }

  export type VwViagensMaxAggregateInputType = {
    id?: true
    dt_viagem?: true
    mercadoria?: true
    cidade_origem?: true
    cidade_destino?: true
    carreta1?: true
    carreta2?: true
    carreta3?: true
    carreta4?: true
    idmotorista?: true
    nome_mot?: true
    cpf_mot?: true
    idveiculo?: true
    placa?: true
    idproprietario?: true
    nome_prop?: true
    cpf_cnpj_prop?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    status_motorista?: true
  }

  export type VwViagensCountAggregateInputType = {
    id?: true
    dt_viagem?: true
    mercadoria?: true
    cidade_origem?: true
    cidade_destino?: true
    carreta1?: true
    carreta2?: true
    carreta3?: true
    carreta4?: true
    idmotorista?: true
    nome_mot?: true
    cpf_mot?: true
    idveiculo?: true
    placa?: true
    idproprietario?: true
    nome_prop?: true
    cpf_cnpj_prop?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    status_motorista?: true
    _all?: true
  }

  export type VwViagensAggregateArgs = {
    /**
     * Filter which VwViagens to aggregate.
     */
    where?: VwViagensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VwViagens to fetch.
     */
    orderBy?: Enumerable<VwViagensOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VwViagensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VwViagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VwViagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VwViagens
    **/
    _count?: true | VwViagensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VwViagensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VwViagensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VwViagensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VwViagensMaxAggregateInputType
  }

  export type GetVwViagensAggregateType<T extends VwViagensAggregateArgs> = {
        [P in keyof T & keyof AggregateVwViagens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVwViagens[P]>
      : GetScalarType<T[P], AggregateVwViagens[P]>
  }




  export type VwViagensGroupByArgs = {
    where?: VwViagensWhereInput
    orderBy?: Enumerable<VwViagensOrderByWithAggregationInput>
    by: VwViagensScalarFieldEnum[]
    having?: VwViagensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VwViagensCountAggregateInputType | true
    _avg?: VwViagensAvgAggregateInputType
    _sum?: VwViagensSumAggregateInputType
    _min?: VwViagensMinAggregateInputType
    _max?: VwViagensMaxAggregateInputType
  }


  export type VwViagensGroupByOutputType = {
    id: number
    dt_viagem: Date
    mercadoria: string | null
    cidade_origem: string | null
    cidade_destino: string | null
    carreta1: string | null
    carreta2: string | null
    carreta3: string | null
    carreta4: string | null
    idmotorista: number
    nome_mot: string
    cpf_mot: string
    idveiculo: number
    placa: string
    idproprietario: number
    nome_prop: string
    cpf_cnpj_prop: string
    cnpj: string
    razaosocial: string | null
    nomefantasia: string | null
    status_motorista: enum_status_motorista | null
    _count: VwViagensCountAggregateOutputType | null
    _avg: VwViagensAvgAggregateOutputType | null
    _sum: VwViagensSumAggregateOutputType | null
    _min: VwViagensMinAggregateOutputType | null
    _max: VwViagensMaxAggregateOutputType | null
  }

  type GetVwViagensGroupByPayload<T extends VwViagensGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VwViagensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VwViagensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VwViagensGroupByOutputType[P]>
            : GetScalarType<T[P], VwViagensGroupByOutputType[P]>
        }
      >
    >


  export type VwViagensSelect = {
    id?: boolean
    dt_viagem?: boolean
    mercadoria?: boolean
    cidade_origem?: boolean
    cidade_destino?: boolean
    carreta1?: boolean
    carreta2?: boolean
    carreta3?: boolean
    carreta4?: boolean
    idmotorista?: boolean
    nome_mot?: boolean
    cpf_mot?: boolean
    idveiculo?: boolean
    placa?: boolean
    idproprietario?: boolean
    nome_prop?: boolean
    cpf_cnpj_prop?: boolean
    cnpj?: boolean
    razaosocial?: boolean
    nomefantasia?: boolean
    status_motorista?: boolean
  }


  export type VwViagensGetPayload<S extends boolean | null | undefined | VwViagensArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VwViagens :
    S extends undefined ? never :
    S extends { include: any } & (VwViagensArgs | VwViagensFindManyArgs)
    ? VwViagens 
    : S extends { select: any } & (VwViagensArgs | VwViagensFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof VwViagens ? VwViagens[P] : never
  } 
      : VwViagens


  type VwViagensCountArgs = 
    Omit<VwViagensFindManyArgs, 'select' | 'include'> & {
      select?: VwViagensCountAggregateInputType | true
    }

  export interface VwViagensDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one VwViagens that matches the filter.
     * @param {VwViagensFindUniqueArgs} args - Arguments to find a VwViagens
     * @example
     * // Get one VwViagens
     * const vwViagens = await prisma.vwViagens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VwViagensFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VwViagensFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VwViagens'> extends True ? Prisma__VwViagensClient<VwViagensGetPayload<T>> : Prisma__VwViagensClient<VwViagensGetPayload<T> | null, null>

    /**
     * Find one VwViagens that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VwViagensFindUniqueOrThrowArgs} args - Arguments to find a VwViagens
     * @example
     * // Get one VwViagens
     * const vwViagens = await prisma.vwViagens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VwViagensFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VwViagensFindUniqueOrThrowArgs>
    ): Prisma__VwViagensClient<VwViagensGetPayload<T>>

    /**
     * Find the first VwViagens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwViagensFindFirstArgs} args - Arguments to find a VwViagens
     * @example
     * // Get one VwViagens
     * const vwViagens = await prisma.vwViagens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VwViagensFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VwViagensFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VwViagens'> extends True ? Prisma__VwViagensClient<VwViagensGetPayload<T>> : Prisma__VwViagensClient<VwViagensGetPayload<T> | null, null>

    /**
     * Find the first VwViagens that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwViagensFindFirstOrThrowArgs} args - Arguments to find a VwViagens
     * @example
     * // Get one VwViagens
     * const vwViagens = await prisma.vwViagens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VwViagensFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VwViagensFindFirstOrThrowArgs>
    ): Prisma__VwViagensClient<VwViagensGetPayload<T>>

    /**
     * Find zero or more VwViagens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwViagensFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VwViagens
     * const vwViagens = await prisma.vwViagens.findMany()
     * 
     * // Get first 10 VwViagens
     * const vwViagens = await prisma.vwViagens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vwViagensWithIdOnly = await prisma.vwViagens.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VwViagensFindManyArgs>(
      args?: SelectSubset<T, VwViagensFindManyArgs>
    ): PrismaPromise<Array<VwViagensGetPayload<T>>>

    /**
     * Create a VwViagens.
     * @param {VwViagensCreateArgs} args - Arguments to create a VwViagens.
     * @example
     * // Create one VwViagens
     * const VwViagens = await prisma.vwViagens.create({
     *   data: {
     *     // ... data to create a VwViagens
     *   }
     * })
     * 
    **/
    create<T extends VwViagensCreateArgs>(
      args: SelectSubset<T, VwViagensCreateArgs>
    ): Prisma__VwViagensClient<VwViagensGetPayload<T>>

    /**
     * Create many VwViagens.
     *     @param {VwViagensCreateManyArgs} args - Arguments to create many VwViagens.
     *     @example
     *     // Create many VwViagens
     *     const vwViagens = await prisma.vwViagens.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VwViagensCreateManyArgs>(
      args?: SelectSubset<T, VwViagensCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a VwViagens.
     * @param {VwViagensDeleteArgs} args - Arguments to delete one VwViagens.
     * @example
     * // Delete one VwViagens
     * const VwViagens = await prisma.vwViagens.delete({
     *   where: {
     *     // ... filter to delete one VwViagens
     *   }
     * })
     * 
    **/
    delete<T extends VwViagensDeleteArgs>(
      args: SelectSubset<T, VwViagensDeleteArgs>
    ): Prisma__VwViagensClient<VwViagensGetPayload<T>>

    /**
     * Update one VwViagens.
     * @param {VwViagensUpdateArgs} args - Arguments to update one VwViagens.
     * @example
     * // Update one VwViagens
     * const vwViagens = await prisma.vwViagens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VwViagensUpdateArgs>(
      args: SelectSubset<T, VwViagensUpdateArgs>
    ): Prisma__VwViagensClient<VwViagensGetPayload<T>>

    /**
     * Delete zero or more VwViagens.
     * @param {VwViagensDeleteManyArgs} args - Arguments to filter VwViagens to delete.
     * @example
     * // Delete a few VwViagens
     * const { count } = await prisma.vwViagens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VwViagensDeleteManyArgs>(
      args?: SelectSubset<T, VwViagensDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more VwViagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwViagensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VwViagens
     * const vwViagens = await prisma.vwViagens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VwViagensUpdateManyArgs>(
      args: SelectSubset<T, VwViagensUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one VwViagens.
     * @param {VwViagensUpsertArgs} args - Arguments to update or create a VwViagens.
     * @example
     * // Update or create a VwViagens
     * const vwViagens = await prisma.vwViagens.upsert({
     *   create: {
     *     // ... data to create a VwViagens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VwViagens we want to update
     *   }
     * })
    **/
    upsert<T extends VwViagensUpsertArgs>(
      args: SelectSubset<T, VwViagensUpsertArgs>
    ): Prisma__VwViagensClient<VwViagensGetPayload<T>>

    /**
     * Count the number of VwViagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwViagensCountArgs} args - Arguments to filter VwViagens to count.
     * @example
     * // Count the number of VwViagens
     * const count = await prisma.vwViagens.count({
     *   where: {
     *     // ... the filter for the VwViagens we want to count
     *   }
     * })
    **/
    count<T extends VwViagensCountArgs>(
      args?: Subset<T, VwViagensCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VwViagensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VwViagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwViagensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VwViagensAggregateArgs>(args: Subset<T, VwViagensAggregateArgs>): PrismaPromise<GetVwViagensAggregateType<T>>

    /**
     * Group by VwViagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwViagensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VwViagensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VwViagensGroupByArgs['orderBy'] }
        : { orderBy?: VwViagensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VwViagensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVwViagensGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for VwViagens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VwViagensClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * VwViagens base type for findUnique actions
   */
  export type VwViagensFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the VwViagens
     */
    select?: VwViagensSelect | null
    /**
     * Filter, which VwViagens to fetch.
     */
    where: VwViagensWhereUniqueInput
  }

  /**
   * VwViagens findUnique
   */
  export interface VwViagensFindUniqueArgs extends VwViagensFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VwViagens findUniqueOrThrow
   */
  export type VwViagensFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VwViagens
     */
    select?: VwViagensSelect | null
    /**
     * Filter, which VwViagens to fetch.
     */
    where: VwViagensWhereUniqueInput
  }


  /**
   * VwViagens base type for findFirst actions
   */
  export type VwViagensFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the VwViagens
     */
    select?: VwViagensSelect | null
    /**
     * Filter, which VwViagens to fetch.
     */
    where?: VwViagensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VwViagens to fetch.
     */
    orderBy?: Enumerable<VwViagensOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VwViagens.
     */
    cursor?: VwViagensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VwViagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VwViagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VwViagens.
     */
    distinct?: Enumerable<VwViagensScalarFieldEnum>
  }

  /**
   * VwViagens findFirst
   */
  export interface VwViagensFindFirstArgs extends VwViagensFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VwViagens findFirstOrThrow
   */
  export type VwViagensFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VwViagens
     */
    select?: VwViagensSelect | null
    /**
     * Filter, which VwViagens to fetch.
     */
    where?: VwViagensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VwViagens to fetch.
     */
    orderBy?: Enumerable<VwViagensOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VwViagens.
     */
    cursor?: VwViagensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VwViagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VwViagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VwViagens.
     */
    distinct?: Enumerable<VwViagensScalarFieldEnum>
  }


  /**
   * VwViagens findMany
   */
  export type VwViagensFindManyArgs = {
    /**
     * Select specific fields to fetch from the VwViagens
     */
    select?: VwViagensSelect | null
    /**
     * Filter, which VwViagens to fetch.
     */
    where?: VwViagensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VwViagens to fetch.
     */
    orderBy?: Enumerable<VwViagensOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VwViagens.
     */
    cursor?: VwViagensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VwViagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VwViagens.
     */
    skip?: number
    distinct?: Enumerable<VwViagensScalarFieldEnum>
  }


  /**
   * VwViagens create
   */
  export type VwViagensCreateArgs = {
    /**
     * Select specific fields to fetch from the VwViagens
     */
    select?: VwViagensSelect | null
    /**
     * The data needed to create a VwViagens.
     */
    data: XOR<VwViagensCreateInput, VwViagensUncheckedCreateInput>
  }


  /**
   * VwViagens createMany
   */
  export type VwViagensCreateManyArgs = {
    /**
     * The data used to create many VwViagens.
     */
    data: Enumerable<VwViagensCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * VwViagens update
   */
  export type VwViagensUpdateArgs = {
    /**
     * Select specific fields to fetch from the VwViagens
     */
    select?: VwViagensSelect | null
    /**
     * The data needed to update a VwViagens.
     */
    data: XOR<VwViagensUpdateInput, VwViagensUncheckedUpdateInput>
    /**
     * Choose, which VwViagens to update.
     */
    where: VwViagensWhereUniqueInput
  }


  /**
   * VwViagens updateMany
   */
  export type VwViagensUpdateManyArgs = {
    /**
     * The data used to update VwViagens.
     */
    data: XOR<VwViagensUpdateManyMutationInput, VwViagensUncheckedUpdateManyInput>
    /**
     * Filter which VwViagens to update
     */
    where?: VwViagensWhereInput
  }


  /**
   * VwViagens upsert
   */
  export type VwViagensUpsertArgs = {
    /**
     * Select specific fields to fetch from the VwViagens
     */
    select?: VwViagensSelect | null
    /**
     * The filter to search for the VwViagens to update in case it exists.
     */
    where: VwViagensWhereUniqueInput
    /**
     * In case the VwViagens found by the `where` argument doesn't exist, create a new VwViagens with this data.
     */
    create: XOR<VwViagensCreateInput, VwViagensUncheckedCreateInput>
    /**
     * In case the VwViagens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VwViagensUpdateInput, VwViagensUncheckedUpdateInput>
  }


  /**
   * VwViagens delete
   */
  export type VwViagensDeleteArgs = {
    /**
     * Select specific fields to fetch from the VwViagens
     */
    select?: VwViagensSelect | null
    /**
     * Filter which VwViagens to delete.
     */
    where: VwViagensWhereUniqueInput
  }


  /**
   * VwViagens deleteMany
   */
  export type VwViagensDeleteManyArgs = {
    /**
     * Filter which VwViagens to delete
     */
    where?: VwViagensWhereInput
  }


  /**
   * VwViagens without action
   */
  export type VwViagensArgs = {
    /**
     * Select specific fields to fetch from the VwViagens
     */
    select?: VwViagensSelect | null
  }



  /**
   * Model VwMotoristas
   */


  export type AggregateVwMotoristas = {
    _count: VwMotoristasCountAggregateOutputType | null
    _avg: VwMotoristasAvgAggregateOutputType | null
    _sum: VwMotoristasSumAggregateOutputType | null
    _min: VwMotoristasMinAggregateOutputType | null
    _max: VwMotoristasMaxAggregateOutputType | null
  }

  export type VwMotoristasAvgAggregateOutputType = {
    id: number | null
  }

  export type VwMotoristasSumAggregateOutputType = {
    id: number | null
  }

  export type VwMotoristasMinAggregateOutputType = {
    id: number | null
    cnpj: string | null
    razaosocial: string | null
    nomefantasia: string | null
    nome_mot: string | null
    cpf_mot: string | null
    status_motorista: enum_status_motorista | null
  }

  export type VwMotoristasMaxAggregateOutputType = {
    id: number | null
    cnpj: string | null
    razaosocial: string | null
    nomefantasia: string | null
    nome_mot: string | null
    cpf_mot: string | null
    status_motorista: enum_status_motorista | null
  }

  export type VwMotoristasCountAggregateOutputType = {
    id: number
    cnpj: number
    razaosocial: number
    nomefantasia: number
    nome_mot: number
    cpf_mot: number
    status_motorista: number
    _all: number
  }


  export type VwMotoristasAvgAggregateInputType = {
    id?: true
  }

  export type VwMotoristasSumAggregateInputType = {
    id?: true
  }

  export type VwMotoristasMinAggregateInputType = {
    id?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    nome_mot?: true
    cpf_mot?: true
    status_motorista?: true
  }

  export type VwMotoristasMaxAggregateInputType = {
    id?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    nome_mot?: true
    cpf_mot?: true
    status_motorista?: true
  }

  export type VwMotoristasCountAggregateInputType = {
    id?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    nome_mot?: true
    cpf_mot?: true
    status_motorista?: true
    _all?: true
  }

  export type VwMotoristasAggregateArgs = {
    /**
     * Filter which VwMotoristas to aggregate.
     */
    where?: VwMotoristasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VwMotoristas to fetch.
     */
    orderBy?: Enumerable<VwMotoristasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VwMotoristasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VwMotoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VwMotoristas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VwMotoristas
    **/
    _count?: true | VwMotoristasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VwMotoristasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VwMotoristasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VwMotoristasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VwMotoristasMaxAggregateInputType
  }

  export type GetVwMotoristasAggregateType<T extends VwMotoristasAggregateArgs> = {
        [P in keyof T & keyof AggregateVwMotoristas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVwMotoristas[P]>
      : GetScalarType<T[P], AggregateVwMotoristas[P]>
  }




  export type VwMotoristasGroupByArgs = {
    where?: VwMotoristasWhereInput
    orderBy?: Enumerable<VwMotoristasOrderByWithAggregationInput>
    by: VwMotoristasScalarFieldEnum[]
    having?: VwMotoristasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VwMotoristasCountAggregateInputType | true
    _avg?: VwMotoristasAvgAggregateInputType
    _sum?: VwMotoristasSumAggregateInputType
    _min?: VwMotoristasMinAggregateInputType
    _max?: VwMotoristasMaxAggregateInputType
  }


  export type VwMotoristasGroupByOutputType = {
    id: number
    cnpj: string
    razaosocial: string | null
    nomefantasia: string | null
    nome_mot: string
    cpf_mot: string
    status_motorista: enum_status_motorista
    _count: VwMotoristasCountAggregateOutputType | null
    _avg: VwMotoristasAvgAggregateOutputType | null
    _sum: VwMotoristasSumAggregateOutputType | null
    _min: VwMotoristasMinAggregateOutputType | null
    _max: VwMotoristasMaxAggregateOutputType | null
  }

  type GetVwMotoristasGroupByPayload<T extends VwMotoristasGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VwMotoristasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VwMotoristasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VwMotoristasGroupByOutputType[P]>
            : GetScalarType<T[P], VwMotoristasGroupByOutputType[P]>
        }
      >
    >


  export type VwMotoristasSelect = {
    id?: boolean
    cnpj?: boolean
    razaosocial?: boolean
    nomefantasia?: boolean
    nome_mot?: boolean
    cpf_mot?: boolean
    status_motorista?: boolean
  }


  export type VwMotoristasGetPayload<S extends boolean | null | undefined | VwMotoristasArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VwMotoristas :
    S extends undefined ? never :
    S extends { include: any } & (VwMotoristasArgs | VwMotoristasFindManyArgs)
    ? VwMotoristas 
    : S extends { select: any } & (VwMotoristasArgs | VwMotoristasFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof VwMotoristas ? VwMotoristas[P] : never
  } 
      : VwMotoristas


  type VwMotoristasCountArgs = 
    Omit<VwMotoristasFindManyArgs, 'select' | 'include'> & {
      select?: VwMotoristasCountAggregateInputType | true
    }

  export interface VwMotoristasDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one VwMotoristas that matches the filter.
     * @param {VwMotoristasFindUniqueArgs} args - Arguments to find a VwMotoristas
     * @example
     * // Get one VwMotoristas
     * const vwMotoristas = await prisma.vwMotoristas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VwMotoristasFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VwMotoristasFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VwMotoristas'> extends True ? Prisma__VwMotoristasClient<VwMotoristasGetPayload<T>> : Prisma__VwMotoristasClient<VwMotoristasGetPayload<T> | null, null>

    /**
     * Find one VwMotoristas that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VwMotoristasFindUniqueOrThrowArgs} args - Arguments to find a VwMotoristas
     * @example
     * // Get one VwMotoristas
     * const vwMotoristas = await prisma.vwMotoristas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VwMotoristasFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VwMotoristasFindUniqueOrThrowArgs>
    ): Prisma__VwMotoristasClient<VwMotoristasGetPayload<T>>

    /**
     * Find the first VwMotoristas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwMotoristasFindFirstArgs} args - Arguments to find a VwMotoristas
     * @example
     * // Get one VwMotoristas
     * const vwMotoristas = await prisma.vwMotoristas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VwMotoristasFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VwMotoristasFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VwMotoristas'> extends True ? Prisma__VwMotoristasClient<VwMotoristasGetPayload<T>> : Prisma__VwMotoristasClient<VwMotoristasGetPayload<T> | null, null>

    /**
     * Find the first VwMotoristas that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwMotoristasFindFirstOrThrowArgs} args - Arguments to find a VwMotoristas
     * @example
     * // Get one VwMotoristas
     * const vwMotoristas = await prisma.vwMotoristas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VwMotoristasFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VwMotoristasFindFirstOrThrowArgs>
    ): Prisma__VwMotoristasClient<VwMotoristasGetPayload<T>>

    /**
     * Find zero or more VwMotoristas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwMotoristasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VwMotoristas
     * const vwMotoristas = await prisma.vwMotoristas.findMany()
     * 
     * // Get first 10 VwMotoristas
     * const vwMotoristas = await prisma.vwMotoristas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vwMotoristasWithIdOnly = await prisma.vwMotoristas.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VwMotoristasFindManyArgs>(
      args?: SelectSubset<T, VwMotoristasFindManyArgs>
    ): PrismaPromise<Array<VwMotoristasGetPayload<T>>>

    /**
     * Create a VwMotoristas.
     * @param {VwMotoristasCreateArgs} args - Arguments to create a VwMotoristas.
     * @example
     * // Create one VwMotoristas
     * const VwMotoristas = await prisma.vwMotoristas.create({
     *   data: {
     *     // ... data to create a VwMotoristas
     *   }
     * })
     * 
    **/
    create<T extends VwMotoristasCreateArgs>(
      args: SelectSubset<T, VwMotoristasCreateArgs>
    ): Prisma__VwMotoristasClient<VwMotoristasGetPayload<T>>

    /**
     * Create many VwMotoristas.
     *     @param {VwMotoristasCreateManyArgs} args - Arguments to create many VwMotoristas.
     *     @example
     *     // Create many VwMotoristas
     *     const vwMotoristas = await prisma.vwMotoristas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VwMotoristasCreateManyArgs>(
      args?: SelectSubset<T, VwMotoristasCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a VwMotoristas.
     * @param {VwMotoristasDeleteArgs} args - Arguments to delete one VwMotoristas.
     * @example
     * // Delete one VwMotoristas
     * const VwMotoristas = await prisma.vwMotoristas.delete({
     *   where: {
     *     // ... filter to delete one VwMotoristas
     *   }
     * })
     * 
    **/
    delete<T extends VwMotoristasDeleteArgs>(
      args: SelectSubset<T, VwMotoristasDeleteArgs>
    ): Prisma__VwMotoristasClient<VwMotoristasGetPayload<T>>

    /**
     * Update one VwMotoristas.
     * @param {VwMotoristasUpdateArgs} args - Arguments to update one VwMotoristas.
     * @example
     * // Update one VwMotoristas
     * const vwMotoristas = await prisma.vwMotoristas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VwMotoristasUpdateArgs>(
      args: SelectSubset<T, VwMotoristasUpdateArgs>
    ): Prisma__VwMotoristasClient<VwMotoristasGetPayload<T>>

    /**
     * Delete zero or more VwMotoristas.
     * @param {VwMotoristasDeleteManyArgs} args - Arguments to filter VwMotoristas to delete.
     * @example
     * // Delete a few VwMotoristas
     * const { count } = await prisma.vwMotoristas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VwMotoristasDeleteManyArgs>(
      args?: SelectSubset<T, VwMotoristasDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more VwMotoristas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwMotoristasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VwMotoristas
     * const vwMotoristas = await prisma.vwMotoristas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VwMotoristasUpdateManyArgs>(
      args: SelectSubset<T, VwMotoristasUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one VwMotoristas.
     * @param {VwMotoristasUpsertArgs} args - Arguments to update or create a VwMotoristas.
     * @example
     * // Update or create a VwMotoristas
     * const vwMotoristas = await prisma.vwMotoristas.upsert({
     *   create: {
     *     // ... data to create a VwMotoristas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VwMotoristas we want to update
     *   }
     * })
    **/
    upsert<T extends VwMotoristasUpsertArgs>(
      args: SelectSubset<T, VwMotoristasUpsertArgs>
    ): Prisma__VwMotoristasClient<VwMotoristasGetPayload<T>>

    /**
     * Count the number of VwMotoristas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwMotoristasCountArgs} args - Arguments to filter VwMotoristas to count.
     * @example
     * // Count the number of VwMotoristas
     * const count = await prisma.vwMotoristas.count({
     *   where: {
     *     // ... the filter for the VwMotoristas we want to count
     *   }
     * })
    **/
    count<T extends VwMotoristasCountArgs>(
      args?: Subset<T, VwMotoristasCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VwMotoristasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VwMotoristas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwMotoristasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VwMotoristasAggregateArgs>(args: Subset<T, VwMotoristasAggregateArgs>): PrismaPromise<GetVwMotoristasAggregateType<T>>

    /**
     * Group by VwMotoristas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwMotoristasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VwMotoristasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VwMotoristasGroupByArgs['orderBy'] }
        : { orderBy?: VwMotoristasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VwMotoristasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVwMotoristasGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for VwMotoristas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VwMotoristasClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * VwMotoristas base type for findUnique actions
   */
  export type VwMotoristasFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the VwMotoristas
     */
    select?: VwMotoristasSelect | null
    /**
     * Filter, which VwMotoristas to fetch.
     */
    where: VwMotoristasWhereUniqueInput
  }

  /**
   * VwMotoristas findUnique
   */
  export interface VwMotoristasFindUniqueArgs extends VwMotoristasFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VwMotoristas findUniqueOrThrow
   */
  export type VwMotoristasFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VwMotoristas
     */
    select?: VwMotoristasSelect | null
    /**
     * Filter, which VwMotoristas to fetch.
     */
    where: VwMotoristasWhereUniqueInput
  }


  /**
   * VwMotoristas base type for findFirst actions
   */
  export type VwMotoristasFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the VwMotoristas
     */
    select?: VwMotoristasSelect | null
    /**
     * Filter, which VwMotoristas to fetch.
     */
    where?: VwMotoristasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VwMotoristas to fetch.
     */
    orderBy?: Enumerable<VwMotoristasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VwMotoristas.
     */
    cursor?: VwMotoristasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VwMotoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VwMotoristas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VwMotoristas.
     */
    distinct?: Enumerable<VwMotoristasScalarFieldEnum>
  }

  /**
   * VwMotoristas findFirst
   */
  export interface VwMotoristasFindFirstArgs extends VwMotoristasFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VwMotoristas findFirstOrThrow
   */
  export type VwMotoristasFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VwMotoristas
     */
    select?: VwMotoristasSelect | null
    /**
     * Filter, which VwMotoristas to fetch.
     */
    where?: VwMotoristasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VwMotoristas to fetch.
     */
    orderBy?: Enumerable<VwMotoristasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VwMotoristas.
     */
    cursor?: VwMotoristasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VwMotoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VwMotoristas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VwMotoristas.
     */
    distinct?: Enumerable<VwMotoristasScalarFieldEnum>
  }


  /**
   * VwMotoristas findMany
   */
  export type VwMotoristasFindManyArgs = {
    /**
     * Select specific fields to fetch from the VwMotoristas
     */
    select?: VwMotoristasSelect | null
    /**
     * Filter, which VwMotoristas to fetch.
     */
    where?: VwMotoristasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VwMotoristas to fetch.
     */
    orderBy?: Enumerable<VwMotoristasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VwMotoristas.
     */
    cursor?: VwMotoristasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VwMotoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VwMotoristas.
     */
    skip?: number
    distinct?: Enumerable<VwMotoristasScalarFieldEnum>
  }


  /**
   * VwMotoristas create
   */
  export type VwMotoristasCreateArgs = {
    /**
     * Select specific fields to fetch from the VwMotoristas
     */
    select?: VwMotoristasSelect | null
    /**
     * The data needed to create a VwMotoristas.
     */
    data: XOR<VwMotoristasCreateInput, VwMotoristasUncheckedCreateInput>
  }


  /**
   * VwMotoristas createMany
   */
  export type VwMotoristasCreateManyArgs = {
    /**
     * The data used to create many VwMotoristas.
     */
    data: Enumerable<VwMotoristasCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * VwMotoristas update
   */
  export type VwMotoristasUpdateArgs = {
    /**
     * Select specific fields to fetch from the VwMotoristas
     */
    select?: VwMotoristasSelect | null
    /**
     * The data needed to update a VwMotoristas.
     */
    data: XOR<VwMotoristasUpdateInput, VwMotoristasUncheckedUpdateInput>
    /**
     * Choose, which VwMotoristas to update.
     */
    where: VwMotoristasWhereUniqueInput
  }


  /**
   * VwMotoristas updateMany
   */
  export type VwMotoristasUpdateManyArgs = {
    /**
     * The data used to update VwMotoristas.
     */
    data: XOR<VwMotoristasUpdateManyMutationInput, VwMotoristasUncheckedUpdateManyInput>
    /**
     * Filter which VwMotoristas to update
     */
    where?: VwMotoristasWhereInput
  }


  /**
   * VwMotoristas upsert
   */
  export type VwMotoristasUpsertArgs = {
    /**
     * Select specific fields to fetch from the VwMotoristas
     */
    select?: VwMotoristasSelect | null
    /**
     * The filter to search for the VwMotoristas to update in case it exists.
     */
    where: VwMotoristasWhereUniqueInput
    /**
     * In case the VwMotoristas found by the `where` argument doesn't exist, create a new VwMotoristas with this data.
     */
    create: XOR<VwMotoristasCreateInput, VwMotoristasUncheckedCreateInput>
    /**
     * In case the VwMotoristas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VwMotoristasUpdateInput, VwMotoristasUncheckedUpdateInput>
  }


  /**
   * VwMotoristas delete
   */
  export type VwMotoristasDeleteArgs = {
    /**
     * Select specific fields to fetch from the VwMotoristas
     */
    select?: VwMotoristasSelect | null
    /**
     * Filter which VwMotoristas to delete.
     */
    where: VwMotoristasWhereUniqueInput
  }


  /**
   * VwMotoristas deleteMany
   */
  export type VwMotoristasDeleteManyArgs = {
    /**
     * Filter which VwMotoristas to delete
     */
    where?: VwMotoristasWhereInput
  }


  /**
   * VwMotoristas without action
   */
  export type VwMotoristasArgs = {
    /**
     * Select specific fields to fetch from the VwMotoristas
     */
    select?: VwMotoristasSelect | null
  }



  /**
   * Model VwProprietarios
   */


  export type AggregateVwProprietarios = {
    _count: VwProprietariosCountAggregateOutputType | null
    _avg: VwProprietariosAvgAggregateOutputType | null
    _sum: VwProprietariosSumAggregateOutputType | null
    _min: VwProprietariosMinAggregateOutputType | null
    _max: VwProprietariosMaxAggregateOutputType | null
  }

  export type VwProprietariosAvgAggregateOutputType = {
    id: number | null
  }

  export type VwProprietariosSumAggregateOutputType = {
    id: number | null
  }

  export type VwProprietariosMinAggregateOutputType = {
    id: number | null
    cnpj: string | null
    razaosocial: string | null
    nomefantasia: string | null
    nome_prop: string | null
    cpf_cnpj_prop: string | null
    status_proprietario: enum_status_proprietario | null
  }

  export type VwProprietariosMaxAggregateOutputType = {
    id: number | null
    cnpj: string | null
    razaosocial: string | null
    nomefantasia: string | null
    nome_prop: string | null
    cpf_cnpj_prop: string | null
    status_proprietario: enum_status_proprietario | null
  }

  export type VwProprietariosCountAggregateOutputType = {
    id: number
    cnpj: number
    razaosocial: number
    nomefantasia: number
    nome_prop: number
    cpf_cnpj_prop: number
    status_proprietario: number
    _all: number
  }


  export type VwProprietariosAvgAggregateInputType = {
    id?: true
  }

  export type VwProprietariosSumAggregateInputType = {
    id?: true
  }

  export type VwProprietariosMinAggregateInputType = {
    id?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    nome_prop?: true
    cpf_cnpj_prop?: true
    status_proprietario?: true
  }

  export type VwProprietariosMaxAggregateInputType = {
    id?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    nome_prop?: true
    cpf_cnpj_prop?: true
    status_proprietario?: true
  }

  export type VwProprietariosCountAggregateInputType = {
    id?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    nome_prop?: true
    cpf_cnpj_prop?: true
    status_proprietario?: true
    _all?: true
  }

  export type VwProprietariosAggregateArgs = {
    /**
     * Filter which VwProprietarios to aggregate.
     */
    where?: VwProprietariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VwProprietarios to fetch.
     */
    orderBy?: Enumerable<VwProprietariosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VwProprietariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VwProprietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VwProprietarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VwProprietarios
    **/
    _count?: true | VwProprietariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VwProprietariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VwProprietariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VwProprietariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VwProprietariosMaxAggregateInputType
  }

  export type GetVwProprietariosAggregateType<T extends VwProprietariosAggregateArgs> = {
        [P in keyof T & keyof AggregateVwProprietarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVwProprietarios[P]>
      : GetScalarType<T[P], AggregateVwProprietarios[P]>
  }




  export type VwProprietariosGroupByArgs = {
    where?: VwProprietariosWhereInput
    orderBy?: Enumerable<VwProprietariosOrderByWithAggregationInput>
    by: VwProprietariosScalarFieldEnum[]
    having?: VwProprietariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VwProprietariosCountAggregateInputType | true
    _avg?: VwProprietariosAvgAggregateInputType
    _sum?: VwProprietariosSumAggregateInputType
    _min?: VwProprietariosMinAggregateInputType
    _max?: VwProprietariosMaxAggregateInputType
  }


  export type VwProprietariosGroupByOutputType = {
    id: number
    cnpj: string
    razaosocial: string | null
    nomefantasia: string | null
    nome_prop: string
    cpf_cnpj_prop: string
    status_proprietario: enum_status_proprietario
    _count: VwProprietariosCountAggregateOutputType | null
    _avg: VwProprietariosAvgAggregateOutputType | null
    _sum: VwProprietariosSumAggregateOutputType | null
    _min: VwProprietariosMinAggregateOutputType | null
    _max: VwProprietariosMaxAggregateOutputType | null
  }

  type GetVwProprietariosGroupByPayload<T extends VwProprietariosGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VwProprietariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VwProprietariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VwProprietariosGroupByOutputType[P]>
            : GetScalarType<T[P], VwProprietariosGroupByOutputType[P]>
        }
      >
    >


  export type VwProprietariosSelect = {
    id?: boolean
    cnpj?: boolean
    razaosocial?: boolean
    nomefantasia?: boolean
    nome_prop?: boolean
    cpf_cnpj_prop?: boolean
    status_proprietario?: boolean
  }


  export type VwProprietariosGetPayload<S extends boolean | null | undefined | VwProprietariosArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VwProprietarios :
    S extends undefined ? never :
    S extends { include: any } & (VwProprietariosArgs | VwProprietariosFindManyArgs)
    ? VwProprietarios 
    : S extends { select: any } & (VwProprietariosArgs | VwProprietariosFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof VwProprietarios ? VwProprietarios[P] : never
  } 
      : VwProprietarios


  type VwProprietariosCountArgs = 
    Omit<VwProprietariosFindManyArgs, 'select' | 'include'> & {
      select?: VwProprietariosCountAggregateInputType | true
    }

  export interface VwProprietariosDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one VwProprietarios that matches the filter.
     * @param {VwProprietariosFindUniqueArgs} args - Arguments to find a VwProprietarios
     * @example
     * // Get one VwProprietarios
     * const vwProprietarios = await prisma.vwProprietarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VwProprietariosFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VwProprietariosFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VwProprietarios'> extends True ? Prisma__VwProprietariosClient<VwProprietariosGetPayload<T>> : Prisma__VwProprietariosClient<VwProprietariosGetPayload<T> | null, null>

    /**
     * Find one VwProprietarios that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VwProprietariosFindUniqueOrThrowArgs} args - Arguments to find a VwProprietarios
     * @example
     * // Get one VwProprietarios
     * const vwProprietarios = await prisma.vwProprietarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VwProprietariosFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VwProprietariosFindUniqueOrThrowArgs>
    ): Prisma__VwProprietariosClient<VwProprietariosGetPayload<T>>

    /**
     * Find the first VwProprietarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwProprietariosFindFirstArgs} args - Arguments to find a VwProprietarios
     * @example
     * // Get one VwProprietarios
     * const vwProprietarios = await prisma.vwProprietarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VwProprietariosFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VwProprietariosFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VwProprietarios'> extends True ? Prisma__VwProprietariosClient<VwProprietariosGetPayload<T>> : Prisma__VwProprietariosClient<VwProprietariosGetPayload<T> | null, null>

    /**
     * Find the first VwProprietarios that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwProprietariosFindFirstOrThrowArgs} args - Arguments to find a VwProprietarios
     * @example
     * // Get one VwProprietarios
     * const vwProprietarios = await prisma.vwProprietarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VwProprietariosFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VwProprietariosFindFirstOrThrowArgs>
    ): Prisma__VwProprietariosClient<VwProprietariosGetPayload<T>>

    /**
     * Find zero or more VwProprietarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwProprietariosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VwProprietarios
     * const vwProprietarios = await prisma.vwProprietarios.findMany()
     * 
     * // Get first 10 VwProprietarios
     * const vwProprietarios = await prisma.vwProprietarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vwProprietariosWithIdOnly = await prisma.vwProprietarios.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VwProprietariosFindManyArgs>(
      args?: SelectSubset<T, VwProprietariosFindManyArgs>
    ): PrismaPromise<Array<VwProprietariosGetPayload<T>>>

    /**
     * Create a VwProprietarios.
     * @param {VwProprietariosCreateArgs} args - Arguments to create a VwProprietarios.
     * @example
     * // Create one VwProprietarios
     * const VwProprietarios = await prisma.vwProprietarios.create({
     *   data: {
     *     // ... data to create a VwProprietarios
     *   }
     * })
     * 
    **/
    create<T extends VwProprietariosCreateArgs>(
      args: SelectSubset<T, VwProprietariosCreateArgs>
    ): Prisma__VwProprietariosClient<VwProprietariosGetPayload<T>>

    /**
     * Create many VwProprietarios.
     *     @param {VwProprietariosCreateManyArgs} args - Arguments to create many VwProprietarios.
     *     @example
     *     // Create many VwProprietarios
     *     const vwProprietarios = await prisma.vwProprietarios.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VwProprietariosCreateManyArgs>(
      args?: SelectSubset<T, VwProprietariosCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a VwProprietarios.
     * @param {VwProprietariosDeleteArgs} args - Arguments to delete one VwProprietarios.
     * @example
     * // Delete one VwProprietarios
     * const VwProprietarios = await prisma.vwProprietarios.delete({
     *   where: {
     *     // ... filter to delete one VwProprietarios
     *   }
     * })
     * 
    **/
    delete<T extends VwProprietariosDeleteArgs>(
      args: SelectSubset<T, VwProprietariosDeleteArgs>
    ): Prisma__VwProprietariosClient<VwProprietariosGetPayload<T>>

    /**
     * Update one VwProprietarios.
     * @param {VwProprietariosUpdateArgs} args - Arguments to update one VwProprietarios.
     * @example
     * // Update one VwProprietarios
     * const vwProprietarios = await prisma.vwProprietarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VwProprietariosUpdateArgs>(
      args: SelectSubset<T, VwProprietariosUpdateArgs>
    ): Prisma__VwProprietariosClient<VwProprietariosGetPayload<T>>

    /**
     * Delete zero or more VwProprietarios.
     * @param {VwProprietariosDeleteManyArgs} args - Arguments to filter VwProprietarios to delete.
     * @example
     * // Delete a few VwProprietarios
     * const { count } = await prisma.vwProprietarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VwProprietariosDeleteManyArgs>(
      args?: SelectSubset<T, VwProprietariosDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more VwProprietarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwProprietariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VwProprietarios
     * const vwProprietarios = await prisma.vwProprietarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VwProprietariosUpdateManyArgs>(
      args: SelectSubset<T, VwProprietariosUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one VwProprietarios.
     * @param {VwProprietariosUpsertArgs} args - Arguments to update or create a VwProprietarios.
     * @example
     * // Update or create a VwProprietarios
     * const vwProprietarios = await prisma.vwProprietarios.upsert({
     *   create: {
     *     // ... data to create a VwProprietarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VwProprietarios we want to update
     *   }
     * })
    **/
    upsert<T extends VwProprietariosUpsertArgs>(
      args: SelectSubset<T, VwProprietariosUpsertArgs>
    ): Prisma__VwProprietariosClient<VwProprietariosGetPayload<T>>

    /**
     * Count the number of VwProprietarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwProprietariosCountArgs} args - Arguments to filter VwProprietarios to count.
     * @example
     * // Count the number of VwProprietarios
     * const count = await prisma.vwProprietarios.count({
     *   where: {
     *     // ... the filter for the VwProprietarios we want to count
     *   }
     * })
    **/
    count<T extends VwProprietariosCountArgs>(
      args?: Subset<T, VwProprietariosCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VwProprietariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VwProprietarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwProprietariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VwProprietariosAggregateArgs>(args: Subset<T, VwProprietariosAggregateArgs>): PrismaPromise<GetVwProprietariosAggregateType<T>>

    /**
     * Group by VwProprietarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwProprietariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VwProprietariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VwProprietariosGroupByArgs['orderBy'] }
        : { orderBy?: VwProprietariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VwProprietariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVwProprietariosGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for VwProprietarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VwProprietariosClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * VwProprietarios base type for findUnique actions
   */
  export type VwProprietariosFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the VwProprietarios
     */
    select?: VwProprietariosSelect | null
    /**
     * Filter, which VwProprietarios to fetch.
     */
    where: VwProprietariosWhereUniqueInput
  }

  /**
   * VwProprietarios findUnique
   */
  export interface VwProprietariosFindUniqueArgs extends VwProprietariosFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VwProprietarios findUniqueOrThrow
   */
  export type VwProprietariosFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VwProprietarios
     */
    select?: VwProprietariosSelect | null
    /**
     * Filter, which VwProprietarios to fetch.
     */
    where: VwProprietariosWhereUniqueInput
  }


  /**
   * VwProprietarios base type for findFirst actions
   */
  export type VwProprietariosFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the VwProprietarios
     */
    select?: VwProprietariosSelect | null
    /**
     * Filter, which VwProprietarios to fetch.
     */
    where?: VwProprietariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VwProprietarios to fetch.
     */
    orderBy?: Enumerable<VwProprietariosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VwProprietarios.
     */
    cursor?: VwProprietariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VwProprietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VwProprietarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VwProprietarios.
     */
    distinct?: Enumerable<VwProprietariosScalarFieldEnum>
  }

  /**
   * VwProprietarios findFirst
   */
  export interface VwProprietariosFindFirstArgs extends VwProprietariosFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VwProprietarios findFirstOrThrow
   */
  export type VwProprietariosFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VwProprietarios
     */
    select?: VwProprietariosSelect | null
    /**
     * Filter, which VwProprietarios to fetch.
     */
    where?: VwProprietariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VwProprietarios to fetch.
     */
    orderBy?: Enumerable<VwProprietariosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VwProprietarios.
     */
    cursor?: VwProprietariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VwProprietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VwProprietarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VwProprietarios.
     */
    distinct?: Enumerable<VwProprietariosScalarFieldEnum>
  }


  /**
   * VwProprietarios findMany
   */
  export type VwProprietariosFindManyArgs = {
    /**
     * Select specific fields to fetch from the VwProprietarios
     */
    select?: VwProprietariosSelect | null
    /**
     * Filter, which VwProprietarios to fetch.
     */
    where?: VwProprietariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VwProprietarios to fetch.
     */
    orderBy?: Enumerable<VwProprietariosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VwProprietarios.
     */
    cursor?: VwProprietariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VwProprietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VwProprietarios.
     */
    skip?: number
    distinct?: Enumerable<VwProprietariosScalarFieldEnum>
  }


  /**
   * VwProprietarios create
   */
  export type VwProprietariosCreateArgs = {
    /**
     * Select specific fields to fetch from the VwProprietarios
     */
    select?: VwProprietariosSelect | null
    /**
     * The data needed to create a VwProprietarios.
     */
    data: XOR<VwProprietariosCreateInput, VwProprietariosUncheckedCreateInput>
  }


  /**
   * VwProprietarios createMany
   */
  export type VwProprietariosCreateManyArgs = {
    /**
     * The data used to create many VwProprietarios.
     */
    data: Enumerable<VwProprietariosCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * VwProprietarios update
   */
  export type VwProprietariosUpdateArgs = {
    /**
     * Select specific fields to fetch from the VwProprietarios
     */
    select?: VwProprietariosSelect | null
    /**
     * The data needed to update a VwProprietarios.
     */
    data: XOR<VwProprietariosUpdateInput, VwProprietariosUncheckedUpdateInput>
    /**
     * Choose, which VwProprietarios to update.
     */
    where: VwProprietariosWhereUniqueInput
  }


  /**
   * VwProprietarios updateMany
   */
  export type VwProprietariosUpdateManyArgs = {
    /**
     * The data used to update VwProprietarios.
     */
    data: XOR<VwProprietariosUpdateManyMutationInput, VwProprietariosUncheckedUpdateManyInput>
    /**
     * Filter which VwProprietarios to update
     */
    where?: VwProprietariosWhereInput
  }


  /**
   * VwProprietarios upsert
   */
  export type VwProprietariosUpsertArgs = {
    /**
     * Select specific fields to fetch from the VwProprietarios
     */
    select?: VwProprietariosSelect | null
    /**
     * The filter to search for the VwProprietarios to update in case it exists.
     */
    where: VwProprietariosWhereUniqueInput
    /**
     * In case the VwProprietarios found by the `where` argument doesn't exist, create a new VwProprietarios with this data.
     */
    create: XOR<VwProprietariosCreateInput, VwProprietariosUncheckedCreateInput>
    /**
     * In case the VwProprietarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VwProprietariosUpdateInput, VwProprietariosUncheckedUpdateInput>
  }


  /**
   * VwProprietarios delete
   */
  export type VwProprietariosDeleteArgs = {
    /**
     * Select specific fields to fetch from the VwProprietarios
     */
    select?: VwProprietariosSelect | null
    /**
     * Filter which VwProprietarios to delete.
     */
    where: VwProprietariosWhereUniqueInput
  }


  /**
   * VwProprietarios deleteMany
   */
  export type VwProprietariosDeleteManyArgs = {
    /**
     * Filter which VwProprietarios to delete
     */
    where?: VwProprietariosWhereInput
  }


  /**
   * VwProprietarios without action
   */
  export type VwProprietariosArgs = {
    /**
     * Select specific fields to fetch from the VwProprietarios
     */
    select?: VwProprietariosSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ClientesScalarFieldEnum: {
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
  };

  export type ClientesScalarFieldEnum = (typeof ClientesScalarFieldEnum)[keyof typeof ClientesScalarFieldEnum]


  export const Contatos_motoristasScalarFieldEnum: {
    id: 'id',
    idmotorista: 'idmotorista',
    idcliente: 'idcliente',
    contato: 'contato',
    tipo_contato: 'tipo_contato',
    dt_criacao: 'dt_criacao',
    dt_atualizacao: 'dt_atualizacao',
    clientesId: 'clientesId',
    motoristasId: 'motoristasId'
  };

  export type Contatos_motoristasScalarFieldEnum = (typeof Contatos_motoristasScalarFieldEnum)[keyof typeof Contatos_motoristasScalarFieldEnum]


  export const MotoristasScalarFieldEnum: {
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
  };

  export type MotoristasScalarFieldEnum = (typeof MotoristasScalarFieldEnum)[keyof typeof MotoristasScalarFieldEnum]


  export const ProprietariosScalarFieldEnum: {
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
  };

  export type ProprietariosScalarFieldEnum = (typeof ProprietariosScalarFieldEnum)[keyof typeof ProprietariosScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const Status_motoristasScalarFieldEnum: {
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
  };

  export type Status_motoristasScalarFieldEnum = (typeof Status_motoristasScalarFieldEnum)[keyof typeof Status_motoristasScalarFieldEnum]


  export const Status_proprietariosScalarFieldEnum: {
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
  };

  export type Status_proprietariosScalarFieldEnum = (typeof Status_proprietariosScalarFieldEnum)[keyof typeof Status_proprietariosScalarFieldEnum]


  export const Status_veiculosScalarFieldEnum: {
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
  };

  export type Status_veiculosScalarFieldEnum = (typeof Status_veiculosScalarFieldEnum)[keyof typeof Status_veiculosScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VeiculosScalarFieldEnum: {
    id: 'id',
    placa: 'placa',
    renavam: 'renavam',
    ativo: 'ativo',
    cadastro_verificado: 'cadastro_verificado',
    dt_criacao: 'dt_criacao',
    dt_atualizacao: 'dt_atualizacao'
  };

  export type VeiculosScalarFieldEnum = (typeof VeiculosScalarFieldEnum)[keyof typeof VeiculosScalarFieldEnum]


  export const ViagensScalarFieldEnum: {
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
  };

  export type ViagensScalarFieldEnum = (typeof ViagensScalarFieldEnum)[keyof typeof ViagensScalarFieldEnum]


  export const VwMotoristasScalarFieldEnum: {
    id: 'id',
    cnpj: 'cnpj',
    razaosocial: 'razaosocial',
    nomefantasia: 'nomefantasia',
    nome_mot: 'nome_mot',
    cpf_mot: 'cpf_mot',
    status_motorista: 'status_motorista'
  };

  export type VwMotoristasScalarFieldEnum = (typeof VwMotoristasScalarFieldEnum)[keyof typeof VwMotoristasScalarFieldEnum]


  export const VwProprietariosScalarFieldEnum: {
    id: 'id',
    cnpj: 'cnpj',
    razaosocial: 'razaosocial',
    nomefantasia: 'nomefantasia',
    nome_prop: 'nome_prop',
    cpf_cnpj_prop: 'cpf_cnpj_prop',
    status_proprietario: 'status_proprietario'
  };

  export type VwProprietariosScalarFieldEnum = (typeof VwProprietariosScalarFieldEnum)[keyof typeof VwProprietariosScalarFieldEnum]


  export const VwVeiculosScalarFieldEnum: {
    id: 'id',
    cnpj: 'cnpj',
    razaosocial: 'razaosocial',
    nomefantasia: 'nomefantasia',
    placa: 'placa',
    status_veiculo: 'status_veiculo'
  };

  export type VwVeiculosScalarFieldEnum = (typeof VwVeiculosScalarFieldEnum)[keyof typeof VwVeiculosScalarFieldEnum]


  export const VwViagensScalarFieldEnum: {
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
  };

  export type VwViagensScalarFieldEnum = (typeof VwViagensScalarFieldEnum)[keyof typeof VwViagensScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type clientesWhereInput = {
    AND?: Enumerable<clientesWhereInput>
    OR?: Enumerable<clientesWhereInput>
    NOT?: Enumerable<clientesWhereInput>
    id?: IntFilter | number
    cnpj?: StringFilter | string
    razaosocial?: StringFilter | string
    nomefantasia?: StringFilter | string
    telefone?: StringNullableFilter | string | null
    email?: StringFilter | string
    photo?: StringNullableFilter | string | null
    ativo?: BoolFilter | boolean
    dt_criacao?: DateTimeFilter | Date | string
    dt_atualizacao?: DateTimeFilter | Date | string
    contatos_motoristas?: Contatos_motoristasListRelationFilter
    status_motoristas?: Status_motoristasListRelationFilter
    status_proprietarios?: Status_proprietariosListRelationFilter
    status_veiculos?: Status_veiculosListRelationFilter
    viagens?: ViagensListRelationFilter
  }

  export type clientesOrderByWithRelationInput = {
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    ativo?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    contatos_motoristas?: contatos_motoristasOrderByRelationAggregateInput
    status_motoristas?: status_motoristasOrderByRelationAggregateInput
    status_proprietarios?: status_proprietariosOrderByRelationAggregateInput
    status_veiculos?: status_veiculosOrderByRelationAggregateInput
    viagens?: viagensOrderByRelationAggregateInput
  }

  export type clientesWhereUniqueInput = {
    id?: number
    cnpj?: string
    razaosocial?: string
    email?: string
  }

  export type clientesOrderByWithAggregationInput = {
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    ativo?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    _count?: clientesCountOrderByAggregateInput
    _avg?: clientesAvgOrderByAggregateInput
    _max?: clientesMaxOrderByAggregateInput
    _min?: clientesMinOrderByAggregateInput
    _sum?: clientesSumOrderByAggregateInput
  }

  export type clientesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<clientesScalarWhereWithAggregatesInput>
    OR?: Enumerable<clientesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<clientesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    cnpj?: StringWithAggregatesFilter | string
    razaosocial?: StringWithAggregatesFilter | string
    nomefantasia?: StringWithAggregatesFilter | string
    telefone?: StringNullableWithAggregatesFilter | string | null
    email?: StringWithAggregatesFilter | string
    photo?: StringNullableWithAggregatesFilter | string | null
    ativo?: BoolWithAggregatesFilter | boolean
    dt_criacao?: DateTimeWithAggregatesFilter | Date | string
    dt_atualizacao?: DateTimeWithAggregatesFilter | Date | string
  }

  export type contatos_motoristasWhereInput = {
    AND?: Enumerable<contatos_motoristasWhereInput>
    OR?: Enumerable<contatos_motoristasWhereInput>
    NOT?: Enumerable<contatos_motoristasWhereInput>
    id?: IntFilter | number
    idmotorista?: BigIntFilter | bigint | number
    idcliente?: BigIntFilter | bigint | number
    contato?: StringFilter | string
    tipo_contato?: StringFilter | string
    dt_criacao?: DateTimeFilter | Date | string
    dt_atualizacao?: DateTimeFilter | Date | string
    clientes?: XOR<ClientesRelationFilter, clientesWhereInput> | null
    clientesId?: IntNullableFilter | number | null
    motoristas?: XOR<MotoristasRelationFilter, motoristasWhereInput> | null
    motoristasId?: IntNullableFilter | number | null
  }

  export type contatos_motoristasOrderByWithRelationInput = {
    id?: SortOrder
    idmotorista?: SortOrder
    idcliente?: SortOrder
    contato?: SortOrder
    tipo_contato?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    clientes?: clientesOrderByWithRelationInput
    clientesId?: SortOrder
    motoristas?: motoristasOrderByWithRelationInput
    motoristasId?: SortOrder
  }

  export type contatos_motoristasWhereUniqueInput = {
    id?: number
  }

  export type contatos_motoristasOrderByWithAggregationInput = {
    id?: SortOrder
    idmotorista?: SortOrder
    idcliente?: SortOrder
    contato?: SortOrder
    tipo_contato?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    clientesId?: SortOrder
    motoristasId?: SortOrder
    _count?: contatos_motoristasCountOrderByAggregateInput
    _avg?: contatos_motoristasAvgOrderByAggregateInput
    _max?: contatos_motoristasMaxOrderByAggregateInput
    _min?: contatos_motoristasMinOrderByAggregateInput
    _sum?: contatos_motoristasSumOrderByAggregateInput
  }

  export type contatos_motoristasScalarWhereWithAggregatesInput = {
    AND?: Enumerable<contatos_motoristasScalarWhereWithAggregatesInput>
    OR?: Enumerable<contatos_motoristasScalarWhereWithAggregatesInput>
    NOT?: Enumerable<contatos_motoristasScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    idmotorista?: BigIntWithAggregatesFilter | bigint | number
    idcliente?: BigIntWithAggregatesFilter | bigint | number
    contato?: StringWithAggregatesFilter | string
    tipo_contato?: StringWithAggregatesFilter | string
    dt_criacao?: DateTimeWithAggregatesFilter | Date | string
    dt_atualizacao?: DateTimeWithAggregatesFilter | Date | string
    clientesId?: IntNullableWithAggregatesFilter | number | null
    motoristasId?: IntNullableWithAggregatesFilter | number | null
  }

  export type motoristasWhereInput = {
    AND?: Enumerable<motoristasWhereInput>
    OR?: Enumerable<motoristasWhereInput>
    NOT?: Enumerable<motoristasWhereInput>
    id?: IntFilter | number
    nome_mot?: StringFilter | string
    cpf_mot?: StringFilter | string
    cnh_mot?: StringNullableFilter | string | null
    nome_pai?: StringNullableFilter | string | null
    nome_mae?: StringNullableFilter | string | null
    categoria_cnh_mot?: StringNullableFilter | string | null
    cod_situacao_cnh_mot?: StringNullableFilter | string | null
    dt_validade_cnh?: DateTimeNullableFilter | Date | string | null
    dt_emissao_cnh?: DateTimeNullableFilter | Date | string | null
    dt_primeira_cnh?: DateTimeNullableFilter | Date | string | null
    dt_nascimento?: DateTimeNullableFilter | Date | string | null
    foto_motorista?: StringNullableFilter | string | null
    ativo?: BoolFilter | boolean
    cadastro_verificado?: BoolFilter | boolean
    dt_criacao?: DateTimeFilter | Date | string
    dt_atualizacao?: DateTimeFilter | Date | string
    contatos_motoristas?: Contatos_motoristasListRelationFilter
    status_motoristas?: Status_motoristasListRelationFilter
    viagens?: ViagensListRelationFilter
  }

  export type motoristasOrderByWithRelationInput = {
    id?: SortOrder
    nome_mot?: SortOrder
    cpf_mot?: SortOrder
    cnh_mot?: SortOrder
    nome_pai?: SortOrder
    nome_mae?: SortOrder
    categoria_cnh_mot?: SortOrder
    cod_situacao_cnh_mot?: SortOrder
    dt_validade_cnh?: SortOrder
    dt_emissao_cnh?: SortOrder
    dt_primeira_cnh?: SortOrder
    dt_nascimento?: SortOrder
    foto_motorista?: SortOrder
    ativo?: SortOrder
    cadastro_verificado?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    contatos_motoristas?: contatos_motoristasOrderByRelationAggregateInput
    status_motoristas?: status_motoristasOrderByRelationAggregateInput
    viagens?: viagensOrderByRelationAggregateInput
  }

  export type motoristasWhereUniqueInput = {
    id?: number
    cpf_mot?: string
  }

  export type motoristasOrderByWithAggregationInput = {
    id?: SortOrder
    nome_mot?: SortOrder
    cpf_mot?: SortOrder
    cnh_mot?: SortOrder
    nome_pai?: SortOrder
    nome_mae?: SortOrder
    categoria_cnh_mot?: SortOrder
    cod_situacao_cnh_mot?: SortOrder
    dt_validade_cnh?: SortOrder
    dt_emissao_cnh?: SortOrder
    dt_primeira_cnh?: SortOrder
    dt_nascimento?: SortOrder
    foto_motorista?: SortOrder
    ativo?: SortOrder
    cadastro_verificado?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    _count?: motoristasCountOrderByAggregateInput
    _avg?: motoristasAvgOrderByAggregateInput
    _max?: motoristasMaxOrderByAggregateInput
    _min?: motoristasMinOrderByAggregateInput
    _sum?: motoristasSumOrderByAggregateInput
  }

  export type motoristasScalarWhereWithAggregatesInput = {
    AND?: Enumerable<motoristasScalarWhereWithAggregatesInput>
    OR?: Enumerable<motoristasScalarWhereWithAggregatesInput>
    NOT?: Enumerable<motoristasScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nome_mot?: StringWithAggregatesFilter | string
    cpf_mot?: StringWithAggregatesFilter | string
    cnh_mot?: StringNullableWithAggregatesFilter | string | null
    nome_pai?: StringNullableWithAggregatesFilter | string | null
    nome_mae?: StringNullableWithAggregatesFilter | string | null
    categoria_cnh_mot?: StringNullableWithAggregatesFilter | string | null
    cod_situacao_cnh_mot?: StringNullableWithAggregatesFilter | string | null
    dt_validade_cnh?: DateTimeNullableWithAggregatesFilter | Date | string | null
    dt_emissao_cnh?: DateTimeNullableWithAggregatesFilter | Date | string | null
    dt_primeira_cnh?: DateTimeNullableWithAggregatesFilter | Date | string | null
    dt_nascimento?: DateTimeNullableWithAggregatesFilter | Date | string | null
    foto_motorista?: StringNullableWithAggregatesFilter | string | null
    ativo?: BoolWithAggregatesFilter | boolean
    cadastro_verificado?: BoolWithAggregatesFilter | boolean
    dt_criacao?: DateTimeWithAggregatesFilter | Date | string
    dt_atualizacao?: DateTimeWithAggregatesFilter | Date | string
  }

  export type proprietariosWhereInput = {
    AND?: Enumerable<proprietariosWhereInput>
    OR?: Enumerable<proprietariosWhereInput>
    NOT?: Enumerable<proprietariosWhereInput>
    id?: IntFilter | number
    nome_prop?: StringFilter | string
    antt_prop?: StringNullableFilter | string | null
    status_antt?: StringNullableFilter | string | null
    dt_validade_antt?: DateTimeNullableFilter | Date | string | null
    cpf_cnpj_prop?: StringFilter | string
    ativo?: BoolFilter | boolean
    cadastro_verificado?: BoolFilter | boolean
    dt_criacao?: DateTimeFilter | Date | string
    dt_atualizacao?: DateTimeFilter | Date | string
    status_proprietarios?: Status_proprietariosListRelationFilter
    viagens?: ViagensListRelationFilter
  }

  export type proprietariosOrderByWithRelationInput = {
    id?: SortOrder
    nome_prop?: SortOrder
    antt_prop?: SortOrder
    status_antt?: SortOrder
    dt_validade_antt?: SortOrder
    cpf_cnpj_prop?: SortOrder
    ativo?: SortOrder
    cadastro_verificado?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    status_proprietarios?: status_proprietariosOrderByRelationAggregateInput
    viagens?: viagensOrderByRelationAggregateInput
  }

  export type proprietariosWhereUniqueInput = {
    id?: number
    cpf_cnpj_prop?: string
  }

  export type proprietariosOrderByWithAggregationInput = {
    id?: SortOrder
    nome_prop?: SortOrder
    antt_prop?: SortOrder
    status_antt?: SortOrder
    dt_validade_antt?: SortOrder
    cpf_cnpj_prop?: SortOrder
    ativo?: SortOrder
    cadastro_verificado?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    _count?: proprietariosCountOrderByAggregateInput
    _avg?: proprietariosAvgOrderByAggregateInput
    _max?: proprietariosMaxOrderByAggregateInput
    _min?: proprietariosMinOrderByAggregateInput
    _sum?: proprietariosSumOrderByAggregateInput
  }

  export type proprietariosScalarWhereWithAggregatesInput = {
    AND?: Enumerable<proprietariosScalarWhereWithAggregatesInput>
    OR?: Enumerable<proprietariosScalarWhereWithAggregatesInput>
    NOT?: Enumerable<proprietariosScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nome_prop?: StringWithAggregatesFilter | string
    antt_prop?: StringNullableWithAggregatesFilter | string | null
    status_antt?: StringNullableWithAggregatesFilter | string | null
    dt_validade_antt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    cpf_cnpj_prop?: StringWithAggregatesFilter | string
    ativo?: BoolWithAggregatesFilter | boolean
    cadastro_verificado?: BoolWithAggregatesFilter | boolean
    dt_criacao?: DateTimeWithAggregatesFilter | Date | string
    dt_atualizacao?: DateTimeWithAggregatesFilter | Date | string
  }

  export type status_motoristasWhereInput = {
    AND?: Enumerable<status_motoristasWhereInput>
    OR?: Enumerable<status_motoristasWhereInput>
    NOT?: Enumerable<status_motoristasWhereInput>
    id?: IntFilter | number
    idmotorista?: BigIntFilter | bigint | number
    idcliente?: BigIntFilter | bigint | number
    dt_cliente?: DateTimeFilter | Date | string
    numero_cliente?: StringNullableFilter | string | null
    lote_arquivo?: StringNullableFilter | string | null
    status_motorista?: Enumenum_status_motoristaFilter | enum_status_motorista
    dt_criacao?: DateTimeFilter | Date | string
    dt_atualizacao?: DateTimeFilter | Date | string
    clientes?: XOR<ClientesRelationFilter, clientesWhereInput> | null
    clientesId?: IntNullableFilter | number | null
    motoristas?: XOR<MotoristasRelationFilter, motoristasWhereInput> | null
    motoristasId?: IntNullableFilter | number | null
  }

  export type status_motoristasOrderByWithRelationInput = {
    id?: SortOrder
    idmotorista?: SortOrder
    idcliente?: SortOrder
    dt_cliente?: SortOrder
    numero_cliente?: SortOrder
    lote_arquivo?: SortOrder
    status_motorista?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    clientes?: clientesOrderByWithRelationInput
    clientesId?: SortOrder
    motoristas?: motoristasOrderByWithRelationInput
    motoristasId?: SortOrder
  }

  export type status_motoristasWhereUniqueInput = {
    id?: number
    idmotorista_idcliente?: status_motoristasIdmotoristaIdclienteCompoundUniqueInput
  }

  export type status_motoristasOrderByWithAggregationInput = {
    id?: SortOrder
    idmotorista?: SortOrder
    idcliente?: SortOrder
    dt_cliente?: SortOrder
    numero_cliente?: SortOrder
    lote_arquivo?: SortOrder
    status_motorista?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    clientesId?: SortOrder
    motoristasId?: SortOrder
    _count?: status_motoristasCountOrderByAggregateInput
    _avg?: status_motoristasAvgOrderByAggregateInput
    _max?: status_motoristasMaxOrderByAggregateInput
    _min?: status_motoristasMinOrderByAggregateInput
    _sum?: status_motoristasSumOrderByAggregateInput
  }

  export type status_motoristasScalarWhereWithAggregatesInput = {
    AND?: Enumerable<status_motoristasScalarWhereWithAggregatesInput>
    OR?: Enumerable<status_motoristasScalarWhereWithAggregatesInput>
    NOT?: Enumerable<status_motoristasScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    idmotorista?: BigIntWithAggregatesFilter | bigint | number
    idcliente?: BigIntWithAggregatesFilter | bigint | number
    dt_cliente?: DateTimeWithAggregatesFilter | Date | string
    numero_cliente?: StringNullableWithAggregatesFilter | string | null
    lote_arquivo?: StringNullableWithAggregatesFilter | string | null
    status_motorista?: Enumenum_status_motoristaWithAggregatesFilter | enum_status_motorista
    dt_criacao?: DateTimeWithAggregatesFilter | Date | string
    dt_atualizacao?: DateTimeWithAggregatesFilter | Date | string
    clientesId?: IntNullableWithAggregatesFilter | number | null
    motoristasId?: IntNullableWithAggregatesFilter | number | null
  }

  export type status_proprietariosWhereInput = {
    AND?: Enumerable<status_proprietariosWhereInput>
    OR?: Enumerable<status_proprietariosWhereInput>
    NOT?: Enumerable<status_proprietariosWhereInput>
    id?: IntFilter | number
    idproprietario?: BigIntFilter | bigint | number
    idcliente?: BigIntFilter | bigint | number
    lote_arquivo?: StringNullableFilter | string | null
    dt_cliente?: DateTimeFilter | Date | string
    numero_cliente?: StringNullableFilter | string | null
    status_proprietario?: Enumenum_status_proprietarioFilter | enum_status_proprietario
    dt_criacao?: DateTimeFilter | Date | string
    dt_atualizacao?: DateTimeFilter | Date | string
    clientes?: XOR<ClientesRelationFilter, clientesWhereInput> | null
    clientesId?: IntNullableFilter | number | null
    proprietarios?: XOR<ProprietariosRelationFilter, proprietariosWhereInput> | null
    proprietariosId?: IntNullableFilter | number | null
  }

  export type status_proprietariosOrderByWithRelationInput = {
    id?: SortOrder
    idproprietario?: SortOrder
    idcliente?: SortOrder
    lote_arquivo?: SortOrder
    dt_cliente?: SortOrder
    numero_cliente?: SortOrder
    status_proprietario?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    clientes?: clientesOrderByWithRelationInput
    clientesId?: SortOrder
    proprietarios?: proprietariosOrderByWithRelationInput
    proprietariosId?: SortOrder
  }

  export type status_proprietariosWhereUniqueInput = {
    id?: number
    idproprietario_idcliente?: status_proprietariosIdproprietarioIdclienteCompoundUniqueInput
  }

  export type status_proprietariosOrderByWithAggregationInput = {
    id?: SortOrder
    idproprietario?: SortOrder
    idcliente?: SortOrder
    lote_arquivo?: SortOrder
    dt_cliente?: SortOrder
    numero_cliente?: SortOrder
    status_proprietario?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    clientesId?: SortOrder
    proprietariosId?: SortOrder
    _count?: status_proprietariosCountOrderByAggregateInput
    _avg?: status_proprietariosAvgOrderByAggregateInput
    _max?: status_proprietariosMaxOrderByAggregateInput
    _min?: status_proprietariosMinOrderByAggregateInput
    _sum?: status_proprietariosSumOrderByAggregateInput
  }

  export type status_proprietariosScalarWhereWithAggregatesInput = {
    AND?: Enumerable<status_proprietariosScalarWhereWithAggregatesInput>
    OR?: Enumerable<status_proprietariosScalarWhereWithAggregatesInput>
    NOT?: Enumerable<status_proprietariosScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    idproprietario?: BigIntWithAggregatesFilter | bigint | number
    idcliente?: BigIntWithAggregatesFilter | bigint | number
    lote_arquivo?: StringNullableWithAggregatesFilter | string | null
    dt_cliente?: DateTimeWithAggregatesFilter | Date | string
    numero_cliente?: StringNullableWithAggregatesFilter | string | null
    status_proprietario?: Enumenum_status_proprietarioWithAggregatesFilter | enum_status_proprietario
    dt_criacao?: DateTimeWithAggregatesFilter | Date | string
    dt_atualizacao?: DateTimeWithAggregatesFilter | Date | string
    clientesId?: IntNullableWithAggregatesFilter | number | null
    proprietariosId?: IntNullableWithAggregatesFilter | number | null
  }

  export type status_veiculosWhereInput = {
    AND?: Enumerable<status_veiculosWhereInput>
    OR?: Enumerable<status_veiculosWhereInput>
    NOT?: Enumerable<status_veiculosWhereInput>
    id?: IntFilter | number
    idveiculo?: BigIntFilter | bigint | number
    idcliente?: BigIntFilter | bigint | number
    lote_arquivo?: StringNullableFilter | string | null
    dt_cliente?: DateTimeFilter | Date | string
    numero_cliente?: StringNullableFilter | string | null
    status_veiculo?: Enumenum_status_veiculoFilter | enum_status_veiculo
    dt_criacao?: DateTimeFilter | Date | string
    dt_atualizacao?: DateTimeFilter | Date | string
    clientes?: XOR<ClientesRelationFilter, clientesWhereInput> | null
    clientesId?: IntNullableFilter | number | null
    veiculos?: XOR<VeiculosRelationFilter, veiculosWhereInput> | null
    veiculosId?: IntNullableFilter | number | null
  }

  export type status_veiculosOrderByWithRelationInput = {
    id?: SortOrder
    idveiculo?: SortOrder
    idcliente?: SortOrder
    lote_arquivo?: SortOrder
    dt_cliente?: SortOrder
    numero_cliente?: SortOrder
    status_veiculo?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    clientes?: clientesOrderByWithRelationInput
    clientesId?: SortOrder
    veiculos?: veiculosOrderByWithRelationInput
    veiculosId?: SortOrder
  }

  export type status_veiculosWhereUniqueInput = {
    id?: number
    idveiculo_idcliente?: status_veiculosIdveiculoIdclienteCompoundUniqueInput
  }

  export type status_veiculosOrderByWithAggregationInput = {
    id?: SortOrder
    idveiculo?: SortOrder
    idcliente?: SortOrder
    lote_arquivo?: SortOrder
    dt_cliente?: SortOrder
    numero_cliente?: SortOrder
    status_veiculo?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    clientesId?: SortOrder
    veiculosId?: SortOrder
    _count?: status_veiculosCountOrderByAggregateInput
    _avg?: status_veiculosAvgOrderByAggregateInput
    _max?: status_veiculosMaxOrderByAggregateInput
    _min?: status_veiculosMinOrderByAggregateInput
    _sum?: status_veiculosSumOrderByAggregateInput
  }

  export type status_veiculosScalarWhereWithAggregatesInput = {
    AND?: Enumerable<status_veiculosScalarWhereWithAggregatesInput>
    OR?: Enumerable<status_veiculosScalarWhereWithAggregatesInput>
    NOT?: Enumerable<status_veiculosScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    idveiculo?: BigIntWithAggregatesFilter | bigint | number
    idcliente?: BigIntWithAggregatesFilter | bigint | number
    lote_arquivo?: StringNullableWithAggregatesFilter | string | null
    dt_cliente?: DateTimeWithAggregatesFilter | Date | string
    numero_cliente?: StringNullableWithAggregatesFilter | string | null
    status_veiculo?: Enumenum_status_veiculoWithAggregatesFilter | enum_status_veiculo
    dt_criacao?: DateTimeWithAggregatesFilter | Date | string
    dt_atualizacao?: DateTimeWithAggregatesFilter | Date | string
    clientesId?: IntNullableWithAggregatesFilter | number | null
    veiculosId?: IntNullableWithAggregatesFilter | number | null
  }

  export type veiculosWhereInput = {
    AND?: Enumerable<veiculosWhereInput>
    OR?: Enumerable<veiculosWhereInput>
    NOT?: Enumerable<veiculosWhereInput>
    id?: IntFilter | number
    placa?: StringFilter | string
    renavam?: StringNullableFilter | string | null
    ativo?: BoolFilter | boolean
    cadastro_verificado?: BoolFilter | boolean
    dt_criacao?: DateTimeFilter | Date | string
    dt_atualizacao?: DateTimeFilter | Date | string
    status_veiculos?: Status_veiculosListRelationFilter
    viagens?: ViagensListRelationFilter
  }

  export type veiculosOrderByWithRelationInput = {
    id?: SortOrder
    placa?: SortOrder
    renavam?: SortOrder
    ativo?: SortOrder
    cadastro_verificado?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    status_veiculos?: status_veiculosOrderByRelationAggregateInput
    viagens?: viagensOrderByRelationAggregateInput
  }

  export type veiculosWhereUniqueInput = {
    id?: number
    placa?: string
  }

  export type veiculosOrderByWithAggregationInput = {
    id?: SortOrder
    placa?: SortOrder
    renavam?: SortOrder
    ativo?: SortOrder
    cadastro_verificado?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    _count?: veiculosCountOrderByAggregateInput
    _avg?: veiculosAvgOrderByAggregateInput
    _max?: veiculosMaxOrderByAggregateInput
    _min?: veiculosMinOrderByAggregateInput
    _sum?: veiculosSumOrderByAggregateInput
  }

  export type veiculosScalarWhereWithAggregatesInput = {
    AND?: Enumerable<veiculosScalarWhereWithAggregatesInput>
    OR?: Enumerable<veiculosScalarWhereWithAggregatesInput>
    NOT?: Enumerable<veiculosScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    placa?: StringWithAggregatesFilter | string
    renavam?: StringNullableWithAggregatesFilter | string | null
    ativo?: BoolWithAggregatesFilter | boolean
    cadastro_verificado?: BoolWithAggregatesFilter | boolean
    dt_criacao?: DateTimeWithAggregatesFilter | Date | string
    dt_atualizacao?: DateTimeWithAggregatesFilter | Date | string
  }

  export type viagensWhereInput = {
    AND?: Enumerable<viagensWhereInput>
    OR?: Enumerable<viagensWhereInput>
    NOT?: Enumerable<viagensWhereInput>
    id?: IntFilter | number
    idcliente?: IntFilter | number
    numero_cliente?: StringFilter | string
    dt_viagem?: DateTimeFilter | Date | string
    mercadoria?: StringFilter | string
    cidade_origem?: StringFilter | string
    cidade_destino?: StringFilter | string
    idmotorista?: BigIntFilter | bigint | number
    idproprietario?: BigIntFilter | bigint | number
    idveiculo?: BigIntFilter | bigint | number
    carreta1?: StringNullableFilter | string | null
    carreta2?: StringNullableFilter | string | null
    carreta3?: StringNullableFilter | string | null
    carreta4?: StringNullableFilter | string | null
    viagem_cancelado?: Enumenum_viagemFilter | enum_viagem
    dt_cancelamento?: DateTimeNullableFilter | Date | string | null
    dt_cliente?: DateTimeFilter | Date | string
    dt_criacao?: DateTimeFilter | Date | string
    dt_atualizacao?: DateTimeFilter | Date | string
    clientes?: XOR<ClientesRelationFilter, clientesWhereInput>
    motoristas?: XOR<MotoristasRelationFilter, motoristasWhereInput> | null
    motoristasId?: IntNullableFilter | number | null
    proprietarios?: XOR<ProprietariosRelationFilter, proprietariosWhereInput> | null
    proprietariosId?: IntNullableFilter | number | null
    veiculos?: XOR<VeiculosRelationFilter, veiculosWhereInput> | null
    veiculosId?: IntNullableFilter | number | null
  }

  export type viagensOrderByWithRelationInput = {
    id?: SortOrder
    idcliente?: SortOrder
    numero_cliente?: SortOrder
    dt_viagem?: SortOrder
    mercadoria?: SortOrder
    cidade_origem?: SortOrder
    cidade_destino?: SortOrder
    idmotorista?: SortOrder
    idproprietario?: SortOrder
    idveiculo?: SortOrder
    carreta1?: SortOrder
    carreta2?: SortOrder
    carreta3?: SortOrder
    carreta4?: SortOrder
    viagem_cancelado?: SortOrder
    dt_cancelamento?: SortOrder
    dt_cliente?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    clientes?: clientesOrderByWithRelationInput
    motoristas?: motoristasOrderByWithRelationInput
    motoristasId?: SortOrder
    proprietarios?: proprietariosOrderByWithRelationInput
    proprietariosId?: SortOrder
    veiculos?: veiculosOrderByWithRelationInput
    veiculosId?: SortOrder
  }

  export type viagensWhereUniqueInput = {
    id?: number
    numero_cliente_idcliente?: viagensNumero_clienteIdclienteCompoundUniqueInput
  }

  export type viagensOrderByWithAggregationInput = {
    id?: SortOrder
    idcliente?: SortOrder
    numero_cliente?: SortOrder
    dt_viagem?: SortOrder
    mercadoria?: SortOrder
    cidade_origem?: SortOrder
    cidade_destino?: SortOrder
    idmotorista?: SortOrder
    idproprietario?: SortOrder
    idveiculo?: SortOrder
    carreta1?: SortOrder
    carreta2?: SortOrder
    carreta3?: SortOrder
    carreta4?: SortOrder
    viagem_cancelado?: SortOrder
    dt_cancelamento?: SortOrder
    dt_cliente?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    motoristasId?: SortOrder
    proprietariosId?: SortOrder
    veiculosId?: SortOrder
    _count?: viagensCountOrderByAggregateInput
    _avg?: viagensAvgOrderByAggregateInput
    _max?: viagensMaxOrderByAggregateInput
    _min?: viagensMinOrderByAggregateInput
    _sum?: viagensSumOrderByAggregateInput
  }

  export type viagensScalarWhereWithAggregatesInput = {
    AND?: Enumerable<viagensScalarWhereWithAggregatesInput>
    OR?: Enumerable<viagensScalarWhereWithAggregatesInput>
    NOT?: Enumerable<viagensScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    idcliente?: IntWithAggregatesFilter | number
    numero_cliente?: StringWithAggregatesFilter | string
    dt_viagem?: DateTimeWithAggregatesFilter | Date | string
    mercadoria?: StringWithAggregatesFilter | string
    cidade_origem?: StringWithAggregatesFilter | string
    cidade_destino?: StringWithAggregatesFilter | string
    idmotorista?: BigIntWithAggregatesFilter | bigint | number
    idproprietario?: BigIntWithAggregatesFilter | bigint | number
    idveiculo?: BigIntWithAggregatesFilter | bigint | number
    carreta1?: StringNullableWithAggregatesFilter | string | null
    carreta2?: StringNullableWithAggregatesFilter | string | null
    carreta3?: StringNullableWithAggregatesFilter | string | null
    carreta4?: StringNullableWithAggregatesFilter | string | null
    viagem_cancelado?: Enumenum_viagemWithAggregatesFilter | enum_viagem
    dt_cancelamento?: DateTimeNullableWithAggregatesFilter | Date | string | null
    dt_cliente?: DateTimeWithAggregatesFilter | Date | string
    dt_criacao?: DateTimeWithAggregatesFilter | Date | string
    dt_atualizacao?: DateTimeWithAggregatesFilter | Date | string
    motoristasId?: IntNullableWithAggregatesFilter | number | null
    proprietariosId?: IntNullableWithAggregatesFilter | number | null
    veiculosId?: IntNullableWithAggregatesFilter | number | null
  }

  export type VwVeiculosWhereInput = {
    AND?: Enumerable<VwVeiculosWhereInput>
    OR?: Enumerable<VwVeiculosWhereInput>
    NOT?: Enumerable<VwVeiculosWhereInput>
    id?: IntFilter | number
    cnpj?: StringFilter | string
    razaosocial?: StringFilter | string
    nomefantasia?: StringFilter | string
    placa?: StringFilter | string
    status_veiculo?: Enumenum_status_veiculoFilter | enum_status_veiculo
  }

  export type VwVeiculosOrderByWithRelationInput = {
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    placa?: SortOrder
    status_veiculo?: SortOrder
  }

  export type VwVeiculosWhereUniqueInput = {
    id?: number
  }

  export type VwVeiculosOrderByWithAggregationInput = {
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    placa?: SortOrder
    status_veiculo?: SortOrder
    _count?: VwVeiculosCountOrderByAggregateInput
    _avg?: VwVeiculosAvgOrderByAggregateInput
    _max?: VwVeiculosMaxOrderByAggregateInput
    _min?: VwVeiculosMinOrderByAggregateInput
    _sum?: VwVeiculosSumOrderByAggregateInput
  }

  export type VwVeiculosScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VwVeiculosScalarWhereWithAggregatesInput>
    OR?: Enumerable<VwVeiculosScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VwVeiculosScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    cnpj?: StringWithAggregatesFilter | string
    razaosocial?: StringWithAggregatesFilter | string
    nomefantasia?: StringWithAggregatesFilter | string
    placa?: StringWithAggregatesFilter | string
    status_veiculo?: Enumenum_status_veiculoWithAggregatesFilter | enum_status_veiculo
  }

  export type VwViagensWhereInput = {
    AND?: Enumerable<VwViagensWhereInput>
    OR?: Enumerable<VwViagensWhereInput>
    NOT?: Enumerable<VwViagensWhereInput>
    id?: IntFilter | number
    dt_viagem?: DateTimeFilter | Date | string
    mercadoria?: StringNullableFilter | string | null
    cidade_origem?: StringNullableFilter | string | null
    cidade_destino?: StringNullableFilter | string | null
    carreta1?: StringNullableFilter | string | null
    carreta2?: StringNullableFilter | string | null
    carreta3?: StringNullableFilter | string | null
    carreta4?: StringNullableFilter | string | null
    idmotorista?: IntFilter | number
    nome_mot?: StringFilter | string
    cpf_mot?: StringFilter | string
    idveiculo?: IntFilter | number
    placa?: StringFilter | string
    idproprietario?: IntFilter | number
    nome_prop?: StringFilter | string
    cpf_cnpj_prop?: StringFilter | string
    cnpj?: StringFilter | string
    razaosocial?: StringNullableFilter | string | null
    nomefantasia?: StringNullableFilter | string | null
    status_motorista?: Enumenum_status_motoristaNullableFilter | enum_status_motorista | null
  }

  export type VwViagensOrderByWithRelationInput = {
    id?: SortOrder
    dt_viagem?: SortOrder
    mercadoria?: SortOrder
    cidade_origem?: SortOrder
    cidade_destino?: SortOrder
    carreta1?: SortOrder
    carreta2?: SortOrder
    carreta3?: SortOrder
    carreta4?: SortOrder
    idmotorista?: SortOrder
    nome_mot?: SortOrder
    cpf_mot?: SortOrder
    idveiculo?: SortOrder
    placa?: SortOrder
    idproprietario?: SortOrder
    nome_prop?: SortOrder
    cpf_cnpj_prop?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    status_motorista?: SortOrder
  }

  export type VwViagensWhereUniqueInput = {
    id?: number
  }

  export type VwViagensOrderByWithAggregationInput = {
    id?: SortOrder
    dt_viagem?: SortOrder
    mercadoria?: SortOrder
    cidade_origem?: SortOrder
    cidade_destino?: SortOrder
    carreta1?: SortOrder
    carreta2?: SortOrder
    carreta3?: SortOrder
    carreta4?: SortOrder
    idmotorista?: SortOrder
    nome_mot?: SortOrder
    cpf_mot?: SortOrder
    idveiculo?: SortOrder
    placa?: SortOrder
    idproprietario?: SortOrder
    nome_prop?: SortOrder
    cpf_cnpj_prop?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    status_motorista?: SortOrder
    _count?: VwViagensCountOrderByAggregateInput
    _avg?: VwViagensAvgOrderByAggregateInput
    _max?: VwViagensMaxOrderByAggregateInput
    _min?: VwViagensMinOrderByAggregateInput
    _sum?: VwViagensSumOrderByAggregateInput
  }

  export type VwViagensScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VwViagensScalarWhereWithAggregatesInput>
    OR?: Enumerable<VwViagensScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VwViagensScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    dt_viagem?: DateTimeWithAggregatesFilter | Date | string
    mercadoria?: StringNullableWithAggregatesFilter | string | null
    cidade_origem?: StringNullableWithAggregatesFilter | string | null
    cidade_destino?: StringNullableWithAggregatesFilter | string | null
    carreta1?: StringNullableWithAggregatesFilter | string | null
    carreta2?: StringNullableWithAggregatesFilter | string | null
    carreta3?: StringNullableWithAggregatesFilter | string | null
    carreta4?: StringNullableWithAggregatesFilter | string | null
    idmotorista?: IntWithAggregatesFilter | number
    nome_mot?: StringWithAggregatesFilter | string
    cpf_mot?: StringWithAggregatesFilter | string
    idveiculo?: IntWithAggregatesFilter | number
    placa?: StringWithAggregatesFilter | string
    idproprietario?: IntWithAggregatesFilter | number
    nome_prop?: StringWithAggregatesFilter | string
    cpf_cnpj_prop?: StringWithAggregatesFilter | string
    cnpj?: StringWithAggregatesFilter | string
    razaosocial?: StringNullableWithAggregatesFilter | string | null
    nomefantasia?: StringNullableWithAggregatesFilter | string | null
    status_motorista?: Enumenum_status_motoristaNullableWithAggregatesFilter | enum_status_motorista | null
  }

  export type VwMotoristasWhereInput = {
    AND?: Enumerable<VwMotoristasWhereInput>
    OR?: Enumerable<VwMotoristasWhereInput>
    NOT?: Enumerable<VwMotoristasWhereInput>
    id?: IntFilter | number
    cnpj?: StringFilter | string
    razaosocial?: StringNullableFilter | string | null
    nomefantasia?: StringNullableFilter | string | null
    nome_mot?: StringFilter | string
    cpf_mot?: StringFilter | string
    status_motorista?: Enumenum_status_motoristaFilter | enum_status_motorista
  }

  export type VwMotoristasOrderByWithRelationInput = {
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    nome_mot?: SortOrder
    cpf_mot?: SortOrder
    status_motorista?: SortOrder
  }

  export type VwMotoristasWhereUniqueInput = {
    id?: number
  }

  export type VwMotoristasOrderByWithAggregationInput = {
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    nome_mot?: SortOrder
    cpf_mot?: SortOrder
    status_motorista?: SortOrder
    _count?: VwMotoristasCountOrderByAggregateInput
    _avg?: VwMotoristasAvgOrderByAggregateInput
    _max?: VwMotoristasMaxOrderByAggregateInput
    _min?: VwMotoristasMinOrderByAggregateInput
    _sum?: VwMotoristasSumOrderByAggregateInput
  }

  export type VwMotoristasScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VwMotoristasScalarWhereWithAggregatesInput>
    OR?: Enumerable<VwMotoristasScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VwMotoristasScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    cnpj?: StringWithAggregatesFilter | string
    razaosocial?: StringNullableWithAggregatesFilter | string | null
    nomefantasia?: StringNullableWithAggregatesFilter | string | null
    nome_mot?: StringWithAggregatesFilter | string
    cpf_mot?: StringWithAggregatesFilter | string
    status_motorista?: Enumenum_status_motoristaWithAggregatesFilter | enum_status_motorista
  }

  export type VwProprietariosWhereInput = {
    AND?: Enumerable<VwProprietariosWhereInput>
    OR?: Enumerable<VwProprietariosWhereInput>
    NOT?: Enumerable<VwProprietariosWhereInput>
    id?: IntFilter | number
    cnpj?: StringFilter | string
    razaosocial?: StringNullableFilter | string | null
    nomefantasia?: StringNullableFilter | string | null
    nome_prop?: StringFilter | string
    cpf_cnpj_prop?: StringFilter | string
    status_proprietario?: Enumenum_status_proprietarioFilter | enum_status_proprietario
  }

  export type VwProprietariosOrderByWithRelationInput = {
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    nome_prop?: SortOrder
    cpf_cnpj_prop?: SortOrder
    status_proprietario?: SortOrder
  }

  export type VwProprietariosWhereUniqueInput = {
    id?: number
  }

  export type VwProprietariosOrderByWithAggregationInput = {
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    nome_prop?: SortOrder
    cpf_cnpj_prop?: SortOrder
    status_proprietario?: SortOrder
    _count?: VwProprietariosCountOrderByAggregateInput
    _avg?: VwProprietariosAvgOrderByAggregateInput
    _max?: VwProprietariosMaxOrderByAggregateInput
    _min?: VwProprietariosMinOrderByAggregateInput
    _sum?: VwProprietariosSumOrderByAggregateInput
  }

  export type VwProprietariosScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VwProprietariosScalarWhereWithAggregatesInput>
    OR?: Enumerable<VwProprietariosScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VwProprietariosScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    cnpj?: StringWithAggregatesFilter | string
    razaosocial?: StringNullableWithAggregatesFilter | string | null
    nomefantasia?: StringNullableWithAggregatesFilter | string | null
    nome_prop?: StringWithAggregatesFilter | string
    cpf_cnpj_prop?: StringWithAggregatesFilter | string
    status_proprietario?: Enumenum_status_proprietarioWithAggregatesFilter | enum_status_proprietario
  }

  export type clientesCreateInput = {
    cnpj: string
    razaosocial: string
    nomefantasia: string
    telefone?: string | null
    email: string
    photo?: string | null
    ativo?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    contatos_motoristas?: contatos_motoristasCreateNestedManyWithoutClientesInput
    status_motoristas?: status_motoristasCreateNestedManyWithoutClientesInput
    status_proprietarios?: status_proprietariosCreateNestedManyWithoutClientesInput
    status_veiculos?: status_veiculosCreateNestedManyWithoutClientesInput
    viagens?: viagensCreateNestedManyWithoutClientesInput
  }

  export type clientesUncheckedCreateInput = {
    id?: number
    cnpj: string
    razaosocial: string
    nomefantasia: string
    telefone?: string | null
    email: string
    photo?: string | null
    ativo?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    contatos_motoristas?: contatos_motoristasUncheckedCreateNestedManyWithoutClientesInput
    status_motoristas?: status_motoristasUncheckedCreateNestedManyWithoutClientesInput
    status_proprietarios?: status_proprietariosUncheckedCreateNestedManyWithoutClientesInput
    status_veiculos?: status_veiculosUncheckedCreateNestedManyWithoutClientesInput
    viagens?: viagensUncheckedCreateNestedManyWithoutClientesInput
  }

  export type clientesUpdateInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: StringFieldUpdateOperationsInput | string
    nomefantasia?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contatos_motoristas?: contatos_motoristasUpdateManyWithoutClientesNestedInput
    status_motoristas?: status_motoristasUpdateManyWithoutClientesNestedInput
    status_proprietarios?: status_proprietariosUpdateManyWithoutClientesNestedInput
    status_veiculos?: status_veiculosUpdateManyWithoutClientesNestedInput
    viagens?: viagensUpdateManyWithoutClientesNestedInput
  }

  export type clientesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: StringFieldUpdateOperationsInput | string
    nomefantasia?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contatos_motoristas?: contatos_motoristasUncheckedUpdateManyWithoutClientesNestedInput
    status_motoristas?: status_motoristasUncheckedUpdateManyWithoutClientesNestedInput
    status_proprietarios?: status_proprietariosUncheckedUpdateManyWithoutClientesNestedInput
    status_veiculos?: status_veiculosUncheckedUpdateManyWithoutClientesNestedInput
    viagens?: viagensUncheckedUpdateManyWithoutClientesNestedInput
  }

  export type clientesCreateManyInput = {
    id?: number
    cnpj: string
    razaosocial: string
    nomefantasia: string
    telefone?: string | null
    email: string
    photo?: string | null
    ativo?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
  }

  export type clientesUpdateManyMutationInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: StringFieldUpdateOperationsInput | string
    nomefantasia?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clientesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: StringFieldUpdateOperationsInput | string
    nomefantasia?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contatos_motoristasCreateInput = {
    idmotorista: bigint | number
    idcliente: bigint | number
    contato: string
    tipo_contato: string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientes?: clientesCreateNestedOneWithoutContatos_motoristasInput
    motoristas?: motoristasCreateNestedOneWithoutContatos_motoristasInput
  }

  export type contatos_motoristasUncheckedCreateInput = {
    id?: number
    idmotorista: bigint | number
    idcliente: bigint | number
    contato: string
    tipo_contato: string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientesId?: number | null
    motoristasId?: number | null
  }

  export type contatos_motoristasUpdateInput = {
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    contato?: StringFieldUpdateOperationsInput | string
    tipo_contato?: StringFieldUpdateOperationsInput | string
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: clientesUpdateOneWithoutContatos_motoristasNestedInput
    motoristas?: motoristasUpdateOneWithoutContatos_motoristasNestedInput
  }

  export type contatos_motoristasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    contato?: StringFieldUpdateOperationsInput | string
    tipo_contato?: StringFieldUpdateOperationsInput | string
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientesId?: NullableIntFieldUpdateOperationsInput | number | null
    motoristasId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type contatos_motoristasCreateManyInput = {
    id?: number
    idmotorista: bigint | number
    idcliente: bigint | number
    contato: string
    tipo_contato: string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientesId?: number | null
    motoristasId?: number | null
  }

  export type contatos_motoristasUpdateManyMutationInput = {
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    contato?: StringFieldUpdateOperationsInput | string
    tipo_contato?: StringFieldUpdateOperationsInput | string
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contatos_motoristasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    contato?: StringFieldUpdateOperationsInput | string
    tipo_contato?: StringFieldUpdateOperationsInput | string
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientesId?: NullableIntFieldUpdateOperationsInput | number | null
    motoristasId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type motoristasCreateInput = {
    nome_mot: string
    cpf_mot: string
    cnh_mot?: string | null
    nome_pai?: string | null
    nome_mae?: string | null
    categoria_cnh_mot?: string | null
    cod_situacao_cnh_mot?: string | null
    dt_validade_cnh?: Date | string | null
    dt_emissao_cnh?: Date | string | null
    dt_primeira_cnh?: Date | string | null
    dt_nascimento?: Date | string | null
    foto_motorista?: string | null
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    contatos_motoristas?: contatos_motoristasCreateNestedManyWithoutMotoristasInput
    status_motoristas?: status_motoristasCreateNestedManyWithoutMotoristasInput
    viagens?: viagensCreateNestedManyWithoutMotoristasInput
  }

  export type motoristasUncheckedCreateInput = {
    id?: number
    nome_mot: string
    cpf_mot: string
    cnh_mot?: string | null
    nome_pai?: string | null
    nome_mae?: string | null
    categoria_cnh_mot?: string | null
    cod_situacao_cnh_mot?: string | null
    dt_validade_cnh?: Date | string | null
    dt_emissao_cnh?: Date | string | null
    dt_primeira_cnh?: Date | string | null
    dt_nascimento?: Date | string | null
    foto_motorista?: string | null
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    contatos_motoristas?: contatos_motoristasUncheckedCreateNestedManyWithoutMotoristasInput
    status_motoristas?: status_motoristasUncheckedCreateNestedManyWithoutMotoristasInput
    viagens?: viagensUncheckedCreateNestedManyWithoutMotoristasInput
  }

  export type motoristasUpdateInput = {
    nome_mot?: StringFieldUpdateOperationsInput | string
    cpf_mot?: StringFieldUpdateOperationsInput | string
    cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    nome_pai?: NullableStringFieldUpdateOperationsInput | string | null
    nome_mae?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    cod_situacao_cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    dt_validade_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_emissao_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_primeira_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_motorista?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contatos_motoristas?: contatos_motoristasUpdateManyWithoutMotoristasNestedInput
    status_motoristas?: status_motoristasUpdateManyWithoutMotoristasNestedInput
    viagens?: viagensUpdateManyWithoutMotoristasNestedInput
  }

  export type motoristasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_mot?: StringFieldUpdateOperationsInput | string
    cpf_mot?: StringFieldUpdateOperationsInput | string
    cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    nome_pai?: NullableStringFieldUpdateOperationsInput | string | null
    nome_mae?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    cod_situacao_cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    dt_validade_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_emissao_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_primeira_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_motorista?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contatos_motoristas?: contatos_motoristasUncheckedUpdateManyWithoutMotoristasNestedInput
    status_motoristas?: status_motoristasUncheckedUpdateManyWithoutMotoristasNestedInput
    viagens?: viagensUncheckedUpdateManyWithoutMotoristasNestedInput
  }

  export type motoristasCreateManyInput = {
    id?: number
    nome_mot: string
    cpf_mot: string
    cnh_mot?: string | null
    nome_pai?: string | null
    nome_mae?: string | null
    categoria_cnh_mot?: string | null
    cod_situacao_cnh_mot?: string | null
    dt_validade_cnh?: Date | string | null
    dt_emissao_cnh?: Date | string | null
    dt_primeira_cnh?: Date | string | null
    dt_nascimento?: Date | string | null
    foto_motorista?: string | null
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
  }

  export type motoristasUpdateManyMutationInput = {
    nome_mot?: StringFieldUpdateOperationsInput | string
    cpf_mot?: StringFieldUpdateOperationsInput | string
    cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    nome_pai?: NullableStringFieldUpdateOperationsInput | string | null
    nome_mae?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    cod_situacao_cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    dt_validade_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_emissao_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_primeira_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_motorista?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type motoristasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_mot?: StringFieldUpdateOperationsInput | string
    cpf_mot?: StringFieldUpdateOperationsInput | string
    cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    nome_pai?: NullableStringFieldUpdateOperationsInput | string | null
    nome_mae?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    cod_situacao_cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    dt_validade_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_emissao_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_primeira_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_motorista?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type proprietariosCreateInput = {
    nome_prop: string
    antt_prop?: string | null
    status_antt?: string | null
    dt_validade_antt?: Date | string | null
    cpf_cnpj_prop: string
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    status_proprietarios?: status_proprietariosCreateNestedManyWithoutProprietariosInput
    viagens?: viagensCreateNestedManyWithoutProprietariosInput
  }

  export type proprietariosUncheckedCreateInput = {
    id?: number
    nome_prop: string
    antt_prop?: string | null
    status_antt?: string | null
    dt_validade_antt?: Date | string | null
    cpf_cnpj_prop: string
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    status_proprietarios?: status_proprietariosUncheckedCreateNestedManyWithoutProprietariosInput
    viagens?: viagensUncheckedCreateNestedManyWithoutProprietariosInput
  }

  export type proprietariosUpdateInput = {
    nome_prop?: StringFieldUpdateOperationsInput | string
    antt_prop?: NullableStringFieldUpdateOperationsInput | string | null
    status_antt?: NullableStringFieldUpdateOperationsInput | string | null
    dt_validade_antt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf_cnpj_prop?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_proprietarios?: status_proprietariosUpdateManyWithoutProprietariosNestedInput
    viagens?: viagensUpdateManyWithoutProprietariosNestedInput
  }

  export type proprietariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_prop?: StringFieldUpdateOperationsInput | string
    antt_prop?: NullableStringFieldUpdateOperationsInput | string | null
    status_antt?: NullableStringFieldUpdateOperationsInput | string | null
    dt_validade_antt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf_cnpj_prop?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_proprietarios?: status_proprietariosUncheckedUpdateManyWithoutProprietariosNestedInput
    viagens?: viagensUncheckedUpdateManyWithoutProprietariosNestedInput
  }

  export type proprietariosCreateManyInput = {
    id?: number
    nome_prop: string
    antt_prop?: string | null
    status_antt?: string | null
    dt_validade_antt?: Date | string | null
    cpf_cnpj_prop: string
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
  }

  export type proprietariosUpdateManyMutationInput = {
    nome_prop?: StringFieldUpdateOperationsInput | string
    antt_prop?: NullableStringFieldUpdateOperationsInput | string | null
    status_antt?: NullableStringFieldUpdateOperationsInput | string | null
    dt_validade_antt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf_cnpj_prop?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type proprietariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_prop?: StringFieldUpdateOperationsInput | string
    antt_prop?: NullableStringFieldUpdateOperationsInput | string | null
    status_antt?: NullableStringFieldUpdateOperationsInput | string | null
    dt_validade_antt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf_cnpj_prop?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type status_motoristasCreateInput = {
    idmotorista: bigint | number
    idcliente: bigint | number
    dt_cliente: Date | string
    numero_cliente?: string | null
    lote_arquivo?: string | null
    status_motorista: enum_status_motorista
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientes?: clientesCreateNestedOneWithoutStatus_motoristasInput
    motoristas?: motoristasCreateNestedOneWithoutStatus_motoristasInput
  }

  export type status_motoristasUncheckedCreateInput = {
    id?: number
    idmotorista: bigint | number
    idcliente: bigint | number
    dt_cliente: Date | string
    numero_cliente?: string | null
    lote_arquivo?: string | null
    status_motorista: enum_status_motorista
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientesId?: number | null
    motoristasId?: number | null
  }

  export type status_motoristasUpdateInput = {
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    status_motorista?: Enumenum_status_motoristaFieldUpdateOperationsInput | enum_status_motorista
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: clientesUpdateOneWithoutStatus_motoristasNestedInput
    motoristas?: motoristasUpdateOneWithoutStatus_motoristasNestedInput
  }

  export type status_motoristasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    status_motorista?: Enumenum_status_motoristaFieldUpdateOperationsInput | enum_status_motorista
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientesId?: NullableIntFieldUpdateOperationsInput | number | null
    motoristasId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type status_motoristasCreateManyInput = {
    id?: number
    idmotorista: bigint | number
    idcliente: bigint | number
    dt_cliente: Date | string
    numero_cliente?: string | null
    lote_arquivo?: string | null
    status_motorista: enum_status_motorista
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientesId?: number | null
    motoristasId?: number | null
  }

  export type status_motoristasUpdateManyMutationInput = {
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    status_motorista?: Enumenum_status_motoristaFieldUpdateOperationsInput | enum_status_motorista
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type status_motoristasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    status_motorista?: Enumenum_status_motoristaFieldUpdateOperationsInput | enum_status_motorista
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientesId?: NullableIntFieldUpdateOperationsInput | number | null
    motoristasId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type status_proprietariosCreateInput = {
    idproprietario: bigint | number
    idcliente: bigint | number
    lote_arquivo?: string | null
    dt_cliente: Date | string
    numero_cliente?: string | null
    status_proprietario: enum_status_proprietario
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientes?: clientesCreateNestedOneWithoutStatus_proprietariosInput
    proprietarios?: proprietariosCreateNestedOneWithoutStatus_proprietariosInput
  }

  export type status_proprietariosUncheckedCreateInput = {
    id?: number
    idproprietario: bigint | number
    idcliente: bigint | number
    lote_arquivo?: string | null
    dt_cliente: Date | string
    numero_cliente?: string | null
    status_proprietario: enum_status_proprietario
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientesId?: number | null
    proprietariosId?: number | null
  }

  export type status_proprietariosUpdateInput = {
    idproprietario?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    status_proprietario?: Enumenum_status_proprietarioFieldUpdateOperationsInput | enum_status_proprietario
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: clientesUpdateOneWithoutStatus_proprietariosNestedInput
    proprietarios?: proprietariosUpdateOneWithoutStatus_proprietariosNestedInput
  }

  export type status_proprietariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idproprietario?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    status_proprietario?: Enumenum_status_proprietarioFieldUpdateOperationsInput | enum_status_proprietario
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientesId?: NullableIntFieldUpdateOperationsInput | number | null
    proprietariosId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type status_proprietariosCreateManyInput = {
    id?: number
    idproprietario: bigint | number
    idcliente: bigint | number
    lote_arquivo?: string | null
    dt_cliente: Date | string
    numero_cliente?: string | null
    status_proprietario: enum_status_proprietario
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientesId?: number | null
    proprietariosId?: number | null
  }

  export type status_proprietariosUpdateManyMutationInput = {
    idproprietario?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    status_proprietario?: Enumenum_status_proprietarioFieldUpdateOperationsInput | enum_status_proprietario
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type status_proprietariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idproprietario?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    status_proprietario?: Enumenum_status_proprietarioFieldUpdateOperationsInput | enum_status_proprietario
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientesId?: NullableIntFieldUpdateOperationsInput | number | null
    proprietariosId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type status_veiculosCreateInput = {
    idveiculo: bigint | number
    idcliente: bigint | number
    lote_arquivo?: string | null
    dt_cliente: Date | string
    numero_cliente?: string | null
    status_veiculo: enum_status_veiculo
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientes?: clientesCreateNestedOneWithoutStatus_veiculosInput
    veiculos?: veiculosCreateNestedOneWithoutStatus_veiculosInput
  }

  export type status_veiculosUncheckedCreateInput = {
    id?: number
    idveiculo: bigint | number
    idcliente: bigint | number
    lote_arquivo?: string | null
    dt_cliente: Date | string
    numero_cliente?: string | null
    status_veiculo: enum_status_veiculo
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientesId?: number | null
    veiculosId?: number | null
  }

  export type status_veiculosUpdateInput = {
    idveiculo?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    status_veiculo?: Enumenum_status_veiculoFieldUpdateOperationsInput | enum_status_veiculo
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: clientesUpdateOneWithoutStatus_veiculosNestedInput
    veiculos?: veiculosUpdateOneWithoutStatus_veiculosNestedInput
  }

  export type status_veiculosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idveiculo?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    status_veiculo?: Enumenum_status_veiculoFieldUpdateOperationsInput | enum_status_veiculo
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientesId?: NullableIntFieldUpdateOperationsInput | number | null
    veiculosId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type status_veiculosCreateManyInput = {
    id?: number
    idveiculo: bigint | number
    idcliente: bigint | number
    lote_arquivo?: string | null
    dt_cliente: Date | string
    numero_cliente?: string | null
    status_veiculo: enum_status_veiculo
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientesId?: number | null
    veiculosId?: number | null
  }

  export type status_veiculosUpdateManyMutationInput = {
    idveiculo?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    status_veiculo?: Enumenum_status_veiculoFieldUpdateOperationsInput | enum_status_veiculo
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type status_veiculosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idveiculo?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    status_veiculo?: Enumenum_status_veiculoFieldUpdateOperationsInput | enum_status_veiculo
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientesId?: NullableIntFieldUpdateOperationsInput | number | null
    veiculosId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type veiculosCreateInput = {
    placa: string
    renavam?: string | null
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    status_veiculos?: status_veiculosCreateNestedManyWithoutVeiculosInput
    viagens?: viagensCreateNestedManyWithoutVeiculosInput
  }

  export type veiculosUncheckedCreateInput = {
    id?: number
    placa: string
    renavam?: string | null
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    status_veiculos?: status_veiculosUncheckedCreateNestedManyWithoutVeiculosInput
    viagens?: viagensUncheckedCreateNestedManyWithoutVeiculosInput
  }

  export type veiculosUpdateInput = {
    placa?: StringFieldUpdateOperationsInput | string
    renavam?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_veiculos?: status_veiculosUpdateManyWithoutVeiculosNestedInput
    viagens?: viagensUpdateManyWithoutVeiculosNestedInput
  }

  export type veiculosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    renavam?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_veiculos?: status_veiculosUncheckedUpdateManyWithoutVeiculosNestedInput
    viagens?: viagensUncheckedUpdateManyWithoutVeiculosNestedInput
  }

  export type veiculosCreateManyInput = {
    id?: number
    placa: string
    renavam?: string | null
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
  }

  export type veiculosUpdateManyMutationInput = {
    placa?: StringFieldUpdateOperationsInput | string
    renavam?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type veiculosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    renavam?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type viagensCreateInput = {
    numero_cliente: string
    dt_viagem: Date | string
    mercadoria: string
    cidade_origem: string
    cidade_destino: string
    idmotorista: bigint | number
    idproprietario: bigint | number
    idveiculo: bigint | number
    carreta1?: string | null
    carreta2?: string | null
    carreta3?: string | null
    carreta4?: string | null
    viagem_cancelado?: enum_viagem
    dt_cancelamento?: Date | string | null
    dt_cliente: Date | string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientes: clientesCreateNestedOneWithoutViagensInput
    motoristas?: motoristasCreateNestedOneWithoutViagensInput
    proprietarios?: proprietariosCreateNestedOneWithoutViagensInput
    veiculos?: veiculosCreateNestedOneWithoutViagensInput
  }

  export type viagensUncheckedCreateInput = {
    id?: number
    idcliente: number
    numero_cliente: string
    dt_viagem: Date | string
    mercadoria: string
    cidade_origem: string
    cidade_destino: string
    idmotorista: bigint | number
    idproprietario: bigint | number
    idveiculo: bigint | number
    carreta1?: string | null
    carreta2?: string | null
    carreta3?: string | null
    carreta4?: string | null
    viagem_cancelado?: enum_viagem
    dt_cancelamento?: Date | string | null
    dt_cliente: Date | string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    motoristasId?: number | null
    proprietariosId?: number | null
    veiculosId?: number | null
  }

  export type viagensUpdateInput = {
    numero_cliente?: StringFieldUpdateOperationsInput | string
    dt_viagem?: DateTimeFieldUpdateOperationsInput | Date | string
    mercadoria?: StringFieldUpdateOperationsInput | string
    cidade_origem?: StringFieldUpdateOperationsInput | string
    cidade_destino?: StringFieldUpdateOperationsInput | string
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idproprietario?: BigIntFieldUpdateOperationsInput | bigint | number
    idveiculo?: BigIntFieldUpdateOperationsInput | bigint | number
    carreta1?: NullableStringFieldUpdateOperationsInput | string | null
    carreta2?: NullableStringFieldUpdateOperationsInput | string | null
    carreta3?: NullableStringFieldUpdateOperationsInput | string | null
    carreta4?: NullableStringFieldUpdateOperationsInput | string | null
    viagem_cancelado?: Enumenum_viagemFieldUpdateOperationsInput | enum_viagem
    dt_cancelamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: clientesUpdateOneRequiredWithoutViagensNestedInput
    motoristas?: motoristasUpdateOneWithoutViagensNestedInput
    proprietarios?: proprietariosUpdateOneWithoutViagensNestedInput
    veiculos?: veiculosUpdateOneWithoutViagensNestedInput
  }

  export type viagensUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idcliente?: IntFieldUpdateOperationsInput | number
    numero_cliente?: StringFieldUpdateOperationsInput | string
    dt_viagem?: DateTimeFieldUpdateOperationsInput | Date | string
    mercadoria?: StringFieldUpdateOperationsInput | string
    cidade_origem?: StringFieldUpdateOperationsInput | string
    cidade_destino?: StringFieldUpdateOperationsInput | string
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idproprietario?: BigIntFieldUpdateOperationsInput | bigint | number
    idveiculo?: BigIntFieldUpdateOperationsInput | bigint | number
    carreta1?: NullableStringFieldUpdateOperationsInput | string | null
    carreta2?: NullableStringFieldUpdateOperationsInput | string | null
    carreta3?: NullableStringFieldUpdateOperationsInput | string | null
    carreta4?: NullableStringFieldUpdateOperationsInput | string | null
    viagem_cancelado?: Enumenum_viagemFieldUpdateOperationsInput | enum_viagem
    dt_cancelamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    motoristasId?: NullableIntFieldUpdateOperationsInput | number | null
    proprietariosId?: NullableIntFieldUpdateOperationsInput | number | null
    veiculosId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type viagensCreateManyInput = {
    id?: number
    idcliente: number
    numero_cliente: string
    dt_viagem: Date | string
    mercadoria: string
    cidade_origem: string
    cidade_destino: string
    idmotorista: bigint | number
    idproprietario: bigint | number
    idveiculo: bigint | number
    carreta1?: string | null
    carreta2?: string | null
    carreta3?: string | null
    carreta4?: string | null
    viagem_cancelado?: enum_viagem
    dt_cancelamento?: Date | string | null
    dt_cliente: Date | string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    motoristasId?: number | null
    proprietariosId?: number | null
    veiculosId?: number | null
  }

  export type viagensUpdateManyMutationInput = {
    numero_cliente?: StringFieldUpdateOperationsInput | string
    dt_viagem?: DateTimeFieldUpdateOperationsInput | Date | string
    mercadoria?: StringFieldUpdateOperationsInput | string
    cidade_origem?: StringFieldUpdateOperationsInput | string
    cidade_destino?: StringFieldUpdateOperationsInput | string
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idproprietario?: BigIntFieldUpdateOperationsInput | bigint | number
    idveiculo?: BigIntFieldUpdateOperationsInput | bigint | number
    carreta1?: NullableStringFieldUpdateOperationsInput | string | null
    carreta2?: NullableStringFieldUpdateOperationsInput | string | null
    carreta3?: NullableStringFieldUpdateOperationsInput | string | null
    carreta4?: NullableStringFieldUpdateOperationsInput | string | null
    viagem_cancelado?: Enumenum_viagemFieldUpdateOperationsInput | enum_viagem
    dt_cancelamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type viagensUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idcliente?: IntFieldUpdateOperationsInput | number
    numero_cliente?: StringFieldUpdateOperationsInput | string
    dt_viagem?: DateTimeFieldUpdateOperationsInput | Date | string
    mercadoria?: StringFieldUpdateOperationsInput | string
    cidade_origem?: StringFieldUpdateOperationsInput | string
    cidade_destino?: StringFieldUpdateOperationsInput | string
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idproprietario?: BigIntFieldUpdateOperationsInput | bigint | number
    idveiculo?: BigIntFieldUpdateOperationsInput | bigint | number
    carreta1?: NullableStringFieldUpdateOperationsInput | string | null
    carreta2?: NullableStringFieldUpdateOperationsInput | string | null
    carreta3?: NullableStringFieldUpdateOperationsInput | string | null
    carreta4?: NullableStringFieldUpdateOperationsInput | string | null
    viagem_cancelado?: Enumenum_viagemFieldUpdateOperationsInput | enum_viagem
    dt_cancelamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    motoristasId?: NullableIntFieldUpdateOperationsInput | number | null
    proprietariosId?: NullableIntFieldUpdateOperationsInput | number | null
    veiculosId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VwVeiculosCreateInput = {
    id: number
    cnpj: string
    razaosocial: string
    nomefantasia: string
    placa: string
    status_veiculo: enum_status_veiculo
  }

  export type VwVeiculosUncheckedCreateInput = {
    id: number
    cnpj: string
    razaosocial: string
    nomefantasia: string
    placa: string
    status_veiculo: enum_status_veiculo
  }

  export type VwVeiculosUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: StringFieldUpdateOperationsInput | string
    nomefantasia?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    status_veiculo?: Enumenum_status_veiculoFieldUpdateOperationsInput | enum_status_veiculo
  }

  export type VwVeiculosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: StringFieldUpdateOperationsInput | string
    nomefantasia?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    status_veiculo?: Enumenum_status_veiculoFieldUpdateOperationsInput | enum_status_veiculo
  }

  export type VwVeiculosCreateManyInput = {
    id: number
    cnpj: string
    razaosocial: string
    nomefantasia: string
    placa: string
    status_veiculo: enum_status_veiculo
  }

  export type VwVeiculosUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: StringFieldUpdateOperationsInput | string
    nomefantasia?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    status_veiculo?: Enumenum_status_veiculoFieldUpdateOperationsInput | enum_status_veiculo
  }

  export type VwVeiculosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: StringFieldUpdateOperationsInput | string
    nomefantasia?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    status_veiculo?: Enumenum_status_veiculoFieldUpdateOperationsInput | enum_status_veiculo
  }

  export type VwViagensCreateInput = {
    id: number
    dt_viagem: Date | string
    mercadoria?: string | null
    cidade_origem?: string | null
    cidade_destino?: string | null
    carreta1?: string | null
    carreta2?: string | null
    carreta3?: string | null
    carreta4?: string | null
    idmotorista: number
    nome_mot: string
    cpf_mot: string
    idveiculo: number
    placa: string
    idproprietario: number
    nome_prop: string
    cpf_cnpj_prop: string
    cnpj: string
    razaosocial?: string | null
    nomefantasia?: string | null
    status_motorista?: enum_status_motorista | null
  }

  export type VwViagensUncheckedCreateInput = {
    id: number
    dt_viagem: Date | string
    mercadoria?: string | null
    cidade_origem?: string | null
    cidade_destino?: string | null
    carreta1?: string | null
    carreta2?: string | null
    carreta3?: string | null
    carreta4?: string | null
    idmotorista: number
    nome_mot: string
    cpf_mot: string
    idveiculo: number
    placa: string
    idproprietario: number
    nome_prop: string
    cpf_cnpj_prop: string
    cnpj: string
    razaosocial?: string | null
    nomefantasia?: string | null
    status_motorista?: enum_status_motorista | null
  }

  export type VwViagensUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dt_viagem?: DateTimeFieldUpdateOperationsInput | Date | string
    mercadoria?: NullableStringFieldUpdateOperationsInput | string | null
    cidade_origem?: NullableStringFieldUpdateOperationsInput | string | null
    cidade_destino?: NullableStringFieldUpdateOperationsInput | string | null
    carreta1?: NullableStringFieldUpdateOperationsInput | string | null
    carreta2?: NullableStringFieldUpdateOperationsInput | string | null
    carreta3?: NullableStringFieldUpdateOperationsInput | string | null
    carreta4?: NullableStringFieldUpdateOperationsInput | string | null
    idmotorista?: IntFieldUpdateOperationsInput | number
    nome_mot?: StringFieldUpdateOperationsInput | string
    cpf_mot?: StringFieldUpdateOperationsInput | string
    idveiculo?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    idproprietario?: IntFieldUpdateOperationsInput | number
    nome_prop?: StringFieldUpdateOperationsInput | string
    cpf_cnpj_prop?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    status_motorista?: NullableEnumenum_status_motoristaFieldUpdateOperationsInput | enum_status_motorista | null
  }

  export type VwViagensUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dt_viagem?: DateTimeFieldUpdateOperationsInput | Date | string
    mercadoria?: NullableStringFieldUpdateOperationsInput | string | null
    cidade_origem?: NullableStringFieldUpdateOperationsInput | string | null
    cidade_destino?: NullableStringFieldUpdateOperationsInput | string | null
    carreta1?: NullableStringFieldUpdateOperationsInput | string | null
    carreta2?: NullableStringFieldUpdateOperationsInput | string | null
    carreta3?: NullableStringFieldUpdateOperationsInput | string | null
    carreta4?: NullableStringFieldUpdateOperationsInput | string | null
    idmotorista?: IntFieldUpdateOperationsInput | number
    nome_mot?: StringFieldUpdateOperationsInput | string
    cpf_mot?: StringFieldUpdateOperationsInput | string
    idveiculo?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    idproprietario?: IntFieldUpdateOperationsInput | number
    nome_prop?: StringFieldUpdateOperationsInput | string
    cpf_cnpj_prop?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    status_motorista?: NullableEnumenum_status_motoristaFieldUpdateOperationsInput | enum_status_motorista | null
  }

  export type VwViagensCreateManyInput = {
    id: number
    dt_viagem: Date | string
    mercadoria?: string | null
    cidade_origem?: string | null
    cidade_destino?: string | null
    carreta1?: string | null
    carreta2?: string | null
    carreta3?: string | null
    carreta4?: string | null
    idmotorista: number
    nome_mot: string
    cpf_mot: string
    idveiculo: number
    placa: string
    idproprietario: number
    nome_prop: string
    cpf_cnpj_prop: string
    cnpj: string
    razaosocial?: string | null
    nomefantasia?: string | null
    status_motorista?: enum_status_motorista | null
  }

  export type VwViagensUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    dt_viagem?: DateTimeFieldUpdateOperationsInput | Date | string
    mercadoria?: NullableStringFieldUpdateOperationsInput | string | null
    cidade_origem?: NullableStringFieldUpdateOperationsInput | string | null
    cidade_destino?: NullableStringFieldUpdateOperationsInput | string | null
    carreta1?: NullableStringFieldUpdateOperationsInput | string | null
    carreta2?: NullableStringFieldUpdateOperationsInput | string | null
    carreta3?: NullableStringFieldUpdateOperationsInput | string | null
    carreta4?: NullableStringFieldUpdateOperationsInput | string | null
    idmotorista?: IntFieldUpdateOperationsInput | number
    nome_mot?: StringFieldUpdateOperationsInput | string
    cpf_mot?: StringFieldUpdateOperationsInput | string
    idveiculo?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    idproprietario?: IntFieldUpdateOperationsInput | number
    nome_prop?: StringFieldUpdateOperationsInput | string
    cpf_cnpj_prop?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    status_motorista?: NullableEnumenum_status_motoristaFieldUpdateOperationsInput | enum_status_motorista | null
  }

  export type VwViagensUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dt_viagem?: DateTimeFieldUpdateOperationsInput | Date | string
    mercadoria?: NullableStringFieldUpdateOperationsInput | string | null
    cidade_origem?: NullableStringFieldUpdateOperationsInput | string | null
    cidade_destino?: NullableStringFieldUpdateOperationsInput | string | null
    carreta1?: NullableStringFieldUpdateOperationsInput | string | null
    carreta2?: NullableStringFieldUpdateOperationsInput | string | null
    carreta3?: NullableStringFieldUpdateOperationsInput | string | null
    carreta4?: NullableStringFieldUpdateOperationsInput | string | null
    idmotorista?: IntFieldUpdateOperationsInput | number
    nome_mot?: StringFieldUpdateOperationsInput | string
    cpf_mot?: StringFieldUpdateOperationsInput | string
    idveiculo?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    idproprietario?: IntFieldUpdateOperationsInput | number
    nome_prop?: StringFieldUpdateOperationsInput | string
    cpf_cnpj_prop?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    status_motorista?: NullableEnumenum_status_motoristaFieldUpdateOperationsInput | enum_status_motorista | null
  }

  export type VwMotoristasCreateInput = {
    id: number
    cnpj: string
    razaosocial?: string | null
    nomefantasia?: string | null
    nome_mot: string
    cpf_mot: string
    status_motorista: enum_status_motorista
  }

  export type VwMotoristasUncheckedCreateInput = {
    id: number
    cnpj: string
    razaosocial?: string | null
    nomefantasia?: string | null
    nome_mot: string
    cpf_mot: string
    status_motorista: enum_status_motorista
  }

  export type VwMotoristasUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    nome_mot?: StringFieldUpdateOperationsInput | string
    cpf_mot?: StringFieldUpdateOperationsInput | string
    status_motorista?: Enumenum_status_motoristaFieldUpdateOperationsInput | enum_status_motorista
  }

  export type VwMotoristasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    nome_mot?: StringFieldUpdateOperationsInput | string
    cpf_mot?: StringFieldUpdateOperationsInput | string
    status_motorista?: Enumenum_status_motoristaFieldUpdateOperationsInput | enum_status_motorista
  }

  export type VwMotoristasCreateManyInput = {
    id: number
    cnpj: string
    razaosocial?: string | null
    nomefantasia?: string | null
    nome_mot: string
    cpf_mot: string
    status_motorista: enum_status_motorista
  }

  export type VwMotoristasUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    nome_mot?: StringFieldUpdateOperationsInput | string
    cpf_mot?: StringFieldUpdateOperationsInput | string
    status_motorista?: Enumenum_status_motoristaFieldUpdateOperationsInput | enum_status_motorista
  }

  export type VwMotoristasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    nome_mot?: StringFieldUpdateOperationsInput | string
    cpf_mot?: StringFieldUpdateOperationsInput | string
    status_motorista?: Enumenum_status_motoristaFieldUpdateOperationsInput | enum_status_motorista
  }

  export type VwProprietariosCreateInput = {
    id: number
    cnpj: string
    razaosocial?: string | null
    nomefantasia?: string | null
    nome_prop: string
    cpf_cnpj_prop: string
    status_proprietario: enum_status_proprietario
  }

  export type VwProprietariosUncheckedCreateInput = {
    id: number
    cnpj: string
    razaosocial?: string | null
    nomefantasia?: string | null
    nome_prop: string
    cpf_cnpj_prop: string
    status_proprietario: enum_status_proprietario
  }

  export type VwProprietariosUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    nome_prop?: StringFieldUpdateOperationsInput | string
    cpf_cnpj_prop?: StringFieldUpdateOperationsInput | string
    status_proprietario?: Enumenum_status_proprietarioFieldUpdateOperationsInput | enum_status_proprietario
  }

  export type VwProprietariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    nome_prop?: StringFieldUpdateOperationsInput | string
    cpf_cnpj_prop?: StringFieldUpdateOperationsInput | string
    status_proprietario?: Enumenum_status_proprietarioFieldUpdateOperationsInput | enum_status_proprietario
  }

  export type VwProprietariosCreateManyInput = {
    id: number
    cnpj: string
    razaosocial?: string | null
    nomefantasia?: string | null
    nome_prop: string
    cpf_cnpj_prop: string
    status_proprietario: enum_status_proprietario
  }

  export type VwProprietariosUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    nome_prop?: StringFieldUpdateOperationsInput | string
    cpf_cnpj_prop?: StringFieldUpdateOperationsInput | string
    status_proprietario?: Enumenum_status_proprietarioFieldUpdateOperationsInput | enum_status_proprietario
  }

  export type VwProprietariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    nome_prop?: StringFieldUpdateOperationsInput | string
    cpf_cnpj_prop?: StringFieldUpdateOperationsInput | string
    status_proprietario?: Enumenum_status_proprietarioFieldUpdateOperationsInput | enum_status_proprietario
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type Contatos_motoristasListRelationFilter = {
    every?: contatos_motoristasWhereInput
    some?: contatos_motoristasWhereInput
    none?: contatos_motoristasWhereInput
  }

  export type Status_motoristasListRelationFilter = {
    every?: status_motoristasWhereInput
    some?: status_motoristasWhereInput
    none?: status_motoristasWhereInput
  }

  export type Status_proprietariosListRelationFilter = {
    every?: status_proprietariosWhereInput
    some?: status_proprietariosWhereInput
    none?: status_proprietariosWhereInput
  }

  export type Status_veiculosListRelationFilter = {
    every?: status_veiculosWhereInput
    some?: status_veiculosWhereInput
    none?: status_veiculosWhereInput
  }

  export type ViagensListRelationFilter = {
    every?: viagensWhereInput
    some?: viagensWhereInput
    none?: viagensWhereInput
  }

  export type contatos_motoristasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type status_motoristasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type status_proprietariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type status_veiculosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type viagensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clientesCountOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    ativo?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
  }

  export type clientesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type clientesMaxOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    ativo?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
  }

  export type clientesMinOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    ativo?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
  }

  export type clientesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type ClientesRelationFilter = {
    is?: clientesWhereInput | null
    isNot?: clientesWhereInput | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type MotoristasRelationFilter = {
    is?: motoristasWhereInput | null
    isNot?: motoristasWhereInput | null
  }

  export type contatos_motoristasCountOrderByAggregateInput = {
    id?: SortOrder
    idmotorista?: SortOrder
    idcliente?: SortOrder
    contato?: SortOrder
    tipo_contato?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    clientesId?: SortOrder
    motoristasId?: SortOrder
  }

  export type contatos_motoristasAvgOrderByAggregateInput = {
    id?: SortOrder
    idmotorista?: SortOrder
    idcliente?: SortOrder
    clientesId?: SortOrder
    motoristasId?: SortOrder
  }

  export type contatos_motoristasMaxOrderByAggregateInput = {
    id?: SortOrder
    idmotorista?: SortOrder
    idcliente?: SortOrder
    contato?: SortOrder
    tipo_contato?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    clientesId?: SortOrder
    motoristasId?: SortOrder
  }

  export type contatos_motoristasMinOrderByAggregateInput = {
    id?: SortOrder
    idmotorista?: SortOrder
    idcliente?: SortOrder
    contato?: SortOrder
    tipo_contato?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    clientesId?: SortOrder
    motoristasId?: SortOrder
  }

  export type contatos_motoristasSumOrderByAggregateInput = {
    id?: SortOrder
    idmotorista?: SortOrder
    idcliente?: SortOrder
    clientesId?: SortOrder
    motoristasId?: SortOrder
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type motoristasCountOrderByAggregateInput = {
    id?: SortOrder
    nome_mot?: SortOrder
    cpf_mot?: SortOrder
    cnh_mot?: SortOrder
    nome_pai?: SortOrder
    nome_mae?: SortOrder
    categoria_cnh_mot?: SortOrder
    cod_situacao_cnh_mot?: SortOrder
    dt_validade_cnh?: SortOrder
    dt_emissao_cnh?: SortOrder
    dt_primeira_cnh?: SortOrder
    dt_nascimento?: SortOrder
    foto_motorista?: SortOrder
    ativo?: SortOrder
    cadastro_verificado?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
  }

  export type motoristasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type motoristasMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_mot?: SortOrder
    cpf_mot?: SortOrder
    cnh_mot?: SortOrder
    nome_pai?: SortOrder
    nome_mae?: SortOrder
    categoria_cnh_mot?: SortOrder
    cod_situacao_cnh_mot?: SortOrder
    dt_validade_cnh?: SortOrder
    dt_emissao_cnh?: SortOrder
    dt_primeira_cnh?: SortOrder
    dt_nascimento?: SortOrder
    foto_motorista?: SortOrder
    ativo?: SortOrder
    cadastro_verificado?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
  }

  export type motoristasMinOrderByAggregateInput = {
    id?: SortOrder
    nome_mot?: SortOrder
    cpf_mot?: SortOrder
    cnh_mot?: SortOrder
    nome_pai?: SortOrder
    nome_mae?: SortOrder
    categoria_cnh_mot?: SortOrder
    cod_situacao_cnh_mot?: SortOrder
    dt_validade_cnh?: SortOrder
    dt_emissao_cnh?: SortOrder
    dt_primeira_cnh?: SortOrder
    dt_nascimento?: SortOrder
    foto_motorista?: SortOrder
    ativo?: SortOrder
    cadastro_verificado?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
  }

  export type motoristasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type proprietariosCountOrderByAggregateInput = {
    id?: SortOrder
    nome_prop?: SortOrder
    antt_prop?: SortOrder
    status_antt?: SortOrder
    dt_validade_antt?: SortOrder
    cpf_cnpj_prop?: SortOrder
    ativo?: SortOrder
    cadastro_verificado?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
  }

  export type proprietariosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type proprietariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_prop?: SortOrder
    antt_prop?: SortOrder
    status_antt?: SortOrder
    dt_validade_antt?: SortOrder
    cpf_cnpj_prop?: SortOrder
    ativo?: SortOrder
    cadastro_verificado?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
  }

  export type proprietariosMinOrderByAggregateInput = {
    id?: SortOrder
    nome_prop?: SortOrder
    antt_prop?: SortOrder
    status_antt?: SortOrder
    dt_validade_antt?: SortOrder
    cpf_cnpj_prop?: SortOrder
    ativo?: SortOrder
    cadastro_verificado?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
  }

  export type proprietariosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumenum_status_motoristaFilter = {
    equals?: enum_status_motorista
    in?: Enumerable<enum_status_motorista>
    notIn?: Enumerable<enum_status_motorista>
    not?: NestedEnumenum_status_motoristaFilter | enum_status_motorista
  }

  export type status_motoristasIdmotoristaIdclienteCompoundUniqueInput = {
    idmotorista: bigint | number
    idcliente: bigint | number
  }

  export type status_motoristasCountOrderByAggregateInput = {
    id?: SortOrder
    idmotorista?: SortOrder
    idcliente?: SortOrder
    dt_cliente?: SortOrder
    numero_cliente?: SortOrder
    lote_arquivo?: SortOrder
    status_motorista?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    clientesId?: SortOrder
    motoristasId?: SortOrder
  }

  export type status_motoristasAvgOrderByAggregateInput = {
    id?: SortOrder
    idmotorista?: SortOrder
    idcliente?: SortOrder
    clientesId?: SortOrder
    motoristasId?: SortOrder
  }

  export type status_motoristasMaxOrderByAggregateInput = {
    id?: SortOrder
    idmotorista?: SortOrder
    idcliente?: SortOrder
    dt_cliente?: SortOrder
    numero_cliente?: SortOrder
    lote_arquivo?: SortOrder
    status_motorista?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    clientesId?: SortOrder
    motoristasId?: SortOrder
  }

  export type status_motoristasMinOrderByAggregateInput = {
    id?: SortOrder
    idmotorista?: SortOrder
    idcliente?: SortOrder
    dt_cliente?: SortOrder
    numero_cliente?: SortOrder
    lote_arquivo?: SortOrder
    status_motorista?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    clientesId?: SortOrder
    motoristasId?: SortOrder
  }

  export type status_motoristasSumOrderByAggregateInput = {
    id?: SortOrder
    idmotorista?: SortOrder
    idcliente?: SortOrder
    clientesId?: SortOrder
    motoristasId?: SortOrder
  }

  export type Enumenum_status_motoristaWithAggregatesFilter = {
    equals?: enum_status_motorista
    in?: Enumerable<enum_status_motorista>
    notIn?: Enumerable<enum_status_motorista>
    not?: NestedEnumenum_status_motoristaWithAggregatesFilter | enum_status_motorista
    _count?: NestedIntFilter
    _min?: NestedEnumenum_status_motoristaFilter
    _max?: NestedEnumenum_status_motoristaFilter
  }

  export type Enumenum_status_proprietarioFilter = {
    equals?: enum_status_proprietario
    in?: Enumerable<enum_status_proprietario>
    notIn?: Enumerable<enum_status_proprietario>
    not?: NestedEnumenum_status_proprietarioFilter | enum_status_proprietario
  }

  export type ProprietariosRelationFilter = {
    is?: proprietariosWhereInput | null
    isNot?: proprietariosWhereInput | null
  }

  export type status_proprietariosIdproprietarioIdclienteCompoundUniqueInput = {
    idproprietario: bigint | number
    idcliente: bigint | number
  }

  export type status_proprietariosCountOrderByAggregateInput = {
    id?: SortOrder
    idproprietario?: SortOrder
    idcliente?: SortOrder
    lote_arquivo?: SortOrder
    dt_cliente?: SortOrder
    numero_cliente?: SortOrder
    status_proprietario?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    clientesId?: SortOrder
    proprietariosId?: SortOrder
  }

  export type status_proprietariosAvgOrderByAggregateInput = {
    id?: SortOrder
    idproprietario?: SortOrder
    idcliente?: SortOrder
    clientesId?: SortOrder
    proprietariosId?: SortOrder
  }

  export type status_proprietariosMaxOrderByAggregateInput = {
    id?: SortOrder
    idproprietario?: SortOrder
    idcliente?: SortOrder
    lote_arquivo?: SortOrder
    dt_cliente?: SortOrder
    numero_cliente?: SortOrder
    status_proprietario?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    clientesId?: SortOrder
    proprietariosId?: SortOrder
  }

  export type status_proprietariosMinOrderByAggregateInput = {
    id?: SortOrder
    idproprietario?: SortOrder
    idcliente?: SortOrder
    lote_arquivo?: SortOrder
    dt_cliente?: SortOrder
    numero_cliente?: SortOrder
    status_proprietario?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    clientesId?: SortOrder
    proprietariosId?: SortOrder
  }

  export type status_proprietariosSumOrderByAggregateInput = {
    id?: SortOrder
    idproprietario?: SortOrder
    idcliente?: SortOrder
    clientesId?: SortOrder
    proprietariosId?: SortOrder
  }

  export type Enumenum_status_proprietarioWithAggregatesFilter = {
    equals?: enum_status_proprietario
    in?: Enumerable<enum_status_proprietario>
    notIn?: Enumerable<enum_status_proprietario>
    not?: NestedEnumenum_status_proprietarioWithAggregatesFilter | enum_status_proprietario
    _count?: NestedIntFilter
    _min?: NestedEnumenum_status_proprietarioFilter
    _max?: NestedEnumenum_status_proprietarioFilter
  }

  export type Enumenum_status_veiculoFilter = {
    equals?: enum_status_veiculo
    in?: Enumerable<enum_status_veiculo>
    notIn?: Enumerable<enum_status_veiculo>
    not?: NestedEnumenum_status_veiculoFilter | enum_status_veiculo
  }

  export type VeiculosRelationFilter = {
    is?: veiculosWhereInput | null
    isNot?: veiculosWhereInput | null
  }

  export type status_veiculosIdveiculoIdclienteCompoundUniqueInput = {
    idveiculo: bigint | number
    idcliente: bigint | number
  }

  export type status_veiculosCountOrderByAggregateInput = {
    id?: SortOrder
    idveiculo?: SortOrder
    idcliente?: SortOrder
    lote_arquivo?: SortOrder
    dt_cliente?: SortOrder
    numero_cliente?: SortOrder
    status_veiculo?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    clientesId?: SortOrder
    veiculosId?: SortOrder
  }

  export type status_veiculosAvgOrderByAggregateInput = {
    id?: SortOrder
    idveiculo?: SortOrder
    idcliente?: SortOrder
    clientesId?: SortOrder
    veiculosId?: SortOrder
  }

  export type status_veiculosMaxOrderByAggregateInput = {
    id?: SortOrder
    idveiculo?: SortOrder
    idcliente?: SortOrder
    lote_arquivo?: SortOrder
    dt_cliente?: SortOrder
    numero_cliente?: SortOrder
    status_veiculo?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    clientesId?: SortOrder
    veiculosId?: SortOrder
  }

  export type status_veiculosMinOrderByAggregateInput = {
    id?: SortOrder
    idveiculo?: SortOrder
    idcliente?: SortOrder
    lote_arquivo?: SortOrder
    dt_cliente?: SortOrder
    numero_cliente?: SortOrder
    status_veiculo?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    clientesId?: SortOrder
    veiculosId?: SortOrder
  }

  export type status_veiculosSumOrderByAggregateInput = {
    id?: SortOrder
    idveiculo?: SortOrder
    idcliente?: SortOrder
    clientesId?: SortOrder
    veiculosId?: SortOrder
  }

  export type Enumenum_status_veiculoWithAggregatesFilter = {
    equals?: enum_status_veiculo
    in?: Enumerable<enum_status_veiculo>
    notIn?: Enumerable<enum_status_veiculo>
    not?: NestedEnumenum_status_veiculoWithAggregatesFilter | enum_status_veiculo
    _count?: NestedIntFilter
    _min?: NestedEnumenum_status_veiculoFilter
    _max?: NestedEnumenum_status_veiculoFilter
  }

  export type veiculosCountOrderByAggregateInput = {
    id?: SortOrder
    placa?: SortOrder
    renavam?: SortOrder
    ativo?: SortOrder
    cadastro_verificado?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
  }

  export type veiculosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type veiculosMaxOrderByAggregateInput = {
    id?: SortOrder
    placa?: SortOrder
    renavam?: SortOrder
    ativo?: SortOrder
    cadastro_verificado?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
  }

  export type veiculosMinOrderByAggregateInput = {
    id?: SortOrder
    placa?: SortOrder
    renavam?: SortOrder
    ativo?: SortOrder
    cadastro_verificado?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
  }

  export type veiculosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumenum_viagemFilter = {
    equals?: enum_viagem
    in?: Enumerable<enum_viagem>
    notIn?: Enumerable<enum_viagem>
    not?: NestedEnumenum_viagemFilter | enum_viagem
  }

  export type viagensNumero_clienteIdclienteCompoundUniqueInput = {
    numero_cliente: string
    idcliente: number
  }

  export type viagensCountOrderByAggregateInput = {
    id?: SortOrder
    idcliente?: SortOrder
    numero_cliente?: SortOrder
    dt_viagem?: SortOrder
    mercadoria?: SortOrder
    cidade_origem?: SortOrder
    cidade_destino?: SortOrder
    idmotorista?: SortOrder
    idproprietario?: SortOrder
    idveiculo?: SortOrder
    carreta1?: SortOrder
    carreta2?: SortOrder
    carreta3?: SortOrder
    carreta4?: SortOrder
    viagem_cancelado?: SortOrder
    dt_cancelamento?: SortOrder
    dt_cliente?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    motoristasId?: SortOrder
    proprietariosId?: SortOrder
    veiculosId?: SortOrder
  }

  export type viagensAvgOrderByAggregateInput = {
    id?: SortOrder
    idcliente?: SortOrder
    idmotorista?: SortOrder
    idproprietario?: SortOrder
    idveiculo?: SortOrder
    motoristasId?: SortOrder
    proprietariosId?: SortOrder
    veiculosId?: SortOrder
  }

  export type viagensMaxOrderByAggregateInput = {
    id?: SortOrder
    idcliente?: SortOrder
    numero_cliente?: SortOrder
    dt_viagem?: SortOrder
    mercadoria?: SortOrder
    cidade_origem?: SortOrder
    cidade_destino?: SortOrder
    idmotorista?: SortOrder
    idproprietario?: SortOrder
    idveiculo?: SortOrder
    carreta1?: SortOrder
    carreta2?: SortOrder
    carreta3?: SortOrder
    carreta4?: SortOrder
    viagem_cancelado?: SortOrder
    dt_cancelamento?: SortOrder
    dt_cliente?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    motoristasId?: SortOrder
    proprietariosId?: SortOrder
    veiculosId?: SortOrder
  }

  export type viagensMinOrderByAggregateInput = {
    id?: SortOrder
    idcliente?: SortOrder
    numero_cliente?: SortOrder
    dt_viagem?: SortOrder
    mercadoria?: SortOrder
    cidade_origem?: SortOrder
    cidade_destino?: SortOrder
    idmotorista?: SortOrder
    idproprietario?: SortOrder
    idveiculo?: SortOrder
    carreta1?: SortOrder
    carreta2?: SortOrder
    carreta3?: SortOrder
    carreta4?: SortOrder
    viagem_cancelado?: SortOrder
    dt_cancelamento?: SortOrder
    dt_cliente?: SortOrder
    dt_criacao?: SortOrder
    dt_atualizacao?: SortOrder
    motoristasId?: SortOrder
    proprietariosId?: SortOrder
    veiculosId?: SortOrder
  }

  export type viagensSumOrderByAggregateInput = {
    id?: SortOrder
    idcliente?: SortOrder
    idmotorista?: SortOrder
    idproprietario?: SortOrder
    idveiculo?: SortOrder
    motoristasId?: SortOrder
    proprietariosId?: SortOrder
    veiculosId?: SortOrder
  }

  export type Enumenum_viagemWithAggregatesFilter = {
    equals?: enum_viagem
    in?: Enumerable<enum_viagem>
    notIn?: Enumerable<enum_viagem>
    not?: NestedEnumenum_viagemWithAggregatesFilter | enum_viagem
    _count?: NestedIntFilter
    _min?: NestedEnumenum_viagemFilter
    _max?: NestedEnumenum_viagemFilter
  }

  export type VwVeiculosCountOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    placa?: SortOrder
    status_veiculo?: SortOrder
  }

  export type VwVeiculosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VwVeiculosMaxOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    placa?: SortOrder
    status_veiculo?: SortOrder
  }

  export type VwVeiculosMinOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    placa?: SortOrder
    status_veiculo?: SortOrder
  }

  export type VwVeiculosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumenum_status_motoristaNullableFilter = {
    equals?: enum_status_motorista | null
    in?: Enumerable<enum_status_motorista> | null
    notIn?: Enumerable<enum_status_motorista> | null
    not?: NestedEnumenum_status_motoristaNullableFilter | enum_status_motorista | null
  }

  export type VwViagensCountOrderByAggregateInput = {
    id?: SortOrder
    dt_viagem?: SortOrder
    mercadoria?: SortOrder
    cidade_origem?: SortOrder
    cidade_destino?: SortOrder
    carreta1?: SortOrder
    carreta2?: SortOrder
    carreta3?: SortOrder
    carreta4?: SortOrder
    idmotorista?: SortOrder
    nome_mot?: SortOrder
    cpf_mot?: SortOrder
    idveiculo?: SortOrder
    placa?: SortOrder
    idproprietario?: SortOrder
    nome_prop?: SortOrder
    cpf_cnpj_prop?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    status_motorista?: SortOrder
  }

  export type VwViagensAvgOrderByAggregateInput = {
    id?: SortOrder
    idmotorista?: SortOrder
    idveiculo?: SortOrder
    idproprietario?: SortOrder
  }

  export type VwViagensMaxOrderByAggregateInput = {
    id?: SortOrder
    dt_viagem?: SortOrder
    mercadoria?: SortOrder
    cidade_origem?: SortOrder
    cidade_destino?: SortOrder
    carreta1?: SortOrder
    carreta2?: SortOrder
    carreta3?: SortOrder
    carreta4?: SortOrder
    idmotorista?: SortOrder
    nome_mot?: SortOrder
    cpf_mot?: SortOrder
    idveiculo?: SortOrder
    placa?: SortOrder
    idproprietario?: SortOrder
    nome_prop?: SortOrder
    cpf_cnpj_prop?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    status_motorista?: SortOrder
  }

  export type VwViagensMinOrderByAggregateInput = {
    id?: SortOrder
    dt_viagem?: SortOrder
    mercadoria?: SortOrder
    cidade_origem?: SortOrder
    cidade_destino?: SortOrder
    carreta1?: SortOrder
    carreta2?: SortOrder
    carreta3?: SortOrder
    carreta4?: SortOrder
    idmotorista?: SortOrder
    nome_mot?: SortOrder
    cpf_mot?: SortOrder
    idveiculo?: SortOrder
    placa?: SortOrder
    idproprietario?: SortOrder
    nome_prop?: SortOrder
    cpf_cnpj_prop?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    status_motorista?: SortOrder
  }

  export type VwViagensSumOrderByAggregateInput = {
    id?: SortOrder
    idmotorista?: SortOrder
    idveiculo?: SortOrder
    idproprietario?: SortOrder
  }

  export type Enumenum_status_motoristaNullableWithAggregatesFilter = {
    equals?: enum_status_motorista | null
    in?: Enumerable<enum_status_motorista> | null
    notIn?: Enumerable<enum_status_motorista> | null
    not?: NestedEnumenum_status_motoristaNullableWithAggregatesFilter | enum_status_motorista | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumenum_status_motoristaNullableFilter
    _max?: NestedEnumenum_status_motoristaNullableFilter
  }

  export type VwMotoristasCountOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    nome_mot?: SortOrder
    cpf_mot?: SortOrder
    status_motorista?: SortOrder
  }

  export type VwMotoristasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VwMotoristasMaxOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    nome_mot?: SortOrder
    cpf_mot?: SortOrder
    status_motorista?: SortOrder
  }

  export type VwMotoristasMinOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    nome_mot?: SortOrder
    cpf_mot?: SortOrder
    status_motorista?: SortOrder
  }

  export type VwMotoristasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VwProprietariosCountOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    nome_prop?: SortOrder
    cpf_cnpj_prop?: SortOrder
    status_proprietario?: SortOrder
  }

  export type VwProprietariosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VwProprietariosMaxOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    nome_prop?: SortOrder
    cpf_cnpj_prop?: SortOrder
    status_proprietario?: SortOrder
  }

  export type VwProprietariosMinOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    nome_prop?: SortOrder
    cpf_cnpj_prop?: SortOrder
    status_proprietario?: SortOrder
  }

  export type VwProprietariosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type contatos_motoristasCreateNestedManyWithoutClientesInput = {
    create?: XOR<Enumerable<contatos_motoristasCreateWithoutClientesInput>, Enumerable<contatos_motoristasUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<contatos_motoristasCreateOrConnectWithoutClientesInput>
    createMany?: contatos_motoristasCreateManyClientesInputEnvelope
    connect?: Enumerable<contatos_motoristasWhereUniqueInput>
  }

  export type status_motoristasCreateNestedManyWithoutClientesInput = {
    create?: XOR<Enumerable<status_motoristasCreateWithoutClientesInput>, Enumerable<status_motoristasUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<status_motoristasCreateOrConnectWithoutClientesInput>
    createMany?: status_motoristasCreateManyClientesInputEnvelope
    connect?: Enumerable<status_motoristasWhereUniqueInput>
  }

  export type status_proprietariosCreateNestedManyWithoutClientesInput = {
    create?: XOR<Enumerable<status_proprietariosCreateWithoutClientesInput>, Enumerable<status_proprietariosUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<status_proprietariosCreateOrConnectWithoutClientesInput>
    createMany?: status_proprietariosCreateManyClientesInputEnvelope
    connect?: Enumerable<status_proprietariosWhereUniqueInput>
  }

  export type status_veiculosCreateNestedManyWithoutClientesInput = {
    create?: XOR<Enumerable<status_veiculosCreateWithoutClientesInput>, Enumerable<status_veiculosUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<status_veiculosCreateOrConnectWithoutClientesInput>
    createMany?: status_veiculosCreateManyClientesInputEnvelope
    connect?: Enumerable<status_veiculosWhereUniqueInput>
  }

  export type viagensCreateNestedManyWithoutClientesInput = {
    create?: XOR<Enumerable<viagensCreateWithoutClientesInput>, Enumerable<viagensUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<viagensCreateOrConnectWithoutClientesInput>
    createMany?: viagensCreateManyClientesInputEnvelope
    connect?: Enumerable<viagensWhereUniqueInput>
  }

  export type contatos_motoristasUncheckedCreateNestedManyWithoutClientesInput = {
    create?: XOR<Enumerable<contatos_motoristasCreateWithoutClientesInput>, Enumerable<contatos_motoristasUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<contatos_motoristasCreateOrConnectWithoutClientesInput>
    createMany?: contatos_motoristasCreateManyClientesInputEnvelope
    connect?: Enumerable<contatos_motoristasWhereUniqueInput>
  }

  export type status_motoristasUncheckedCreateNestedManyWithoutClientesInput = {
    create?: XOR<Enumerable<status_motoristasCreateWithoutClientesInput>, Enumerable<status_motoristasUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<status_motoristasCreateOrConnectWithoutClientesInput>
    createMany?: status_motoristasCreateManyClientesInputEnvelope
    connect?: Enumerable<status_motoristasWhereUniqueInput>
  }

  export type status_proprietariosUncheckedCreateNestedManyWithoutClientesInput = {
    create?: XOR<Enumerable<status_proprietariosCreateWithoutClientesInput>, Enumerable<status_proprietariosUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<status_proprietariosCreateOrConnectWithoutClientesInput>
    createMany?: status_proprietariosCreateManyClientesInputEnvelope
    connect?: Enumerable<status_proprietariosWhereUniqueInput>
  }

  export type status_veiculosUncheckedCreateNestedManyWithoutClientesInput = {
    create?: XOR<Enumerable<status_veiculosCreateWithoutClientesInput>, Enumerable<status_veiculosUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<status_veiculosCreateOrConnectWithoutClientesInput>
    createMany?: status_veiculosCreateManyClientesInputEnvelope
    connect?: Enumerable<status_veiculosWhereUniqueInput>
  }

  export type viagensUncheckedCreateNestedManyWithoutClientesInput = {
    create?: XOR<Enumerable<viagensCreateWithoutClientesInput>, Enumerable<viagensUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<viagensCreateOrConnectWithoutClientesInput>
    createMany?: viagensCreateManyClientesInputEnvelope
    connect?: Enumerable<viagensWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type contatos_motoristasUpdateManyWithoutClientesNestedInput = {
    create?: XOR<Enumerable<contatos_motoristasCreateWithoutClientesInput>, Enumerable<contatos_motoristasUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<contatos_motoristasCreateOrConnectWithoutClientesInput>
    upsert?: Enumerable<contatos_motoristasUpsertWithWhereUniqueWithoutClientesInput>
    createMany?: contatos_motoristasCreateManyClientesInputEnvelope
    set?: Enumerable<contatos_motoristasWhereUniqueInput>
    disconnect?: Enumerable<contatos_motoristasWhereUniqueInput>
    delete?: Enumerable<contatos_motoristasWhereUniqueInput>
    connect?: Enumerable<contatos_motoristasWhereUniqueInput>
    update?: Enumerable<contatos_motoristasUpdateWithWhereUniqueWithoutClientesInput>
    updateMany?: Enumerable<contatos_motoristasUpdateManyWithWhereWithoutClientesInput>
    deleteMany?: Enumerable<contatos_motoristasScalarWhereInput>
  }

  export type status_motoristasUpdateManyWithoutClientesNestedInput = {
    create?: XOR<Enumerable<status_motoristasCreateWithoutClientesInput>, Enumerable<status_motoristasUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<status_motoristasCreateOrConnectWithoutClientesInput>
    upsert?: Enumerable<status_motoristasUpsertWithWhereUniqueWithoutClientesInput>
    createMany?: status_motoristasCreateManyClientesInputEnvelope
    set?: Enumerable<status_motoristasWhereUniqueInput>
    disconnect?: Enumerable<status_motoristasWhereUniqueInput>
    delete?: Enumerable<status_motoristasWhereUniqueInput>
    connect?: Enumerable<status_motoristasWhereUniqueInput>
    update?: Enumerable<status_motoristasUpdateWithWhereUniqueWithoutClientesInput>
    updateMany?: Enumerable<status_motoristasUpdateManyWithWhereWithoutClientesInput>
    deleteMany?: Enumerable<status_motoristasScalarWhereInput>
  }

  export type status_proprietariosUpdateManyWithoutClientesNestedInput = {
    create?: XOR<Enumerable<status_proprietariosCreateWithoutClientesInput>, Enumerable<status_proprietariosUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<status_proprietariosCreateOrConnectWithoutClientesInput>
    upsert?: Enumerable<status_proprietariosUpsertWithWhereUniqueWithoutClientesInput>
    createMany?: status_proprietariosCreateManyClientesInputEnvelope
    set?: Enumerable<status_proprietariosWhereUniqueInput>
    disconnect?: Enumerable<status_proprietariosWhereUniqueInput>
    delete?: Enumerable<status_proprietariosWhereUniqueInput>
    connect?: Enumerable<status_proprietariosWhereUniqueInput>
    update?: Enumerable<status_proprietariosUpdateWithWhereUniqueWithoutClientesInput>
    updateMany?: Enumerable<status_proprietariosUpdateManyWithWhereWithoutClientesInput>
    deleteMany?: Enumerable<status_proprietariosScalarWhereInput>
  }

  export type status_veiculosUpdateManyWithoutClientesNestedInput = {
    create?: XOR<Enumerable<status_veiculosCreateWithoutClientesInput>, Enumerable<status_veiculosUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<status_veiculosCreateOrConnectWithoutClientesInput>
    upsert?: Enumerable<status_veiculosUpsertWithWhereUniqueWithoutClientesInput>
    createMany?: status_veiculosCreateManyClientesInputEnvelope
    set?: Enumerable<status_veiculosWhereUniqueInput>
    disconnect?: Enumerable<status_veiculosWhereUniqueInput>
    delete?: Enumerable<status_veiculosWhereUniqueInput>
    connect?: Enumerable<status_veiculosWhereUniqueInput>
    update?: Enumerable<status_veiculosUpdateWithWhereUniqueWithoutClientesInput>
    updateMany?: Enumerable<status_veiculosUpdateManyWithWhereWithoutClientesInput>
    deleteMany?: Enumerable<status_veiculosScalarWhereInput>
  }

  export type viagensUpdateManyWithoutClientesNestedInput = {
    create?: XOR<Enumerable<viagensCreateWithoutClientesInput>, Enumerable<viagensUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<viagensCreateOrConnectWithoutClientesInput>
    upsert?: Enumerable<viagensUpsertWithWhereUniqueWithoutClientesInput>
    createMany?: viagensCreateManyClientesInputEnvelope
    set?: Enumerable<viagensWhereUniqueInput>
    disconnect?: Enumerable<viagensWhereUniqueInput>
    delete?: Enumerable<viagensWhereUniqueInput>
    connect?: Enumerable<viagensWhereUniqueInput>
    update?: Enumerable<viagensUpdateWithWhereUniqueWithoutClientesInput>
    updateMany?: Enumerable<viagensUpdateManyWithWhereWithoutClientesInput>
    deleteMany?: Enumerable<viagensScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type contatos_motoristasUncheckedUpdateManyWithoutClientesNestedInput = {
    create?: XOR<Enumerable<contatos_motoristasCreateWithoutClientesInput>, Enumerable<contatos_motoristasUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<contatos_motoristasCreateOrConnectWithoutClientesInput>
    upsert?: Enumerable<contatos_motoristasUpsertWithWhereUniqueWithoutClientesInput>
    createMany?: contatos_motoristasCreateManyClientesInputEnvelope
    set?: Enumerable<contatos_motoristasWhereUniqueInput>
    disconnect?: Enumerable<contatos_motoristasWhereUniqueInput>
    delete?: Enumerable<contatos_motoristasWhereUniqueInput>
    connect?: Enumerable<contatos_motoristasWhereUniqueInput>
    update?: Enumerable<contatos_motoristasUpdateWithWhereUniqueWithoutClientesInput>
    updateMany?: Enumerable<contatos_motoristasUpdateManyWithWhereWithoutClientesInput>
    deleteMany?: Enumerable<contatos_motoristasScalarWhereInput>
  }

  export type status_motoristasUncheckedUpdateManyWithoutClientesNestedInput = {
    create?: XOR<Enumerable<status_motoristasCreateWithoutClientesInput>, Enumerable<status_motoristasUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<status_motoristasCreateOrConnectWithoutClientesInput>
    upsert?: Enumerable<status_motoristasUpsertWithWhereUniqueWithoutClientesInput>
    createMany?: status_motoristasCreateManyClientesInputEnvelope
    set?: Enumerable<status_motoristasWhereUniqueInput>
    disconnect?: Enumerable<status_motoristasWhereUniqueInput>
    delete?: Enumerable<status_motoristasWhereUniqueInput>
    connect?: Enumerable<status_motoristasWhereUniqueInput>
    update?: Enumerable<status_motoristasUpdateWithWhereUniqueWithoutClientesInput>
    updateMany?: Enumerable<status_motoristasUpdateManyWithWhereWithoutClientesInput>
    deleteMany?: Enumerable<status_motoristasScalarWhereInput>
  }

  export type status_proprietariosUncheckedUpdateManyWithoutClientesNestedInput = {
    create?: XOR<Enumerable<status_proprietariosCreateWithoutClientesInput>, Enumerable<status_proprietariosUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<status_proprietariosCreateOrConnectWithoutClientesInput>
    upsert?: Enumerable<status_proprietariosUpsertWithWhereUniqueWithoutClientesInput>
    createMany?: status_proprietariosCreateManyClientesInputEnvelope
    set?: Enumerable<status_proprietariosWhereUniqueInput>
    disconnect?: Enumerable<status_proprietariosWhereUniqueInput>
    delete?: Enumerable<status_proprietariosWhereUniqueInput>
    connect?: Enumerable<status_proprietariosWhereUniqueInput>
    update?: Enumerable<status_proprietariosUpdateWithWhereUniqueWithoutClientesInput>
    updateMany?: Enumerable<status_proprietariosUpdateManyWithWhereWithoutClientesInput>
    deleteMany?: Enumerable<status_proprietariosScalarWhereInput>
  }

  export type status_veiculosUncheckedUpdateManyWithoutClientesNestedInput = {
    create?: XOR<Enumerable<status_veiculosCreateWithoutClientesInput>, Enumerable<status_veiculosUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<status_veiculosCreateOrConnectWithoutClientesInput>
    upsert?: Enumerable<status_veiculosUpsertWithWhereUniqueWithoutClientesInput>
    createMany?: status_veiculosCreateManyClientesInputEnvelope
    set?: Enumerable<status_veiculosWhereUniqueInput>
    disconnect?: Enumerable<status_veiculosWhereUniqueInput>
    delete?: Enumerable<status_veiculosWhereUniqueInput>
    connect?: Enumerable<status_veiculosWhereUniqueInput>
    update?: Enumerable<status_veiculosUpdateWithWhereUniqueWithoutClientesInput>
    updateMany?: Enumerable<status_veiculosUpdateManyWithWhereWithoutClientesInput>
    deleteMany?: Enumerable<status_veiculosScalarWhereInput>
  }

  export type viagensUncheckedUpdateManyWithoutClientesNestedInput = {
    create?: XOR<Enumerable<viagensCreateWithoutClientesInput>, Enumerable<viagensUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<viagensCreateOrConnectWithoutClientesInput>
    upsert?: Enumerable<viagensUpsertWithWhereUniqueWithoutClientesInput>
    createMany?: viagensCreateManyClientesInputEnvelope
    set?: Enumerable<viagensWhereUniqueInput>
    disconnect?: Enumerable<viagensWhereUniqueInput>
    delete?: Enumerable<viagensWhereUniqueInput>
    connect?: Enumerable<viagensWhereUniqueInput>
    update?: Enumerable<viagensUpdateWithWhereUniqueWithoutClientesInput>
    updateMany?: Enumerable<viagensUpdateManyWithWhereWithoutClientesInput>
    deleteMany?: Enumerable<viagensScalarWhereInput>
  }

  export type clientesCreateNestedOneWithoutContatos_motoristasInput = {
    create?: XOR<clientesCreateWithoutContatos_motoristasInput, clientesUncheckedCreateWithoutContatos_motoristasInput>
    connectOrCreate?: clientesCreateOrConnectWithoutContatos_motoristasInput
    connect?: clientesWhereUniqueInput
  }

  export type motoristasCreateNestedOneWithoutContatos_motoristasInput = {
    create?: XOR<motoristasCreateWithoutContatos_motoristasInput, motoristasUncheckedCreateWithoutContatos_motoristasInput>
    connectOrCreate?: motoristasCreateOrConnectWithoutContatos_motoristasInput
    connect?: motoristasWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type clientesUpdateOneWithoutContatos_motoristasNestedInput = {
    create?: XOR<clientesCreateWithoutContatos_motoristasInput, clientesUncheckedCreateWithoutContatos_motoristasInput>
    connectOrCreate?: clientesCreateOrConnectWithoutContatos_motoristasInput
    upsert?: clientesUpsertWithoutContatos_motoristasInput
    disconnect?: boolean
    delete?: boolean
    connect?: clientesWhereUniqueInput
    update?: XOR<clientesUpdateWithoutContatos_motoristasInput, clientesUncheckedUpdateWithoutContatos_motoristasInput>
  }

  export type motoristasUpdateOneWithoutContatos_motoristasNestedInput = {
    create?: XOR<motoristasCreateWithoutContatos_motoristasInput, motoristasUncheckedCreateWithoutContatos_motoristasInput>
    connectOrCreate?: motoristasCreateOrConnectWithoutContatos_motoristasInput
    upsert?: motoristasUpsertWithoutContatos_motoristasInput
    disconnect?: boolean
    delete?: boolean
    connect?: motoristasWhereUniqueInput
    update?: XOR<motoristasUpdateWithoutContatos_motoristasInput, motoristasUncheckedUpdateWithoutContatos_motoristasInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type contatos_motoristasCreateNestedManyWithoutMotoristasInput = {
    create?: XOR<Enumerable<contatos_motoristasCreateWithoutMotoristasInput>, Enumerable<contatos_motoristasUncheckedCreateWithoutMotoristasInput>>
    connectOrCreate?: Enumerable<contatos_motoristasCreateOrConnectWithoutMotoristasInput>
    createMany?: contatos_motoristasCreateManyMotoristasInputEnvelope
    connect?: Enumerable<contatos_motoristasWhereUniqueInput>
  }

  export type status_motoristasCreateNestedManyWithoutMotoristasInput = {
    create?: XOR<Enumerable<status_motoristasCreateWithoutMotoristasInput>, Enumerable<status_motoristasUncheckedCreateWithoutMotoristasInput>>
    connectOrCreate?: Enumerable<status_motoristasCreateOrConnectWithoutMotoristasInput>
    createMany?: status_motoristasCreateManyMotoristasInputEnvelope
    connect?: Enumerable<status_motoristasWhereUniqueInput>
  }

  export type viagensCreateNestedManyWithoutMotoristasInput = {
    create?: XOR<Enumerable<viagensCreateWithoutMotoristasInput>, Enumerable<viagensUncheckedCreateWithoutMotoristasInput>>
    connectOrCreate?: Enumerable<viagensCreateOrConnectWithoutMotoristasInput>
    createMany?: viagensCreateManyMotoristasInputEnvelope
    connect?: Enumerable<viagensWhereUniqueInput>
  }

  export type contatos_motoristasUncheckedCreateNestedManyWithoutMotoristasInput = {
    create?: XOR<Enumerable<contatos_motoristasCreateWithoutMotoristasInput>, Enumerable<contatos_motoristasUncheckedCreateWithoutMotoristasInput>>
    connectOrCreate?: Enumerable<contatos_motoristasCreateOrConnectWithoutMotoristasInput>
    createMany?: contatos_motoristasCreateManyMotoristasInputEnvelope
    connect?: Enumerable<contatos_motoristasWhereUniqueInput>
  }

  export type status_motoristasUncheckedCreateNestedManyWithoutMotoristasInput = {
    create?: XOR<Enumerable<status_motoristasCreateWithoutMotoristasInput>, Enumerable<status_motoristasUncheckedCreateWithoutMotoristasInput>>
    connectOrCreate?: Enumerable<status_motoristasCreateOrConnectWithoutMotoristasInput>
    createMany?: status_motoristasCreateManyMotoristasInputEnvelope
    connect?: Enumerable<status_motoristasWhereUniqueInput>
  }

  export type viagensUncheckedCreateNestedManyWithoutMotoristasInput = {
    create?: XOR<Enumerable<viagensCreateWithoutMotoristasInput>, Enumerable<viagensUncheckedCreateWithoutMotoristasInput>>
    connectOrCreate?: Enumerable<viagensCreateOrConnectWithoutMotoristasInput>
    createMany?: viagensCreateManyMotoristasInputEnvelope
    connect?: Enumerable<viagensWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type contatos_motoristasUpdateManyWithoutMotoristasNestedInput = {
    create?: XOR<Enumerable<contatos_motoristasCreateWithoutMotoristasInput>, Enumerable<contatos_motoristasUncheckedCreateWithoutMotoristasInput>>
    connectOrCreate?: Enumerable<contatos_motoristasCreateOrConnectWithoutMotoristasInput>
    upsert?: Enumerable<contatos_motoristasUpsertWithWhereUniqueWithoutMotoristasInput>
    createMany?: contatos_motoristasCreateManyMotoristasInputEnvelope
    set?: Enumerable<contatos_motoristasWhereUniqueInput>
    disconnect?: Enumerable<contatos_motoristasWhereUniqueInput>
    delete?: Enumerable<contatos_motoristasWhereUniqueInput>
    connect?: Enumerable<contatos_motoristasWhereUniqueInput>
    update?: Enumerable<contatos_motoristasUpdateWithWhereUniqueWithoutMotoristasInput>
    updateMany?: Enumerable<contatos_motoristasUpdateManyWithWhereWithoutMotoristasInput>
    deleteMany?: Enumerable<contatos_motoristasScalarWhereInput>
  }

  export type status_motoristasUpdateManyWithoutMotoristasNestedInput = {
    create?: XOR<Enumerable<status_motoristasCreateWithoutMotoristasInput>, Enumerable<status_motoristasUncheckedCreateWithoutMotoristasInput>>
    connectOrCreate?: Enumerable<status_motoristasCreateOrConnectWithoutMotoristasInput>
    upsert?: Enumerable<status_motoristasUpsertWithWhereUniqueWithoutMotoristasInput>
    createMany?: status_motoristasCreateManyMotoristasInputEnvelope
    set?: Enumerable<status_motoristasWhereUniqueInput>
    disconnect?: Enumerable<status_motoristasWhereUniqueInput>
    delete?: Enumerable<status_motoristasWhereUniqueInput>
    connect?: Enumerable<status_motoristasWhereUniqueInput>
    update?: Enumerable<status_motoristasUpdateWithWhereUniqueWithoutMotoristasInput>
    updateMany?: Enumerable<status_motoristasUpdateManyWithWhereWithoutMotoristasInput>
    deleteMany?: Enumerable<status_motoristasScalarWhereInput>
  }

  export type viagensUpdateManyWithoutMotoristasNestedInput = {
    create?: XOR<Enumerable<viagensCreateWithoutMotoristasInput>, Enumerable<viagensUncheckedCreateWithoutMotoristasInput>>
    connectOrCreate?: Enumerable<viagensCreateOrConnectWithoutMotoristasInput>
    upsert?: Enumerable<viagensUpsertWithWhereUniqueWithoutMotoristasInput>
    createMany?: viagensCreateManyMotoristasInputEnvelope
    set?: Enumerable<viagensWhereUniqueInput>
    disconnect?: Enumerable<viagensWhereUniqueInput>
    delete?: Enumerable<viagensWhereUniqueInput>
    connect?: Enumerable<viagensWhereUniqueInput>
    update?: Enumerable<viagensUpdateWithWhereUniqueWithoutMotoristasInput>
    updateMany?: Enumerable<viagensUpdateManyWithWhereWithoutMotoristasInput>
    deleteMany?: Enumerable<viagensScalarWhereInput>
  }

  export type contatos_motoristasUncheckedUpdateManyWithoutMotoristasNestedInput = {
    create?: XOR<Enumerable<contatos_motoristasCreateWithoutMotoristasInput>, Enumerable<contatos_motoristasUncheckedCreateWithoutMotoristasInput>>
    connectOrCreate?: Enumerable<contatos_motoristasCreateOrConnectWithoutMotoristasInput>
    upsert?: Enumerable<contatos_motoristasUpsertWithWhereUniqueWithoutMotoristasInput>
    createMany?: contatos_motoristasCreateManyMotoristasInputEnvelope
    set?: Enumerable<contatos_motoristasWhereUniqueInput>
    disconnect?: Enumerable<contatos_motoristasWhereUniqueInput>
    delete?: Enumerable<contatos_motoristasWhereUniqueInput>
    connect?: Enumerable<contatos_motoristasWhereUniqueInput>
    update?: Enumerable<contatos_motoristasUpdateWithWhereUniqueWithoutMotoristasInput>
    updateMany?: Enumerable<contatos_motoristasUpdateManyWithWhereWithoutMotoristasInput>
    deleteMany?: Enumerable<contatos_motoristasScalarWhereInput>
  }

  export type status_motoristasUncheckedUpdateManyWithoutMotoristasNestedInput = {
    create?: XOR<Enumerable<status_motoristasCreateWithoutMotoristasInput>, Enumerable<status_motoristasUncheckedCreateWithoutMotoristasInput>>
    connectOrCreate?: Enumerable<status_motoristasCreateOrConnectWithoutMotoristasInput>
    upsert?: Enumerable<status_motoristasUpsertWithWhereUniqueWithoutMotoristasInput>
    createMany?: status_motoristasCreateManyMotoristasInputEnvelope
    set?: Enumerable<status_motoristasWhereUniqueInput>
    disconnect?: Enumerable<status_motoristasWhereUniqueInput>
    delete?: Enumerable<status_motoristasWhereUniqueInput>
    connect?: Enumerable<status_motoristasWhereUniqueInput>
    update?: Enumerable<status_motoristasUpdateWithWhereUniqueWithoutMotoristasInput>
    updateMany?: Enumerable<status_motoristasUpdateManyWithWhereWithoutMotoristasInput>
    deleteMany?: Enumerable<status_motoristasScalarWhereInput>
  }

  export type viagensUncheckedUpdateManyWithoutMotoristasNestedInput = {
    create?: XOR<Enumerable<viagensCreateWithoutMotoristasInput>, Enumerable<viagensUncheckedCreateWithoutMotoristasInput>>
    connectOrCreate?: Enumerable<viagensCreateOrConnectWithoutMotoristasInput>
    upsert?: Enumerable<viagensUpsertWithWhereUniqueWithoutMotoristasInput>
    createMany?: viagensCreateManyMotoristasInputEnvelope
    set?: Enumerable<viagensWhereUniqueInput>
    disconnect?: Enumerable<viagensWhereUniqueInput>
    delete?: Enumerable<viagensWhereUniqueInput>
    connect?: Enumerable<viagensWhereUniqueInput>
    update?: Enumerable<viagensUpdateWithWhereUniqueWithoutMotoristasInput>
    updateMany?: Enumerable<viagensUpdateManyWithWhereWithoutMotoristasInput>
    deleteMany?: Enumerable<viagensScalarWhereInput>
  }

  export type status_proprietariosCreateNestedManyWithoutProprietariosInput = {
    create?: XOR<Enumerable<status_proprietariosCreateWithoutProprietariosInput>, Enumerable<status_proprietariosUncheckedCreateWithoutProprietariosInput>>
    connectOrCreate?: Enumerable<status_proprietariosCreateOrConnectWithoutProprietariosInput>
    createMany?: status_proprietariosCreateManyProprietariosInputEnvelope
    connect?: Enumerable<status_proprietariosWhereUniqueInput>
  }

  export type viagensCreateNestedManyWithoutProprietariosInput = {
    create?: XOR<Enumerable<viagensCreateWithoutProprietariosInput>, Enumerable<viagensUncheckedCreateWithoutProprietariosInput>>
    connectOrCreate?: Enumerable<viagensCreateOrConnectWithoutProprietariosInput>
    createMany?: viagensCreateManyProprietariosInputEnvelope
    connect?: Enumerable<viagensWhereUniqueInput>
  }

  export type status_proprietariosUncheckedCreateNestedManyWithoutProprietariosInput = {
    create?: XOR<Enumerable<status_proprietariosCreateWithoutProprietariosInput>, Enumerable<status_proprietariosUncheckedCreateWithoutProprietariosInput>>
    connectOrCreate?: Enumerable<status_proprietariosCreateOrConnectWithoutProprietariosInput>
    createMany?: status_proprietariosCreateManyProprietariosInputEnvelope
    connect?: Enumerable<status_proprietariosWhereUniqueInput>
  }

  export type viagensUncheckedCreateNestedManyWithoutProprietariosInput = {
    create?: XOR<Enumerable<viagensCreateWithoutProprietariosInput>, Enumerable<viagensUncheckedCreateWithoutProprietariosInput>>
    connectOrCreate?: Enumerable<viagensCreateOrConnectWithoutProprietariosInput>
    createMany?: viagensCreateManyProprietariosInputEnvelope
    connect?: Enumerable<viagensWhereUniqueInput>
  }

  export type status_proprietariosUpdateManyWithoutProprietariosNestedInput = {
    create?: XOR<Enumerable<status_proprietariosCreateWithoutProprietariosInput>, Enumerable<status_proprietariosUncheckedCreateWithoutProprietariosInput>>
    connectOrCreate?: Enumerable<status_proprietariosCreateOrConnectWithoutProprietariosInput>
    upsert?: Enumerable<status_proprietariosUpsertWithWhereUniqueWithoutProprietariosInput>
    createMany?: status_proprietariosCreateManyProprietariosInputEnvelope
    set?: Enumerable<status_proprietariosWhereUniqueInput>
    disconnect?: Enumerable<status_proprietariosWhereUniqueInput>
    delete?: Enumerable<status_proprietariosWhereUniqueInput>
    connect?: Enumerable<status_proprietariosWhereUniqueInput>
    update?: Enumerable<status_proprietariosUpdateWithWhereUniqueWithoutProprietariosInput>
    updateMany?: Enumerable<status_proprietariosUpdateManyWithWhereWithoutProprietariosInput>
    deleteMany?: Enumerable<status_proprietariosScalarWhereInput>
  }

  export type viagensUpdateManyWithoutProprietariosNestedInput = {
    create?: XOR<Enumerable<viagensCreateWithoutProprietariosInput>, Enumerable<viagensUncheckedCreateWithoutProprietariosInput>>
    connectOrCreate?: Enumerable<viagensCreateOrConnectWithoutProprietariosInput>
    upsert?: Enumerable<viagensUpsertWithWhereUniqueWithoutProprietariosInput>
    createMany?: viagensCreateManyProprietariosInputEnvelope
    set?: Enumerable<viagensWhereUniqueInput>
    disconnect?: Enumerable<viagensWhereUniqueInput>
    delete?: Enumerable<viagensWhereUniqueInput>
    connect?: Enumerable<viagensWhereUniqueInput>
    update?: Enumerable<viagensUpdateWithWhereUniqueWithoutProprietariosInput>
    updateMany?: Enumerable<viagensUpdateManyWithWhereWithoutProprietariosInput>
    deleteMany?: Enumerable<viagensScalarWhereInput>
  }

  export type status_proprietariosUncheckedUpdateManyWithoutProprietariosNestedInput = {
    create?: XOR<Enumerable<status_proprietariosCreateWithoutProprietariosInput>, Enumerable<status_proprietariosUncheckedCreateWithoutProprietariosInput>>
    connectOrCreate?: Enumerable<status_proprietariosCreateOrConnectWithoutProprietariosInput>
    upsert?: Enumerable<status_proprietariosUpsertWithWhereUniqueWithoutProprietariosInput>
    createMany?: status_proprietariosCreateManyProprietariosInputEnvelope
    set?: Enumerable<status_proprietariosWhereUniqueInput>
    disconnect?: Enumerable<status_proprietariosWhereUniqueInput>
    delete?: Enumerable<status_proprietariosWhereUniqueInput>
    connect?: Enumerable<status_proprietariosWhereUniqueInput>
    update?: Enumerable<status_proprietariosUpdateWithWhereUniqueWithoutProprietariosInput>
    updateMany?: Enumerable<status_proprietariosUpdateManyWithWhereWithoutProprietariosInput>
    deleteMany?: Enumerable<status_proprietariosScalarWhereInput>
  }

  export type viagensUncheckedUpdateManyWithoutProprietariosNestedInput = {
    create?: XOR<Enumerable<viagensCreateWithoutProprietariosInput>, Enumerable<viagensUncheckedCreateWithoutProprietariosInput>>
    connectOrCreate?: Enumerable<viagensCreateOrConnectWithoutProprietariosInput>
    upsert?: Enumerable<viagensUpsertWithWhereUniqueWithoutProprietariosInput>
    createMany?: viagensCreateManyProprietariosInputEnvelope
    set?: Enumerable<viagensWhereUniqueInput>
    disconnect?: Enumerable<viagensWhereUniqueInput>
    delete?: Enumerable<viagensWhereUniqueInput>
    connect?: Enumerable<viagensWhereUniqueInput>
    update?: Enumerable<viagensUpdateWithWhereUniqueWithoutProprietariosInput>
    updateMany?: Enumerable<viagensUpdateManyWithWhereWithoutProprietariosInput>
    deleteMany?: Enumerable<viagensScalarWhereInput>
  }

  export type clientesCreateNestedOneWithoutStatus_motoristasInput = {
    create?: XOR<clientesCreateWithoutStatus_motoristasInput, clientesUncheckedCreateWithoutStatus_motoristasInput>
    connectOrCreate?: clientesCreateOrConnectWithoutStatus_motoristasInput
    connect?: clientesWhereUniqueInput
  }

  export type motoristasCreateNestedOneWithoutStatus_motoristasInput = {
    create?: XOR<motoristasCreateWithoutStatus_motoristasInput, motoristasUncheckedCreateWithoutStatus_motoristasInput>
    connectOrCreate?: motoristasCreateOrConnectWithoutStatus_motoristasInput
    connect?: motoristasWhereUniqueInput
  }

  export type Enumenum_status_motoristaFieldUpdateOperationsInput = {
    set?: enum_status_motorista
  }

  export type clientesUpdateOneWithoutStatus_motoristasNestedInput = {
    create?: XOR<clientesCreateWithoutStatus_motoristasInput, clientesUncheckedCreateWithoutStatus_motoristasInput>
    connectOrCreate?: clientesCreateOrConnectWithoutStatus_motoristasInput
    upsert?: clientesUpsertWithoutStatus_motoristasInput
    disconnect?: boolean
    delete?: boolean
    connect?: clientesWhereUniqueInput
    update?: XOR<clientesUpdateWithoutStatus_motoristasInput, clientesUncheckedUpdateWithoutStatus_motoristasInput>
  }

  export type motoristasUpdateOneWithoutStatus_motoristasNestedInput = {
    create?: XOR<motoristasCreateWithoutStatus_motoristasInput, motoristasUncheckedCreateWithoutStatus_motoristasInput>
    connectOrCreate?: motoristasCreateOrConnectWithoutStatus_motoristasInput
    upsert?: motoristasUpsertWithoutStatus_motoristasInput
    disconnect?: boolean
    delete?: boolean
    connect?: motoristasWhereUniqueInput
    update?: XOR<motoristasUpdateWithoutStatus_motoristasInput, motoristasUncheckedUpdateWithoutStatus_motoristasInput>
  }

  export type clientesCreateNestedOneWithoutStatus_proprietariosInput = {
    create?: XOR<clientesCreateWithoutStatus_proprietariosInput, clientesUncheckedCreateWithoutStatus_proprietariosInput>
    connectOrCreate?: clientesCreateOrConnectWithoutStatus_proprietariosInput
    connect?: clientesWhereUniqueInput
  }

  export type proprietariosCreateNestedOneWithoutStatus_proprietariosInput = {
    create?: XOR<proprietariosCreateWithoutStatus_proprietariosInput, proprietariosUncheckedCreateWithoutStatus_proprietariosInput>
    connectOrCreate?: proprietariosCreateOrConnectWithoutStatus_proprietariosInput
    connect?: proprietariosWhereUniqueInput
  }

  export type Enumenum_status_proprietarioFieldUpdateOperationsInput = {
    set?: enum_status_proprietario
  }

  export type clientesUpdateOneWithoutStatus_proprietariosNestedInput = {
    create?: XOR<clientesCreateWithoutStatus_proprietariosInput, clientesUncheckedCreateWithoutStatus_proprietariosInput>
    connectOrCreate?: clientesCreateOrConnectWithoutStatus_proprietariosInput
    upsert?: clientesUpsertWithoutStatus_proprietariosInput
    disconnect?: boolean
    delete?: boolean
    connect?: clientesWhereUniqueInput
    update?: XOR<clientesUpdateWithoutStatus_proprietariosInput, clientesUncheckedUpdateWithoutStatus_proprietariosInput>
  }

  export type proprietariosUpdateOneWithoutStatus_proprietariosNestedInput = {
    create?: XOR<proprietariosCreateWithoutStatus_proprietariosInput, proprietariosUncheckedCreateWithoutStatus_proprietariosInput>
    connectOrCreate?: proprietariosCreateOrConnectWithoutStatus_proprietariosInput
    upsert?: proprietariosUpsertWithoutStatus_proprietariosInput
    disconnect?: boolean
    delete?: boolean
    connect?: proprietariosWhereUniqueInput
    update?: XOR<proprietariosUpdateWithoutStatus_proprietariosInput, proprietariosUncheckedUpdateWithoutStatus_proprietariosInput>
  }

  export type clientesCreateNestedOneWithoutStatus_veiculosInput = {
    create?: XOR<clientesCreateWithoutStatus_veiculosInput, clientesUncheckedCreateWithoutStatus_veiculosInput>
    connectOrCreate?: clientesCreateOrConnectWithoutStatus_veiculosInput
    connect?: clientesWhereUniqueInput
  }

  export type veiculosCreateNestedOneWithoutStatus_veiculosInput = {
    create?: XOR<veiculosCreateWithoutStatus_veiculosInput, veiculosUncheckedCreateWithoutStatus_veiculosInput>
    connectOrCreate?: veiculosCreateOrConnectWithoutStatus_veiculosInput
    connect?: veiculosWhereUniqueInput
  }

  export type Enumenum_status_veiculoFieldUpdateOperationsInput = {
    set?: enum_status_veiculo
  }

  export type clientesUpdateOneWithoutStatus_veiculosNestedInput = {
    create?: XOR<clientesCreateWithoutStatus_veiculosInput, clientesUncheckedCreateWithoutStatus_veiculosInput>
    connectOrCreate?: clientesCreateOrConnectWithoutStatus_veiculosInput
    upsert?: clientesUpsertWithoutStatus_veiculosInput
    disconnect?: boolean
    delete?: boolean
    connect?: clientesWhereUniqueInput
    update?: XOR<clientesUpdateWithoutStatus_veiculosInput, clientesUncheckedUpdateWithoutStatus_veiculosInput>
  }

  export type veiculosUpdateOneWithoutStatus_veiculosNestedInput = {
    create?: XOR<veiculosCreateWithoutStatus_veiculosInput, veiculosUncheckedCreateWithoutStatus_veiculosInput>
    connectOrCreate?: veiculosCreateOrConnectWithoutStatus_veiculosInput
    upsert?: veiculosUpsertWithoutStatus_veiculosInput
    disconnect?: boolean
    delete?: boolean
    connect?: veiculosWhereUniqueInput
    update?: XOR<veiculosUpdateWithoutStatus_veiculosInput, veiculosUncheckedUpdateWithoutStatus_veiculosInput>
  }

  export type status_veiculosCreateNestedManyWithoutVeiculosInput = {
    create?: XOR<Enumerable<status_veiculosCreateWithoutVeiculosInput>, Enumerable<status_veiculosUncheckedCreateWithoutVeiculosInput>>
    connectOrCreate?: Enumerable<status_veiculosCreateOrConnectWithoutVeiculosInput>
    createMany?: status_veiculosCreateManyVeiculosInputEnvelope
    connect?: Enumerable<status_veiculosWhereUniqueInput>
  }

  export type viagensCreateNestedManyWithoutVeiculosInput = {
    create?: XOR<Enumerable<viagensCreateWithoutVeiculosInput>, Enumerable<viagensUncheckedCreateWithoutVeiculosInput>>
    connectOrCreate?: Enumerable<viagensCreateOrConnectWithoutVeiculosInput>
    createMany?: viagensCreateManyVeiculosInputEnvelope
    connect?: Enumerable<viagensWhereUniqueInput>
  }

  export type status_veiculosUncheckedCreateNestedManyWithoutVeiculosInput = {
    create?: XOR<Enumerable<status_veiculosCreateWithoutVeiculosInput>, Enumerable<status_veiculosUncheckedCreateWithoutVeiculosInput>>
    connectOrCreate?: Enumerable<status_veiculosCreateOrConnectWithoutVeiculosInput>
    createMany?: status_veiculosCreateManyVeiculosInputEnvelope
    connect?: Enumerable<status_veiculosWhereUniqueInput>
  }

  export type viagensUncheckedCreateNestedManyWithoutVeiculosInput = {
    create?: XOR<Enumerable<viagensCreateWithoutVeiculosInput>, Enumerable<viagensUncheckedCreateWithoutVeiculosInput>>
    connectOrCreate?: Enumerable<viagensCreateOrConnectWithoutVeiculosInput>
    createMany?: viagensCreateManyVeiculosInputEnvelope
    connect?: Enumerable<viagensWhereUniqueInput>
  }

  export type status_veiculosUpdateManyWithoutVeiculosNestedInput = {
    create?: XOR<Enumerable<status_veiculosCreateWithoutVeiculosInput>, Enumerable<status_veiculosUncheckedCreateWithoutVeiculosInput>>
    connectOrCreate?: Enumerable<status_veiculosCreateOrConnectWithoutVeiculosInput>
    upsert?: Enumerable<status_veiculosUpsertWithWhereUniqueWithoutVeiculosInput>
    createMany?: status_veiculosCreateManyVeiculosInputEnvelope
    set?: Enumerable<status_veiculosWhereUniqueInput>
    disconnect?: Enumerable<status_veiculosWhereUniqueInput>
    delete?: Enumerable<status_veiculosWhereUniqueInput>
    connect?: Enumerable<status_veiculosWhereUniqueInput>
    update?: Enumerable<status_veiculosUpdateWithWhereUniqueWithoutVeiculosInput>
    updateMany?: Enumerable<status_veiculosUpdateManyWithWhereWithoutVeiculosInput>
    deleteMany?: Enumerable<status_veiculosScalarWhereInput>
  }

  export type viagensUpdateManyWithoutVeiculosNestedInput = {
    create?: XOR<Enumerable<viagensCreateWithoutVeiculosInput>, Enumerable<viagensUncheckedCreateWithoutVeiculosInput>>
    connectOrCreate?: Enumerable<viagensCreateOrConnectWithoutVeiculosInput>
    upsert?: Enumerable<viagensUpsertWithWhereUniqueWithoutVeiculosInput>
    createMany?: viagensCreateManyVeiculosInputEnvelope
    set?: Enumerable<viagensWhereUniqueInput>
    disconnect?: Enumerable<viagensWhereUniqueInput>
    delete?: Enumerable<viagensWhereUniqueInput>
    connect?: Enumerable<viagensWhereUniqueInput>
    update?: Enumerable<viagensUpdateWithWhereUniqueWithoutVeiculosInput>
    updateMany?: Enumerable<viagensUpdateManyWithWhereWithoutVeiculosInput>
    deleteMany?: Enumerable<viagensScalarWhereInput>
  }

  export type status_veiculosUncheckedUpdateManyWithoutVeiculosNestedInput = {
    create?: XOR<Enumerable<status_veiculosCreateWithoutVeiculosInput>, Enumerable<status_veiculosUncheckedCreateWithoutVeiculosInput>>
    connectOrCreate?: Enumerable<status_veiculosCreateOrConnectWithoutVeiculosInput>
    upsert?: Enumerable<status_veiculosUpsertWithWhereUniqueWithoutVeiculosInput>
    createMany?: status_veiculosCreateManyVeiculosInputEnvelope
    set?: Enumerable<status_veiculosWhereUniqueInput>
    disconnect?: Enumerable<status_veiculosWhereUniqueInput>
    delete?: Enumerable<status_veiculosWhereUniqueInput>
    connect?: Enumerable<status_veiculosWhereUniqueInput>
    update?: Enumerable<status_veiculosUpdateWithWhereUniqueWithoutVeiculosInput>
    updateMany?: Enumerable<status_veiculosUpdateManyWithWhereWithoutVeiculosInput>
    deleteMany?: Enumerable<status_veiculosScalarWhereInput>
  }

  export type viagensUncheckedUpdateManyWithoutVeiculosNestedInput = {
    create?: XOR<Enumerable<viagensCreateWithoutVeiculosInput>, Enumerable<viagensUncheckedCreateWithoutVeiculosInput>>
    connectOrCreate?: Enumerable<viagensCreateOrConnectWithoutVeiculosInput>
    upsert?: Enumerable<viagensUpsertWithWhereUniqueWithoutVeiculosInput>
    createMany?: viagensCreateManyVeiculosInputEnvelope
    set?: Enumerable<viagensWhereUniqueInput>
    disconnect?: Enumerable<viagensWhereUniqueInput>
    delete?: Enumerable<viagensWhereUniqueInput>
    connect?: Enumerable<viagensWhereUniqueInput>
    update?: Enumerable<viagensUpdateWithWhereUniqueWithoutVeiculosInput>
    updateMany?: Enumerable<viagensUpdateManyWithWhereWithoutVeiculosInput>
    deleteMany?: Enumerable<viagensScalarWhereInput>
  }

  export type clientesCreateNestedOneWithoutViagensInput = {
    create?: XOR<clientesCreateWithoutViagensInput, clientesUncheckedCreateWithoutViagensInput>
    connectOrCreate?: clientesCreateOrConnectWithoutViagensInput
    connect?: clientesWhereUniqueInput
  }

  export type motoristasCreateNestedOneWithoutViagensInput = {
    create?: XOR<motoristasCreateWithoutViagensInput, motoristasUncheckedCreateWithoutViagensInput>
    connectOrCreate?: motoristasCreateOrConnectWithoutViagensInput
    connect?: motoristasWhereUniqueInput
  }

  export type proprietariosCreateNestedOneWithoutViagensInput = {
    create?: XOR<proprietariosCreateWithoutViagensInput, proprietariosUncheckedCreateWithoutViagensInput>
    connectOrCreate?: proprietariosCreateOrConnectWithoutViagensInput
    connect?: proprietariosWhereUniqueInput
  }

  export type veiculosCreateNestedOneWithoutViagensInput = {
    create?: XOR<veiculosCreateWithoutViagensInput, veiculosUncheckedCreateWithoutViagensInput>
    connectOrCreate?: veiculosCreateOrConnectWithoutViagensInput
    connect?: veiculosWhereUniqueInput
  }

  export type Enumenum_viagemFieldUpdateOperationsInput = {
    set?: enum_viagem
  }

  export type clientesUpdateOneRequiredWithoutViagensNestedInput = {
    create?: XOR<clientesCreateWithoutViagensInput, clientesUncheckedCreateWithoutViagensInput>
    connectOrCreate?: clientesCreateOrConnectWithoutViagensInput
    upsert?: clientesUpsertWithoutViagensInput
    connect?: clientesWhereUniqueInput
    update?: XOR<clientesUpdateWithoutViagensInput, clientesUncheckedUpdateWithoutViagensInput>
  }

  export type motoristasUpdateOneWithoutViagensNestedInput = {
    create?: XOR<motoristasCreateWithoutViagensInput, motoristasUncheckedCreateWithoutViagensInput>
    connectOrCreate?: motoristasCreateOrConnectWithoutViagensInput
    upsert?: motoristasUpsertWithoutViagensInput
    disconnect?: boolean
    delete?: boolean
    connect?: motoristasWhereUniqueInput
    update?: XOR<motoristasUpdateWithoutViagensInput, motoristasUncheckedUpdateWithoutViagensInput>
  }

  export type proprietariosUpdateOneWithoutViagensNestedInput = {
    create?: XOR<proprietariosCreateWithoutViagensInput, proprietariosUncheckedCreateWithoutViagensInput>
    connectOrCreate?: proprietariosCreateOrConnectWithoutViagensInput
    upsert?: proprietariosUpsertWithoutViagensInput
    disconnect?: boolean
    delete?: boolean
    connect?: proprietariosWhereUniqueInput
    update?: XOR<proprietariosUpdateWithoutViagensInput, proprietariosUncheckedUpdateWithoutViagensInput>
  }

  export type veiculosUpdateOneWithoutViagensNestedInput = {
    create?: XOR<veiculosCreateWithoutViagensInput, veiculosUncheckedCreateWithoutViagensInput>
    connectOrCreate?: veiculosCreateOrConnectWithoutViagensInput
    upsert?: veiculosUpsertWithoutViagensInput
    disconnect?: boolean
    delete?: boolean
    connect?: veiculosWhereUniqueInput
    update?: XOR<veiculosUpdateWithoutViagensInput, veiculosUncheckedUpdateWithoutViagensInput>
  }

  export type NullableEnumenum_status_motoristaFieldUpdateOperationsInput = {
    set?: enum_status_motorista | null
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedEnumenum_status_motoristaFilter = {
    equals?: enum_status_motorista
    in?: Enumerable<enum_status_motorista>
    notIn?: Enumerable<enum_status_motorista>
    not?: NestedEnumenum_status_motoristaFilter | enum_status_motorista
  }

  export type NestedEnumenum_status_motoristaWithAggregatesFilter = {
    equals?: enum_status_motorista
    in?: Enumerable<enum_status_motorista>
    notIn?: Enumerable<enum_status_motorista>
    not?: NestedEnumenum_status_motoristaWithAggregatesFilter | enum_status_motorista
    _count?: NestedIntFilter
    _min?: NestedEnumenum_status_motoristaFilter
    _max?: NestedEnumenum_status_motoristaFilter
  }

  export type NestedEnumenum_status_proprietarioFilter = {
    equals?: enum_status_proprietario
    in?: Enumerable<enum_status_proprietario>
    notIn?: Enumerable<enum_status_proprietario>
    not?: NestedEnumenum_status_proprietarioFilter | enum_status_proprietario
  }

  export type NestedEnumenum_status_proprietarioWithAggregatesFilter = {
    equals?: enum_status_proprietario
    in?: Enumerable<enum_status_proprietario>
    notIn?: Enumerable<enum_status_proprietario>
    not?: NestedEnumenum_status_proprietarioWithAggregatesFilter | enum_status_proprietario
    _count?: NestedIntFilter
    _min?: NestedEnumenum_status_proprietarioFilter
    _max?: NestedEnumenum_status_proprietarioFilter
  }

  export type NestedEnumenum_status_veiculoFilter = {
    equals?: enum_status_veiculo
    in?: Enumerable<enum_status_veiculo>
    notIn?: Enumerable<enum_status_veiculo>
    not?: NestedEnumenum_status_veiculoFilter | enum_status_veiculo
  }

  export type NestedEnumenum_status_veiculoWithAggregatesFilter = {
    equals?: enum_status_veiculo
    in?: Enumerable<enum_status_veiculo>
    notIn?: Enumerable<enum_status_veiculo>
    not?: NestedEnumenum_status_veiculoWithAggregatesFilter | enum_status_veiculo
    _count?: NestedIntFilter
    _min?: NestedEnumenum_status_veiculoFilter
    _max?: NestedEnumenum_status_veiculoFilter
  }

  export type NestedEnumenum_viagemFilter = {
    equals?: enum_viagem
    in?: Enumerable<enum_viagem>
    notIn?: Enumerable<enum_viagem>
    not?: NestedEnumenum_viagemFilter | enum_viagem
  }

  export type NestedEnumenum_viagemWithAggregatesFilter = {
    equals?: enum_viagem
    in?: Enumerable<enum_viagem>
    notIn?: Enumerable<enum_viagem>
    not?: NestedEnumenum_viagemWithAggregatesFilter | enum_viagem
    _count?: NestedIntFilter
    _min?: NestedEnumenum_viagemFilter
    _max?: NestedEnumenum_viagemFilter
  }

  export type NestedEnumenum_status_motoristaNullableFilter = {
    equals?: enum_status_motorista | null
    in?: Enumerable<enum_status_motorista> | null
    notIn?: Enumerable<enum_status_motorista> | null
    not?: NestedEnumenum_status_motoristaNullableFilter | enum_status_motorista | null
  }

  export type NestedEnumenum_status_motoristaNullableWithAggregatesFilter = {
    equals?: enum_status_motorista | null
    in?: Enumerable<enum_status_motorista> | null
    notIn?: Enumerable<enum_status_motorista> | null
    not?: NestedEnumenum_status_motoristaNullableWithAggregatesFilter | enum_status_motorista | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumenum_status_motoristaNullableFilter
    _max?: NestedEnumenum_status_motoristaNullableFilter
  }

  export type contatos_motoristasCreateWithoutClientesInput = {
    idmotorista: bigint | number
    idcliente: bigint | number
    contato: string
    tipo_contato: string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    motoristas?: motoristasCreateNestedOneWithoutContatos_motoristasInput
  }

  export type contatos_motoristasUncheckedCreateWithoutClientesInput = {
    id?: number
    idmotorista: bigint | number
    idcliente: bigint | number
    contato: string
    tipo_contato: string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    motoristasId?: number | null
  }

  export type contatos_motoristasCreateOrConnectWithoutClientesInput = {
    where: contatos_motoristasWhereUniqueInput
    create: XOR<contatos_motoristasCreateWithoutClientesInput, contatos_motoristasUncheckedCreateWithoutClientesInput>
  }

  export type contatos_motoristasCreateManyClientesInputEnvelope = {
    data: Enumerable<contatos_motoristasCreateManyClientesInput>
    skipDuplicates?: boolean
  }

  export type status_motoristasCreateWithoutClientesInput = {
    idmotorista: bigint | number
    idcliente: bigint | number
    dt_cliente: Date | string
    numero_cliente?: string | null
    lote_arquivo?: string | null
    status_motorista: enum_status_motorista
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    motoristas?: motoristasCreateNestedOneWithoutStatus_motoristasInput
  }

  export type status_motoristasUncheckedCreateWithoutClientesInput = {
    id?: number
    idmotorista: bigint | number
    idcliente: bigint | number
    dt_cliente: Date | string
    numero_cliente?: string | null
    lote_arquivo?: string | null
    status_motorista: enum_status_motorista
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    motoristasId?: number | null
  }

  export type status_motoristasCreateOrConnectWithoutClientesInput = {
    where: status_motoristasWhereUniqueInput
    create: XOR<status_motoristasCreateWithoutClientesInput, status_motoristasUncheckedCreateWithoutClientesInput>
  }

  export type status_motoristasCreateManyClientesInputEnvelope = {
    data: Enumerable<status_motoristasCreateManyClientesInput>
    skipDuplicates?: boolean
  }

  export type status_proprietariosCreateWithoutClientesInput = {
    idproprietario: bigint | number
    idcliente: bigint | number
    lote_arquivo?: string | null
    dt_cliente: Date | string
    numero_cliente?: string | null
    status_proprietario: enum_status_proprietario
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    proprietarios?: proprietariosCreateNestedOneWithoutStatus_proprietariosInput
  }

  export type status_proprietariosUncheckedCreateWithoutClientesInput = {
    id?: number
    idproprietario: bigint | number
    idcliente: bigint | number
    lote_arquivo?: string | null
    dt_cliente: Date | string
    numero_cliente?: string | null
    status_proprietario: enum_status_proprietario
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    proprietariosId?: number | null
  }

  export type status_proprietariosCreateOrConnectWithoutClientesInput = {
    where: status_proprietariosWhereUniqueInput
    create: XOR<status_proprietariosCreateWithoutClientesInput, status_proprietariosUncheckedCreateWithoutClientesInput>
  }

  export type status_proprietariosCreateManyClientesInputEnvelope = {
    data: Enumerable<status_proprietariosCreateManyClientesInput>
    skipDuplicates?: boolean
  }

  export type status_veiculosCreateWithoutClientesInput = {
    idveiculo: bigint | number
    idcliente: bigint | number
    lote_arquivo?: string | null
    dt_cliente: Date | string
    numero_cliente?: string | null
    status_veiculo: enum_status_veiculo
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    veiculos?: veiculosCreateNestedOneWithoutStatus_veiculosInput
  }

  export type status_veiculosUncheckedCreateWithoutClientesInput = {
    id?: number
    idveiculo: bigint | number
    idcliente: bigint | number
    lote_arquivo?: string | null
    dt_cliente: Date | string
    numero_cliente?: string | null
    status_veiculo: enum_status_veiculo
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    veiculosId?: number | null
  }

  export type status_veiculosCreateOrConnectWithoutClientesInput = {
    where: status_veiculosWhereUniqueInput
    create: XOR<status_veiculosCreateWithoutClientesInput, status_veiculosUncheckedCreateWithoutClientesInput>
  }

  export type status_veiculosCreateManyClientesInputEnvelope = {
    data: Enumerable<status_veiculosCreateManyClientesInput>
    skipDuplicates?: boolean
  }

  export type viagensCreateWithoutClientesInput = {
    numero_cliente: string
    dt_viagem: Date | string
    mercadoria: string
    cidade_origem: string
    cidade_destino: string
    idmotorista: bigint | number
    idproprietario: bigint | number
    idveiculo: bigint | number
    carreta1?: string | null
    carreta2?: string | null
    carreta3?: string | null
    carreta4?: string | null
    viagem_cancelado?: enum_viagem
    dt_cancelamento?: Date | string | null
    dt_cliente: Date | string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    motoristas?: motoristasCreateNestedOneWithoutViagensInput
    proprietarios?: proprietariosCreateNestedOneWithoutViagensInput
    veiculos?: veiculosCreateNestedOneWithoutViagensInput
  }

  export type viagensUncheckedCreateWithoutClientesInput = {
    id?: number
    numero_cliente: string
    dt_viagem: Date | string
    mercadoria: string
    cidade_origem: string
    cidade_destino: string
    idmotorista: bigint | number
    idproprietario: bigint | number
    idveiculo: bigint | number
    carreta1?: string | null
    carreta2?: string | null
    carreta3?: string | null
    carreta4?: string | null
    viagem_cancelado?: enum_viagem
    dt_cancelamento?: Date | string | null
    dt_cliente: Date | string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    motoristasId?: number | null
    proprietariosId?: number | null
    veiculosId?: number | null
  }

  export type viagensCreateOrConnectWithoutClientesInput = {
    where: viagensWhereUniqueInput
    create: XOR<viagensCreateWithoutClientesInput, viagensUncheckedCreateWithoutClientesInput>
  }

  export type viagensCreateManyClientesInputEnvelope = {
    data: Enumerable<viagensCreateManyClientesInput>
    skipDuplicates?: boolean
  }

  export type contatos_motoristasUpsertWithWhereUniqueWithoutClientesInput = {
    where: contatos_motoristasWhereUniqueInput
    update: XOR<contatos_motoristasUpdateWithoutClientesInput, contatos_motoristasUncheckedUpdateWithoutClientesInput>
    create: XOR<contatos_motoristasCreateWithoutClientesInput, contatos_motoristasUncheckedCreateWithoutClientesInput>
  }

  export type contatos_motoristasUpdateWithWhereUniqueWithoutClientesInput = {
    where: contatos_motoristasWhereUniqueInput
    data: XOR<contatos_motoristasUpdateWithoutClientesInput, contatos_motoristasUncheckedUpdateWithoutClientesInput>
  }

  export type contatos_motoristasUpdateManyWithWhereWithoutClientesInput = {
    where: contatos_motoristasScalarWhereInput
    data: XOR<contatos_motoristasUpdateManyMutationInput, contatos_motoristasUncheckedUpdateManyWithoutContatos_motoristasInput>
  }

  export type contatos_motoristasScalarWhereInput = {
    AND?: Enumerable<contatos_motoristasScalarWhereInput>
    OR?: Enumerable<contatos_motoristasScalarWhereInput>
    NOT?: Enumerable<contatos_motoristasScalarWhereInput>
    id?: IntFilter | number
    idmotorista?: BigIntFilter | bigint | number
    idcliente?: BigIntFilter | bigint | number
    contato?: StringFilter | string
    tipo_contato?: StringFilter | string
    dt_criacao?: DateTimeFilter | Date | string
    dt_atualizacao?: DateTimeFilter | Date | string
    clientesId?: IntNullableFilter | number | null
    motoristasId?: IntNullableFilter | number | null
  }

  export type status_motoristasUpsertWithWhereUniqueWithoutClientesInput = {
    where: status_motoristasWhereUniqueInput
    update: XOR<status_motoristasUpdateWithoutClientesInput, status_motoristasUncheckedUpdateWithoutClientesInput>
    create: XOR<status_motoristasCreateWithoutClientesInput, status_motoristasUncheckedCreateWithoutClientesInput>
  }

  export type status_motoristasUpdateWithWhereUniqueWithoutClientesInput = {
    where: status_motoristasWhereUniqueInput
    data: XOR<status_motoristasUpdateWithoutClientesInput, status_motoristasUncheckedUpdateWithoutClientesInput>
  }

  export type status_motoristasUpdateManyWithWhereWithoutClientesInput = {
    where: status_motoristasScalarWhereInput
    data: XOR<status_motoristasUpdateManyMutationInput, status_motoristasUncheckedUpdateManyWithoutStatus_motoristasInput>
  }

  export type status_motoristasScalarWhereInput = {
    AND?: Enumerable<status_motoristasScalarWhereInput>
    OR?: Enumerable<status_motoristasScalarWhereInput>
    NOT?: Enumerable<status_motoristasScalarWhereInput>
    id?: IntFilter | number
    idmotorista?: BigIntFilter | bigint | number
    idcliente?: BigIntFilter | bigint | number
    dt_cliente?: DateTimeFilter | Date | string
    numero_cliente?: StringNullableFilter | string | null
    lote_arquivo?: StringNullableFilter | string | null
    status_motorista?: Enumenum_status_motoristaFilter | enum_status_motorista
    dt_criacao?: DateTimeFilter | Date | string
    dt_atualizacao?: DateTimeFilter | Date | string
    clientesId?: IntNullableFilter | number | null
    motoristasId?: IntNullableFilter | number | null
  }

  export type status_proprietariosUpsertWithWhereUniqueWithoutClientesInput = {
    where: status_proprietariosWhereUniqueInput
    update: XOR<status_proprietariosUpdateWithoutClientesInput, status_proprietariosUncheckedUpdateWithoutClientesInput>
    create: XOR<status_proprietariosCreateWithoutClientesInput, status_proprietariosUncheckedCreateWithoutClientesInput>
  }

  export type status_proprietariosUpdateWithWhereUniqueWithoutClientesInput = {
    where: status_proprietariosWhereUniqueInput
    data: XOR<status_proprietariosUpdateWithoutClientesInput, status_proprietariosUncheckedUpdateWithoutClientesInput>
  }

  export type status_proprietariosUpdateManyWithWhereWithoutClientesInput = {
    where: status_proprietariosScalarWhereInput
    data: XOR<status_proprietariosUpdateManyMutationInput, status_proprietariosUncheckedUpdateManyWithoutStatus_proprietariosInput>
  }

  export type status_proprietariosScalarWhereInput = {
    AND?: Enumerable<status_proprietariosScalarWhereInput>
    OR?: Enumerable<status_proprietariosScalarWhereInput>
    NOT?: Enumerable<status_proprietariosScalarWhereInput>
    id?: IntFilter | number
    idproprietario?: BigIntFilter | bigint | number
    idcliente?: BigIntFilter | bigint | number
    lote_arquivo?: StringNullableFilter | string | null
    dt_cliente?: DateTimeFilter | Date | string
    numero_cliente?: StringNullableFilter | string | null
    status_proprietario?: Enumenum_status_proprietarioFilter | enum_status_proprietario
    dt_criacao?: DateTimeFilter | Date | string
    dt_atualizacao?: DateTimeFilter | Date | string
    clientesId?: IntNullableFilter | number | null
    proprietariosId?: IntNullableFilter | number | null
  }

  export type status_veiculosUpsertWithWhereUniqueWithoutClientesInput = {
    where: status_veiculosWhereUniqueInput
    update: XOR<status_veiculosUpdateWithoutClientesInput, status_veiculosUncheckedUpdateWithoutClientesInput>
    create: XOR<status_veiculosCreateWithoutClientesInput, status_veiculosUncheckedCreateWithoutClientesInput>
  }

  export type status_veiculosUpdateWithWhereUniqueWithoutClientesInput = {
    where: status_veiculosWhereUniqueInput
    data: XOR<status_veiculosUpdateWithoutClientesInput, status_veiculosUncheckedUpdateWithoutClientesInput>
  }

  export type status_veiculosUpdateManyWithWhereWithoutClientesInput = {
    where: status_veiculosScalarWhereInput
    data: XOR<status_veiculosUpdateManyMutationInput, status_veiculosUncheckedUpdateManyWithoutStatus_veiculosInput>
  }

  export type status_veiculosScalarWhereInput = {
    AND?: Enumerable<status_veiculosScalarWhereInput>
    OR?: Enumerable<status_veiculosScalarWhereInput>
    NOT?: Enumerable<status_veiculosScalarWhereInput>
    id?: IntFilter | number
    idveiculo?: BigIntFilter | bigint | number
    idcliente?: BigIntFilter | bigint | number
    lote_arquivo?: StringNullableFilter | string | null
    dt_cliente?: DateTimeFilter | Date | string
    numero_cliente?: StringNullableFilter | string | null
    status_veiculo?: Enumenum_status_veiculoFilter | enum_status_veiculo
    dt_criacao?: DateTimeFilter | Date | string
    dt_atualizacao?: DateTimeFilter | Date | string
    clientesId?: IntNullableFilter | number | null
    veiculosId?: IntNullableFilter | number | null
  }

  export type viagensUpsertWithWhereUniqueWithoutClientesInput = {
    where: viagensWhereUniqueInput
    update: XOR<viagensUpdateWithoutClientesInput, viagensUncheckedUpdateWithoutClientesInput>
    create: XOR<viagensCreateWithoutClientesInput, viagensUncheckedCreateWithoutClientesInput>
  }

  export type viagensUpdateWithWhereUniqueWithoutClientesInput = {
    where: viagensWhereUniqueInput
    data: XOR<viagensUpdateWithoutClientesInput, viagensUncheckedUpdateWithoutClientesInput>
  }

  export type viagensUpdateManyWithWhereWithoutClientesInput = {
    where: viagensScalarWhereInput
    data: XOR<viagensUpdateManyMutationInput, viagensUncheckedUpdateManyWithoutViagensInput>
  }

  export type viagensScalarWhereInput = {
    AND?: Enumerable<viagensScalarWhereInput>
    OR?: Enumerable<viagensScalarWhereInput>
    NOT?: Enumerable<viagensScalarWhereInput>
    id?: IntFilter | number
    idcliente?: IntFilter | number
    numero_cliente?: StringFilter | string
    dt_viagem?: DateTimeFilter | Date | string
    mercadoria?: StringFilter | string
    cidade_origem?: StringFilter | string
    cidade_destino?: StringFilter | string
    idmotorista?: BigIntFilter | bigint | number
    idproprietario?: BigIntFilter | bigint | number
    idveiculo?: BigIntFilter | bigint | number
    carreta1?: StringNullableFilter | string | null
    carreta2?: StringNullableFilter | string | null
    carreta3?: StringNullableFilter | string | null
    carreta4?: StringNullableFilter | string | null
    viagem_cancelado?: Enumenum_viagemFilter | enum_viagem
    dt_cancelamento?: DateTimeNullableFilter | Date | string | null
    dt_cliente?: DateTimeFilter | Date | string
    dt_criacao?: DateTimeFilter | Date | string
    dt_atualizacao?: DateTimeFilter | Date | string
    motoristasId?: IntNullableFilter | number | null
    proprietariosId?: IntNullableFilter | number | null
    veiculosId?: IntNullableFilter | number | null
  }

  export type clientesCreateWithoutContatos_motoristasInput = {
    cnpj: string
    razaosocial: string
    nomefantasia: string
    telefone?: string | null
    email: string
    photo?: string | null
    ativo?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    status_motoristas?: status_motoristasCreateNestedManyWithoutClientesInput
    status_proprietarios?: status_proprietariosCreateNestedManyWithoutClientesInput
    status_veiculos?: status_veiculosCreateNestedManyWithoutClientesInput
    viagens?: viagensCreateNestedManyWithoutClientesInput
  }

  export type clientesUncheckedCreateWithoutContatos_motoristasInput = {
    id?: number
    cnpj: string
    razaosocial: string
    nomefantasia: string
    telefone?: string | null
    email: string
    photo?: string | null
    ativo?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    status_motoristas?: status_motoristasUncheckedCreateNestedManyWithoutClientesInput
    status_proprietarios?: status_proprietariosUncheckedCreateNestedManyWithoutClientesInput
    status_veiculos?: status_veiculosUncheckedCreateNestedManyWithoutClientesInput
    viagens?: viagensUncheckedCreateNestedManyWithoutClientesInput
  }

  export type clientesCreateOrConnectWithoutContatos_motoristasInput = {
    where: clientesWhereUniqueInput
    create: XOR<clientesCreateWithoutContatos_motoristasInput, clientesUncheckedCreateWithoutContatos_motoristasInput>
  }

  export type motoristasCreateWithoutContatos_motoristasInput = {
    nome_mot: string
    cpf_mot: string
    cnh_mot?: string | null
    nome_pai?: string | null
    nome_mae?: string | null
    categoria_cnh_mot?: string | null
    cod_situacao_cnh_mot?: string | null
    dt_validade_cnh?: Date | string | null
    dt_emissao_cnh?: Date | string | null
    dt_primeira_cnh?: Date | string | null
    dt_nascimento?: Date | string | null
    foto_motorista?: string | null
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    status_motoristas?: status_motoristasCreateNestedManyWithoutMotoristasInput
    viagens?: viagensCreateNestedManyWithoutMotoristasInput
  }

  export type motoristasUncheckedCreateWithoutContatos_motoristasInput = {
    id?: number
    nome_mot: string
    cpf_mot: string
    cnh_mot?: string | null
    nome_pai?: string | null
    nome_mae?: string | null
    categoria_cnh_mot?: string | null
    cod_situacao_cnh_mot?: string | null
    dt_validade_cnh?: Date | string | null
    dt_emissao_cnh?: Date | string | null
    dt_primeira_cnh?: Date | string | null
    dt_nascimento?: Date | string | null
    foto_motorista?: string | null
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    status_motoristas?: status_motoristasUncheckedCreateNestedManyWithoutMotoristasInput
    viagens?: viagensUncheckedCreateNestedManyWithoutMotoristasInput
  }

  export type motoristasCreateOrConnectWithoutContatos_motoristasInput = {
    where: motoristasWhereUniqueInput
    create: XOR<motoristasCreateWithoutContatos_motoristasInput, motoristasUncheckedCreateWithoutContatos_motoristasInput>
  }

  export type clientesUpsertWithoutContatos_motoristasInput = {
    update: XOR<clientesUpdateWithoutContatos_motoristasInput, clientesUncheckedUpdateWithoutContatos_motoristasInput>
    create: XOR<clientesCreateWithoutContatos_motoristasInput, clientesUncheckedCreateWithoutContatos_motoristasInput>
  }

  export type clientesUpdateWithoutContatos_motoristasInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: StringFieldUpdateOperationsInput | string
    nomefantasia?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_motoristas?: status_motoristasUpdateManyWithoutClientesNestedInput
    status_proprietarios?: status_proprietariosUpdateManyWithoutClientesNestedInput
    status_veiculos?: status_veiculosUpdateManyWithoutClientesNestedInput
    viagens?: viagensUpdateManyWithoutClientesNestedInput
  }

  export type clientesUncheckedUpdateWithoutContatos_motoristasInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: StringFieldUpdateOperationsInput | string
    nomefantasia?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_motoristas?: status_motoristasUncheckedUpdateManyWithoutClientesNestedInput
    status_proprietarios?: status_proprietariosUncheckedUpdateManyWithoutClientesNestedInput
    status_veiculos?: status_veiculosUncheckedUpdateManyWithoutClientesNestedInput
    viagens?: viagensUncheckedUpdateManyWithoutClientesNestedInput
  }

  export type motoristasUpsertWithoutContatos_motoristasInput = {
    update: XOR<motoristasUpdateWithoutContatos_motoristasInput, motoristasUncheckedUpdateWithoutContatos_motoristasInput>
    create: XOR<motoristasCreateWithoutContatos_motoristasInput, motoristasUncheckedCreateWithoutContatos_motoristasInput>
  }

  export type motoristasUpdateWithoutContatos_motoristasInput = {
    nome_mot?: StringFieldUpdateOperationsInput | string
    cpf_mot?: StringFieldUpdateOperationsInput | string
    cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    nome_pai?: NullableStringFieldUpdateOperationsInput | string | null
    nome_mae?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    cod_situacao_cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    dt_validade_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_emissao_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_primeira_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_motorista?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_motoristas?: status_motoristasUpdateManyWithoutMotoristasNestedInput
    viagens?: viagensUpdateManyWithoutMotoristasNestedInput
  }

  export type motoristasUncheckedUpdateWithoutContatos_motoristasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_mot?: StringFieldUpdateOperationsInput | string
    cpf_mot?: StringFieldUpdateOperationsInput | string
    cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    nome_pai?: NullableStringFieldUpdateOperationsInput | string | null
    nome_mae?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    cod_situacao_cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    dt_validade_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_emissao_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_primeira_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_motorista?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_motoristas?: status_motoristasUncheckedUpdateManyWithoutMotoristasNestedInput
    viagens?: viagensUncheckedUpdateManyWithoutMotoristasNestedInput
  }

  export type contatos_motoristasCreateWithoutMotoristasInput = {
    idmotorista: bigint | number
    idcliente: bigint | number
    contato: string
    tipo_contato: string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientes?: clientesCreateNestedOneWithoutContatos_motoristasInput
  }

  export type contatos_motoristasUncheckedCreateWithoutMotoristasInput = {
    id?: number
    idmotorista: bigint | number
    idcliente: bigint | number
    contato: string
    tipo_contato: string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientesId?: number | null
  }

  export type contatos_motoristasCreateOrConnectWithoutMotoristasInput = {
    where: contatos_motoristasWhereUniqueInput
    create: XOR<contatos_motoristasCreateWithoutMotoristasInput, contatos_motoristasUncheckedCreateWithoutMotoristasInput>
  }

  export type contatos_motoristasCreateManyMotoristasInputEnvelope = {
    data: Enumerable<contatos_motoristasCreateManyMotoristasInput>
    skipDuplicates?: boolean
  }

  export type status_motoristasCreateWithoutMotoristasInput = {
    idmotorista: bigint | number
    idcliente: bigint | number
    dt_cliente: Date | string
    numero_cliente?: string | null
    lote_arquivo?: string | null
    status_motorista: enum_status_motorista
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientes?: clientesCreateNestedOneWithoutStatus_motoristasInput
  }

  export type status_motoristasUncheckedCreateWithoutMotoristasInput = {
    id?: number
    idmotorista: bigint | number
    idcliente: bigint | number
    dt_cliente: Date | string
    numero_cliente?: string | null
    lote_arquivo?: string | null
    status_motorista: enum_status_motorista
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientesId?: number | null
  }

  export type status_motoristasCreateOrConnectWithoutMotoristasInput = {
    where: status_motoristasWhereUniqueInput
    create: XOR<status_motoristasCreateWithoutMotoristasInput, status_motoristasUncheckedCreateWithoutMotoristasInput>
  }

  export type status_motoristasCreateManyMotoristasInputEnvelope = {
    data: Enumerable<status_motoristasCreateManyMotoristasInput>
    skipDuplicates?: boolean
  }

  export type viagensCreateWithoutMotoristasInput = {
    numero_cliente: string
    dt_viagem: Date | string
    mercadoria: string
    cidade_origem: string
    cidade_destino: string
    idmotorista: bigint | number
    idproprietario: bigint | number
    idveiculo: bigint | number
    carreta1?: string | null
    carreta2?: string | null
    carreta3?: string | null
    carreta4?: string | null
    viagem_cancelado?: enum_viagem
    dt_cancelamento?: Date | string | null
    dt_cliente: Date | string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientes: clientesCreateNestedOneWithoutViagensInput
    proprietarios?: proprietariosCreateNestedOneWithoutViagensInput
    veiculos?: veiculosCreateNestedOneWithoutViagensInput
  }

  export type viagensUncheckedCreateWithoutMotoristasInput = {
    id?: number
    idcliente: number
    numero_cliente: string
    dt_viagem: Date | string
    mercadoria: string
    cidade_origem: string
    cidade_destino: string
    idmotorista: bigint | number
    idproprietario: bigint | number
    idveiculo: bigint | number
    carreta1?: string | null
    carreta2?: string | null
    carreta3?: string | null
    carreta4?: string | null
    viagem_cancelado?: enum_viagem
    dt_cancelamento?: Date | string | null
    dt_cliente: Date | string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    proprietariosId?: number | null
    veiculosId?: number | null
  }

  export type viagensCreateOrConnectWithoutMotoristasInput = {
    where: viagensWhereUniqueInput
    create: XOR<viagensCreateWithoutMotoristasInput, viagensUncheckedCreateWithoutMotoristasInput>
  }

  export type viagensCreateManyMotoristasInputEnvelope = {
    data: Enumerable<viagensCreateManyMotoristasInput>
    skipDuplicates?: boolean
  }

  export type contatos_motoristasUpsertWithWhereUniqueWithoutMotoristasInput = {
    where: contatos_motoristasWhereUniqueInput
    update: XOR<contatos_motoristasUpdateWithoutMotoristasInput, contatos_motoristasUncheckedUpdateWithoutMotoristasInput>
    create: XOR<contatos_motoristasCreateWithoutMotoristasInput, contatos_motoristasUncheckedCreateWithoutMotoristasInput>
  }

  export type contatos_motoristasUpdateWithWhereUniqueWithoutMotoristasInput = {
    where: contatos_motoristasWhereUniqueInput
    data: XOR<contatos_motoristasUpdateWithoutMotoristasInput, contatos_motoristasUncheckedUpdateWithoutMotoristasInput>
  }

  export type contatos_motoristasUpdateManyWithWhereWithoutMotoristasInput = {
    where: contatos_motoristasScalarWhereInput
    data: XOR<contatos_motoristasUpdateManyMutationInput, contatos_motoristasUncheckedUpdateManyWithoutContatos_motoristasInput>
  }

  export type status_motoristasUpsertWithWhereUniqueWithoutMotoristasInput = {
    where: status_motoristasWhereUniqueInput
    update: XOR<status_motoristasUpdateWithoutMotoristasInput, status_motoristasUncheckedUpdateWithoutMotoristasInput>
    create: XOR<status_motoristasCreateWithoutMotoristasInput, status_motoristasUncheckedCreateWithoutMotoristasInput>
  }

  export type status_motoristasUpdateWithWhereUniqueWithoutMotoristasInput = {
    where: status_motoristasWhereUniqueInput
    data: XOR<status_motoristasUpdateWithoutMotoristasInput, status_motoristasUncheckedUpdateWithoutMotoristasInput>
  }

  export type status_motoristasUpdateManyWithWhereWithoutMotoristasInput = {
    where: status_motoristasScalarWhereInput
    data: XOR<status_motoristasUpdateManyMutationInput, status_motoristasUncheckedUpdateManyWithoutStatus_motoristasInput>
  }

  export type viagensUpsertWithWhereUniqueWithoutMotoristasInput = {
    where: viagensWhereUniqueInput
    update: XOR<viagensUpdateWithoutMotoristasInput, viagensUncheckedUpdateWithoutMotoristasInput>
    create: XOR<viagensCreateWithoutMotoristasInput, viagensUncheckedCreateWithoutMotoristasInput>
  }

  export type viagensUpdateWithWhereUniqueWithoutMotoristasInput = {
    where: viagensWhereUniqueInput
    data: XOR<viagensUpdateWithoutMotoristasInput, viagensUncheckedUpdateWithoutMotoristasInput>
  }

  export type viagensUpdateManyWithWhereWithoutMotoristasInput = {
    where: viagensScalarWhereInput
    data: XOR<viagensUpdateManyMutationInput, viagensUncheckedUpdateManyWithoutViagensInput>
  }

  export type status_proprietariosCreateWithoutProprietariosInput = {
    idproprietario: bigint | number
    idcliente: bigint | number
    lote_arquivo?: string | null
    dt_cliente: Date | string
    numero_cliente?: string | null
    status_proprietario: enum_status_proprietario
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientes?: clientesCreateNestedOneWithoutStatus_proprietariosInput
  }

  export type status_proprietariosUncheckedCreateWithoutProprietariosInput = {
    id?: number
    idproprietario: bigint | number
    idcliente: bigint | number
    lote_arquivo?: string | null
    dt_cliente: Date | string
    numero_cliente?: string | null
    status_proprietario: enum_status_proprietario
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientesId?: number | null
  }

  export type status_proprietariosCreateOrConnectWithoutProprietariosInput = {
    where: status_proprietariosWhereUniqueInput
    create: XOR<status_proprietariosCreateWithoutProprietariosInput, status_proprietariosUncheckedCreateWithoutProprietariosInput>
  }

  export type status_proprietariosCreateManyProprietariosInputEnvelope = {
    data: Enumerable<status_proprietariosCreateManyProprietariosInput>
    skipDuplicates?: boolean
  }

  export type viagensCreateWithoutProprietariosInput = {
    numero_cliente: string
    dt_viagem: Date | string
    mercadoria: string
    cidade_origem: string
    cidade_destino: string
    idmotorista: bigint | number
    idproprietario: bigint | number
    idveiculo: bigint | number
    carreta1?: string | null
    carreta2?: string | null
    carreta3?: string | null
    carreta4?: string | null
    viagem_cancelado?: enum_viagem
    dt_cancelamento?: Date | string | null
    dt_cliente: Date | string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientes: clientesCreateNestedOneWithoutViagensInput
    motoristas?: motoristasCreateNestedOneWithoutViagensInput
    veiculos?: veiculosCreateNestedOneWithoutViagensInput
  }

  export type viagensUncheckedCreateWithoutProprietariosInput = {
    id?: number
    idcliente: number
    numero_cliente: string
    dt_viagem: Date | string
    mercadoria: string
    cidade_origem: string
    cidade_destino: string
    idmotorista: bigint | number
    idproprietario: bigint | number
    idveiculo: bigint | number
    carreta1?: string | null
    carreta2?: string | null
    carreta3?: string | null
    carreta4?: string | null
    viagem_cancelado?: enum_viagem
    dt_cancelamento?: Date | string | null
    dt_cliente: Date | string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    motoristasId?: number | null
    veiculosId?: number | null
  }

  export type viagensCreateOrConnectWithoutProprietariosInput = {
    where: viagensWhereUniqueInput
    create: XOR<viagensCreateWithoutProprietariosInput, viagensUncheckedCreateWithoutProprietariosInput>
  }

  export type viagensCreateManyProprietariosInputEnvelope = {
    data: Enumerable<viagensCreateManyProprietariosInput>
    skipDuplicates?: boolean
  }

  export type status_proprietariosUpsertWithWhereUniqueWithoutProprietariosInput = {
    where: status_proprietariosWhereUniqueInput
    update: XOR<status_proprietariosUpdateWithoutProprietariosInput, status_proprietariosUncheckedUpdateWithoutProprietariosInput>
    create: XOR<status_proprietariosCreateWithoutProprietariosInput, status_proprietariosUncheckedCreateWithoutProprietariosInput>
  }

  export type status_proprietariosUpdateWithWhereUniqueWithoutProprietariosInput = {
    where: status_proprietariosWhereUniqueInput
    data: XOR<status_proprietariosUpdateWithoutProprietariosInput, status_proprietariosUncheckedUpdateWithoutProprietariosInput>
  }

  export type status_proprietariosUpdateManyWithWhereWithoutProprietariosInput = {
    where: status_proprietariosScalarWhereInput
    data: XOR<status_proprietariosUpdateManyMutationInput, status_proprietariosUncheckedUpdateManyWithoutStatus_proprietariosInput>
  }

  export type viagensUpsertWithWhereUniqueWithoutProprietariosInput = {
    where: viagensWhereUniqueInput
    update: XOR<viagensUpdateWithoutProprietariosInput, viagensUncheckedUpdateWithoutProprietariosInput>
    create: XOR<viagensCreateWithoutProprietariosInput, viagensUncheckedCreateWithoutProprietariosInput>
  }

  export type viagensUpdateWithWhereUniqueWithoutProprietariosInput = {
    where: viagensWhereUniqueInput
    data: XOR<viagensUpdateWithoutProprietariosInput, viagensUncheckedUpdateWithoutProprietariosInput>
  }

  export type viagensUpdateManyWithWhereWithoutProprietariosInput = {
    where: viagensScalarWhereInput
    data: XOR<viagensUpdateManyMutationInput, viagensUncheckedUpdateManyWithoutViagensInput>
  }

  export type clientesCreateWithoutStatus_motoristasInput = {
    cnpj: string
    razaosocial: string
    nomefantasia: string
    telefone?: string | null
    email: string
    photo?: string | null
    ativo?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    contatos_motoristas?: contatos_motoristasCreateNestedManyWithoutClientesInput
    status_proprietarios?: status_proprietariosCreateNestedManyWithoutClientesInput
    status_veiculos?: status_veiculosCreateNestedManyWithoutClientesInput
    viagens?: viagensCreateNestedManyWithoutClientesInput
  }

  export type clientesUncheckedCreateWithoutStatus_motoristasInput = {
    id?: number
    cnpj: string
    razaosocial: string
    nomefantasia: string
    telefone?: string | null
    email: string
    photo?: string | null
    ativo?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    contatos_motoristas?: contatos_motoristasUncheckedCreateNestedManyWithoutClientesInput
    status_proprietarios?: status_proprietariosUncheckedCreateNestedManyWithoutClientesInput
    status_veiculos?: status_veiculosUncheckedCreateNestedManyWithoutClientesInput
    viagens?: viagensUncheckedCreateNestedManyWithoutClientesInput
  }

  export type clientesCreateOrConnectWithoutStatus_motoristasInput = {
    where: clientesWhereUniqueInput
    create: XOR<clientesCreateWithoutStatus_motoristasInput, clientesUncheckedCreateWithoutStatus_motoristasInput>
  }

  export type motoristasCreateWithoutStatus_motoristasInput = {
    nome_mot: string
    cpf_mot: string
    cnh_mot?: string | null
    nome_pai?: string | null
    nome_mae?: string | null
    categoria_cnh_mot?: string | null
    cod_situacao_cnh_mot?: string | null
    dt_validade_cnh?: Date | string | null
    dt_emissao_cnh?: Date | string | null
    dt_primeira_cnh?: Date | string | null
    dt_nascimento?: Date | string | null
    foto_motorista?: string | null
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    contatos_motoristas?: contatos_motoristasCreateNestedManyWithoutMotoristasInput
    viagens?: viagensCreateNestedManyWithoutMotoristasInput
  }

  export type motoristasUncheckedCreateWithoutStatus_motoristasInput = {
    id?: number
    nome_mot: string
    cpf_mot: string
    cnh_mot?: string | null
    nome_pai?: string | null
    nome_mae?: string | null
    categoria_cnh_mot?: string | null
    cod_situacao_cnh_mot?: string | null
    dt_validade_cnh?: Date | string | null
    dt_emissao_cnh?: Date | string | null
    dt_primeira_cnh?: Date | string | null
    dt_nascimento?: Date | string | null
    foto_motorista?: string | null
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    contatos_motoristas?: contatos_motoristasUncheckedCreateNestedManyWithoutMotoristasInput
    viagens?: viagensUncheckedCreateNestedManyWithoutMotoristasInput
  }

  export type motoristasCreateOrConnectWithoutStatus_motoristasInput = {
    where: motoristasWhereUniqueInput
    create: XOR<motoristasCreateWithoutStatus_motoristasInput, motoristasUncheckedCreateWithoutStatus_motoristasInput>
  }

  export type clientesUpsertWithoutStatus_motoristasInput = {
    update: XOR<clientesUpdateWithoutStatus_motoristasInput, clientesUncheckedUpdateWithoutStatus_motoristasInput>
    create: XOR<clientesCreateWithoutStatus_motoristasInput, clientesUncheckedCreateWithoutStatus_motoristasInput>
  }

  export type clientesUpdateWithoutStatus_motoristasInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: StringFieldUpdateOperationsInput | string
    nomefantasia?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contatos_motoristas?: contatos_motoristasUpdateManyWithoutClientesNestedInput
    status_proprietarios?: status_proprietariosUpdateManyWithoutClientesNestedInput
    status_veiculos?: status_veiculosUpdateManyWithoutClientesNestedInput
    viagens?: viagensUpdateManyWithoutClientesNestedInput
  }

  export type clientesUncheckedUpdateWithoutStatus_motoristasInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: StringFieldUpdateOperationsInput | string
    nomefantasia?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contatos_motoristas?: contatos_motoristasUncheckedUpdateManyWithoutClientesNestedInput
    status_proprietarios?: status_proprietariosUncheckedUpdateManyWithoutClientesNestedInput
    status_veiculos?: status_veiculosUncheckedUpdateManyWithoutClientesNestedInput
    viagens?: viagensUncheckedUpdateManyWithoutClientesNestedInput
  }

  export type motoristasUpsertWithoutStatus_motoristasInput = {
    update: XOR<motoristasUpdateWithoutStatus_motoristasInput, motoristasUncheckedUpdateWithoutStatus_motoristasInput>
    create: XOR<motoristasCreateWithoutStatus_motoristasInput, motoristasUncheckedCreateWithoutStatus_motoristasInput>
  }

  export type motoristasUpdateWithoutStatus_motoristasInput = {
    nome_mot?: StringFieldUpdateOperationsInput | string
    cpf_mot?: StringFieldUpdateOperationsInput | string
    cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    nome_pai?: NullableStringFieldUpdateOperationsInput | string | null
    nome_mae?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    cod_situacao_cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    dt_validade_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_emissao_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_primeira_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_motorista?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contatos_motoristas?: contatos_motoristasUpdateManyWithoutMotoristasNestedInput
    viagens?: viagensUpdateManyWithoutMotoristasNestedInput
  }

  export type motoristasUncheckedUpdateWithoutStatus_motoristasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_mot?: StringFieldUpdateOperationsInput | string
    cpf_mot?: StringFieldUpdateOperationsInput | string
    cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    nome_pai?: NullableStringFieldUpdateOperationsInput | string | null
    nome_mae?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    cod_situacao_cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    dt_validade_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_emissao_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_primeira_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_motorista?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contatos_motoristas?: contatos_motoristasUncheckedUpdateManyWithoutMotoristasNestedInput
    viagens?: viagensUncheckedUpdateManyWithoutMotoristasNestedInput
  }

  export type clientesCreateWithoutStatus_proprietariosInput = {
    cnpj: string
    razaosocial: string
    nomefantasia: string
    telefone?: string | null
    email: string
    photo?: string | null
    ativo?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    contatos_motoristas?: contatos_motoristasCreateNestedManyWithoutClientesInput
    status_motoristas?: status_motoristasCreateNestedManyWithoutClientesInput
    status_veiculos?: status_veiculosCreateNestedManyWithoutClientesInput
    viagens?: viagensCreateNestedManyWithoutClientesInput
  }

  export type clientesUncheckedCreateWithoutStatus_proprietariosInput = {
    id?: number
    cnpj: string
    razaosocial: string
    nomefantasia: string
    telefone?: string | null
    email: string
    photo?: string | null
    ativo?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    contatos_motoristas?: contatos_motoristasUncheckedCreateNestedManyWithoutClientesInput
    status_motoristas?: status_motoristasUncheckedCreateNestedManyWithoutClientesInput
    status_veiculos?: status_veiculosUncheckedCreateNestedManyWithoutClientesInput
    viagens?: viagensUncheckedCreateNestedManyWithoutClientesInput
  }

  export type clientesCreateOrConnectWithoutStatus_proprietariosInput = {
    where: clientesWhereUniqueInput
    create: XOR<clientesCreateWithoutStatus_proprietariosInput, clientesUncheckedCreateWithoutStatus_proprietariosInput>
  }

  export type proprietariosCreateWithoutStatus_proprietariosInput = {
    nome_prop: string
    antt_prop?: string | null
    status_antt?: string | null
    dt_validade_antt?: Date | string | null
    cpf_cnpj_prop: string
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    viagens?: viagensCreateNestedManyWithoutProprietariosInput
  }

  export type proprietariosUncheckedCreateWithoutStatus_proprietariosInput = {
    id?: number
    nome_prop: string
    antt_prop?: string | null
    status_antt?: string | null
    dt_validade_antt?: Date | string | null
    cpf_cnpj_prop: string
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    viagens?: viagensUncheckedCreateNestedManyWithoutProprietariosInput
  }

  export type proprietariosCreateOrConnectWithoutStatus_proprietariosInput = {
    where: proprietariosWhereUniqueInput
    create: XOR<proprietariosCreateWithoutStatus_proprietariosInput, proprietariosUncheckedCreateWithoutStatus_proprietariosInput>
  }

  export type clientesUpsertWithoutStatus_proprietariosInput = {
    update: XOR<clientesUpdateWithoutStatus_proprietariosInput, clientesUncheckedUpdateWithoutStatus_proprietariosInput>
    create: XOR<clientesCreateWithoutStatus_proprietariosInput, clientesUncheckedCreateWithoutStatus_proprietariosInput>
  }

  export type clientesUpdateWithoutStatus_proprietariosInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: StringFieldUpdateOperationsInput | string
    nomefantasia?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contatos_motoristas?: contatos_motoristasUpdateManyWithoutClientesNestedInput
    status_motoristas?: status_motoristasUpdateManyWithoutClientesNestedInput
    status_veiculos?: status_veiculosUpdateManyWithoutClientesNestedInput
    viagens?: viagensUpdateManyWithoutClientesNestedInput
  }

  export type clientesUncheckedUpdateWithoutStatus_proprietariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: StringFieldUpdateOperationsInput | string
    nomefantasia?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contatos_motoristas?: contatos_motoristasUncheckedUpdateManyWithoutClientesNestedInput
    status_motoristas?: status_motoristasUncheckedUpdateManyWithoutClientesNestedInput
    status_veiculos?: status_veiculosUncheckedUpdateManyWithoutClientesNestedInput
    viagens?: viagensUncheckedUpdateManyWithoutClientesNestedInput
  }

  export type proprietariosUpsertWithoutStatus_proprietariosInput = {
    update: XOR<proprietariosUpdateWithoutStatus_proprietariosInput, proprietariosUncheckedUpdateWithoutStatus_proprietariosInput>
    create: XOR<proprietariosCreateWithoutStatus_proprietariosInput, proprietariosUncheckedCreateWithoutStatus_proprietariosInput>
  }

  export type proprietariosUpdateWithoutStatus_proprietariosInput = {
    nome_prop?: StringFieldUpdateOperationsInput | string
    antt_prop?: NullableStringFieldUpdateOperationsInput | string | null
    status_antt?: NullableStringFieldUpdateOperationsInput | string | null
    dt_validade_antt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf_cnpj_prop?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    viagens?: viagensUpdateManyWithoutProprietariosNestedInput
  }

  export type proprietariosUncheckedUpdateWithoutStatus_proprietariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_prop?: StringFieldUpdateOperationsInput | string
    antt_prop?: NullableStringFieldUpdateOperationsInput | string | null
    status_antt?: NullableStringFieldUpdateOperationsInput | string | null
    dt_validade_antt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf_cnpj_prop?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    viagens?: viagensUncheckedUpdateManyWithoutProprietariosNestedInput
  }

  export type clientesCreateWithoutStatus_veiculosInput = {
    cnpj: string
    razaosocial: string
    nomefantasia: string
    telefone?: string | null
    email: string
    photo?: string | null
    ativo?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    contatos_motoristas?: contatos_motoristasCreateNestedManyWithoutClientesInput
    status_motoristas?: status_motoristasCreateNestedManyWithoutClientesInput
    status_proprietarios?: status_proprietariosCreateNestedManyWithoutClientesInput
    viagens?: viagensCreateNestedManyWithoutClientesInput
  }

  export type clientesUncheckedCreateWithoutStatus_veiculosInput = {
    id?: number
    cnpj: string
    razaosocial: string
    nomefantasia: string
    telefone?: string | null
    email: string
    photo?: string | null
    ativo?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    contatos_motoristas?: contatos_motoristasUncheckedCreateNestedManyWithoutClientesInput
    status_motoristas?: status_motoristasUncheckedCreateNestedManyWithoutClientesInput
    status_proprietarios?: status_proprietariosUncheckedCreateNestedManyWithoutClientesInput
    viagens?: viagensUncheckedCreateNestedManyWithoutClientesInput
  }

  export type clientesCreateOrConnectWithoutStatus_veiculosInput = {
    where: clientesWhereUniqueInput
    create: XOR<clientesCreateWithoutStatus_veiculosInput, clientesUncheckedCreateWithoutStatus_veiculosInput>
  }

  export type veiculosCreateWithoutStatus_veiculosInput = {
    placa: string
    renavam?: string | null
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    viagens?: viagensCreateNestedManyWithoutVeiculosInput
  }

  export type veiculosUncheckedCreateWithoutStatus_veiculosInput = {
    id?: number
    placa: string
    renavam?: string | null
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    viagens?: viagensUncheckedCreateNestedManyWithoutVeiculosInput
  }

  export type veiculosCreateOrConnectWithoutStatus_veiculosInput = {
    where: veiculosWhereUniqueInput
    create: XOR<veiculosCreateWithoutStatus_veiculosInput, veiculosUncheckedCreateWithoutStatus_veiculosInput>
  }

  export type clientesUpsertWithoutStatus_veiculosInput = {
    update: XOR<clientesUpdateWithoutStatus_veiculosInput, clientesUncheckedUpdateWithoutStatus_veiculosInput>
    create: XOR<clientesCreateWithoutStatus_veiculosInput, clientesUncheckedCreateWithoutStatus_veiculosInput>
  }

  export type clientesUpdateWithoutStatus_veiculosInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: StringFieldUpdateOperationsInput | string
    nomefantasia?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contatos_motoristas?: contatos_motoristasUpdateManyWithoutClientesNestedInput
    status_motoristas?: status_motoristasUpdateManyWithoutClientesNestedInput
    status_proprietarios?: status_proprietariosUpdateManyWithoutClientesNestedInput
    viagens?: viagensUpdateManyWithoutClientesNestedInput
  }

  export type clientesUncheckedUpdateWithoutStatus_veiculosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: StringFieldUpdateOperationsInput | string
    nomefantasia?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contatos_motoristas?: contatos_motoristasUncheckedUpdateManyWithoutClientesNestedInput
    status_motoristas?: status_motoristasUncheckedUpdateManyWithoutClientesNestedInput
    status_proprietarios?: status_proprietariosUncheckedUpdateManyWithoutClientesNestedInput
    viagens?: viagensUncheckedUpdateManyWithoutClientesNestedInput
  }

  export type veiculosUpsertWithoutStatus_veiculosInput = {
    update: XOR<veiculosUpdateWithoutStatus_veiculosInput, veiculosUncheckedUpdateWithoutStatus_veiculosInput>
    create: XOR<veiculosCreateWithoutStatus_veiculosInput, veiculosUncheckedCreateWithoutStatus_veiculosInput>
  }

  export type veiculosUpdateWithoutStatus_veiculosInput = {
    placa?: StringFieldUpdateOperationsInput | string
    renavam?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    viagens?: viagensUpdateManyWithoutVeiculosNestedInput
  }

  export type veiculosUncheckedUpdateWithoutStatus_veiculosInput = {
    id?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    renavam?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    viagens?: viagensUncheckedUpdateManyWithoutVeiculosNestedInput
  }

  export type status_veiculosCreateWithoutVeiculosInput = {
    idveiculo: bigint | number
    idcliente: bigint | number
    lote_arquivo?: string | null
    dt_cliente: Date | string
    numero_cliente?: string | null
    status_veiculo: enum_status_veiculo
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientes?: clientesCreateNestedOneWithoutStatus_veiculosInput
  }

  export type status_veiculosUncheckedCreateWithoutVeiculosInput = {
    id?: number
    idveiculo: bigint | number
    idcliente: bigint | number
    lote_arquivo?: string | null
    dt_cliente: Date | string
    numero_cliente?: string | null
    status_veiculo: enum_status_veiculo
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientesId?: number | null
  }

  export type status_veiculosCreateOrConnectWithoutVeiculosInput = {
    where: status_veiculosWhereUniqueInput
    create: XOR<status_veiculosCreateWithoutVeiculosInput, status_veiculosUncheckedCreateWithoutVeiculosInput>
  }

  export type status_veiculosCreateManyVeiculosInputEnvelope = {
    data: Enumerable<status_veiculosCreateManyVeiculosInput>
    skipDuplicates?: boolean
  }

  export type viagensCreateWithoutVeiculosInput = {
    numero_cliente: string
    dt_viagem: Date | string
    mercadoria: string
    cidade_origem: string
    cidade_destino: string
    idmotorista: bigint | number
    idproprietario: bigint | number
    idveiculo: bigint | number
    carreta1?: string | null
    carreta2?: string | null
    carreta3?: string | null
    carreta4?: string | null
    viagem_cancelado?: enum_viagem
    dt_cancelamento?: Date | string | null
    dt_cliente: Date | string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientes: clientesCreateNestedOneWithoutViagensInput
    motoristas?: motoristasCreateNestedOneWithoutViagensInput
    proprietarios?: proprietariosCreateNestedOneWithoutViagensInput
  }

  export type viagensUncheckedCreateWithoutVeiculosInput = {
    id?: number
    idcliente: number
    numero_cliente: string
    dt_viagem: Date | string
    mercadoria: string
    cidade_origem: string
    cidade_destino: string
    idmotorista: bigint | number
    idproprietario: bigint | number
    idveiculo: bigint | number
    carreta1?: string | null
    carreta2?: string | null
    carreta3?: string | null
    carreta4?: string | null
    viagem_cancelado?: enum_viagem
    dt_cancelamento?: Date | string | null
    dt_cliente: Date | string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    motoristasId?: number | null
    proprietariosId?: number | null
  }

  export type viagensCreateOrConnectWithoutVeiculosInput = {
    where: viagensWhereUniqueInput
    create: XOR<viagensCreateWithoutVeiculosInput, viagensUncheckedCreateWithoutVeiculosInput>
  }

  export type viagensCreateManyVeiculosInputEnvelope = {
    data: Enumerable<viagensCreateManyVeiculosInput>
    skipDuplicates?: boolean
  }

  export type status_veiculosUpsertWithWhereUniqueWithoutVeiculosInput = {
    where: status_veiculosWhereUniqueInput
    update: XOR<status_veiculosUpdateWithoutVeiculosInput, status_veiculosUncheckedUpdateWithoutVeiculosInput>
    create: XOR<status_veiculosCreateWithoutVeiculosInput, status_veiculosUncheckedCreateWithoutVeiculosInput>
  }

  export type status_veiculosUpdateWithWhereUniqueWithoutVeiculosInput = {
    where: status_veiculosWhereUniqueInput
    data: XOR<status_veiculosUpdateWithoutVeiculosInput, status_veiculosUncheckedUpdateWithoutVeiculosInput>
  }

  export type status_veiculosUpdateManyWithWhereWithoutVeiculosInput = {
    where: status_veiculosScalarWhereInput
    data: XOR<status_veiculosUpdateManyMutationInput, status_veiculosUncheckedUpdateManyWithoutStatus_veiculosInput>
  }

  export type viagensUpsertWithWhereUniqueWithoutVeiculosInput = {
    where: viagensWhereUniqueInput
    update: XOR<viagensUpdateWithoutVeiculosInput, viagensUncheckedUpdateWithoutVeiculosInput>
    create: XOR<viagensCreateWithoutVeiculosInput, viagensUncheckedCreateWithoutVeiculosInput>
  }

  export type viagensUpdateWithWhereUniqueWithoutVeiculosInput = {
    where: viagensWhereUniqueInput
    data: XOR<viagensUpdateWithoutVeiculosInput, viagensUncheckedUpdateWithoutVeiculosInput>
  }

  export type viagensUpdateManyWithWhereWithoutVeiculosInput = {
    where: viagensScalarWhereInput
    data: XOR<viagensUpdateManyMutationInput, viagensUncheckedUpdateManyWithoutViagensInput>
  }

  export type clientesCreateWithoutViagensInput = {
    cnpj: string
    razaosocial: string
    nomefantasia: string
    telefone?: string | null
    email: string
    photo?: string | null
    ativo?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    contatos_motoristas?: contatos_motoristasCreateNestedManyWithoutClientesInput
    status_motoristas?: status_motoristasCreateNestedManyWithoutClientesInput
    status_proprietarios?: status_proprietariosCreateNestedManyWithoutClientesInput
    status_veiculos?: status_veiculosCreateNestedManyWithoutClientesInput
  }

  export type clientesUncheckedCreateWithoutViagensInput = {
    id?: number
    cnpj: string
    razaosocial: string
    nomefantasia: string
    telefone?: string | null
    email: string
    photo?: string | null
    ativo?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    contatos_motoristas?: contatos_motoristasUncheckedCreateNestedManyWithoutClientesInput
    status_motoristas?: status_motoristasUncheckedCreateNestedManyWithoutClientesInput
    status_proprietarios?: status_proprietariosUncheckedCreateNestedManyWithoutClientesInput
    status_veiculos?: status_veiculosUncheckedCreateNestedManyWithoutClientesInput
  }

  export type clientesCreateOrConnectWithoutViagensInput = {
    where: clientesWhereUniqueInput
    create: XOR<clientesCreateWithoutViagensInput, clientesUncheckedCreateWithoutViagensInput>
  }

  export type motoristasCreateWithoutViagensInput = {
    nome_mot: string
    cpf_mot: string
    cnh_mot?: string | null
    nome_pai?: string | null
    nome_mae?: string | null
    categoria_cnh_mot?: string | null
    cod_situacao_cnh_mot?: string | null
    dt_validade_cnh?: Date | string | null
    dt_emissao_cnh?: Date | string | null
    dt_primeira_cnh?: Date | string | null
    dt_nascimento?: Date | string | null
    foto_motorista?: string | null
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    contatos_motoristas?: contatos_motoristasCreateNestedManyWithoutMotoristasInput
    status_motoristas?: status_motoristasCreateNestedManyWithoutMotoristasInput
  }

  export type motoristasUncheckedCreateWithoutViagensInput = {
    id?: number
    nome_mot: string
    cpf_mot: string
    cnh_mot?: string | null
    nome_pai?: string | null
    nome_mae?: string | null
    categoria_cnh_mot?: string | null
    cod_situacao_cnh_mot?: string | null
    dt_validade_cnh?: Date | string | null
    dt_emissao_cnh?: Date | string | null
    dt_primeira_cnh?: Date | string | null
    dt_nascimento?: Date | string | null
    foto_motorista?: string | null
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    contatos_motoristas?: contatos_motoristasUncheckedCreateNestedManyWithoutMotoristasInput
    status_motoristas?: status_motoristasUncheckedCreateNestedManyWithoutMotoristasInput
  }

  export type motoristasCreateOrConnectWithoutViagensInput = {
    where: motoristasWhereUniqueInput
    create: XOR<motoristasCreateWithoutViagensInput, motoristasUncheckedCreateWithoutViagensInput>
  }

  export type proprietariosCreateWithoutViagensInput = {
    nome_prop: string
    antt_prop?: string | null
    status_antt?: string | null
    dt_validade_antt?: Date | string | null
    cpf_cnpj_prop: string
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    status_proprietarios?: status_proprietariosCreateNestedManyWithoutProprietariosInput
  }

  export type proprietariosUncheckedCreateWithoutViagensInput = {
    id?: number
    nome_prop: string
    antt_prop?: string | null
    status_antt?: string | null
    dt_validade_antt?: Date | string | null
    cpf_cnpj_prop: string
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    status_proprietarios?: status_proprietariosUncheckedCreateNestedManyWithoutProprietariosInput
  }

  export type proprietariosCreateOrConnectWithoutViagensInput = {
    where: proprietariosWhereUniqueInput
    create: XOR<proprietariosCreateWithoutViagensInput, proprietariosUncheckedCreateWithoutViagensInput>
  }

  export type veiculosCreateWithoutViagensInput = {
    placa: string
    renavam?: string | null
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    status_veiculos?: status_veiculosCreateNestedManyWithoutVeiculosInput
  }

  export type veiculosUncheckedCreateWithoutViagensInput = {
    id?: number
    placa: string
    renavam?: string | null
    ativo?: boolean
    cadastro_verificado?: boolean
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    status_veiculos?: status_veiculosUncheckedCreateNestedManyWithoutVeiculosInput
  }

  export type veiculosCreateOrConnectWithoutViagensInput = {
    where: veiculosWhereUniqueInput
    create: XOR<veiculosCreateWithoutViagensInput, veiculosUncheckedCreateWithoutViagensInput>
  }

  export type clientesUpsertWithoutViagensInput = {
    update: XOR<clientesUpdateWithoutViagensInput, clientesUncheckedUpdateWithoutViagensInput>
    create: XOR<clientesCreateWithoutViagensInput, clientesUncheckedCreateWithoutViagensInput>
  }

  export type clientesUpdateWithoutViagensInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: StringFieldUpdateOperationsInput | string
    nomefantasia?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contatos_motoristas?: contatos_motoristasUpdateManyWithoutClientesNestedInput
    status_motoristas?: status_motoristasUpdateManyWithoutClientesNestedInput
    status_proprietarios?: status_proprietariosUpdateManyWithoutClientesNestedInput
    status_veiculos?: status_veiculosUpdateManyWithoutClientesNestedInput
  }

  export type clientesUncheckedUpdateWithoutViagensInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: StringFieldUpdateOperationsInput | string
    nomefantasia?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contatos_motoristas?: contatos_motoristasUncheckedUpdateManyWithoutClientesNestedInput
    status_motoristas?: status_motoristasUncheckedUpdateManyWithoutClientesNestedInput
    status_proprietarios?: status_proprietariosUncheckedUpdateManyWithoutClientesNestedInput
    status_veiculos?: status_veiculosUncheckedUpdateManyWithoutClientesNestedInput
  }

  export type motoristasUpsertWithoutViagensInput = {
    update: XOR<motoristasUpdateWithoutViagensInput, motoristasUncheckedUpdateWithoutViagensInput>
    create: XOR<motoristasCreateWithoutViagensInput, motoristasUncheckedCreateWithoutViagensInput>
  }

  export type motoristasUpdateWithoutViagensInput = {
    nome_mot?: StringFieldUpdateOperationsInput | string
    cpf_mot?: StringFieldUpdateOperationsInput | string
    cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    nome_pai?: NullableStringFieldUpdateOperationsInput | string | null
    nome_mae?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    cod_situacao_cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    dt_validade_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_emissao_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_primeira_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_motorista?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contatos_motoristas?: contatos_motoristasUpdateManyWithoutMotoristasNestedInput
    status_motoristas?: status_motoristasUpdateManyWithoutMotoristasNestedInput
  }

  export type motoristasUncheckedUpdateWithoutViagensInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_mot?: StringFieldUpdateOperationsInput | string
    cpf_mot?: StringFieldUpdateOperationsInput | string
    cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    nome_pai?: NullableStringFieldUpdateOperationsInput | string | null
    nome_mae?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    cod_situacao_cnh_mot?: NullableStringFieldUpdateOperationsInput | string | null
    dt_validade_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_emissao_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_primeira_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_motorista?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    contatos_motoristas?: contatos_motoristasUncheckedUpdateManyWithoutMotoristasNestedInput
    status_motoristas?: status_motoristasUncheckedUpdateManyWithoutMotoristasNestedInput
  }

  export type proprietariosUpsertWithoutViagensInput = {
    update: XOR<proprietariosUpdateWithoutViagensInput, proprietariosUncheckedUpdateWithoutViagensInput>
    create: XOR<proprietariosCreateWithoutViagensInput, proprietariosUncheckedCreateWithoutViagensInput>
  }

  export type proprietariosUpdateWithoutViagensInput = {
    nome_prop?: StringFieldUpdateOperationsInput | string
    antt_prop?: NullableStringFieldUpdateOperationsInput | string | null
    status_antt?: NullableStringFieldUpdateOperationsInput | string | null
    dt_validade_antt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf_cnpj_prop?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_proprietarios?: status_proprietariosUpdateManyWithoutProprietariosNestedInput
  }

  export type proprietariosUncheckedUpdateWithoutViagensInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_prop?: StringFieldUpdateOperationsInput | string
    antt_prop?: NullableStringFieldUpdateOperationsInput | string | null
    status_antt?: NullableStringFieldUpdateOperationsInput | string | null
    dt_validade_antt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf_cnpj_prop?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_proprietarios?: status_proprietariosUncheckedUpdateManyWithoutProprietariosNestedInput
  }

  export type veiculosUpsertWithoutViagensInput = {
    update: XOR<veiculosUpdateWithoutViagensInput, veiculosUncheckedUpdateWithoutViagensInput>
    create: XOR<veiculosCreateWithoutViagensInput, veiculosUncheckedCreateWithoutViagensInput>
  }

  export type veiculosUpdateWithoutViagensInput = {
    placa?: StringFieldUpdateOperationsInput | string
    renavam?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_veiculos?: status_veiculosUpdateManyWithoutVeiculosNestedInput
  }

  export type veiculosUncheckedUpdateWithoutViagensInput = {
    id?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    renavam?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    cadastro_verificado?: BoolFieldUpdateOperationsInput | boolean
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_veiculos?: status_veiculosUncheckedUpdateManyWithoutVeiculosNestedInput
  }

  export type contatos_motoristasCreateManyClientesInput = {
    id?: number
    idmotorista: bigint | number
    idcliente: bigint | number
    contato: string
    tipo_contato: string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    motoristasId?: number | null
  }

  export type status_motoristasCreateManyClientesInput = {
    id?: number
    idmotorista: bigint | number
    idcliente: bigint | number
    dt_cliente: Date | string
    numero_cliente?: string | null
    lote_arquivo?: string | null
    status_motorista: enum_status_motorista
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    motoristasId?: number | null
  }

  export type status_proprietariosCreateManyClientesInput = {
    id?: number
    idproprietario: bigint | number
    idcliente: bigint | number
    lote_arquivo?: string | null
    dt_cliente: Date | string
    numero_cliente?: string | null
    status_proprietario: enum_status_proprietario
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    proprietariosId?: number | null
  }

  export type status_veiculosCreateManyClientesInput = {
    id?: number
    idveiculo: bigint | number
    idcliente: bigint | number
    lote_arquivo?: string | null
    dt_cliente: Date | string
    numero_cliente?: string | null
    status_veiculo: enum_status_veiculo
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    veiculosId?: number | null
  }

  export type viagensCreateManyClientesInput = {
    id?: number
    numero_cliente: string
    dt_viagem: Date | string
    mercadoria: string
    cidade_origem: string
    cidade_destino: string
    idmotorista: bigint | number
    idproprietario: bigint | number
    idveiculo: bigint | number
    carreta1?: string | null
    carreta2?: string | null
    carreta3?: string | null
    carreta4?: string | null
    viagem_cancelado?: enum_viagem
    dt_cancelamento?: Date | string | null
    dt_cliente: Date | string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    motoristasId?: number | null
    proprietariosId?: number | null
    veiculosId?: number | null
  }

  export type contatos_motoristasUpdateWithoutClientesInput = {
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    contato?: StringFieldUpdateOperationsInput | string
    tipo_contato?: StringFieldUpdateOperationsInput | string
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    motoristas?: motoristasUpdateOneWithoutContatos_motoristasNestedInput
  }

  export type contatos_motoristasUncheckedUpdateWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    contato?: StringFieldUpdateOperationsInput | string
    tipo_contato?: StringFieldUpdateOperationsInput | string
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    motoristasId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type contatos_motoristasUncheckedUpdateManyWithoutContatos_motoristasInput = {
    id?: IntFieldUpdateOperationsInput | number
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    contato?: StringFieldUpdateOperationsInput | string
    tipo_contato?: StringFieldUpdateOperationsInput | string
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    motoristasId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type status_motoristasUpdateWithoutClientesInput = {
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    status_motorista?: Enumenum_status_motoristaFieldUpdateOperationsInput | enum_status_motorista
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    motoristas?: motoristasUpdateOneWithoutStatus_motoristasNestedInput
  }

  export type status_motoristasUncheckedUpdateWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    status_motorista?: Enumenum_status_motoristaFieldUpdateOperationsInput | enum_status_motorista
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    motoristasId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type status_motoristasUncheckedUpdateManyWithoutStatus_motoristasInput = {
    id?: IntFieldUpdateOperationsInput | number
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    status_motorista?: Enumenum_status_motoristaFieldUpdateOperationsInput | enum_status_motorista
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    motoristasId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type status_proprietariosUpdateWithoutClientesInput = {
    idproprietario?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    status_proprietario?: Enumenum_status_proprietarioFieldUpdateOperationsInput | enum_status_proprietario
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    proprietarios?: proprietariosUpdateOneWithoutStatus_proprietariosNestedInput
  }

  export type status_proprietariosUncheckedUpdateWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    idproprietario?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    status_proprietario?: Enumenum_status_proprietarioFieldUpdateOperationsInput | enum_status_proprietario
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    proprietariosId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type status_proprietariosUncheckedUpdateManyWithoutStatus_proprietariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    idproprietario?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    status_proprietario?: Enumenum_status_proprietarioFieldUpdateOperationsInput | enum_status_proprietario
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    proprietariosId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type status_veiculosUpdateWithoutClientesInput = {
    idveiculo?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    status_veiculo?: Enumenum_status_veiculoFieldUpdateOperationsInput | enum_status_veiculo
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    veiculos?: veiculosUpdateOneWithoutStatus_veiculosNestedInput
  }

  export type status_veiculosUncheckedUpdateWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    idveiculo?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    status_veiculo?: Enumenum_status_veiculoFieldUpdateOperationsInput | enum_status_veiculo
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    veiculosId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type status_veiculosUncheckedUpdateManyWithoutStatus_veiculosInput = {
    id?: IntFieldUpdateOperationsInput | number
    idveiculo?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    status_veiculo?: Enumenum_status_veiculoFieldUpdateOperationsInput | enum_status_veiculo
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    veiculosId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type viagensUpdateWithoutClientesInput = {
    numero_cliente?: StringFieldUpdateOperationsInput | string
    dt_viagem?: DateTimeFieldUpdateOperationsInput | Date | string
    mercadoria?: StringFieldUpdateOperationsInput | string
    cidade_origem?: StringFieldUpdateOperationsInput | string
    cidade_destino?: StringFieldUpdateOperationsInput | string
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idproprietario?: BigIntFieldUpdateOperationsInput | bigint | number
    idveiculo?: BigIntFieldUpdateOperationsInput | bigint | number
    carreta1?: NullableStringFieldUpdateOperationsInput | string | null
    carreta2?: NullableStringFieldUpdateOperationsInput | string | null
    carreta3?: NullableStringFieldUpdateOperationsInput | string | null
    carreta4?: NullableStringFieldUpdateOperationsInput | string | null
    viagem_cancelado?: Enumenum_viagemFieldUpdateOperationsInput | enum_viagem
    dt_cancelamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    motoristas?: motoristasUpdateOneWithoutViagensNestedInput
    proprietarios?: proprietariosUpdateOneWithoutViagensNestedInput
    veiculos?: veiculosUpdateOneWithoutViagensNestedInput
  }

  export type viagensUncheckedUpdateWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero_cliente?: StringFieldUpdateOperationsInput | string
    dt_viagem?: DateTimeFieldUpdateOperationsInput | Date | string
    mercadoria?: StringFieldUpdateOperationsInput | string
    cidade_origem?: StringFieldUpdateOperationsInput | string
    cidade_destino?: StringFieldUpdateOperationsInput | string
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idproprietario?: BigIntFieldUpdateOperationsInput | bigint | number
    idveiculo?: BigIntFieldUpdateOperationsInput | bigint | number
    carreta1?: NullableStringFieldUpdateOperationsInput | string | null
    carreta2?: NullableStringFieldUpdateOperationsInput | string | null
    carreta3?: NullableStringFieldUpdateOperationsInput | string | null
    carreta4?: NullableStringFieldUpdateOperationsInput | string | null
    viagem_cancelado?: Enumenum_viagemFieldUpdateOperationsInput | enum_viagem
    dt_cancelamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    motoristasId?: NullableIntFieldUpdateOperationsInput | number | null
    proprietariosId?: NullableIntFieldUpdateOperationsInput | number | null
    veiculosId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type viagensUncheckedUpdateManyWithoutViagensInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero_cliente?: StringFieldUpdateOperationsInput | string
    dt_viagem?: DateTimeFieldUpdateOperationsInput | Date | string
    mercadoria?: StringFieldUpdateOperationsInput | string
    cidade_origem?: StringFieldUpdateOperationsInput | string
    cidade_destino?: StringFieldUpdateOperationsInput | string
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idproprietario?: BigIntFieldUpdateOperationsInput | bigint | number
    idveiculo?: BigIntFieldUpdateOperationsInput | bigint | number
    carreta1?: NullableStringFieldUpdateOperationsInput | string | null
    carreta2?: NullableStringFieldUpdateOperationsInput | string | null
    carreta3?: NullableStringFieldUpdateOperationsInput | string | null
    carreta4?: NullableStringFieldUpdateOperationsInput | string | null
    viagem_cancelado?: Enumenum_viagemFieldUpdateOperationsInput | enum_viagem
    dt_cancelamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    motoristasId?: NullableIntFieldUpdateOperationsInput | number | null
    proprietariosId?: NullableIntFieldUpdateOperationsInput | number | null
    veiculosId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type contatos_motoristasCreateManyMotoristasInput = {
    id?: number
    idmotorista: bigint | number
    idcliente: bigint | number
    contato: string
    tipo_contato: string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientesId?: number | null
  }

  export type status_motoristasCreateManyMotoristasInput = {
    id?: number
    idmotorista: bigint | number
    idcliente: bigint | number
    dt_cliente: Date | string
    numero_cliente?: string | null
    lote_arquivo?: string | null
    status_motorista: enum_status_motorista
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientesId?: number | null
  }

  export type viagensCreateManyMotoristasInput = {
    id?: number
    idcliente: number
    numero_cliente: string
    dt_viagem: Date | string
    mercadoria: string
    cidade_origem: string
    cidade_destino: string
    idmotorista: bigint | number
    idproprietario: bigint | number
    idveiculo: bigint | number
    carreta1?: string | null
    carreta2?: string | null
    carreta3?: string | null
    carreta4?: string | null
    viagem_cancelado?: enum_viagem
    dt_cancelamento?: Date | string | null
    dt_cliente: Date | string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    proprietariosId?: number | null
    veiculosId?: number | null
  }

  export type contatos_motoristasUpdateWithoutMotoristasInput = {
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    contato?: StringFieldUpdateOperationsInput | string
    tipo_contato?: StringFieldUpdateOperationsInput | string
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: clientesUpdateOneWithoutContatos_motoristasNestedInput
  }

  export type contatos_motoristasUncheckedUpdateWithoutMotoristasInput = {
    id?: IntFieldUpdateOperationsInput | number
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    contato?: StringFieldUpdateOperationsInput | string
    tipo_contato?: StringFieldUpdateOperationsInput | string
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientesId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type status_motoristasUpdateWithoutMotoristasInput = {
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    status_motorista?: Enumenum_status_motoristaFieldUpdateOperationsInput | enum_status_motorista
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: clientesUpdateOneWithoutStatus_motoristasNestedInput
  }

  export type status_motoristasUncheckedUpdateWithoutMotoristasInput = {
    id?: IntFieldUpdateOperationsInput | number
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    status_motorista?: Enumenum_status_motoristaFieldUpdateOperationsInput | enum_status_motorista
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientesId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type viagensUpdateWithoutMotoristasInput = {
    numero_cliente?: StringFieldUpdateOperationsInput | string
    dt_viagem?: DateTimeFieldUpdateOperationsInput | Date | string
    mercadoria?: StringFieldUpdateOperationsInput | string
    cidade_origem?: StringFieldUpdateOperationsInput | string
    cidade_destino?: StringFieldUpdateOperationsInput | string
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idproprietario?: BigIntFieldUpdateOperationsInput | bigint | number
    idveiculo?: BigIntFieldUpdateOperationsInput | bigint | number
    carreta1?: NullableStringFieldUpdateOperationsInput | string | null
    carreta2?: NullableStringFieldUpdateOperationsInput | string | null
    carreta3?: NullableStringFieldUpdateOperationsInput | string | null
    carreta4?: NullableStringFieldUpdateOperationsInput | string | null
    viagem_cancelado?: Enumenum_viagemFieldUpdateOperationsInput | enum_viagem
    dt_cancelamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: clientesUpdateOneRequiredWithoutViagensNestedInput
    proprietarios?: proprietariosUpdateOneWithoutViagensNestedInput
    veiculos?: veiculosUpdateOneWithoutViagensNestedInput
  }

  export type viagensUncheckedUpdateWithoutMotoristasInput = {
    id?: IntFieldUpdateOperationsInput | number
    idcliente?: IntFieldUpdateOperationsInput | number
    numero_cliente?: StringFieldUpdateOperationsInput | string
    dt_viagem?: DateTimeFieldUpdateOperationsInput | Date | string
    mercadoria?: StringFieldUpdateOperationsInput | string
    cidade_origem?: StringFieldUpdateOperationsInput | string
    cidade_destino?: StringFieldUpdateOperationsInput | string
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idproprietario?: BigIntFieldUpdateOperationsInput | bigint | number
    idveiculo?: BigIntFieldUpdateOperationsInput | bigint | number
    carreta1?: NullableStringFieldUpdateOperationsInput | string | null
    carreta2?: NullableStringFieldUpdateOperationsInput | string | null
    carreta3?: NullableStringFieldUpdateOperationsInput | string | null
    carreta4?: NullableStringFieldUpdateOperationsInput | string | null
    viagem_cancelado?: Enumenum_viagemFieldUpdateOperationsInput | enum_viagem
    dt_cancelamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    proprietariosId?: NullableIntFieldUpdateOperationsInput | number | null
    veiculosId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type status_proprietariosCreateManyProprietariosInput = {
    id?: number
    idproprietario: bigint | number
    idcliente: bigint | number
    lote_arquivo?: string | null
    dt_cliente: Date | string
    numero_cliente?: string | null
    status_proprietario: enum_status_proprietario
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientesId?: number | null
  }

  export type viagensCreateManyProprietariosInput = {
    id?: number
    idcliente: number
    numero_cliente: string
    dt_viagem: Date | string
    mercadoria: string
    cidade_origem: string
    cidade_destino: string
    idmotorista: bigint | number
    idproprietario: bigint | number
    idveiculo: bigint | number
    carreta1?: string | null
    carreta2?: string | null
    carreta3?: string | null
    carreta4?: string | null
    viagem_cancelado?: enum_viagem
    dt_cancelamento?: Date | string | null
    dt_cliente: Date | string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    motoristasId?: number | null
    veiculosId?: number | null
  }

  export type status_proprietariosUpdateWithoutProprietariosInput = {
    idproprietario?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    status_proprietario?: Enumenum_status_proprietarioFieldUpdateOperationsInput | enum_status_proprietario
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: clientesUpdateOneWithoutStatus_proprietariosNestedInput
  }

  export type status_proprietariosUncheckedUpdateWithoutProprietariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    idproprietario?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    status_proprietario?: Enumenum_status_proprietarioFieldUpdateOperationsInput | enum_status_proprietario
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientesId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type viagensUpdateWithoutProprietariosInput = {
    numero_cliente?: StringFieldUpdateOperationsInput | string
    dt_viagem?: DateTimeFieldUpdateOperationsInput | Date | string
    mercadoria?: StringFieldUpdateOperationsInput | string
    cidade_origem?: StringFieldUpdateOperationsInput | string
    cidade_destino?: StringFieldUpdateOperationsInput | string
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idproprietario?: BigIntFieldUpdateOperationsInput | bigint | number
    idveiculo?: BigIntFieldUpdateOperationsInput | bigint | number
    carreta1?: NullableStringFieldUpdateOperationsInput | string | null
    carreta2?: NullableStringFieldUpdateOperationsInput | string | null
    carreta3?: NullableStringFieldUpdateOperationsInput | string | null
    carreta4?: NullableStringFieldUpdateOperationsInput | string | null
    viagem_cancelado?: Enumenum_viagemFieldUpdateOperationsInput | enum_viagem
    dt_cancelamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: clientesUpdateOneRequiredWithoutViagensNestedInput
    motoristas?: motoristasUpdateOneWithoutViagensNestedInput
    veiculos?: veiculosUpdateOneWithoutViagensNestedInput
  }

  export type viagensUncheckedUpdateWithoutProprietariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    idcliente?: IntFieldUpdateOperationsInput | number
    numero_cliente?: StringFieldUpdateOperationsInput | string
    dt_viagem?: DateTimeFieldUpdateOperationsInput | Date | string
    mercadoria?: StringFieldUpdateOperationsInput | string
    cidade_origem?: StringFieldUpdateOperationsInput | string
    cidade_destino?: StringFieldUpdateOperationsInput | string
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idproprietario?: BigIntFieldUpdateOperationsInput | bigint | number
    idveiculo?: BigIntFieldUpdateOperationsInput | bigint | number
    carreta1?: NullableStringFieldUpdateOperationsInput | string | null
    carreta2?: NullableStringFieldUpdateOperationsInput | string | null
    carreta3?: NullableStringFieldUpdateOperationsInput | string | null
    carreta4?: NullableStringFieldUpdateOperationsInput | string | null
    viagem_cancelado?: Enumenum_viagemFieldUpdateOperationsInput | enum_viagem
    dt_cancelamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    motoristasId?: NullableIntFieldUpdateOperationsInput | number | null
    veiculosId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type status_veiculosCreateManyVeiculosInput = {
    id?: number
    idveiculo: bigint | number
    idcliente: bigint | number
    lote_arquivo?: string | null
    dt_cliente: Date | string
    numero_cliente?: string | null
    status_veiculo: enum_status_veiculo
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    clientesId?: number | null
  }

  export type viagensCreateManyVeiculosInput = {
    id?: number
    idcliente: number
    numero_cliente: string
    dt_viagem: Date | string
    mercadoria: string
    cidade_origem: string
    cidade_destino: string
    idmotorista: bigint | number
    idproprietario: bigint | number
    idveiculo: bigint | number
    carreta1?: string | null
    carreta2?: string | null
    carreta3?: string | null
    carreta4?: string | null
    viagem_cancelado?: enum_viagem
    dt_cancelamento?: Date | string | null
    dt_cliente: Date | string
    dt_criacao: Date | string
    dt_atualizacao: Date | string
    motoristasId?: number | null
    proprietariosId?: number | null
  }

  export type status_veiculosUpdateWithoutVeiculosInput = {
    idveiculo?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    status_veiculo?: Enumenum_status_veiculoFieldUpdateOperationsInput | enum_status_veiculo
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: clientesUpdateOneWithoutStatus_veiculosNestedInput
  }

  export type status_veiculosUncheckedUpdateWithoutVeiculosInput = {
    id?: IntFieldUpdateOperationsInput | number
    idveiculo?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    lote_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_cliente?: NullableStringFieldUpdateOperationsInput | string | null
    status_veiculo?: Enumenum_status_veiculoFieldUpdateOperationsInput | enum_status_veiculo
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientesId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type viagensUpdateWithoutVeiculosInput = {
    numero_cliente?: StringFieldUpdateOperationsInput | string
    dt_viagem?: DateTimeFieldUpdateOperationsInput | Date | string
    mercadoria?: StringFieldUpdateOperationsInput | string
    cidade_origem?: StringFieldUpdateOperationsInput | string
    cidade_destino?: StringFieldUpdateOperationsInput | string
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idproprietario?: BigIntFieldUpdateOperationsInput | bigint | number
    idveiculo?: BigIntFieldUpdateOperationsInput | bigint | number
    carreta1?: NullableStringFieldUpdateOperationsInput | string | null
    carreta2?: NullableStringFieldUpdateOperationsInput | string | null
    carreta3?: NullableStringFieldUpdateOperationsInput | string | null
    carreta4?: NullableStringFieldUpdateOperationsInput | string | null
    viagem_cancelado?: Enumenum_viagemFieldUpdateOperationsInput | enum_viagem
    dt_cancelamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: clientesUpdateOneRequiredWithoutViagensNestedInput
    motoristas?: motoristasUpdateOneWithoutViagensNestedInput
    proprietarios?: proprietariosUpdateOneWithoutViagensNestedInput
  }

  export type viagensUncheckedUpdateWithoutVeiculosInput = {
    id?: IntFieldUpdateOperationsInput | number
    idcliente?: IntFieldUpdateOperationsInput | number
    numero_cliente?: StringFieldUpdateOperationsInput | string
    dt_viagem?: DateTimeFieldUpdateOperationsInput | Date | string
    mercadoria?: StringFieldUpdateOperationsInput | string
    cidade_origem?: StringFieldUpdateOperationsInput | string
    cidade_destino?: StringFieldUpdateOperationsInput | string
    idmotorista?: BigIntFieldUpdateOperationsInput | bigint | number
    idproprietario?: BigIntFieldUpdateOperationsInput | bigint | number
    idveiculo?: BigIntFieldUpdateOperationsInput | bigint | number
    carreta1?: NullableStringFieldUpdateOperationsInput | string | null
    carreta2?: NullableStringFieldUpdateOperationsInput | string | null
    carreta3?: NullableStringFieldUpdateOperationsInput | string | null
    carreta4?: NullableStringFieldUpdateOperationsInput | string | null
    viagem_cancelado?: Enumenum_viagemFieldUpdateOperationsInput | enum_viagem
    dt_cancelamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_cliente?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    motoristasId?: NullableIntFieldUpdateOperationsInput | number | null
    proprietariosId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}