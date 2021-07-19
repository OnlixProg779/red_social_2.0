import {Entity, model, property} from '@loopback/repository';

@model()
export class Historia extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  historiaId: string;

  @property({
    type: 'date',
  })
  date?: string;

  @property({
    type: 'string',
  })
  imagen?: string;

  @property({
    type: 'string',
  })
  video?: string;

  @property({
    type: 'string',
  })
  texto?: string;

  @property({
    type: 'boolean',
  })
  active?: boolean;


  constructor(data?: Partial<Historia>) {
    super(data);
  }
}

export interface HistoriaRelations {
  // describe navigational properties here
}

export type HistoriaWithRelations = Historia & HistoriaRelations;
