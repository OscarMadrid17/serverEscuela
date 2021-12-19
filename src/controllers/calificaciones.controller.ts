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
import {Calificaciones} from '../models';
import {CalificacionesRepository} from '../repositories';

@authenticate('jwt')

export class CalificacionesController {
  constructor(
    @repository(CalificacionesRepository)
    public calificacionesRepository : CalificacionesRepository,
  ) {}

  @post('/calificaciones')
  @response(200, {
    description: 'Calificaciones model instance',
    content: {'application/json': {schema: getModelSchemaRef(Calificaciones)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Calificaciones, {
            title: 'NewCalificaciones',
            exclude: ['id'],
          }),
        },
      },
    })
    calificaciones: Omit<Calificaciones, 'id'>,
  ): Promise<Calificaciones> {
    return this.calificacionesRepository.create(calificaciones);
  }

  @get('/calificaciones/count')
  @response(200, {
    description: 'Calificaciones model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Calificaciones) where?: Where<Calificaciones>,
  ): Promise<Count> {
    return this.calificacionesRepository.count(where);
  }

  @get('/calificaciones')
  @response(200, {
    description: 'Array of Calificaciones model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Calificaciones, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Calificaciones) filter?: Filter<Calificaciones>,
  ): Promise<Calificaciones[]> {
    return this.calificacionesRepository.find(filter);
  }

  @patch('/calificaciones')
  @response(200, {
    description: 'Calificaciones PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Calificaciones, {partial: true}),
        },
      },
    })
    calificaciones: Calificaciones,
    @param.where(Calificaciones) where?: Where<Calificaciones>,
  ): Promise<Count> {
    return this.calificacionesRepository.updateAll(calificaciones, where);
  }

  @get('/calificaciones/{id}')
  @response(200, {
    description: 'Calificaciones model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Calificaciones, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Calificaciones, {exclude: 'where'}) filter?: FilterExcludingWhere<Calificaciones>
  ): Promise<Calificaciones> {
    return this.calificacionesRepository.findById(id, filter);
  }

  @patch('/calificaciones/{id}')
  @response(204, {
    description: 'Calificaciones PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Calificaciones, {partial: true}),
        },
      },
    })
    calificaciones: Calificaciones,
  ): Promise<void> {
    await this.calificacionesRepository.updateById(id, calificaciones);
  }

  @put('/calificaciones/{id}')
  @response(204, {
    description: 'Calificaciones PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() calificaciones: Calificaciones,
  ): Promise<void> {
    await this.calificacionesRepository.replaceById(id, calificaciones);
  }

  @del('/calificaciones/{id}')
  @response(204, {
    description: 'Calificaciones DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.calificacionesRepository.deleteById(id);
  }
}
