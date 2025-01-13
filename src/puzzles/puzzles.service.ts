import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PuzzlesService {
  constructor(private prisma: PrismaService) {}

  async getAllPuzzles() {
	return this.prisma.puzzle.findMany();
  }

  async getPuzzleById(id: number) {
	return this.prisma.puzzle.findUnique({ where: { id } });
  }

  async createPuzzle(data: Prisma.PuzzleCreateInput) {
	return this.prisma.puzzle.create({ data });
  }

  async updatePuzzle(id: number, data: Prisma.PuzzleUpdateInput) {
	return this.prisma.puzzle.update({ where: { id }, data });
  }

  async deletePuzzle(id: number) {
	return this.prisma.puzzle.delete({ where: { id } });
  }
}
