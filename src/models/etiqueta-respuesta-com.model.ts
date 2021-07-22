import {belongsTo, Entity, model, property} from '@loopback/repository';
import {RespuestaComentario} from './respuesta-comentario.model';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'EtiquetaRespuestaCom'},
  },
})
export class EtiquetaRespuestaCom extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {
      columnName: 'EtiquetaRespuestaComId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  etiquetaRespuestaComId: string;
  @property({
    type: 'string',
    postgresql: {
      columnName: 'PerfilPk',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  perfilPk?: string;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'Active',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  active?: boolean;

  @belongsTo(() => RespuestaComentario)
  respuestaComentarioId: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<EtiquetaRespuestaCom>) {
    super(data);
  }
}

export interface EtiquetaRespuestaComRelations {
  // describe navigational properties here
}

export type EtiquetaRespuestaComWithRelations = EtiquetaRespuestaCom &
  EtiquetaRespuestaComRelations;
