import { Controller, Get, Post, Patch, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { PuzzlesService } from './puzzles.service';
import { CreatePuzzleDto } from './dto/create-puzzle.dto';
import { UpdatePuzzleDto } from './dto/update-puzzle.dto';

@Controller('puzzles')
export class PuzzlesController {
  constructor(private readonly puzzlesService: PuzzlesService) {}

  @Get()
  async getAllPuzzles() {
	return this.puzzlesService.getAllPuzzles();
  }

  @Get(':id')
  async getPuzzleById(@Param('id') id: string) {
	const puzzle = await this.puzzlesService.getPuzzleById(Number(id));
	if (!puzzle) {
	  throw new NotFoundException('Puzzle not found');
	}
	return puzzle;
  }

  @Post()
  async createPuzzle(@Body() createPuzzleDto: CreatePuzzleDto) {
	return this.puzzlesService.createPuzzle(createPuzzleDto);
  }

  @Patch(':id')
  async updatePuzzle(@Param('id') id: string, @Body() updatePuzzleDto: UpdatePuzzleDto) {
	const puzzle = await this.puzzlesService.updatePuzzle(Number(id), updatePuzzleDto);
	if (!puzzle) {
	  throw new NotFoundException('Puzzle not found');
	}
	return puzzle;
  }

  @Delete(':id')
  async deletePuzzle(@Param('id') id: string) {
	const puzzle = await this.puzzlesService.deletePuzzle(Number(id));
	if (!puzzle) {
	  throw new NotFoundException('Puzzle not found');
	}
	return { message: 'Puzzle deleted successfully' };
  }
}
