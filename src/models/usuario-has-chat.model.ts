import {Entity, model, property} from '@loopback/repository';
import {v4 as uuidv4} from 'uuid';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'Usuario_has_Chat'},
  },
})
export class UsuarioHasChat extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {
      columnName: 'Usuario_has_ChatId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  usuarioHasChatId: string = uuidv4();

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
      columnName: 'UsuarioRecivedId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  usuarioRecivedId?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UsuarioHasChat>) {
    super(data);
  }
}

export interface UsuarioHasChatRelations {
  // describe navigational properties here
}

export type UsuarioHasChatWithRelations = UsuarioHasChat &
  UsuarioHasChatRelations;
