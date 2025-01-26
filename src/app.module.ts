import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import { UsermoduleModule } from './usermodule/usermodule.module';
import { PostmoduleModule } from './postmodule/postmodule.module';

@Module({
  imports: [TodoModule,ConfigModule.forRoot(
    {
      envFilePath: '.env',
    }
  ), UsermoduleModule, PostmoduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}