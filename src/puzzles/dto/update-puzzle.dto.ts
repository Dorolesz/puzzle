import { IsString, IsInt, IsOptional, IsBoolean } from 'class-validator';

export class UpdatePuzzleDto {
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
