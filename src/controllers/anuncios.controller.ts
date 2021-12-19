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
import {Anuncios} from '../models';
import {AnunciosRepository} from '../repositories';

@authenticate('jwt')


export class AnunciosController {
  constructor(
    @repository(AnunciosRepository)
    public anunciosRepository : AnunciosRepository,
  ) {}

  @post('/anuncios')
  @response(200, {
    description: 'Anuncios model instance',
    content: {'application/json': {schema: getModelSchemaRef(Anuncios)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Anuncios, {
            title: 'NewAnuncios',
            exclude: ['id'],
          }),
        },
      },
    })
    anuncios: Omit<Anuncios, 'id'>,
  ): Promise<Anuncios> {
    return this.anunciosRepository.create(anuncios);
  }

  @get('/anuncios/count')
  @response(200, {
    description: 'Anuncios model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Anuncios) where?: Where<Anuncios>,
  ): Promise<Count> {
    return this.anunciosRepository.count(where);
  }

  @get('/anuncios')
  @response(200, {
    description: 'Array of Anuncios model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Anuncios, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Anuncios) filter?: Filter<Anuncios>,
  ): Promise<Anuncios[]> {
    return this.anunciosRepository.find(filter);
  }

  @patch('/anuncios')
  @response(200, {
    description: 'Anuncios PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Anuncios, {partial: true}),
        },
      },
    })
    anuncios: Anuncios,
    @param.where(Anuncios) where?: Where<Anuncios>,
  ): Promise<Count> {
    return this.anunciosRepository.updateAll(anuncios, where);
  }

  @get('/anuncios/{id}')
  @response(200, {
    description: 'Anuncios model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Anuncios, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Anuncios, {exclude: 'where'}) filter?: FilterExcludingWhere<Anuncios>
  ): Promise<Anuncios> {
    return this.anunciosRepository.findById(id, filter);
  }

  @patch('/anuncios/{id}')
  @response(204, {
    description: 'Anuncios PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Anuncios, {partial: true}),
        },
      },
    })
    anuncios: Anuncios,
  ): Promise<void> {
    await this.anunciosRepository.updateById(id, anuncios);
  }

  @put('/anuncios/{id}')
  @response(204, {
    description: 'Anuncios PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() anuncios: Anuncios,
  ): Promise<void> {
    await this.anunciosRepository.replaceById(id, anuncios);
  }

  @del('/anuncios/{id}')
  @response(204, {
    description: 'Anuncios DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.anunciosRepository.deleteById(id);
  }
}
