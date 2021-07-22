import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {MarketPlace, Perfil} from '../models';
import {PerfilRepository} from '../repositories';

export class PerfilMarketPlaceController {
  constructor(
    @repository(PerfilRepository) protected perfilRepository: PerfilRepository,
  ) {}

  @get('/perfils/{id}/market-places', {
    responses: {
      '200': {
        description: 'Array of Perfil has many MarketPlace',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(MarketPlace)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<MarketPlace>,
  ): Promise<MarketPlace[]> {
    return this.perfilRepository.marketPlaces(id).find(filter);
  }

  @post('/perfils/{id}/market-places', {
    responses: {
      '200': {
        description: 'Perfil model instance',
        content: {'application/json': {schema: getModelSchemaRef(MarketPlace)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Perfil.prototype.perfilId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MarketPlace, {
            title: 'NewMarketPlaceInPerfil',
            exclude: ['marketPlaceId'],
            optional: ['perfilId'],
          }),
        },
      },
    })
    marketPlace: Omit<MarketPlace, 'marketPlaceId'>,
  ): Promise<MarketPlace> {
    return this.perfilRepository.marketPlaces(id).create(marketPlace);
  }

  @patch('/perfils/{id}/market-places', {
    responses: {
      '200': {
        description: 'Perfil.MarketPlace PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MarketPlace, {partial: true}),
        },
      },
    })
    marketPlace: Partial<MarketPlace>,
    @param.query.object('where', getWhereSchemaFor(MarketPlace))
    where?: Where<MarketPlace>,
  ): Promise<Count> {
    return this.perfilRepository.marketPlaces(id).patch(marketPlace, where);
  }

  @del('/perfils/{id}/market-places', {
    responses: {
      '200': {
        description: 'Perfil.MarketPlace DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(MarketPlace))
    where?: Where<MarketPlace>,
  ): Promise<Count> {
    return this.perfilRepository.marketPlaces(id).delete(where);
  }
}
