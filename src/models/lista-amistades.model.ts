import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'ListaAmistades'}}
})
export class ListaAmistades extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {columnName: 'ListaAmistadesId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  listaAmistadesId: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'Owner', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  owner?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ListaAmistades>) {
    super(data);
  }
}

export interface ListaAmistadesRelations {
  // describe navigational properties here
}

export type ListaAmistadesWithRelations = ListaAmistades & ListaAmistadesRelations;
