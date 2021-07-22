import {Entity, hasMany, model, property} from '@loopback/repository';
import {Chat} from './chat.model';
import {Evento} from './evento.model';
import {Grupo} from './grupo.model';
import {ListaAmistadesUsuario} from './lista-amistades-usuario.model';
import {ListaAmistades} from './lista-amistades.model';
import {ListaBloqueadosUsuario} from './lista-bloqueados-usuario.model';
import {ListaBloqueados} from './lista-bloqueados.model';
import {ListaSeguidoresUsuario} from './lista-seguidores-usuario.model';
import {ListaSeguidores} from './lista-seguidores.model';
import {Miembro} from './miembro.model';
import {Notificacion} from './notificacion.model';
import {Participante} from './participante.model';
import {Perfil} from './perfil.model';
import {RolesPagina} from './roles-pagina.model';
import {UsuarioClaim} from './usuario-claim.model';
import {UsuarioHasChat} from './usuario-has-chat.model';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'Usuario'},
  },
})
export class Usuario extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {
      columnName: 'UsuarioId',
      dataType: 'uuid',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  usuarioId: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'Email',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  email?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'Password',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  password?: string;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'Bloq',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  bloq?: boolean;

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

  @hasMany(() => Notificacion)
  notificaciones: Notificacion[];

  @hasMany(() => UsuarioClaim)
  usuarioClaims: UsuarioClaim[];

  @hasMany(() => Grupo, {through: {model: () => Miembro}})
  grupos: Grupo[];

  @hasMany(() => Evento, {through: {model: () => Participante}})
  eventos: Evento[];

  @hasMany(() => Chat, {through: {model: () => UsuarioHasChat}})
  chats: Chat[];

  @hasMany(() => ListaBloqueados, {
    through: {model: () => ListaBloqueadosUsuario},
  })
  listaBloqueados: ListaBloqueados[];

  @hasMany(() => ListaSeguidores, {
    through: {model: () => ListaSeguidoresUsuario},
  })
  listaSeguidores: ListaSeguidores[];

  @hasMany(() => ListaAmistades, {
    through: {model: () => ListaAmistadesUsuario},
  })
  listaAmistades: ListaAmistades[];

  @hasMany(() => Perfil, {through: {model: () => RolesPagina}})
  perfils: Perfil[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
