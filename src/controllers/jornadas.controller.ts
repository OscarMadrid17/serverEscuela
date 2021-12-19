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
import {Jornadas} from '../models';
import {JornadasRepository} from '../repositories';

@authenticate('jwt')

export class JornadasController {
  constructor(
    @repository(JornadasRepository)
    public jornadasRepository : JornadasRepository,
  ) {}

  @post('/jornadas')
  @response(200, {
    description: 'Jornadas model instance',
    content: {'application/json': {schema: getModelSchemaRef(Jornadas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jornadas, {
            title: 'NewJornadas',
            exclude: ['id'],
          }),
        },
      },
    })
    jornadas: Omit<Jornadas, 'id'>,
  ): Promise<Jornadas> {
    return this.jornadasRepository.create(jornadas);
  }

  @get('/jornadas/count')
  @response(200, {
    description: 'Jornadas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Jornadas) where?: Where<Jornadas>,
  ): Promise<Count> {
    return this.jornadasRepository.count(where);
  }

  @get('/jornadas')
  @response(200, {
    description: 'Array of Jornadas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Jornadas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Jornadas) filter?: Filter<Jornadas>,
  ): Promise<Jornadas[]> {
    return this.jornadasRepository.find(filter);
  }

  @patch('/jornadas')
  @response(200, {
    description: 'Jornadas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jornadas, {partial: true}),
        },
      },
    })
    jornadas: Jornadas,
    @param.where(Jornadas) where?: Where<Jornadas>,
  ): Promise<Count> {
    return this.jornadasRepository.updateAll(jornadas, where);
  }

  @get('/jornadas/{id}')
  @response(200, {
    description: 'Jornadas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Jornadas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Jornadas, {exclude: 'where'}) filter?: FilterExcludingWhere<Jornadas>
  ): Promise<Jornadas> {
    return this.jornadasRepository.findById(id, filter);
  }

  @patch('/jornadas/{id}')
  @response(204, {
    description: 'Jornadas PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jornadas, {partial: true}),
        },
      },
    })
    jornadas: Jornadas,
  ): Promise<void> {
    await this.jornadasRepository.updateById(id, jornadas);
  }

  @put('/jornadas/{id}')
  @response(204, {
    description: 'Jornadas PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() jornadas: Jornadas,
  ): Promise<void> {
    await this.jornadasRepository.replaceById(id, jornadas);
  }

  @del('/jornadas/{id}')
  @response(204, {
    description: 'Jornadas DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.jornadasRepository.deleteById(id);
  }
}
