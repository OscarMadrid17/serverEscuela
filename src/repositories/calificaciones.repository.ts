import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EscuelaDbDataSource} from '../datasources';
import {Calificaciones, CalificacionesRelations} from '../models';

export class CalificacionesRepository extends DefaultCrudRepository<
  Calificaciones,
  typeof Calificaciones.prototype.id,
  CalificacionesRelations
> {
  constructor(
    @inject('datasources.escuela_db') dataSource: EscuelaDbDataSource,
  ) {
    super(Calificaciones, dataSource);
  }
}
