import {Entity, model, property} from '@loopback/repository';

@model()
export class ReaccionChat extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  reaccionChatId: string;

  @property({
    type: 'string',
  })
  reaccionText?: string;

  @property({
    type: 'boolean',
  })
  active?: boolean;


  constructor(data?: Partial<ReaccionChat>) {
    super(data);
  }
}

export interface ReaccionChatRelations {
  // describe navigational properties here
}

export type ReaccionChatWithRelations = ReaccionChat & ReaccionChatRelations;
