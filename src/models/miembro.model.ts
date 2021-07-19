import {Entity, model, property} from '@loopback/repository';

@model()
export class Miembro extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  miembroId: string;

  @property({
    type: 'string',
  })
  rol?: string;

  @property({
    type: 'boolean',
  })
  banneado?: boolean;

  constructor(data?: Partial<Miembro>) {
    super(data);
  }
}

export interface MiembroRelations {
  // describe navigational properties here
}

export type MiembroWithRelations = Miembro & MiembroRelations;
