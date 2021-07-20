import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Chat, ChatRelations} from '../models';

export class ChatRepository extends DefaultCrudRepository<
  Chat,
  typeof Chat.prototype.chatId,
  ChatRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(Chat, dataSource);
  }
}
