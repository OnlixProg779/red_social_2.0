import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  MarketPlace,
  Perfil,
} from '../models';
import {MarketPlaceRepository} from '../repositories';

export class MarketPlacePerfilController {
  constructor(
    @repository(MarketPlaceRepository)
    public marketPlaceRepository: MarketPlaceRepository,
  ) { }

  @get('/market-places/{id}/perfil', {
    responses: {
      '200': {
        description: 'Perfil belonging to MarketPlace',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Perfil)},
          },
        },
      },
    },
  })
  async getPerfil(
    @param.path.string('id') id: typeof MarketPlace.prototype.marketPlaceId,
  ): Promise<Perfil> {
    return this.marketPlaceRepository.perfil(id);
  }
}
