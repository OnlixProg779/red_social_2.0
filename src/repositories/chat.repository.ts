import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Chat, ChatRelations, ReaccionChat, Usuario, UsuarioHasChat} from '../models';
import {ReaccionChatRepository} from './reaccion-chat.repository';
import {UsuarioHasChatRepository} from './usuario-has-chat.repository';
import {UsuarioRepository} from './usuario.repository';

export class ChatRepository extends DefaultCrudRepository<
  Chat,
  typeof Chat.prototype.chatId,
  ChatRelations
> {

  public readonly reaccionChats: HasManyRepositoryFactory<ReaccionChat, typeof Chat.prototype.chatId>;

  public readonly usuarios: HasManyThroughRepositoryFactory<Usuario, typeof Usuario.prototype.usuarioId,
          UsuarioHasChat,
          typeof Chat.prototype.chatId
        >;

  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource, @repository.getter('ReaccionChatRepository') protected reaccionChatRepositoryGetter: Getter<ReaccionChatRepository>, @repository.getter('UsuarioHasChatRepository') protected usuarioHasChatRepositoryGetter: Getter<UsuarioHasChatRepository>, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>,
  ) {
    super(Chat, dataSource);
    this.usuarios = this.createHasManyThroughRepositoryFactoryFor('usuarios', usuarioRepositoryGetter, usuarioHasChatRepositoryGetter,);
    this.registerInclusionResolver('usuarios', this.usuarios.inclusionResolver);
    this.reaccionChats = this.createHasManyRepositoryFactoryFor('reaccionChats', reaccionChatRepositoryGetter,);
    this.registerInclusionResolver('reaccionChats', this.reaccionChats.inclusionResolver);
  }
}
