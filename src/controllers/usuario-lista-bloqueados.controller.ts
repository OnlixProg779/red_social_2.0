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
import {UsuarioRepository} from '../repositories';

export class UsuarioListaBloqueadosController {
  constructor(
    @repository(UsuarioRepository)
    protected usuarioRepository: UsuarioRepository,
  ) {}

  @get('/usuarios/{id}/lista-bloqueados', {
    responses: {
      '200': {
        description:
          'Array of Usuario has many ListaBloqueados through ListaBloqueadosUsuario',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ListaBloqueados)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<ListaBloqueados>,
  ): Promise<ListaBloqueados[]> {
    return this.usuarioRepository.listaBloqueados(id).find(filter);
  }

  @post('/usuarios/{id}/lista-bloqueados', {
    responses: {
      '200': {
        description: 'create a ListaBloqueados model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(ListaBloqueados)},
        },
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Usuario.prototype.usuarioId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaBloqueados, {
            title: 'NewListaBloqueadosInUsuario',
            exclude: ['listaBloqueadosId'],
          }),
        },
      },
    })
    listaBloqueados: Omit<ListaBloqueados, 'listaBloqueadosId'>,
  ): Promise<ListaBloqueados> {
    return this.usuarioRepository.listaBloqueados(id).create(listaBloqueados);
  }

  @patch('/usuarios/{id}/lista-bloqueados', {
    responses: {
      '200': {
        description: 'Usuario.ListaBloqueados PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaBloqueados, {partial: true}),
        },
      },
    })
    listaBloqueados: Partial<ListaBloqueados>,
    @param.query.object('where', getWhereSchemaFor(ListaBloqueados))
    where?: Where<ListaBloqueados>,
  ): Promise<Count> {
    return this.usuarioRepository
      .listaBloqueados(id)
      .patch(listaBloqueados, where);
  }

  @del('/usuarios/{id}/lista-bloqueados', {
    responses: {
      '200': {
        description: 'Usuario.ListaBloqueados DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(ListaBloqueados))
    where?: Where<ListaBloqueados>,
  ): Promise<Count> {
    return this.usuarioRepository.listaBloqueados(id).delete(where);
  }
}
