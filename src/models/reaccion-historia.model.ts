import {Entity, model, property} from '@loopback/repository';

@model()
export class ReaccionHistoria extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  reaccionHistoriaId: string;

  @property({
    type: 'string',
  })
  reaccionText?: string;

  @property({
    type: 'string',
  })
  active?: string;


  constructor(data?: Partial<ReaccionHistoria>) {
    super(data);
  }
}

export interface ReaccionHistoriaRelations {
  // describe navigational properties here
}

export type ReaccionHistoriaWithRelations = ReaccionHistoria & ReaccionHistoriaRelations;
