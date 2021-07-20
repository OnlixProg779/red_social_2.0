import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'ReaccionPublicacion'}
  }
})
export class ReaccionPublicacion extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {columnName: 'ReaccionPublicacionId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  reaccionPublicacionId: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'PublicacionId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  publicacionId?: string;

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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ReaccionPublicacion>) {
    super(data);
  }
}

export interface ReaccionPublicacionRelations {
  // describe navigational properties here
}

export type ReaccionPublicacionWithRelations = ReaccionPublicacion & ReaccionPublicacionRelations;
