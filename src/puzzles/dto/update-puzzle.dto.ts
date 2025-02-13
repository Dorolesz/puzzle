import { PartialType } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional, IsBoolean } from 'class-validator';
import { CreatePuzzleDto } from './create-puzzle.dto';

export class UpdatePuzzleDto extends PartialType(CreatePuzzleDto) {
  @IsString()
  @IsOptional()
  url?: string;

  @IsInt()
  @IsOptional()
  pieces?: number;

  @IsBoolean()
  @IsOptional()
  beforeChristmas?: boolean;
}
