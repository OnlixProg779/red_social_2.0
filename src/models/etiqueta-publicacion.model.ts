import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Publicacion} from './publicacion.model';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'EtiquetaPublicacion'}
  }
})
export class EtiquetaPublicacion extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {columnName: 'EtiquetaPublicacionId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  etiquetaPublicacionId: string;
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

  @belongsTo(() => Publicacion)
  publicacionId: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<EtiquetaPublicacion>) {
    super(data);
  }
}

export interface EtiquetaPublicacionRelations {
  // describe navigational properties here
}

export type EtiquetaPublicacionWithRelations = EtiquetaPublicacion & EtiquetaPublicacionRelations;
