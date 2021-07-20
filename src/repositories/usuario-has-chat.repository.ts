import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {UsuarioHasChat, UsuarioHasChatRelations} from '../models';

export class UsuarioHasChatRepository extends DefaultCrudRepository<
  UsuarioHasChat,
  typeof UsuarioHasChat.prototype.usuarioHasChatId,
  UsuarioHasChatRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(UsuarioHasChat, dataSource);
  }
}
