import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {ReaccionChat, ReaccionChatRelations, Chat} from '../models';
import {ChatRepository} from './chat.repository';

export class ReaccionChatRepository extends DefaultCrudRepository<
  ReaccionChat,
  typeof ReaccionChat.prototype.reaccionChatId,
  ReaccionChatRelations
> {

  public readonly chat: BelongsToAccessor<Chat, typeof ReaccionChat.prototype.reaccionChatId>;

  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource, @repository.getter('ChatRepository') protected chatRepositoryGetter: Getter<ChatRepository>,
  ) {
    super(ReaccionChat, dataSource);
    this.chat = this.createBelongsToAccessorFor('chat', chatRepositoryGetter,);
    this.registerInclusionResolver('chat', this.chat.inclusionResolver);
  }
}
