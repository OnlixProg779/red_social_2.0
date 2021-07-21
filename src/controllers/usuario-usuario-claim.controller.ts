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
import {
  Usuario,
  UsuarioClaim,
} from '../models';
import {UsuarioRepository} from '../repositories';

export class UsuarioUsuarioClaimController {
  constructor(
    @repository(UsuarioRepository) protected usuarioRepository: UsuarioRepository,
  ) { }

  @get('/usuarios/{id}/usuario-claims', {
    responses: {
      '200': {
        description: 'Array of Usuario has many UsuarioClaim',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(UsuarioClaim)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<UsuarioClaim>,
  ): Promise<UsuarioClaim[]> {
    return this.usuarioRepository.usuarioClaims(id).find(filter);
  }

  @post('/usuarios/{id}/usuario-claims', {
    responses: {
      '200': {
        description: 'Usuario model instance',
        content: {'application/json': {schema: getModelSchemaRef(UsuarioClaim)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Usuario.prototype.usuarioId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsuarioClaim, {
            title: 'NewUsuarioClaimInUsuario',
            exclude: ['usuarioClaimId'],
            optional: ['usuarioId']
          }),
        },
      },
    }) usuarioClaim: Omit<UsuarioClaim, 'usuarioClaimId'>,
  ): Promise<UsuarioClaim> {
    return this.usuarioRepository.usuarioClaims(id).create(usuarioClaim);
  }

  @patch('/usuarios/{id}/usuario-claims', {
    responses: {
      '200': {
        description: 'Usuario.UsuarioClaim PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsuarioClaim, {partial: true}),
        },
      },
    })
    usuarioClaim: Partial<UsuarioClaim>,
    @param.query.object('where', getWhereSchemaFor(UsuarioClaim)) where?: Where<UsuarioClaim>,
  ): Promise<Count> {
    return this.usuarioRepository.usuarioClaims(id).patch(usuarioClaim, where);
  }

  @del('/usuarios/{id}/usuario-claims', {
    responses: {
      '200': {
        description: 'Usuario.UsuarioClaim DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(UsuarioClaim)) where?: Where<UsuarioClaim>,
  ): Promise<Count> {
    return this.usuarioRepository.usuarioClaims(id).delete(where);
  }
}
