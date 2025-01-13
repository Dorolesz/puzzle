export class createPuzzleDto {}
import { IsString, IsInt, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreatePuzzleDto {
    @IsString()
    @IsNotEmpty()
    url: string;

    @IsInt()
    @IsNotEmpty()
    pieces: number;

    @IsBoolean()
    @IsOptional()
    beforeChristmas?: boolean;

    @IsString()
    @IsNotEmpty()
    pictureUrl: string;
}