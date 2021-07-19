import {Entity, model, property} from '@loopback/repository';

@model()
export class Amistad extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  amistadId: string;

  @property({
    type: 'boolean',
  })
  acceptAmistad?: boolean; // cuando tiene el signo de interrogacion quiere decir q es opcinal.

  @property({
    type: 'boolean',
  })
  siguiendo?: boolean;

  @property({
    type: 'boolean',
  })
  bloq?: boolean;

  @property({
    type: 'boolean',
  })
  active?: boolean;

  constructor(data?: Partial<Amistad>) {
    super(data);
  }
}

export interface AmistadRelations {
  // describe navigational properties here
}

export type AmistadWithRelations = Amistad & AmistadRelations;
