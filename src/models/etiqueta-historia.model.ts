import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Historia} from './historia.model';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'EtiquetaHistoria'}}
})
export class EtiquetaHistoria extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {columnName: 'EtiquetaHistoriaId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  etiquetaHistoriaId: string;
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

  @belongsTo(() => Historia)
  historiaId: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<EtiquetaHistoria>) {
    super(data);
  }
}

export interface EtiquetaHistoriaRelations {
  // describe navigational properties here
}

export type EtiquetaHistoriaWithRelations = EtiquetaHistoria & EtiquetaHistoriaRelations;
