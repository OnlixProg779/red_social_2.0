import {Entity, model, property, belongsTo} from '@loopback/repository';
import {RespuestaComentario} from './respuesta-comentario.model';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'ReaccionRespuestaCom'}
  }
})
export class ReaccionRespuestaCom extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {columnName: 'ReaccionRespuestaComId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  reaccionRespuestaComId: string;
  @property({
    type: 'string',
    postgresql: {columnName: 'ReaccionText', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  reaccionText?: string;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'Active', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  active?: boolean;

  @belongsTo(() => RespuestaComentario)
  respuestaComentarioId: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ReaccionRespuestaCom>) {
    super(data);
  }
}

export interface ReaccionRespuestaComRelations {
  // describe navigational properties here
}

export type ReaccionRespuestaComWithRelations = ReaccionRespuestaCom & ReaccionRespuestaComRelations;
