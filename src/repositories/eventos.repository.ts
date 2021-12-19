import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EscuelaDbDataSource} from '../datasources';
import {Eventos, EventosRelations} from '../models';

export class EventosRepository extends DefaultCrudRepository<
  Eventos,
  typeof Eventos.prototype.id,
  EventosRelations
> {
  constructor(
    @inject('datasources.escuela_db') dataSource: EscuelaDbDataSource,
  ) {
    super(Eventos, dataSource);
  }
}
