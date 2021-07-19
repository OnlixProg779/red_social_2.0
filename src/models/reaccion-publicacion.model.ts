import {Entity, model, property} from '@loopback/repository';

@model()
export class ReaccionPublicacion extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  reaccionPublicacionId: string;

  @property({
    type: 'string',
  })
  ReaccionText?: string;

  @property({
    type: 'boolean',
  })
  active?: boolean;


  constructor(data?: Partial<ReaccionPublicacion>) {
    super(data);
  }
}

export interface ReaccionPublicacionRelations {
  // describe navigational properties here
}

export type ReaccionPublicacionWithRelations = ReaccionPublicacion & ReaccionPublicacionRelations;
