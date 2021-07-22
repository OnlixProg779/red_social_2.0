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
import {UsuarioRepository} from '../repositories';

export class UsuarioEventoController {
  constructor(
    @repository(UsuarioRepository)
    protected usuarioRepository: UsuarioRepository,
  ) {}

  @get('/usuarios/{id}/eventos', {
    responses: {
      '200': {
        description: 'Array of Usuario has many Evento through Participante',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Evento)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Evento>,
  ): Promise<Evento[]> {
    return this.usuarioRepository.eventos(id).find(filter);
  }

  @post('/usuarios/{id}/eventos', {
    responses: {
      '200': {
        description: 'create a Evento model instance',
        content: {'application/json': {schema: getModelSchemaRef(Evento)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Usuario.prototype.usuarioId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Evento, {
            title: 'NewEventoInUsuario',
            exclude: ['eventoId'],
          }),
        },
      },
    })
    evento: Omit<Evento, 'eventoId'>,
  ): Promise<Evento> {
    return this.usuarioRepository.eventos(id).create(evento);
  }

  @patch('/usuarios/{id}/eventos', {
    responses: {
      '200': {
        description: 'Usuario.Evento PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Evento, {partial: true}),
        },
      },
    })
    evento: Partial<Evento>,
    @param.query.object('where', getWhereSchemaFor(Evento))
    where?: Where<Evento>,
  ): Promise<Count> {
    return this.usuarioRepository.eventos(id).patch(evento, where);
  }

  @del('/usuarios/{id}/eventos', {
    responses: {
      '200': {
        description: 'Usuario.Evento DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Evento))
    where?: Where<Evento>,
  ): Promise<Count> {
    return this.usuarioRepository.eventos(id).delete(where);
  }
}
