import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EscuelaDbDataSource} from '../datasources';
import {Asignaturas, AsignaturasRelations} from '../models';

export class AsignaturasRepository extends DefaultCrudRepository<
  Asignaturas,
  typeof Asignaturas.prototype.id,
  AsignaturasRelations
> {
  constructor(
    @inject('datasources.escuela_db') dataSource: EscuelaDbDataSource,
  ) {
    super(Asignaturas, dataSource);
  }
}
