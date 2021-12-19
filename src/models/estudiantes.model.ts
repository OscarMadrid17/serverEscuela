import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Estudiantes extends Entity {
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
  genero: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudad: string;

  @property({
    type: 'number',
    required: true,
  })
  edad: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Estudiantes>) {
    super(data);
  }
}

export interface EstudiantesRelations {
  // describe navigational properties here
}

export type EstudiantesWithRelations = Estudiantes & EstudiantesRelations;
