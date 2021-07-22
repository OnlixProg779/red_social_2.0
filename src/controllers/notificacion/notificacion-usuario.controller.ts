import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {Notificacion, Usuario} from '../../models';
import {NotificacionRepository} from '../../repositories';

export class NotificacionUsuarioController {
  constructor(
    @repository(NotificacionRepository)
    public notificacionRepository: NotificacionRepository,
  ) {}

  @get('/notificacions/{id}/usuario', {
    responses: {
      '200': {
        description: 'Usuario belonging to Notificacion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Usuario)},
          },
        },
      },
    },
  })
  async getUsuario(
    @param.path.string('id') id: typeof Notificacion.prototype.notificacionId,
  ): Promise<Usuario> {
    return this.notificacionRepository.usuario(id);
  }
}