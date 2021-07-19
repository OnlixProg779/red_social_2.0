import {Entity, model, property} from '@loopback/repository';

@model()
export class Perfil extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  perfilId: string;

  @property({
    type: 'string',
  })
  foto?: string;

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
  frase?: string;

  @property({
    type: 'date',
  })
  nacimiento?: string;

  @property({
    type: 'string',
  })
  trabajo?: string;

  @property({
    type: 'string',
  })
  estudio?: string;


  constructor(data?: Partial<Perfil>) {
    super(data);
  }
}

export interface PerfilRelations {
  // describe navigational properties here
}

export type PerfilWithRelations = Perfil & PerfilRelations;
