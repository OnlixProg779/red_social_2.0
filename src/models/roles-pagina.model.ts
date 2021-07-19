import {Entity, model, property} from '@loopback/repository';

@model()
export class RolesPagina extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  rolesPaginaId: string;

  @property({
    type: 'string',
  })
  rol?: string;

  @property({
    type: 'boolean',
  })
  active?: boolean;

  constructor(data?: Partial<RolesPagina>) {
    super(data);
  }
}

export interface RolesPaginaRelations {
  // describe navigational properties here
}

export type RolesPaginaWithRelations = RolesPagina & RolesPaginaRelations;
