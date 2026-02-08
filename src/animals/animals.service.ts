import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Animal } from './animal.entity'

@Injectable()
export class AnimalsService {
  constructor(
    @InjectRepository(Animal)
    private animals: Repository<Animal>,
  ) {}

  findAll() {
    return this.animals.find()
  }

  findOne(id: number) {
    return this.animals.findOneBy({ id })
  }

  create(data: Partial<Animal>) {
    return this.animals.insert(data)
  }

  update(id: number, data: Partial<Animal>) {
    return this.animals.update(id, data)
  }

  remove(id: number) {
    return this.animals.delete(id)
  }
}
