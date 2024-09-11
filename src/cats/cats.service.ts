import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { Cat } from '@prisma/client';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor(private readonly db: DbService) {}

  async create(cat: CreateCatDto): Promise<Cat> {
    return await this.db.cat.create({
      data: cat,
    });
  }

  async findAll(): Promise<Cat[]> {
    return await this.db.cat.findMany();
  }

  async findOne(id: number): Promise<Cat> {
    const cat = await this.db.cat.findUnique({
      where: { id },
    });
    if (!cat) {
      throw new HttpException('Cat not found', HttpStatus.NOT_FOUND);
    }
    return cat;
  }

  async update(id: number, updatedCat: UpdateCatDto) {
    return await this.db.cat.update({
      where: { id },
      data: updatedCat,
    });
  }

  async remove(id: number) {
    await this.db.cat.delete({
      where: { id },
    });
  }
}
