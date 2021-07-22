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
import {ListaSeguidores, Usuario} from '../models';
import {UsuarioRepository} from '../repositories';

export class UsuarioListaSeguidoresController {
  constructor(
    @repository(UsuarioRepository)
    protected usuarioRepository: UsuarioRepository,
  ) {}

  @get('/usuarios/{id}/lista-seguidores', {
    responses: {
      '200': {
        description:
          'Array of Usuario has many ListaSeguidores through ListaSeguidoresUsuario',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ListaSeguidores)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<ListaSeguidores>,
  ): Promise<ListaSeguidores[]> {
    return this.usuarioRepository.listaSeguidores(id).find(filter);
  }

  @post('/usuarios/{id}/lista-seguidores', {
    responses: {
      '200': {
        description: 'create a ListaSeguidores model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(ListaSeguidores)},
        },
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Usuario.prototype.usuarioId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaSeguidores, {
            title: 'NewListaSeguidoresInUsuario',
            exclude: ['listaSeguidoresId'],
          }),
        },
      },
    })
    listaSeguidores: Omit<ListaSeguidores, 'listaSeguidoresId'>,
  ): Promise<ListaSeguidores> {
    return this.usuarioRepository.listaSeguidores(id).create(listaSeguidores);
  }

  @patch('/usuarios/{id}/lista-seguidores', {
    responses: {
      '200': {
        description: 'Usuario.ListaSeguidores PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaSeguidores, {partial: true}),
        },
      },
    })
    listaSeguidores: Partial<ListaSeguidores>,
    @param.query.object('where', getWhereSchemaFor(ListaSeguidores))
    where?: Where<ListaSeguidores>,
  ): Promise<Count> {
    return this.usuarioRepository
      .listaSeguidores(id)
      .patch(listaSeguidores, where);
  }

  @del('/usuarios/{id}/lista-seguidores', {
    responses: {
      '200': {
        description: 'Usuario.ListaSeguidores DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(ListaSeguidores))
    where?: Where<ListaSeguidores>,
  ): Promise<Count> {
    return this.usuarioRepository.listaSeguidores(id).delete(where);
  }
}
