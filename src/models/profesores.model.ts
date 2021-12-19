import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Profesores extends Entity {
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
  apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  asignatura: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Profesores>) {
    super(data);
  }
}

export interface ProfesoresRelations {
  // describe navigational properties here
}

export type ProfesoresWithRelations = Profesores & ProfesoresRelations;
