import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Usuario} from './usuario.model';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'Notificacion'},
  },
})
export class Notificacion extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {
      columnName: 'NotificacionId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  notificacionId: string;
  @property({
    type: 'string',
    postgresql: {
      columnName: 'Record',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  record?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'AnyId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  anyId?: string;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'Leido',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  leido?: boolean;

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

  @belongsTo(() => Usuario)
  usuarioId: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Notificacion>) {
    super(data);
  }
}

export interface NotificacionRelations {
  // describe navigational properties here
}

export type NotificacionWithRelations = Notificacion & NotificacionRelations;
