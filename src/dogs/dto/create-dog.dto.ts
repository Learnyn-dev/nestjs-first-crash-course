import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDogDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}
