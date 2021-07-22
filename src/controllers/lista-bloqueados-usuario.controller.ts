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
import {ListaBloqueados, Usuario} from '../models';
import {ListaBloqueadosRepository} from '../repositories';

export class ListaBloqueadosUsuarioController {
  constructor(
    @repository(ListaBloqueadosRepository)
    protected listaBloqueadosRepository: ListaBloqueadosRepository,
  ) {}

  @get('/lista-bloqueados/{id}/usuarios', {
    responses: {
      '200': {
        description:
          'Array of ListaBloqueados has many Usuario through ListaBloqueadosUsuario',
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
    return this.listaBloqueadosRepository.usuarios(id).find(filter);
  }

  @post('/lista-bloqueados/{id}/usuarios', {
    responses: {
      '200': {
        description: 'create a Usuario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Usuario)}},
      },
    },
  })
  async create(
    @param.path.string('id')
    id: typeof ListaBloqueados.prototype.listaBloqueadosId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {
            title: 'NewUsuarioInListaBloqueados',
            exclude: ['usuarioId'],
          }),
        },
      },
    })
    usuario: Omit<Usuario, 'usuarioId'>,
  ): Promise<Usuario> {
    return this.listaBloqueadosRepository.usuarios(id).create(usuario);
  }

  @patch('/lista-bloqueados/{id}/usuarios', {
    responses: {
      '200': {
        description: 'ListaBloqueados.Usuario PATCH success count',
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
    return this.listaBloqueadosRepository.usuarios(id).patch(usuario, where);
  }

  @del('/lista-bloqueados/{id}/usuarios', {
    responses: {
      '200': {
        description: 'ListaBloqueados.Usuario DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Usuario))
    where?: Where<Usuario>,
  ): Promise<Count> {
    return this.listaBloqueadosRepository.usuarios(id).delete(where);
  }
}
