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
import {Evento, Usuario} from '../models';
import {EventoRepository} from '../repositories';

export class EventoUsuarioController {
  constructor(
    @repository(EventoRepository) protected eventoRepository: EventoRepository,
  ) {}

  @get('/eventos/{id}/usuarios', {
    responses: {
      '200': {
        description: 'Array of Evento has many Usuario through Participante',
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
    return this.eventoRepository.usuarios(id).find(filter);
  }

  @post('/eventos/{id}/usuarios', {
    responses: {
      '200': {
        description: 'create a Usuario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Usuario)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Evento.prototype.eventoId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {
            title: 'NewUsuarioInEvento',
            exclude: ['usuarioId'],
          }),
        },
      },
    })
    usuario: Omit<Usuario, 'usuarioId'>,
  ): Promise<Usuario> {
    return this.eventoRepository.usuarios(id).create(usuario);
  }

  @patch('/eventos/{id}/usuarios', {
    responses: {
      '200': {
        description: 'Evento.Usuario PATCH success count',
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
    return this.eventoRepository.usuarios(id).patch(usuario, where);
  }

  @del('/eventos/{id}/usuarios', {
    responses: {
      '200': {
        description: 'Evento.Usuario DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Usuario))
    where?: Where<Usuario>,
  ): Promise<Count> {
    return this.eventoRepository.usuarios(id).delete(where);
  }
}
