import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'Encuesta'},
  },
})
export class Encuesta extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {
      columnName: 'EncuestaId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  encuestaId: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'PublicacionId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  publicacionId?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'Pregunta',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  pregunta?: string;

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

  constructor(data?: Partial<Encuesta>) {
    super(data);
  }
}

export interface EncuestaRelations {
  // describe navigational properties here
}

export type EncuestaWithRelations = Encuesta & EncuestaRelations;
