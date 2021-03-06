import {Getter, inject} from '@loopback/core';
import {
  DefaultCrudRepository,
  HasManyRepositoryFactory,
  HasManyThroughRepositoryFactory,
  repository,
} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {
  Chat,
  Evento,
  Grupo,
  ListaAmistades,
  ListaAmistadesUsuario,
  ListaBloqueados,
  ListaBloqueadosUsuario,
  ListaSeguidores,
  ListaSeguidoresUsuario,
  Miembro,
  Participante,
  Perfil,
  RolesPagina,
  Usuario,
  UsuarioClaim,
  UsuarioHasChat,
  UsuarioRelations, Notificacion} from '../models';
import {ChatRepository} from './chat.repository';
import {EventoRepository} from './evento.repository';
import {GrupoRepository} from './grupo.repository';
import {ListaAmistadesUsuarioRepository} from './lista-amistades-usuario.repository';
import {ListaAmistadesRepository} from './lista-amistades.repository';
import {ListaBloqueadosUsuarioRepository} from './lista-bloqueados-usuario.repository';
import {ListaBloqueadosRepository} from './lista-bloqueados.repository';
import {ListaSeguidoresUsuarioRepository} from './lista-seguidores-usuario.repository';
import {ListaSeguidoresRepository} from './lista-seguidores.repository';
import {MiembroRepository} from './miembro.repository';
import {ParticipanteRepository} from './participante.repository';
import {PerfilRepository} from './perfil.repository';
import {RolesPaginaRepository} from './roles-pagina.repository';
import {UsuarioClaimRepository} from './usuario-claim.repository';
import {UsuarioHasChatRepository} from './usuario-has-chat.repository';
import {NotificacionRepository} from './notificacion.repository';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.usuarioId,
  UsuarioRelations
