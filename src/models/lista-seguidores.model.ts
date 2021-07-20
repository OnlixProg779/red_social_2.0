import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'ListaSeguidores'}}
})
export class ListaSeguidores extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {columnName: 'ListaSeguidoresId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  listaSeguidoresId: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'Owner', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  owner?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ListaSeguidores>) {
    super(data);
  }
}

export interface ListaSeguidoresRelations {
  // describe navigational properties here
}

export type ListaSeguidoresWithRelations = ListaSeguidores & ListaSeguidoresRelations;
