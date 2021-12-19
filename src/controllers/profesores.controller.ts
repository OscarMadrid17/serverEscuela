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
import {Profesores} from '../models';
import {ProfesoresRepository} from '../repositories';

@authenticate('jwt')

export class ProfesoresController {
  constructor(
    @repository(ProfesoresRepository)
    public profesoresRepository : ProfesoresRepository,
  ) {}

  @post('/profesores')
  @response(200, {
    description: 'Profesores model instance',
    content: {'application/json': {schema: getModelSchemaRef(Profesores)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Profesores, {
            title: 'NewProfesores',
            exclude: ['id'],
          }),
        },
      },
    })
    profesores: Omit<Profesores, 'id'>,
  ): Promise<Profesores> {
    return this.profesoresRepository.create(profesores);
  }

  @get('/profesores/count')
  @response(200, {
    description: 'Profesores model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Profesores) where?: Where<Profesores>,
  ): Promise<Count> {
    return this.profesoresRepository.count(where);
  }

  @get('/profesores')
  @response(200, {
    description: 'Array of Profesores model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Profesores, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Profesores) filter?: Filter<Profesores>,
  ): Promise<Profesores[]> {
    return this.profesoresRepository.find(filter);
  }

  @patch('/profesores')
  @response(200, {
    description: 'Profesores PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Profesores, {partial: true}),
        },
      },
    })
    profesores: Profesores,
    @param.where(Profesores) where?: Where<Profesores>,
  ): Promise<Count> {
    return this.profesoresRepository.updateAll(profesores, where);
  }

  @get('/profesores/{id}')
  @response(200, {
    description: 'Profesores model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Profesores, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Profesores, {exclude: 'where'}) filter?: FilterExcludingWhere<Profesores>
  ): Promise<Profesores> {
    return this.profesoresRepository.findById(id, filter);
  }

  @patch('/profesores/{id}')
  @response(204, {
    description: 'Profesores PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Profesores, {partial: true}),
        },
      },
    })
    profesores: Profesores,
  ): Promise<void> {
    await this.profesoresRepository.updateById(id, profesores);
  }

  @put('/profesores/{id}')
  @response(204, {
    description: 'Profesores PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() profesores: Profesores,
  ): Promise<void> {
    await this.profesoresRepository.replaceById(id, profesores);
  }

  @del('/profesores/{id}')
  @response(204, {
    description: 'Profesores DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.profesoresRepository.deleteById(id);
  }
}
