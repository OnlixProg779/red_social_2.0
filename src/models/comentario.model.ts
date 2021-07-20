import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Publicacion} from './publicacion.model';
import {EtiquetaComentario} from './etiqueta-comentario.model';
import {Reaccion} from './reaccion.model';
import {RespuestaComentario} from './respuesta-comentario.model';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'Comentario'}}
})
export class Comentario extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {columnName: 'ComentarioId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  comentarioId: string;
  @property({
    type: 'date',
    postgresql: {columnName: 'Date', dataType: 'timestamp with time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  date?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'ComentarioRefId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  comentarioRefId?: string;

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

  @belongsTo(() => Publicacion)
  publicacionId: string;

  @hasMany(() => EtiquetaComentario)
  etiquetaComentarios: EtiquetaComentario[];

  @hasMany(() => Reaccion)
  reaccions: Reaccion[];

  @hasMany(() => RespuestaComentario)
  respuestaComentarios: RespuestaComentario[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Comentario>) {
    super(data);
  }
}

export interface ComentarioRelations {
  // describe navigational properties here
}

export type ComentarioWithRelations = Comentario & ComentarioRelations;
