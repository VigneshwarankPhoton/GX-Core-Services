import { Module } from '@nestjs/common';
import { UtillesService } from './utilles.service';
import { UtillesController } from './utilles.controller';

@Module({
  controllers: [UtillesController],
  providers: [UtillesService]
})
export class UtillesModule {}
