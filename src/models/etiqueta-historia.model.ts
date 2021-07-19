import {Entity, model, property} from '@loopback/repository';

@model()
export class EtiquetaHistoria extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  etiquetaHistoriaId: string;

  @property({
    type: 'string',
    required: true,
  })
  usuarioPk: string;

  @property({
    type: 'boolean',
  })
  active?: boolean;


  constructor(data?: Partial<EtiquetaHistoria>) {
    super(data);
  }
}

export interface EtiquetaHistoriaRelations {
  // describe navigational properties here
}

export type EtiquetaHistoriaWithRelations = EtiquetaHistoria & EtiquetaHistoriaRelations;
