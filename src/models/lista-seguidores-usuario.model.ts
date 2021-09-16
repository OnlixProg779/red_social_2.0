import {Entity, model, property} from '@loopback/repository';
// import {v4 as uuidv4} from 'uuid';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'ListaSeguidoresUsuario'},
  },
})
export class ListaSeguidoresUsuario extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {
      columnName: 'ListaSeguidoresUsuarioId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  listaSeguidoresUsuarioId: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'ListaSeguidoresId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  listaSeguidoresId: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'UsuarioId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  usuarioId: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ListaSeguidoresUsuario>) {
    super(data);
  }
}

export interface ListaSeguidoresUsuarioRelations {
  // describe navigational properties here
}

export type ListaSeguidoresUsuarioWithRelations = ListaSeguidoresUsuario &
  ListaSeguidoresUsuarioRelations;
