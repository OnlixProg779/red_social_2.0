import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'Publicacion'},
  },
})
export class Publicacion extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {
      columnName: 'PublicacionId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  publicacionId: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'UsuarioId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  usuarioId?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'UsuarioPublica',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  usuarioPublica?: string;

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
      columnName: 'Texto',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  texto?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'Video',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  video?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'Imagen',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  imagen?: string;

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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Publicacion>) {
    super(data);
  }
}

export interface PublicacionRelations {
  // describe navigational properties here
}

export type PublicacionWithRelations = Publicacion & PublicacionRelations;
