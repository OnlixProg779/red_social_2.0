import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {MarketPlace, MarketPlaceRelations} from '../models';

export class MarketPlaceRepository extends DefaultCrudRepository<
  MarketPlace,
  typeof MarketPlace.prototype.marketPlaceId,
  MarketPlaceRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(MarketPlace, dataSource);
  }
}
