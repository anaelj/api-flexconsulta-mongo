
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
 * Model veiculos
 * 
 */
export type veiculos = {
  idmongo: string
  id: number
  cnpj: string
  razaosocial: string
  nomefantasia: string
  placa: string
  status_veiculo: enum_status_veiculo
}

/**
 * Model viagens
 * 
 */
export type viagens = {
  idmongo: string
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
 * Model motoristas
 * 
 */
export type motoristas = {
  idmongo: string
  id: number
  cnpj: string
  razaosocial: string | null
  nomefantasia: string | null
  nome_mot: string
  cpf_mot: string
  status_motorista: enum_status_motorista
}

/**
 * Model proprietarios
 * 
 */
export type proprietarios = {
  idmongo: string
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


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Veiculos
 * const veiculos = await prisma.veiculos.findMany()
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
   * // Fetch zero or more Veiculos
   * const veiculos = await prisma.veiculos.findMany()
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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: { maxWait?: number, timeout?: number }): Promise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): PrismaPromise<Prisma.JsonObject>

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
    veiculos: 'veiculos',
    viagens: 'viagens',
    motoristas: 'motoristas',
    proprietarios: 'proprietarios'
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
   * Models
   */

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
    idmongo: string | null
    id: number | null
    cnpj: string | null
    razaosocial: string | null
    nomefantasia: string | null
    placa: string | null
    status_veiculo: enum_status_veiculo | null
  }

  export type VeiculosMaxAggregateOutputType = {
    idmongo: string | null
    id: number | null
    cnpj: string | null
    razaosocial: string | null
    nomefantasia: string | null
    placa: string | null
    status_veiculo: enum_status_veiculo | null
  }

  export type VeiculosCountAggregateOutputType = {
    idmongo: number
    id: number
    cnpj: number
    razaosocial: number
    nomefantasia: number
    placa: number
    status_veiculo: number
    _all: number
  }


  export type VeiculosAvgAggregateInputType = {
    id?: true
  }

  export type VeiculosSumAggregateInputType = {
    id?: true
  }

  export type VeiculosMinAggregateInputType = {
    idmongo?: true
    id?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    placa?: true
    status_veiculo?: true
  }

  export type VeiculosMaxAggregateInputType = {
    idmongo?: true
    id?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    placa?: true
    status_veiculo?: true
  }

  export type VeiculosCountAggregateInputType = {
    idmongo?: true
    id?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    placa?: true
    status_veiculo?: true
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
    idmongo: string
    id: number
    cnpj: string
    razaosocial: string
    nomefantasia: string
    placa: string
    status_veiculo: enum_status_veiculo
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
    idmongo?: boolean
    id?: boolean
    cnpj?: boolean
    razaosocial?: boolean
    nomefantasia?: boolean
    placa?: boolean
    status_veiculo?: boolean
  }


  export type veiculosGetPayload<S extends boolean | null | undefined | veiculosArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? veiculos :
    S extends undefined ? never :
    S extends { include: any } & (veiculosArgs | veiculosFindManyArgs)
    ? veiculos 
    : S extends { select: any } & (veiculosArgs | veiculosFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof veiculos ? veiculos[P] : never
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
     * // Only select the `idmongo`
     * const veiculosWithIdmongoOnly = await prisma.veiculos.findMany({ select: { idmongo: true } })
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
     * Find zero or more Veiculos that matches the filter.
     * @param {veiculosFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const veiculos = await prisma.veiculos.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: veiculosFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Veiculos.
     * @param {veiculosAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const veiculos = await prisma.veiculos.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: veiculosAggregateRawArgs
    ): PrismaPromise<JsonObject>

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
   * veiculos findRaw
   */
  export type veiculosFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * veiculos aggregateRaw
   */
  export type veiculosAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * veiculos without action
   */
  export type veiculosArgs = {
    /**
     * Select specific fields to fetch from the veiculos
     */
    select?: veiculosSelect | null
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
    idmotorista: number | null
    idveiculo: number | null
    idproprietario: number | null
  }

  export type ViagensSumAggregateOutputType = {
    id: number | null
    idmotorista: number | null
    idveiculo: number | null
    idproprietario: number | null
  }

  export type ViagensMinAggregateOutputType = {
    idmongo: string | null
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

  export type ViagensMaxAggregateOutputType = {
    idmongo: string | null
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

  export type ViagensCountAggregateOutputType = {
    idmongo: number
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


  export type ViagensAvgAggregateInputType = {
    id?: true
    idmotorista?: true
    idveiculo?: true
    idproprietario?: true
  }

  export type ViagensSumAggregateInputType = {
    id?: true
    idmotorista?: true
    idveiculo?: true
    idproprietario?: true
  }

  export type ViagensMinAggregateInputType = {
    idmongo?: true
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

  export type ViagensMaxAggregateInputType = {
    idmongo?: true
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

  export type ViagensCountAggregateInputType = {
    idmongo?: true
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
    idmongo: string
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
    idmongo?: boolean
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


  export type viagensGetPayload<S extends boolean | null | undefined | viagensArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? viagens :
    S extends undefined ? never :
    S extends { include: any } & (viagensArgs | viagensFindManyArgs)
    ? viagens 
    : S extends { select: any } & (viagensArgs | viagensFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof viagens ? viagens[P] : never
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
     * // Only select the `idmongo`
     * const viagensWithIdmongoOnly = await prisma.viagens.findMany({ select: { idmongo: true } })
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
     * Find zero or more Viagens that matches the filter.
     * @param {viagensFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const viagens = await prisma.viagens.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: viagensFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Viagens.
     * @param {viagensAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const viagens = await prisma.viagens.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: viagensAggregateRawArgs
    ): PrismaPromise<JsonObject>

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
   * viagens findRaw
   */
  export type viagensFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * viagens aggregateRaw
   */
  export type viagensAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * viagens without action
   */
  export type viagensArgs = {
    /**
     * Select specific fields to fetch from the viagens
     */
    select?: viagensSelect | null
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
    idmongo: string | null
    id: number | null
    cnpj: string | null
    razaosocial: string | null
    nomefantasia: string | null
    nome_mot: string | null
    cpf_mot: string | null
    status_motorista: enum_status_motorista | null
  }

  export type MotoristasMaxAggregateOutputType = {
    idmongo: string | null
    id: number | null
    cnpj: string | null
    razaosocial: string | null
    nomefantasia: string | null
    nome_mot: string | null
    cpf_mot: string | null
    status_motorista: enum_status_motorista | null
  }

  export type MotoristasCountAggregateOutputType = {
    idmongo: number
    id: number
    cnpj: number
    razaosocial: number
    nomefantasia: number
    nome_mot: number
    cpf_mot: number
    status_motorista: number
    _all: number
  }


  export type MotoristasAvgAggregateInputType = {
    id?: true
  }

  export type MotoristasSumAggregateInputType = {
    id?: true
  }

  export type MotoristasMinAggregateInputType = {
    idmongo?: true
    id?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    nome_mot?: true
    cpf_mot?: true
    status_motorista?: true
  }

  export type MotoristasMaxAggregateInputType = {
    idmongo?: true
    id?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    nome_mot?: true
    cpf_mot?: true
    status_motorista?: true
  }

  export type MotoristasCountAggregateInputType = {
    idmongo?: true
    id?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    nome_mot?: true
    cpf_mot?: true
    status_motorista?: true
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
    idmongo: string
    id: number
    cnpj: string
    razaosocial: string | null
    nomefantasia: string | null
    nome_mot: string
    cpf_mot: string
    status_motorista: enum_status_motorista
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
    idmongo?: boolean
    id?: boolean
    cnpj?: boolean
    razaosocial?: boolean
    nomefantasia?: boolean
    nome_mot?: boolean
    cpf_mot?: boolean
    status_motorista?: boolean
  }


  export type motoristasGetPayload<S extends boolean | null | undefined | motoristasArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? motoristas :
    S extends undefined ? never :
    S extends { include: any } & (motoristasArgs | motoristasFindManyArgs)
    ? motoristas 
    : S extends { select: any } & (motoristasArgs | motoristasFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof motoristas ? motoristas[P] : never
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
     * // Only select the `idmongo`
     * const motoristasWithIdmongoOnly = await prisma.motoristas.findMany({ select: { idmongo: true } })
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
     * Find zero or more Motoristas that matches the filter.
     * @param {motoristasFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const motoristas = await prisma.motoristas.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: motoristasFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Motoristas.
     * @param {motoristasAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const motoristas = await prisma.motoristas.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: motoristasAggregateRawArgs
    ): PrismaPromise<JsonObject>

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
   * motoristas findRaw
   */
  export type motoristasFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * motoristas aggregateRaw
   */
  export type motoristasAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * motoristas without action
   */
  export type motoristasArgs = {
    /**
     * Select specific fields to fetch from the motoristas
     */
    select?: motoristasSelect | null
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
    idmongo: string | null
    id: number | null
    cnpj: string | null
    razaosocial: string | null
    nomefantasia: string | null
    nome_prop: string | null
    cpf_cnpj_prop: string | null
    status_proprietario: enum_status_proprietario | null
  }

  export type ProprietariosMaxAggregateOutputType = {
    idmongo: string | null
    id: number | null
    cnpj: string | null
    razaosocial: string | null
    nomefantasia: string | null
    nome_prop: string | null
    cpf_cnpj_prop: string | null
    status_proprietario: enum_status_proprietario | null
  }

  export type ProprietariosCountAggregateOutputType = {
    idmongo: number
    id: number
    cnpj: number
    razaosocial: number
    nomefantasia: number
    nome_prop: number
    cpf_cnpj_prop: number
    status_proprietario: number
    _all: number
  }


  export type ProprietariosAvgAggregateInputType = {
    id?: true
  }

  export type ProprietariosSumAggregateInputType = {
    id?: true
  }

  export type ProprietariosMinAggregateInputType = {
    idmongo?: true
    id?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    nome_prop?: true
    cpf_cnpj_prop?: true
    status_proprietario?: true
  }

  export type ProprietariosMaxAggregateInputType = {
    idmongo?: true
    id?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    nome_prop?: true
    cpf_cnpj_prop?: true
    status_proprietario?: true
  }

  export type ProprietariosCountAggregateInputType = {
    idmongo?: true
    id?: true
    cnpj?: true
    razaosocial?: true
    nomefantasia?: true
    nome_prop?: true
    cpf_cnpj_prop?: true
    status_proprietario?: true
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
    idmongo: string
    id: number
    cnpj: string
    razaosocial: string | null
    nomefantasia: string | null
    nome_prop: string
    cpf_cnpj_prop: string
    status_proprietario: enum_status_proprietario
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
    idmongo?: boolean
    id?: boolean
    cnpj?: boolean
    razaosocial?: boolean
    nomefantasia?: boolean
    nome_prop?: boolean
    cpf_cnpj_prop?: boolean
    status_proprietario?: boolean
  }


  export type proprietariosGetPayload<S extends boolean | null | undefined | proprietariosArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? proprietarios :
    S extends undefined ? never :
    S extends { include: any } & (proprietariosArgs | proprietariosFindManyArgs)
    ? proprietarios 
    : S extends { select: any } & (proprietariosArgs | proprietariosFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof proprietarios ? proprietarios[P] : never
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
     * // Only select the `idmongo`
     * const proprietariosWithIdmongoOnly = await prisma.proprietarios.findMany({ select: { idmongo: true } })
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
     * Find zero or more Proprietarios that matches the filter.
     * @param {proprietariosFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const proprietarios = await prisma.proprietarios.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: proprietariosFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Proprietarios.
     * @param {proprietariosAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const proprietarios = await prisma.proprietarios.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: proprietariosAggregateRawArgs
    ): PrismaPromise<JsonObject>

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
   * proprietarios findRaw
   */
  export type proprietariosFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * proprietarios aggregateRaw
   */
  export type proprietariosAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * proprietarios without action
   */
  export type proprietariosArgs = {
    /**
     * Select specific fields to fetch from the proprietarios
     */
    select?: proprietariosSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const MotoristasScalarFieldEnum: {
    idmongo: 'idmongo',
    id: 'id',
    cnpj: 'cnpj',
    razaosocial: 'razaosocial',
    nomefantasia: 'nomefantasia',
    nome_mot: 'nome_mot',
    cpf_mot: 'cpf_mot',
    status_motorista: 'status_motorista'
  };

  export type MotoristasScalarFieldEnum = (typeof MotoristasScalarFieldEnum)[keyof typeof MotoristasScalarFieldEnum]


  export const ProprietariosScalarFieldEnum: {
    idmongo: 'idmongo',
    id: 'id',
    cnpj: 'cnpj',
    razaosocial: 'razaosocial',
    nomefantasia: 'nomefantasia',
    nome_prop: 'nome_prop',
    cpf_cnpj_prop: 'cpf_cnpj_prop',
    status_proprietario: 'status_proprietario'
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


  export const VeiculosScalarFieldEnum: {
    idmongo: 'idmongo',
    id: 'id',
    cnpj: 'cnpj',
    razaosocial: 'razaosocial',
    nomefantasia: 'nomefantasia',
    placa: 'placa',
    status_veiculo: 'status_veiculo'
  };

  export type VeiculosScalarFieldEnum = (typeof VeiculosScalarFieldEnum)[keyof typeof VeiculosScalarFieldEnum]


  export const ViagensScalarFieldEnum: {
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
  };

  export type ViagensScalarFieldEnum = (typeof ViagensScalarFieldEnum)[keyof typeof ViagensScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type veiculosWhereInput = {
    AND?: Enumerable<veiculosWhereInput>
    OR?: Enumerable<veiculosWhereInput>
    NOT?: Enumerable<veiculosWhereInput>
    idmongo?: StringFilter | string
    id?: IntFilter | number
    cnpj?: StringFilter | string
    razaosocial?: StringFilter | string
    nomefantasia?: StringFilter | string
    placa?: StringFilter | string
    status_veiculo?: Enumenum_status_veiculoFilter | enum_status_veiculo
  }

  export type veiculosOrderByWithRelationInput = {
    idmongo?: SortOrder
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    placa?: SortOrder
    status_veiculo?: SortOrder
  }

  export type veiculosWhereUniqueInput = {
    idmongo?: string
  }

  export type veiculosOrderByWithAggregationInput = {
    idmongo?: SortOrder
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    placa?: SortOrder
    status_veiculo?: SortOrder
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
    idmongo?: StringWithAggregatesFilter | string
    id?: IntWithAggregatesFilter | number
    cnpj?: StringWithAggregatesFilter | string
    razaosocial?: StringWithAggregatesFilter | string
    nomefantasia?: StringWithAggregatesFilter | string
    placa?: StringWithAggregatesFilter | string
    status_veiculo?: Enumenum_status_veiculoWithAggregatesFilter | enum_status_veiculo
  }

  export type viagensWhereInput = {
    AND?: Enumerable<viagensWhereInput>
    OR?: Enumerable<viagensWhereInput>
    NOT?: Enumerable<viagensWhereInput>
    idmongo?: StringFilter | string
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

  export type viagensOrderByWithRelationInput = {
    idmongo?: SortOrder
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

  export type viagensWhereUniqueInput = {
    idmongo?: string
  }

  export type viagensOrderByWithAggregationInput = {
    idmongo?: SortOrder
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
    idmongo?: StringWithAggregatesFilter | string
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

  export type motoristasWhereInput = {
    AND?: Enumerable<motoristasWhereInput>
    OR?: Enumerable<motoristasWhereInput>
    NOT?: Enumerable<motoristasWhereInput>
    idmongo?: StringFilter | string
    id?: IntFilter | number
    cnpj?: StringFilter | string
    razaosocial?: StringNullableFilter | string | null
    nomefantasia?: StringNullableFilter | string | null
    nome_mot?: StringFilter | string
    cpf_mot?: StringFilter | string
    status_motorista?: Enumenum_status_motoristaFilter | enum_status_motorista
  }

  export type motoristasOrderByWithRelationInput = {
    idmongo?: SortOrder
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    nome_mot?: SortOrder
    cpf_mot?: SortOrder
    status_motorista?: SortOrder
  }

  export type motoristasWhereUniqueInput = {
    idmongo?: string
    cpf_mot?: string
  }

  export type motoristasOrderByWithAggregationInput = {
    idmongo?: SortOrder
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    nome_mot?: SortOrder
    cpf_mot?: SortOrder
    status_motorista?: SortOrder
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
    idmongo?: StringWithAggregatesFilter | string
    id?: IntWithAggregatesFilter | number
    cnpj?: StringWithAggregatesFilter | string
    razaosocial?: StringNullableWithAggregatesFilter | string | null
    nomefantasia?: StringNullableWithAggregatesFilter | string | null
    nome_mot?: StringWithAggregatesFilter | string
    cpf_mot?: StringWithAggregatesFilter | string
    status_motorista?: Enumenum_status_motoristaWithAggregatesFilter | enum_status_motorista
  }

  export type proprietariosWhereInput = {
    AND?: Enumerable<proprietariosWhereInput>
    OR?: Enumerable<proprietariosWhereInput>
    NOT?: Enumerable<proprietariosWhereInput>
    idmongo?: StringFilter | string
    id?: IntFilter | number
    cnpj?: StringFilter | string
    razaosocial?: StringNullableFilter | string | null
    nomefantasia?: StringNullableFilter | string | null
    nome_prop?: StringFilter | string
    cpf_cnpj_prop?: StringFilter | string
    status_proprietario?: Enumenum_status_proprietarioFilter | enum_status_proprietario
  }

  export type proprietariosOrderByWithRelationInput = {
    idmongo?: SortOrder
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    nome_prop?: SortOrder
    cpf_cnpj_prop?: SortOrder
    status_proprietario?: SortOrder
  }

  export type proprietariosWhereUniqueInput = {
    idmongo?: string
  }

  export type proprietariosOrderByWithAggregationInput = {
    idmongo?: SortOrder
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    nome_prop?: SortOrder
    cpf_cnpj_prop?: SortOrder
    status_proprietario?: SortOrder
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
    idmongo?: StringWithAggregatesFilter | string
    id?: IntWithAggregatesFilter | number
    cnpj?: StringWithAggregatesFilter | string
    razaosocial?: StringNullableWithAggregatesFilter | string | null
    nomefantasia?: StringNullableWithAggregatesFilter | string | null
    nome_prop?: StringWithAggregatesFilter | string
    cpf_cnpj_prop?: StringWithAggregatesFilter | string
    status_proprietario?: Enumenum_status_proprietarioWithAggregatesFilter | enum_status_proprietario
  }

  export type veiculosCreateInput = {
    idmongo?: string
    id: number
    cnpj: string
    razaosocial: string
    nomefantasia: string
    placa: string
    status_veiculo: enum_status_veiculo
  }

  export type veiculosUncheckedCreateInput = {
    idmongo?: string
    id: number
    cnpj: string
    razaosocial: string
    nomefantasia: string
    placa: string
    status_veiculo: enum_status_veiculo
  }

  export type veiculosUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: StringFieldUpdateOperationsInput | string
    nomefantasia?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    status_veiculo?: Enumenum_status_veiculoFieldUpdateOperationsInput | enum_status_veiculo
  }

  export type veiculosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: StringFieldUpdateOperationsInput | string
    nomefantasia?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    status_veiculo?: Enumenum_status_veiculoFieldUpdateOperationsInput | enum_status_veiculo
  }

  export type veiculosCreateManyInput = {
    idmongo?: string
    id: number
    cnpj: string
    razaosocial: string
    nomefantasia: string
    placa: string
    status_veiculo: enum_status_veiculo
  }

  export type veiculosUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: StringFieldUpdateOperationsInput | string
    nomefantasia?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    status_veiculo?: Enumenum_status_veiculoFieldUpdateOperationsInput | enum_status_veiculo
  }

  export type veiculosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: StringFieldUpdateOperationsInput | string
    nomefantasia?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    status_veiculo?: Enumenum_status_veiculoFieldUpdateOperationsInput | enum_status_veiculo
  }

  export type viagensCreateInput = {
    idmongo?: string
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

  export type viagensUncheckedCreateInput = {
    idmongo?: string
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

  export type viagensUpdateInput = {
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

  export type viagensUncheckedUpdateInput = {
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

  export type viagensCreateManyInput = {
    idmongo?: string
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

  export type viagensUpdateManyMutationInput = {
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

  export type viagensUncheckedUpdateManyInput = {
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

  export type motoristasCreateInput = {
    idmongo?: string
    id: number
    cnpj: string
    razaosocial?: string | null
    nomefantasia?: string | null
    nome_mot: string
    cpf_mot: string
    status_motorista: enum_status_motorista
  }

  export type motoristasUncheckedCreateInput = {
    idmongo?: string
    id: number
    cnpj: string
    razaosocial?: string | null
    nomefantasia?: string | null
    nome_mot: string
    cpf_mot: string
    status_motorista: enum_status_motorista
  }

  export type motoristasUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    nome_mot?: StringFieldUpdateOperationsInput | string
    cpf_mot?: StringFieldUpdateOperationsInput | string
    status_motorista?: Enumenum_status_motoristaFieldUpdateOperationsInput | enum_status_motorista
  }

  export type motoristasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    nome_mot?: StringFieldUpdateOperationsInput | string
    cpf_mot?: StringFieldUpdateOperationsInput | string
    status_motorista?: Enumenum_status_motoristaFieldUpdateOperationsInput | enum_status_motorista
  }

  export type motoristasCreateManyInput = {
    idmongo?: string
    id: number
    cnpj: string
    razaosocial?: string | null
    nomefantasia?: string | null
    nome_mot: string
    cpf_mot: string
    status_motorista: enum_status_motorista
  }

  export type motoristasUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    nome_mot?: StringFieldUpdateOperationsInput | string
    cpf_mot?: StringFieldUpdateOperationsInput | string
    status_motorista?: Enumenum_status_motoristaFieldUpdateOperationsInput | enum_status_motorista
  }

  export type motoristasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    nome_mot?: StringFieldUpdateOperationsInput | string
    cpf_mot?: StringFieldUpdateOperationsInput | string
    status_motorista?: Enumenum_status_motoristaFieldUpdateOperationsInput | enum_status_motorista
  }

  export type proprietariosCreateInput = {
    idmongo?: string
    id: number
    cnpj: string
    razaosocial?: string | null
    nomefantasia?: string | null
    nome_prop: string
    cpf_cnpj_prop: string
    status_proprietario: enum_status_proprietario
  }

  export type proprietariosUncheckedCreateInput = {
    idmongo?: string
    id: number
    cnpj: string
    razaosocial?: string | null
    nomefantasia?: string | null
    nome_prop: string
    cpf_cnpj_prop: string
    status_proprietario: enum_status_proprietario
  }

  export type proprietariosUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    nome_prop?: StringFieldUpdateOperationsInput | string
    cpf_cnpj_prop?: StringFieldUpdateOperationsInput | string
    status_proprietario?: Enumenum_status_proprietarioFieldUpdateOperationsInput | enum_status_proprietario
  }

  export type proprietariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    nome_prop?: StringFieldUpdateOperationsInput | string
    cpf_cnpj_prop?: StringFieldUpdateOperationsInput | string
    status_proprietario?: Enumenum_status_proprietarioFieldUpdateOperationsInput | enum_status_proprietario
  }

  export type proprietariosCreateManyInput = {
    idmongo?: string
    id: number
    cnpj: string
    razaosocial?: string | null
    nomefantasia?: string | null
    nome_prop: string
    cpf_cnpj_prop: string
    status_proprietario: enum_status_proprietario
  }

  export type proprietariosUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    nome_prop?: StringFieldUpdateOperationsInput | string
    cpf_cnpj_prop?: StringFieldUpdateOperationsInput | string
    status_proprietario?: Enumenum_status_proprietarioFieldUpdateOperationsInput | enum_status_proprietario
  }

  export type proprietariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    nome_prop?: StringFieldUpdateOperationsInput | string
    cpf_cnpj_prop?: StringFieldUpdateOperationsInput | string
    status_proprietario?: Enumenum_status_proprietarioFieldUpdateOperationsInput | enum_status_proprietario
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

  export type Enumenum_status_veiculoFilter = {
    equals?: enum_status_veiculo
    in?: Enumerable<enum_status_veiculo>
    notIn?: Enumerable<enum_status_veiculo>
    not?: NestedEnumenum_status_veiculoFilter | enum_status_veiculo
  }

  export type veiculosCountOrderByAggregateInput = {
    idmongo?: SortOrder
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    placa?: SortOrder
    status_veiculo?: SortOrder
  }

  export type veiculosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type veiculosMaxOrderByAggregateInput = {
    idmongo?: SortOrder
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    placa?: SortOrder
    status_veiculo?: SortOrder
  }

  export type veiculosMinOrderByAggregateInput = {
    idmongo?: SortOrder
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    placa?: SortOrder
    status_veiculo?: SortOrder
  }

  export type veiculosSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type Enumenum_status_veiculoWithAggregatesFilter = {
    equals?: enum_status_veiculo
    in?: Enumerable<enum_status_veiculo>
    notIn?: Enumerable<enum_status_veiculo>
    not?: NestedEnumenum_status_veiculoWithAggregatesFilter | enum_status_veiculo
    _count?: NestedIntFilter
    _min?: NestedEnumenum_status_veiculoFilter
    _max?: NestedEnumenum_status_veiculoFilter
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
    isSet?: boolean
  }

  export type Enumenum_status_motoristaNullableFilter = {
    equals?: enum_status_motorista | null
    in?: Enumerable<enum_status_motorista> | null
    notIn?: Enumerable<enum_status_motorista> | null
    not?: NestedEnumenum_status_motoristaNullableFilter | enum_status_motorista | null
    isSet?: boolean
  }

  export type viagensCountOrderByAggregateInput = {
    idmongo?: SortOrder
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

  export type viagensAvgOrderByAggregateInput = {
    id?: SortOrder
    idmotorista?: SortOrder
    idveiculo?: SortOrder
    idproprietario?: SortOrder
  }

  export type viagensMaxOrderByAggregateInput = {
    idmongo?: SortOrder
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

  export type viagensMinOrderByAggregateInput = {
    idmongo?: SortOrder
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

  export type viagensSumOrderByAggregateInput = {
    id?: SortOrder
    idmotorista?: SortOrder
    idveiculo?: SortOrder
    idproprietario?: SortOrder
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
    isSet?: boolean
  }

  export type Enumenum_status_motoristaNullableWithAggregatesFilter = {
    equals?: enum_status_motorista | null
    in?: Enumerable<enum_status_motorista> | null
    notIn?: Enumerable<enum_status_motorista> | null
    not?: NestedEnumenum_status_motoristaNullableWithAggregatesFilter | enum_status_motorista | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumenum_status_motoristaNullableFilter
    _max?: NestedEnumenum_status_motoristaNullableFilter
    isSet?: boolean
  }

  export type Enumenum_status_motoristaFilter = {
    equals?: enum_status_motorista
    in?: Enumerable<enum_status_motorista>
    notIn?: Enumerable<enum_status_motorista>
    not?: NestedEnumenum_status_motoristaFilter | enum_status_motorista
  }

  export type motoristasCountOrderByAggregateInput = {
    idmongo?: SortOrder
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    nome_mot?: SortOrder
    cpf_mot?: SortOrder
    status_motorista?: SortOrder
  }

  export type motoristasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type motoristasMaxOrderByAggregateInput = {
    idmongo?: SortOrder
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    nome_mot?: SortOrder
    cpf_mot?: SortOrder
    status_motorista?: SortOrder
  }

  export type motoristasMinOrderByAggregateInput = {
    idmongo?: SortOrder
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    nome_mot?: SortOrder
    cpf_mot?: SortOrder
    status_motorista?: SortOrder
  }

  export type motoristasSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type proprietariosCountOrderByAggregateInput = {
    idmongo?: SortOrder
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    nome_prop?: SortOrder
    cpf_cnpj_prop?: SortOrder
    status_proprietario?: SortOrder
  }

  export type proprietariosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type proprietariosMaxOrderByAggregateInput = {
    idmongo?: SortOrder
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    nome_prop?: SortOrder
    cpf_cnpj_prop?: SortOrder
    status_proprietario?: SortOrder
  }

  export type proprietariosMinOrderByAggregateInput = {
    idmongo?: SortOrder
    id?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    nomefantasia?: SortOrder
    nome_prop?: SortOrder
    cpf_cnpj_prop?: SortOrder
    status_proprietario?: SortOrder
  }

  export type proprietariosSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumenum_status_veiculoFieldUpdateOperationsInput = {
    set?: enum_status_veiculo
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NullableEnumenum_status_motoristaFieldUpdateOperationsInput = {
    set?: enum_status_motorista | null
    unset?: boolean
  }

  export type Enumenum_status_motoristaFieldUpdateOperationsInput = {
    set?: enum_status_motorista
  }

  export type Enumenum_status_proprietarioFieldUpdateOperationsInput = {
    set?: enum_status_proprietario
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

  export type NestedEnumenum_status_veiculoFilter = {
    equals?: enum_status_veiculo
    in?: Enumerable<enum_status_veiculo>
    notIn?: Enumerable<enum_status_veiculo>
    not?: NestedEnumenum_status_veiculoFilter | enum_status_veiculo
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

  export type NestedEnumenum_status_veiculoWithAggregatesFilter = {
    equals?: enum_status_veiculo
    in?: Enumerable<enum_status_veiculo>
    notIn?: Enumerable<enum_status_veiculo>
    not?: NestedEnumenum_status_veiculoWithAggregatesFilter | enum_status_veiculo
    _count?: NestedIntFilter
    _min?: NestedEnumenum_status_veiculoFilter
    _max?: NestedEnumenum_status_veiculoFilter
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
    isSet?: boolean
  }

  export type NestedEnumenum_status_motoristaNullableFilter = {
    equals?: enum_status_motorista | null
    in?: Enumerable<enum_status_motorista> | null
    notIn?: Enumerable<enum_status_motorista> | null
    not?: NestedEnumenum_status_motoristaNullableFilter | enum_status_motorista | null
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedEnumenum_status_motoristaNullableWithAggregatesFilter = {
    equals?: enum_status_motorista | null
    in?: Enumerable<enum_status_motorista> | null
    notIn?: Enumerable<enum_status_motorista> | null
    not?: NestedEnumenum_status_motoristaNullableWithAggregatesFilter | enum_status_motorista | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumenum_status_motoristaNullableFilter
    _max?: NestedEnumenum_status_motoristaNullableFilter
    isSet?: boolean
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