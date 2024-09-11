import { ApiProperty } from '@nestjs/swagger';

export class Dog {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
