import { Module } from '@nestjs/common';
import { PuzzlesService } from './puzzles.service';
import { PuzzlesController } from './puzzles.controller';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [PuzzlesModule],
  providers: [PuzzlesService, PrismaService],
  controllers: [PuzzlesController]
})
export class PuzzlesModule {}
