import {Entity, model, property} from '@loopback/repository';

@model()
export class Encuesta extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  encuestaId: string;

  @property({
    type: 'string',
  })
  pregunta?: string;

  @property({
    type: 'boolean',
  })
  active?: boolean;


  constructor(data?: Partial<Encuesta>) {
    super(data);
  }
}

export interface EncuestaRelations {
  // describe navigational properties here
}

export type EncuestaWithRelations = Encuesta & EncuestaRelations;
