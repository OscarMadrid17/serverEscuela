import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EscuelaDbDataSource} from '../datasources';
import {Estudiantes, EstudiantesRelations} from '../models';

export class EstudiantesRepository extends DefaultCrudRepository<
  Estudiantes,
  typeof Estudiantes.prototype.id,
  EstudiantesRelations
> {
  constructor(
    @inject('datasources.escuela_db') dataSource: EscuelaDbDataSource,
  ) {
    super(Estudiantes, dataSource);
  }
}
