import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'RolesPagina'}}
})
export class RolesPagina extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {columnName: 'RolesPaginaid', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  rolesPaginaid: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'PaginaId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  paginaId: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'UsuarioId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  usuarioId?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'Rol', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  rol?: string;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'Active', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  active?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RolesPagina>) {
    super(data);
  }
}

export interface RolesPaginaRelations {
  // describe navigational properties here
}

export type RolesPaginaWithRelations = RolesPagina & RolesPaginaRelations;
