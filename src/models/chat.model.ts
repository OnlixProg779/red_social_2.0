import {Entity, model, property} from '@loopback/repository';

@model()
export class Chat extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  chatId: string;

  @property({
    type: 'string',
  })
  texto?: string;

  @property({
    type: 'date',
  })
  date?: string;

  @property({
    type: 'boolean',
  })
  active?: boolean;


  constructor(data?: Partial<Chat>) {
    super(data);
  }
}

export interface ChatRelations {
  // describe navigational properties here
}

export type ChatWithRelations = Chat & ChatRelations;
