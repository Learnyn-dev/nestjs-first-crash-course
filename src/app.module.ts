import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { DbModule } from './db/db.module';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [CatsModule, DbModule, DogsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
