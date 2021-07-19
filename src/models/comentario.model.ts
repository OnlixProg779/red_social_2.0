import {Entity, model, property} from '@loopback/repository';

@model()
export class Comentario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  comentarioId: string;

  @property({
    type: 'string',
  })
  texto?: string;

  @property({
    type: 'boolean',
  })
  active?: boolean;


  constructor(data?: Partial<Comentario>) {
    super(data);
  }
}

export interface ComentarioRelations {
  // describe navigational properties here
}

export type ComentarioWithRelations = Comentario & ComentarioRelations;
