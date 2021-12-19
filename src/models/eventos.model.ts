import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Eventos extends Entity {
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
    type: 'date',
    required: true,
  })
  horaFecha: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Eventos>) {
    super(data);
  }
}

export interface EventosRelations {
  // describe navigational properties here
}

export type EventosWithRelations = Eventos & EventosRelations;
