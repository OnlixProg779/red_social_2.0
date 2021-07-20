import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Comentario} from './comentario.model';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'EtiquetaComentario'}
  }
})
export class EtiquetaComentario extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {columnName: 'EtiquetaComentarioId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  etiquetaComentarioId: string;
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

  @belongsTo(() => Comentario)
  comentarioId: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<EtiquetaComentario>) {
    super(data);
  }
}

export interface EtiquetaComentarioRelations {
  // describe navigational properties here
}

export type EtiquetaComentarioWithRelations = EtiquetaComentario & EtiquetaComentarioRelations;
