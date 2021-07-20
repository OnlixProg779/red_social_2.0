import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Comentario} from './comentario.model';
import {ReaccionRespuestaCom} from './reaccion-respuesta-com.model';
import {EtiquetaRespuestaCom} from './etiqueta-respuesta-com.model';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'RespuestaComentario'}
  }
})
export class RespuestaComentario extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {columnName: 'RespuestaComentarioId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  respuestaComentarioId: string;
  @property({
    type: 'date',
    postgresql: {columnName: 'Date', dataType: 'timestamp with time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  date?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'Texto', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  texto?: string;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'Active', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  active?: boolean;

  @belongsTo(() => Comentario)
  comentarioId: string;

  @hasMany(() => ReaccionRespuestaCom)
  reaccionRespuestaComs: ReaccionRespuestaCom[];

  @hasMany(() => EtiquetaRespuestaCom)
  etiquetaRespuestaComs: EtiquetaRespuestaCom[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RespuestaComentario>) {
    super(data);
  }
}

export interface RespuestaComentarioRelations {
  // describe navigational properties here
}

export type RespuestaComentarioWithRelations = RespuestaComentario & RespuestaComentarioRelations;
