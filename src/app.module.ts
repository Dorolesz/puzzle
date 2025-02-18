import { Module } from '@nestjs/common';
import { PuzzlesModule } from './puzzles/puzzles.module';

@Module({
  imports: [
    PuzzlesModule,
  ],
})
export class AppModule {}