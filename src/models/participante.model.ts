import {Entity, model, property} from '@loopback/repository';
import {v4 as uuidv4} from 'uuid';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'Participante'},
  },
})
export class Participante extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {
      columnName: 'ParticipanteId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  participanteId: string = uuidv4();

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
      columnName: 'EventoId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  eventoId: string;

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
    type: 'string',
    postgresql: {
      columnName: 'Respuesta',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  respuesta?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Participante>) {
    super(data);
  }
}

export interface ParticipanteRelations {
  // describe navigational properties here
}

export type ParticipanteWithRelations = Participante & ParticipanteRelations;
