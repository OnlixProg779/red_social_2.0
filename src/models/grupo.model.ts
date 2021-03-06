import {Entity, hasMany, model, property} from '@loopback/repository';
import {Miembro} from './miembro.model';
import {Usuario} from './usuario.model';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'Grupo'},
  },
})
export class Grupo extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {
      columnName: 'GrupoId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  grupoId: string;

  @property({
    type: 'date',
    postgresql: {
      columnName: 'Date',
      dataType: 'timestamp with time zone',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  date?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'Logo',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  logo?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'Portada',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  portada?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'Descripcion',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  descripcion?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'Tipo',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  tipo?: string;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'Active',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  active?: boolean;

  @hasMany(() => Usuario, {through: {model: () => Miembro}})
  usuarios: Usuario[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Grupo>) {
    super(data);
  }
}

export interface GrupoRelations {
  // describe navigational properties here
}

export type GrupoWithRelations = Grupo & GrupoRelations;
