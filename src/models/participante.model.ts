import {Entity, model, property} from '@loopback/repository';

@model()
export class Participante extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  participanteId: string;

  @property({
    type: 'string',
    required: true,
  })
  rol: string;

  @property({
    type: 'string',
  })
  respuesta?: string;


  constructor(data?: Partial<Participante>) {
    super(data);
  }
}

export interface ParticipanteRelations {
  // describe navigational properties here
}

export type ParticipanteWithRelations = Participante & ParticipanteRelations;
