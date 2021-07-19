import {Entity, model, property} from '@loopback/repository';

@model()
export class Reaccion extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  reaccionId: string;

  @property({
    type: 'string',
  })
  reaccionText?: string;

  @property({
    type: 'string',
  })
  active?: string;


  constructor(data?: Partial<Reaccion>) {
    super(data);
  }
}

export interface ReaccionRelations {
  // describe navigational properties here
}

export type ReaccionWithRelations = Reaccion & ReaccionRelations;
