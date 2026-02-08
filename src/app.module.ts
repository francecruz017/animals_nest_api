import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from './auth/auth.module'
import { AnimalsModule } from './animals/animals.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_animals',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    AnimalsModule,
  ],
})
export class AppModule {}
