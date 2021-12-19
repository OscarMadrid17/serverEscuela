import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Asignaturas} from '../models';
import {AsignaturasRepository} from '../repositories';

@authenticate('jwt')


export class AsignaturasController {
  constructor(
    @repository(AsignaturasRepository)
    public asignaturasRepository : AsignaturasRepository,
  ) {}

  @post('/asignaturas')
  @response(200, {
    description: 'Asignaturas model instance',
    content: {'application/json': {schema: getModelSchemaRef(Asignaturas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asignaturas, {
            title: 'NewAsignaturas',
            exclude: ['id'],
          }),
        },
      },
    })
    asignaturas: Omit<Asignaturas, 'id'>,
  ): Promise<Asignaturas> {
    return this.asignaturasRepository.create(asignaturas);
  }

  @get('/asignaturas/count')
  @response(200, {
    description: 'Asignaturas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Asignaturas) where?: Where<Asignaturas>,
  ): Promise<Count> {
    return this.asignaturasRepository.count(where);
  }

  @get('/asignaturas')
  @response(200, {
    description: 'Array of Asignaturas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Asignaturas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Asignaturas) filter?: Filter<Asignaturas>,
  ): Promise<Asignaturas[]> {
    return this.asignaturasRepository.find(filter);
  }

  @patch('/asignaturas')
  @response(200, {
    description: 'Asignaturas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asignaturas, {partial: true}),
        },
      },
    })
    asignaturas: Asignaturas,
    @param.where(Asignaturas) where?: Where<Asignaturas>,
  ): Promise<Count> {
    return this.asignaturasRepository.updateAll(asignaturas, where);
  }

  @get('/asignaturas/{id}')
  @response(200, {
    description: 'Asignaturas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Asignaturas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Asignaturas, {exclude: 'where'}) filter?: FilterExcludingWhere<Asignaturas>
  ): Promise<Asignaturas> {
    return this.asignaturasRepository.findById(id, filter);
  }

  @patch('/asignaturas/{id}')
  @response(204, {
    description: 'Asignaturas PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asignaturas, {partial: true}),
        },
      },
    })
    asignaturas: Asignaturas,
  ): Promise<void> {
    await this.asignaturasRepository.updateById(id, asignaturas);
  }

  @put('/asignaturas/{id}')
  @response(204, {
    description: 'Asignaturas PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() asignaturas: Asignaturas,
  ): Promise<void> {
    await this.asignaturasRepository.replaceById(id, asignaturas);
  }

  @del('/asignaturas/{id}')
  @response(204, {
    description: 'Asignaturas DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.asignaturasRepository.deleteById(id);
  }
}
