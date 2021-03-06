import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Horarios extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  hora: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Horarios>) {
    super(data);
  }
}

export interface HorariosRelations {
  // describe navigational properties here
}

export type HorariosWithRelations = Horarios & HorariosRelations;
