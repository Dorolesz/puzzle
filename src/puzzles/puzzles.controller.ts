import { Controller, Get, Post, Patch, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { PuzzlesService } from './puzzles.service';
import { CreatePuzzleDto } from './dto/create-puzzle.dto';
import { UpdatePuzzleDto } from './dto/update-puzzle.dto';
import { ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('puzzles')
export class PuzzlesController {
  constructor(private readonly puzzlesService: PuzzlesService) {}

  @ApiOperation({ summary: 'Get all puzzles' })
  @Get()
  async getAllPuzzles() {
	return this.puzzlesService.getAllPuzzles();
  }

  /**
 * Retrieves a puzzle by its ID.
 * 
 * @param id The ID of the puzzle
 * @returns The puzzle object if found, otherwise throws a NotFoundException
 */
  @ApiOperation({ summary: 'Get a puzzle by id' })
  @ApiParam({ 
	name: 'id',
	description: 'Puzzle id',
	type: 'number'
})
  @Get(':id')
  async getPuzzleById(@Param('id') id: string) {
	const puzzle = await this.puzzlesService.getPuzzleById(Number(id));
	if (!puzzle) {
	  throw new NotFoundException('Puzzle not found');
	}
	return puzzle;
  }

  /**
   * Adds a new puzzle to the database.
   * 
   * @param createPuzzleDto The data to create the puzzle
   * @returns The newly created puzzle object
   */
  @ApiOperation({ summary: 'Create a puzzle' })
  @Post()
  async createPuzzle(@Body() createPuzzleDto: CreatePuzzleDto) {
	return this.puzzlesService.createPuzzle(createPuzzleDto);
  }

  @ApiOperation({ summary: 'Update a puzzle' })
  @ApiParam({
	name: 'id',
	description: 'The ID of the puzzle',
	type: 'number'
  })
  @Patch(':id')
  async updatePuzzle(@Param('id') id: string, @Body() updatePuzzleDto: UpdatePuzzleDto) {
	const puzzle = await this.puzzlesService.updatePuzzle(Number(id), updatePuzzleDto);
	if (!puzzle) {
	  throw new NotFoundException('Puzzle not found');
	}
	return puzzle;
  }

  @ApiOperation({ summary: 'Delete a puzzle' })
  @ApiParam({
	name: 'id',
	description: 'The ID of the puzzle',
	type: 'number'
  })
  @Delete(':id')
  async deletePuzzle(@Param('id') id: string) {
	const puzzle = await this.puzzlesService.deletePuzzle(Number(id));
	if (!puzzle) {
	  throw new NotFoundException('Puzzle not found');
	}
	return { message: 'Puzzle deleted successfully' };
  }
}
