import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  UsuarioClaim,
  Usuario,
} from '../models';
import {UsuarioClaimRepository} from '../repositories';

export class UsuarioClaimUsuarioController {
  constructor(
    @repository(UsuarioClaimRepository)
    public usuarioClaimRepository: UsuarioClaimRepository,
  ) { }

  @get('/usuario-claims/{id}/usuario', {
    responses: {
      '200': {
        description: 'Usuario belonging to UsuarioClaim',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Usuario)},
          },
        },
      },
    },
  })
  async getUsuario(
    @param.path.string('id') id: typeof UsuarioClaim.prototype.usuarioClaimId,
  ): Promise<Usuario> {
    return this.usuarioClaimRepository.usuario(id);
  }
}
