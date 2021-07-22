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
import {ListaAmistades, Usuario} from '../models';
import {ListaAmistadesRepository} from '../repositories';

export class ListaAmistadesUsuarioController {
  constructor(
    @repository(ListaAmistadesRepository)
    protected listaAmistadesRepository: ListaAmistadesRepository,
  ) {}

  @get('/lista-amistades/{id}/usuarios', {
    responses: {
      '200': {
        description:
          'Array of ListaAmistades has many Usuario through ListaAmistadesUsuario',
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
    return this.listaAmistadesRepository.usuarios(id).find(filter);
  }

  @post('/lista-amistades/{id}/usuarios', {
    responses: {
      '200': {
        description: 'create a Usuario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Usuario)}},
      },
    },
  })
  async create(
    @param.path.string('id')
    id: typeof ListaAmistades.prototype.listaAmistadesId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {
            title: 'NewUsuarioInListaAmistades',
            exclude: ['usuarioId'],
          }),
        },
      },
    })
    usuario: Omit<Usuario, 'usuarioId'>,
  ): Promise<Usuario> {
    return this.listaAmistadesRepository.usuarios(id).create(usuario);
  }

  @patch('/lista-amistades/{id}/usuarios', {
    responses: {
      '200': {
        description: 'ListaAmistades.Usuario PATCH success count',
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
    return this.listaAmistadesRepository.usuarios(id).patch(usuario, where);
  }

  @del('/lista-amistades/{id}/usuarios', {
    responses: {
      '200': {
        description: 'ListaAmistades.Usuario DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Usuario))
    where?: Where<Usuario>,
  ): Promise<Count> {
    return this.listaAmistadesRepository.usuarios(id).delete(where);
  }
}
