import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EscuelaDbDataSource} from '../datasources';
import {Aulas, AulasRelations} from '../models';

export class AulasRepository extends DefaultCrudRepository<
  Aulas,
  typeof Aulas.prototype.id,
  AulasRelations
> {
  constructor(
    @inject('datasources.escuela_db') dataSource: EscuelaDbDataSource,
  ) {
    super(Aulas, dataSource);
  }
}
