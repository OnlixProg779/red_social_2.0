import {
  belongsTo,
  Entity,
  hasMany,
  hasOne,
  model,
  property,
} from '@loopback/repository';
import {Comentario} from './comentario.model';
import {Encuesta} from './encuesta.model';
import {EtiquetaPublicacion} from './etiqueta-publicacion.model';
import {Perfil} from './perfil.model';
import {ReaccionPublicacion} from './reaccion-publicacion.model';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'Publicacion'},
  },
})
export class Publicacion extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {
      columnName: 'PublicacionId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  publicacionId: string;
  @property({
    type: 'string',
    postgresql: {
      columnName: 'PerfilPublicaPk',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  perfilPublicaPk?: string;

  @property({
    type: 'date',
    postgresql: {
      columnName: 'Date',
      dataType: 'timestamp with time zone',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  date?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'Texto',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  texto?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'Video',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  video?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'Imagen',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  imagen?: string;

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

  @belongsTo(() => Perfil)
  perfilId: string;

  @hasMany(() => ReaccionPublicacion)
  reaccionPublicacions: ReaccionPublicacion[];

  @hasMany(() => EtiquetaPublicacion)
  etiquetasDePublicacion: EtiquetaPublicacion[];

  @hasOne(() => Encuesta)
  encuesta: Encuesta;

  @hasMany(() => Comentario)
  comentarios: Comentario[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Publicacion>) {
    super(data);
  }
}

export interface PublicacionRelations {
  // describe navigational properties here
}

export type PublicacionWithRelations = Publicacion & PublicacionRelations;
