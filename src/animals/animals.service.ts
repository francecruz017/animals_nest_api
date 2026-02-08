import { Injectable, Inject } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import type { Cache } from 'cache-manager'
import { Animal } from './animal.entity'

@Injectable()
export class AnimalsService {
  constructor(
    @InjectRepository(Animal)
    private animals: Repository<Animal>,
    @Inject(CACHE_MANAGER)
    private cache: Cache,
  ) {}

  async findAll() {
    return this.animals.find()
  }

  async findOne(id: number) {
    return this.animals.findOneBy({ id })
  }

  async create(data: Partial<Animal>) {
    const result = await this.animals.insert(data)
    await this.cache.del('animals_all')
    return result
  }

  async update(id: number, data: Partial<Animal>) {
    const result = await this.animals.update(id, data)
    await this.cache.del('animals_all')
    await this.cache.del(`animals_${id}`)
    return result
  }

  async remove(id: number) {
    const result = await this.animals.delete(id)
    await this.cache.del('animals_all')
    await this.cache.del(`animals_${id}`)
    return result
  }
}
