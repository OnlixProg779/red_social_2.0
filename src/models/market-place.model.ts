import {Entity, model, property} from '@loopback/repository';

@model()
export class MarketPlace extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  marketplaceId: string;

  @property({
    type: 'string',
  })
  categoria?: string;

  @property({
    type: 'string',
    required: true,
  })
  producto?: string;

  @property({
    type: 'string',
  })
  ubicacion?: string;

  @property({
    type: 'number',
    required: true,
  })
  precio?: number;

  @property({
    type: 'date',
  })
  date?: string;

  @property({
    type: 'string',
    required: true,
  })
  imagen: string;

  @property({
    type: 'boolean',
  })
  vendido?: boolean;

  @property({
    type: 'boolean',
  })
  active?: boolean;

  constructor(data?: Partial<MarketPlace>) {
    super(data);
  }
}

export interface MarketPlaceRelations {
  // describe navigational properties here
}

export type MarketPlaceWithRelations = MarketPlace & MarketPlaceRelations;
