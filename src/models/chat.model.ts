import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'Chat'}},
})
export class Chat extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {
      columnName: 'ChatId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  chatId: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'UsuarioIdSend',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  usuarioIdSend?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'UsuarioIdRecived',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  usuarioIdRecived?: string;

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

  constructor(data?: Partial<Chat>) {
    super(data);
  }
}

export interface ChatRelations {
  // describe navigational properties here
}

export type ChatWithRelations = Chat & ChatRelations;
