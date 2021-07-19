import {Entity, model, property} from '@loopback/repository';

@model()
export class Evento extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  eventoId: string;

  @property({
    type: 'string',
  })
  logo?: string;

  @property({
    type: 'string',
  })
  portada?: string;

  @property({
    type: 'string',
  })
  descripcion?: string;

  @property({
    type: 'string',
  })
  tipo?: string;

  @property({
    type: 'date',
  })
  date?: string;

  @property({
    type: 'boolean',
  })
  active?: boolean;


  constructor(data?: Partial<Evento>) {
    super(data);
  }
}

export interface EventoRelations {
  // describe navigational properties here
}

export type EventoWithRelations = Evento & EventoRelations;
