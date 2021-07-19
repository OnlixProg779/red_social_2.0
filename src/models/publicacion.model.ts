import {Entity, model, property} from '@loopback/repository';

@model()
export class Publicacion extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  publicacionId: string;

  @property({
    type: 'date',
  })
  date?: string;

  @property({
    type: 'string',
  })
  texto?: string;

  @property({
    type: 'string',
  })
  video?: string;

  @property({
    type: 'string',
  })
  imagen?: string;

  @property({
    type: 'boolean',
  })
  active?: boolean;

  constructor(data?: Partial<Publicacion>) {
    super(data);
  }
}

export interface PublicacionRelations {
  // describe navigational properties here
}

export type PublicacionWithRelations = Publicacion & PublicacionRelations;
