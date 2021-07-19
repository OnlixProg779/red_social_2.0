import {Entity, model, property} from '@loopback/repository';

@model()
export class Notificacion extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  notificacionId: string;

  @property({
    type: 'string',
  })
  record?: string;

  @property({
    type: 'string',
  })
  anyId?: string;

  @property({
    type: 'boolean',
  })
  leido?: boolean;

  @property({
    type: 'boolean',
  })
  active?: boolean;


  constructor(data?: Partial<Notificacion>) {
    super(data);
  }
}

export interface NotificacionRelations {
  // describe navigational properties here
}

export type NotificacionWithRelations = Notificacion & NotificacionRelations;
