export class createPuzzleDto {}
import { IsString, IsInt, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePuzzleDto {

    /**
     * The number of pieces in the puzzle.
     * 
     * @example 1000
     */
    @IsInt()
    @IsNotEmpty()
    pieces: number;

    /**
     * The puzzle will be available before Christmas.
     * 
     * @example true
     */

    @IsBoolean()
    @IsOptional()
    beforeChristmas?: boolean;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The URL of the picture',
        example: 'https://example.com/puzzle.jpg'
    })
    pictureUrl: string;
}