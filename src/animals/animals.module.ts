import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AnimalsService } from './animals.service'
import { AnimalsController } from './animals.controller'
import { Animal } from './animal.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Animal])],
  providers: [AnimalsService],
  controllers: [AnimalsController],
})
export class AnimalsModule {}
