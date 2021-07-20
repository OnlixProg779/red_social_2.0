import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {ReaccionChat, ReaccionChatRelations} from '../models';

export class ReaccionChatRepository extends DefaultCrudRepository<
  ReaccionChat,
  typeof ReaccionChat.prototype.reaccionChatId,
  ReaccionChatRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(ReaccionChat, dataSource);
  }
}
