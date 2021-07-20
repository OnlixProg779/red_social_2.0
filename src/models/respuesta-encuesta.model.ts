import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Encuesta} from './encuesta.model';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'RespuestaEncuesta'}}
})
export class RespuestaEncuesta extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {columnName: 'RespuestaEncuestaId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  respuestaEncuestaId: string;
  @property({
    type: 'string',
    postgresql: {columnName: 'Respuesta', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  respuesta?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'PerfilPk', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  perfilPk?: string;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'Active', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  active?: boolean;

  @belongsTo(() => Encuesta)
  encuestaId: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RespuestaEncuesta>) {
    super(data);
  }
}

export interface RespuestaEncuestaRelations {
  // describe navigational properties here
}

export type RespuestaEncuestaWithRelations = RespuestaEncuesta & RespuestaEncuestaRelations;
