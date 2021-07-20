import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'ReaccionChat'},
  },
})
export class ReaccionChat extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {
      columnName: 'ReaccionChatId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  reaccionChatId: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'ChatId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  chatId?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'ReaccionText',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  reaccionText?: string;

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

  constructor(data?: Partial<ReaccionChat>) {
    super(data);
  }
}

export interface ReaccionChatRelations {
  // describe navigational properties here
}

export type ReaccionChatWithRelations = ReaccionChat & ReaccionChatRelations;
