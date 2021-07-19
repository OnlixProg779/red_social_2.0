import {Entity, model, property} from '@loopback/repository';

@model()
export class RespuestaEncuesta extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  respuestaEncuestaId: string;

  @property({
    type: 'string',
  })
  respuesta?: string;

  @property({
    type: 'string',
  })
  usuarioPk?: string;

  @property({
    type: 'boolean',
  })
  active?: boolean;


  constructor(data?: Partial<RespuestaEncuesta>) {
    super(data);
  }
}

export interface RespuestaEncuestaRelations {
  // describe navigational properties here
}

export type RespuestaEncuestaWithRelations = RespuestaEncuesta & RespuestaEncuestaRelations;
