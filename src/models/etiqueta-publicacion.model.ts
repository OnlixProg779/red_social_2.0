import {Entity, model, property} from '@loopback/repository';

@model()
export class EtiquetaPublicacion extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  etiquetaPublicacionId: string;

  @property({
    type: 'string',
    required: true,
  })
  usuarioPk: string;

  @property({
    type: 'boolean',
  })
  active?: boolean;


  constructor(data?: Partial<EtiquetaPublicacion>) {
    super(data);
  }
}

export interface EtiquetaPublicacionRelations {
  // describe navigational properties here
}

export type EtiquetaPublicacionWithRelations = EtiquetaPublicacion & EtiquetaPublicacionRelations;
