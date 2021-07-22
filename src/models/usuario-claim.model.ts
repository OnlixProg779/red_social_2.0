import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Usuario} from './usuario.model';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'UsuarioClaim'},
  },
})
export class UsuarioClaim extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {
      columnName: 'UsuarioClaimId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  usuarioClaimId: string;
  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'ClaimType',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  claimType: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'ClaimValue',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  claimValue: string;

  @belongsTo(() => Usuario)
  usuarioId: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UsuarioClaim>) {
    super(data);
  }
}

export interface UsuarioClaimRelations {
  // describe navigational properties here
}

export type UsuarioClaimWithRelations = UsuarioClaim & UsuarioClaimRelations;
