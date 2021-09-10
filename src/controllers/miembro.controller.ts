import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Miembro} from '../models';
import {MiembroRepository} from '../repositories';

export class MiembroController {
  constructor(
    @repository(MiembroRepository)
    public miembroRepository : MiembroRepository,
  ) {}

  @post('/miembros')
  @response(200, {
    description: 'Miembro model instance',
    content: {'application/json': {schema: getModelSchemaRef(Miembro)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Miembro, {
            title: 'NewMiembro',
            
          }),
        },
      },
    })
    miembro: Miembro,
  ): Promise<Miembro> {
    return this.miembroRepository.create(miembro);
  }

  @get('/miembros/count')
  @response(200, {
    description: 'Miembro model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Miembro) where?: Where<Miembro>,
  ): Promise<Count> {
    return this.miembroRepository.count(where);
  }

  @get('/miembros')
  @response(200, {
    description: 'Array of Miembro model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Miembro, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Miembro) filter?: Filter<Miembro>,
  ): Promise<Miembro[]> {
    return this.miembroRepository.find(filter);
  }

  @patch('/miembros')
  @response(200, {
    description: 'Miembro PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Miembro, {partial: true}),
        },
      },
    })
    miembro: Miembro,
    @param.where(Miembro) where?: Where<Miembro>,
  ): Promise<Count> {
    return this.miembroRepository.updateAll(miembro, where);
  }

  @get('/miembros/{id}')
  @response(200, {
    description: 'Miembro model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Miembro, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Miembro, {exclude: 'where'}) filter?: FilterExcludingWhere<Miembro>
  ): Promise<Miembro> {
    return this.miembroRepository.findById(id, filter);
  }

  @patch('/miembros/{id}')
  @response(204, {
    description: 'Miembro PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Miembro, {partial: true}),
        },
      },
    })
    miembro: Miembro,
  ): Promise<void> {
    await this.miembroRepository.updateById(id, miembro);
  }

  @put('/miembros/{id}')
  @response(204, {
    description: 'Miembro PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() miembro: Miembro,
  ): Promise<void> {
    await this.miembroRepository.replaceById(id, miembro);
  }

  @del('/miembros/{id}')
  @response(204, {
    description: 'Miembro DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.miembroRepository.deleteById(id);
  }
}
