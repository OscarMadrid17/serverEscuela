import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EscuelaDbDataSource} from '../datasources';
import {Profesores, ProfesoresRelations} from '../models';

export class ProfesoresRepository extends DefaultCrudRepository<
  Profesores,
  typeof Profesores.prototype.id,
  ProfesoresRelations
> {
  constructor(
    @inject('datasources.escuela_db') dataSource: EscuelaDbDataSource,
  ) {
    super(Profesores, dataSource);
  }
}
