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
import {ListaSeguidores, Usuario} from '../../models';
import {ListaSeguidoresRepository} from '../../repositories';

export class ListaSeguidoresUsuarioController {
  constructor(
    @repository(ListaSeguidoresRepository)
    protected listaSeguidoresRepository: ListaSeguidoresRepository,
  ) {}

  @get('/lista-seguidores/{id}/usuarios', {
    responses: {
      '200': {
        description:
          'Array of ListaSeguidores has many Usuario through ListaSeguidoresUsuario',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Usuario)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Usuario>,
  ): Promise<Usuario[]> {
    return this.listaSeguidoresRepository.usuarios(id).find(filter);
  }

  @post('/lista-seguidores/{id}/usuarios', {
    responses: {
      '200': {
        description: 'create a Usuario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Usuario)}},
      },
    },
  })
  async create(
    @param.path.string('id')
    id: typeof ListaSeguidores.prototype.listaSeguidoresId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {
            title: 'NewUsuarioInListaSeguidores',
            exclude: ['usuarioId'],
          }),
        },
      },
    })
    usuario: Omit<Usuario, 'usuarioId'>,
  ): Promise<Usuario> {
    return this.listaSeguidoresRepository.usuarios(id).create(usuario);
  }

  @patch('/lista-seguidores/{id}/usuarios', {
    responses: {
      '200': {
        description: 'ListaSeguidores.Usuario PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Partial<Usuario>,
    @param.query.object('where', getWhereSchemaFor(Usuario))
    where?: Where<Usuario>,
  ): Promise<Count> {
    return this.listaSeguidoresRepository.usuarios(id).patch(usuario, where);
  }

  @del('/lista-seguidores/{id}/usuarios', {
    responses: {
      '200': {
        description: 'ListaSeguidores.Usuario DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Usuario))
    where?: Where<Usuario>,
  ): Promise<Count> {
    return this.listaSeguidoresRepository.usuarios(id).delete(where);
  }
}
