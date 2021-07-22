import {Getter, inject} from '@loopback/core';
import {
  DefaultCrudRepository,
  HasManyThroughRepositoryFactory,
  repository,
} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Evento, EventoRelations, Participante, Usuario} from '../models';
import {ParticipanteRepository} from './participante.repository';
import {UsuarioRepository} from './usuario.repository';

export class EventoRepository extends DefaultCrudRepository<
  Evento,
  typeof Evento.prototype.eventoId,
  EventoRelations
> {
  public readonly usuarios: HasManyThroughRepositoryFactory<
    Usuario,
    typeof Usuario.prototype.usuarioId,
    Participante,
    typeof Evento.prototype.eventoId
  >;

  constructor(
    @inject('datasources.RedSocialContext')
    dataSource: RedSocialContextDataSource,
    @repository.getter('ParticipanteRepository')
    protected participanteRepositoryGetter: Getter<ParticipanteRepository>,
    @repository.getter('UsuarioRepository')
    protected usuarioRepositoryGetter: Getter<UsuarioRepository>,
  ) {
    super(Evento, dataSource);
    this.usuarios = this.createHasManyThroughRepositoryFactoryFor(
      'usuarios',
      usuarioRepositoryGetter,
      participanteRepositoryGetter,
    );
    this.registerInclusionResolver('usuarios', this.usuarios.inclusionResolver);
  }
}
