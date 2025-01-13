export class createPuzzleDto {}
import { IsString, IsInt, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreatePuzzleDto {

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