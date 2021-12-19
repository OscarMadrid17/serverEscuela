import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EscuelaDbDataSource} from '../datasources';
import {Jornadas, JornadasRelations} from '../models';

export class JornadasRepository extends DefaultCrudRepository<
  Jornadas,
  typeof Jornadas.prototype.id,
  JornadasRelations
> {
  constructor(
    @inject('datasources.escuela_db') dataSource: EscuelaDbDataSource,
  ) {
    super(Jornadas, dataSource);
  }
}
