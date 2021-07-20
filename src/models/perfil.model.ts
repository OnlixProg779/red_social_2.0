import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'Perfil'}}
})
export class Perfil extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {columnName: 'PerfilId', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  perfilId: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'Foto', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  foto?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'Logo', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  logo?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'Portada', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  portada?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'Frase', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  frase?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'Nacimiento', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  nacimiento?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'Trabajo', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  trabajo?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'Estudio', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  estudio?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'Tipo', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  tipo?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Perfil>) {
    super(data);
  }
}

export interface PerfilRelations {
  // describe navigational properties here
}

export type PerfilWithRelations = Perfil & PerfilRelations;
