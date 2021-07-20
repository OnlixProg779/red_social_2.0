import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'ListaAmistadesUsuario'}
  }
})
export class ListaAmistadesUsuario extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {columnName: 'ListaAmistadesUsuarioId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  listaAmistadesUsuarioId: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'ListaAmistadesId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  listaAmistadesId: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'UsuarioId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  usuarioId: string;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'AcceptAmistad', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  acceptAmistad?: boolean;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'Bloq', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  bloq?: boolean;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'Active', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  active?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ListaAmistadesUsuario>) {
    super(data);
  }
}

export interface ListaAmistadesUsuarioRelations {
  // describe navigational properties here
}

export type ListaAmistadesUsuarioWithRelations = ListaAmistadesUsuario & ListaAmistadesUsuarioRelations;
