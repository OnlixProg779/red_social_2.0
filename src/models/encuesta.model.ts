import {
  belongsTo,
  Entity,
  hasMany,
  model,
  property,
} from '@loopback/repository';
import {Publicacion} from './publicacion.model';
import {RespuestaEncuesta} from './respuesta-encuesta.model';

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

  @belongsTo(() => Publicacion)
  publicacionId: string;

  @hasMany(() => RespuestaEncuesta)
  respuestaEncuestas: RespuestaEncuesta[];
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
