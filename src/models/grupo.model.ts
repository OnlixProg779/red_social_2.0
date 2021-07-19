import {Entity, model, property} from '@loopback/repository';

@model()
export class Grupo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  grupoId: string;

  @property({
    type: 'date',
  })
  date?: string;

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
    type: 'boolean',
  })
  active?: boolean;


  constructor(data?: Partial<Grupo>) {
    super(data);
  }
}

export interface GrupoRelations {
  // describe navigational properties here
}

export type GrupoWithRelations = Grupo & GrupoRelations;
