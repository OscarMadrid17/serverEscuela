import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Calificaciones extends Entity {
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
  asignatura: string;

  @property({
    type: 'string',
    required: true,
  })
  estudiante: string;

  @property({
    type: 'number',
    required: true,
  })
  nota: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Calificaciones>) {
    super(data);
  }
}

export interface CalificacionesRelations {
  // describe navigational properties here
}

export type CalificacionesWithRelations = Calificaciones & CalificacionesRelations;
