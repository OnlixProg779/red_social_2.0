import {Entity, model, property} from '@loopback/repository';

@model()
export class UsuarioClaim extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  usuarioClaimId: string;

  @property({
    type: 'string',
  })
  claimType?: string;

  @property({
    type: 'string',
  })
  claimValue?: string;


  constructor(data?: Partial<UsuarioClaim>) {
    super(data);
  }
}

export interface UsuarioClaimRelations {
  // describe navigational properties here
}

export type UsuarioClaimWithRelations = UsuarioClaim & UsuarioClaimRelations;
