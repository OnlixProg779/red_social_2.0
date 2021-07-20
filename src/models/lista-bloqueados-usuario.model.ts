import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'ListaBloqueadosUsuario'}
  }
})
export class ListaBloqueadosUsuario extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {columnName: 'ListaBloqueadosUsuarioId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  listaBloqueadosUsuarioId: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'ListaBloqueadosId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  listaBloqueadosId: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'UsuarioId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  usuarioId: string;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'Active', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  active?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ListaBloqueadosUsuario>) {
    super(data);
  }
}

export interface ListaBloqueadosUsuarioRelations {
  // describe navigational properties here
}

export type ListaBloqueadosUsuarioWithRelations = ListaBloqueadosUsuario & ListaBloqueadosUsuarioRelations;
