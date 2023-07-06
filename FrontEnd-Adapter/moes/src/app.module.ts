import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoUserModule } from './demo-user/demo-user.module';

@Module({
  imports: [DemoUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
