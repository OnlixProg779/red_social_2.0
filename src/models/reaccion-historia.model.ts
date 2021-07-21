import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Historia} from './historia.model';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'ReaccionHistoria'}}
})
export class ReaccionHistoria extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {columnName: 'ReaccionHistoriaId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  reaccionHistoriaId: string;
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

  @belongsTo(() => Historia)
  historiaId: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ReaccionHistoria>) {
    super(data);
  }
}

export interface ReaccionHistoriaRelations {
  // describe navigational properties here
}

export type ReaccionHistoriaWithRelations = ReaccionHistoria & ReaccionHistoriaRelations;
