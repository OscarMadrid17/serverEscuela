import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Asignaturas extends Entity {
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
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  profesor: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Asignaturas>) {
    super(data);
  }
}

export interface AsignaturasRelations {
  // describe navigational properties here
}

export type AsignaturasWithRelations = Asignaturas & AsignaturasRelations;
