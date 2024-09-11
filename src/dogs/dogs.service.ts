import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class DogsService {
  constructor(private readonly db: DbService) {}

  async create(dog: CreateDogDto) {
    return await this.db.dog.create({
      data: dog,
    });
  }

  async findAll() {
    return await this.db.dog.findMany();
  }

  async findOne(id: number) {
    return await this.db.dog.findUnique({
      where: { id },
    });
  }

  async update(id: number, updatedDog: UpdateDogDto) {
    return await this.db.dog.update({
      where: { id },
      data: updatedDog,
    });
  }

  async remove(id: number) {
    await this.db.dog.delete({
      where: { id },
    });
  }
}
