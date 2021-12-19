import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EscuelaDbDataSource} from '../datasources';
import {Anuncios, AnunciosRelations} from '../models';

export class AnunciosRepository extends DefaultCrudRepository<
  Anuncios,
  typeof Anuncios.prototype.id,
  AnunciosRelations
> {
  constructor(
    @inject('datasources.escuela_db') dataSource: EscuelaDbDataSource,
  ) {
    super(Anuncios, dataSource);
  }
}
