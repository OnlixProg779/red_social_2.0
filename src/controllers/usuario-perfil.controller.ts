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
import {v4 as uuidv4} from 'uuid';
import {Perfil, Usuario} from '../models';
import {UsuarioRepository} from '../repositories';

export class UsuarioPerfilController {
  constructor(
    @repository(UsuarioRepository)
    protected usuarioRepository: UsuarioRepository,
  ) {}

  @get('/usuarios/{id}/perfils', {
    responses: {
      '200': {
        description: 'Array of Usuario has many Perfil through RolesPagina',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Perfil)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Perfil>,
  ): Promise<Perfil[]> {
    return this.usuarioRepository.perfils(id).find(filter);
  }

  @post('/usuarios/{id}/perfils', {
    responses: {
      '200': {
        description: 'create a Perfil model instance',
        content: {'application/json': {schema: getModelSchemaRef(Perfil)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Usuario.prototype.usuarioId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Perfil, {
            title: 'NewPerfilInUsuario',
            exclude: ['perfilId'],
          }),
        },
      },
    })
    perfil: Omit<Perfil, 'perfilId'>,
  ): Promise<Perfil> {
    perfil.perfilId = uuidv4();
    return this.usuarioRepository.perfils(id).create(perfil);
  }

  @patch('/usuarios/{id}/perfils', {
    responses: {
      '200': {
        description: 'Usuario.Perfil PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Perfil, {partial: true}),
        },
      },
    })
    perfil: Partial<Perfil>,
    @param.query.object('where', getWhereSchemaFor(Perfil))
    where?: Where<Perfil>,
  ): Promise<Count> {
    return this.usuarioRepository.perfils(id).patch(perfil, where);
  }

  @del('/usuarios/{id}/perfils', {
    responses: {
      '200': {
        description: 'Usuario.Perfil DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Perfil))
    where?: Where<Perfil>,
  ): Promise<Count> {
    return this.usuarioRepository.perfils(id).delete(where);
  }
}