> {
  public readonly usuarioClaims: HasManyRepositoryFactory<
    UsuarioClaim,
    typeof Usuario.prototype.usuarioId
  >;

  public readonly grupos: HasManyThroughRepositoryFactory<
    Grupo,
    typeof Grupo.prototype.grupoId,
    Miembro,
    typeof Usuario.prototype.usuarioId
  >;

  public readonly eventos: HasManyThroughRepositoryFactory<
    Evento,
    typeof Evento.prototype.eventoId,
    Participante,
    typeof Usuario.prototype.usuarioId
  >;

  public readonly chats: HasManyThroughRepositoryFactory<
    Chat,
    typeof Chat.prototype.chatId,
    UsuarioHasChat,
    typeof Usuario.prototype.usuarioId
  >;

  public readonly listaBloqueados: HasManyThroughRepositoryFactory<
    ListaBloqueados,
    typeof ListaBloqueados.prototype.listaBloqueadosId,
    ListaBloqueadosUsuario,
    typeof Usuario.prototype.usuarioId
  >;

  public readonly listaSeguidores: HasManyThroughRepositoryFactory<
    ListaSeguidores,
    typeof ListaSeguidores.prototype.listaSeguidoresId,
    ListaSeguidoresUsuario,
    typeof Usuario.prototype.usuarioId
  >;

  public readonly listaAmistades: HasManyThroughRepositoryFactory<
    ListaAmistades,
    typeof ListaAmistades.prototype.listaAmistadesId,
    ListaAmistadesUsuario,
    typeof Usuario.prototype.usuarioId
  >;

  public readonly perfils: HasManyThroughRepositoryFactory<
    Perfil,
    typeof Perfil.prototype.perfilId,
    RolesPagina,
    typeof Usuario.prototype.usuarioId
  >;

  public readonly notificacions: HasManyRepositoryFactory<Notificacion, typeof Usuario.prototype.usuarioId>;

  constructor(
    @inject('datasources.RedSocialContext')
    dataSource: RedSocialContextDataSource,
    @repository.getter('UsuarioClaimRepository')
    protected usuarioClaimRepositoryGetter: Getter<UsuarioClaimRepository>,
    @repository.getter('MiembroRepository')
    protected miembroRepositoryGetter: Getter<MiembroRepository>,
    @repository.getter('GrupoRepository')
    protected grupoRepositoryGetter: Getter<GrupoRepository>,
    @repository.getter('ParticipanteRepository')
    protected participanteRepositoryGetter: Getter<ParticipanteRepository>,
    @repository.getter('EventoRepository')
    protected eventoRepositoryGetter: Getter<EventoRepository>,
    @repository.getter('UsuarioHasChatRepository')
    protected usuarioHasChatRepositoryGetter: Getter<UsuarioHasChatRepository>,
    @repository.getter('ChatRepository')
    protected chatRepositoryGetter: Getter<ChatRepository>,
    @repository.getter('ListaBloqueadosUsuarioRepository')
    protected listaBloqueadosUsuarioRepositoryGetter: Getter<ListaBloqueadosUsuarioRepository>,
    @repository.getter('ListaBloqueadosRepository')
    protected listaBloqueadosRepositoryGetter: Getter<ListaBloqueadosRepository>,
    @repository.getter('ListaSeguidoresUsuarioRepository')
    protected listaSeguidoresUsuarioRepositoryGetter: Getter<ListaSeguidoresUsuarioRepository>,
    @repository.getter('ListaSeguidoresRepository')
    protected listaSeguidoresRepositoryGetter: Getter<ListaSeguidoresRepository>,
    @repository.getter('ListaAmistadesUsuarioRepository')
    protected listaAmistadesUsuarioRepositoryGetter: Getter<ListaAmistadesUsuarioRepository>,
    @repository.getter('ListaAmistadesRepository')
    protected listaAmistadesRepositoryGetter: Getter<ListaAmistadesRepository>,
    @repository.getter('RolesPaginaRepository')
    protected rolesPaginaRepositoryGetter: Getter<RolesPaginaRepository>,
    @repository.getter('PerfilRepository')
    protected perfilRepositoryGetter: Getter<PerfilRepository>, @repository.getter('NotificacionRepository') protected notificacionRepositoryGetter: Getter<NotificacionRepository>,
  ) {
    super(Usuario, dataSource);
    this.notificacions = this.createHasManyRepositoryFactoryFor('notificacions', notificacionRepositoryGetter,);
    this.perfils = this.createHasManyThroughRepositoryFactoryFor(
      'perfils',
      perfilRepositoryGetter,
      rolesPaginaRepositoryGetter,
    );
    this.registerInclusionResolver('perfils', this.perfils.inclusionResolver);
    this.listaAmistades = this.createHasManyThroughRepositoryFactoryFor(
      'listaAmistades',
      listaAmistadesRepositoryGetter,
      listaAmistadesUsuarioRepositoryGetter,
    );
    this.registerInclusionResolver(
      'listaAmistades',
      this.listaAmistades.inclusionResolver,
    );
    this.listaSeguidores = this.createHasManyThroughRepositoryFactoryFor(
      'listaSeguidores',
      listaSeguidoresRepositoryGetter,
      listaSeguidoresUsuarioRepositoryGetter,
    );
    this.registerInclusionResolver(
      'listaSeguidores',
      this.listaSeguidores.inclusionResolver,
    );
    this.listaBloqueados = this.createHasManyThroughRepositoryFactoryFor(
      'listaBloqueados',
      listaBloqueadosRepositoryGetter,
      listaBloqueadosUsuarioRepositoryGetter,
    );
    this.registerInclusionResolver(
      'listaBloqueados',
      this.listaBloqueados.inclusionResolver,
    );
    this.chats = this.createHasManyThroughRepositoryFactoryFor(
      'chats',
      chatRepositoryGetter,
      usuarioHasChatRepositoryGetter,
    );
    this.registerInclusionResolver('chats', this.chats.inclusionResolver);
    this.eventos = this.createHasManyThroughRepositoryFactoryFor(
      'eventos',
      eventoRepositoryGetter,
      participanteRepositoryGetter,
    );
    this.registerInclusionResolver('eventos', this.eventos.inclusionResolver);
    this.grupos = this.createHasManyThroughRepositoryFactoryFor(
      'grupos',
      grupoRepositoryGetter,
      miembroRepositoryGetter,
    );
    this.registerInclusionResolver('grupos', this.grupos.inclusionResolver);
    this.usuarioClaims = this.createHasManyRepositoryFactoryFor(
      'usuarioClaims',
      usuarioClaimRepositoryGetter,
    );
    this.registerInclusionResolver(
      'usuarioClaims',
      this.usuarioClaims.inclusionResolver,
    );
  }
}
