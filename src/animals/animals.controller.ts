import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { AnimalsService } from './animals.service'

@UseGuards(AuthGuard('jwt'))
@Controller('animals')
export class AnimalsController {
  constructor(private animals: AnimalsService) {}

  @Get()
  getAll() {
    return this.animals.findAll()
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.animals.findOne(Number(id))
  }

  @Post()
  create(@Body() body: { name: string; species: string; age?: number }) {
    return this.animals.create(body)
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() body: { name?: string; species?: string; age?: number },
  ) {
    return this.animals.update(Number(id), body)
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.animals.remove(Number(id))
  }
}
