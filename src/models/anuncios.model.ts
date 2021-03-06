import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Anuncios extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  titulo: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Anuncios>) {
    super(data);
  }
}

export interface AnunciosRelations {
  // describe navigational properties here
}

export type AnunciosWithRelations = Anuncios & AnunciosRelations;
