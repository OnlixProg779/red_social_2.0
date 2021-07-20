import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'MarketPlace'}}
})
export class MarketPlace extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {columnName: 'MarketPlaceId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  marketPlaceId: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'UsuarioId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  usuarioId?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'Categoria', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  categoria?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'Producto', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  producto?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'Ubicacion', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  ubicacion?: string;

  @property({
    type: 'number',
    precision: 24,
    postgresql: {columnName: 'Precio', dataType: 'float', dataLength: null, dataPrecision: 24, dataScale: null, nullable: 'YES'},
  })
  precio?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'Date', dataType: 'timestamp with time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  date?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'Imagen', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  imagen?: string;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'Vendido', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  vendido?: boolean;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'Active', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  active?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MarketPlace>) {
    super(data);
  }
}

export interface MarketPlaceRelations {
  // describe navigational properties here
}

export type MarketPlaceWithRelations = MarketPlace & MarketPlaceRelations;
