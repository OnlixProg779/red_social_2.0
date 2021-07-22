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
import {ListaAmistades, Usuario} from '../../models';
import {UsuarioRepository} from '../../repositories';

export class UsuarioListaAmistadesController {
  constructor(
    @repository(UsuarioRepository)
    protected usuarioRepository: UsuarioRepository,
  ) {}

  @get('/usuarios/{id}/lista-amistades', {
    responses: {
      '200': {
        description:
          'Array of Usuario has many ListaAmistades through ListaAmistadesUsuario',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ListaAmistades)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<ListaAmistades>,
  ): Promise<ListaAmistades[]> {
    return this.usuarioRepository.listaAmistades(id).find(filter);
  }

  @post('/usuarios/{id}/lista-amistades', {
    responses: {
      '200': {
        description: 'create a ListaAmistades model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(ListaAmistades)},
        },
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Usuario.prototype.usuarioId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaAmistades, {
            title: 'NewListaAmistadesInUsuario',
            exclude: ['listaAmistadesId'],
          }),
        },
      },
    })
    listaAmistades: Omit<ListaAmistades, 'listaAmistadesId'>,
  ): Promise<ListaAmistades> {
    return this.usuarioRepository.listaAmistades(id).create(listaAmistades);
  }

  @patch('/usuarios/{id}/lista-amistades', {
    responses: {
      '200': {
        description: 'Usuario.ListaAmistades PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaAmistades, {partial: true}),
        },
      },
    })
    listaAmistades: Partial<ListaAmistades>,
    @param.query.object('where', getWhereSchemaFor(ListaAmistades))
    where?: Where<ListaAmistades>,
  ): Promise<Count> {
    return this.usuarioRepository
      .listaAmistades(id)
      .patch(listaAmistades, where);
  }

  @del('/usuarios/{id}/lista-amistades', {
    responses: {
      '200': {
        description: 'Usuario.ListaAmistades DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(ListaAmistades))
    where?: Where<ListaAmistades>,
  ): Promise<Count> {
    return this.usuarioRepository.listaAmistades(id).delete(where);
  }
}
