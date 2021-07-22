import {Entity, hasMany, model, property} from '@loopback/repository';
import {ListaBloqueadosUsuario} from './lista-bloqueados-usuario.model';
import {Usuario} from './usuario.model';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'ListaBloqueados'},
  },
})
export class ListaBloqueados extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {
      columnName: 'ListaBloqueadosId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  listaBloqueadosId: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'Owner',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  owner?: string;

  @hasMany(() => Usuario, {through: {model: () => ListaBloqueadosUsuario}})
  usuarios: Usuario[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ListaBloqueados>) {
    super(data);
  }
}

export interface ListaBloqueadosRelations {
  // describe navigational properties here
}

export type ListaBloqueadosWithRelations = ListaBloqueados &
  ListaBloqueadosRelations;
