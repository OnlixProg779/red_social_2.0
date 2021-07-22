import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'Miembro'},
  },
})
export class Miembro extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {
      columnName: 'MiembroId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  miembroId: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'UsuarioId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  usuarioId: string;

  @property({
    type: 'string',
    required: true,
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
    type: 'string',
    postgresql: {
      columnName: 'Rol',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  rol?: string;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'Banneado',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  banneado?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Miembro>) {
    super(data);
  }
}

export interface MiembroRelations {
  // describe navigational properties here
}

export type MiembroWithRelations = Miembro & MiembroRelations;
