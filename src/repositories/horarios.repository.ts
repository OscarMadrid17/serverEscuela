import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EscuelaDbDataSource} from '../datasources';
import {Horarios, HorariosRelations} from '../models';

export class HorariosRepository extends DefaultCrudRepository<
  Horarios,
  typeof Horarios.prototype.id,
  HorariosRelations
> {
  constructor(
    @inject('datasources.escuela_db') dataSource: EscuelaDbDataSource,
  ) {
    super(Horarios, dataSource);
  }
}
