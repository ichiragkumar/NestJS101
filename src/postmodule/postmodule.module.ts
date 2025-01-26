import { Module } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { AppService } from 'src/app.service';
import { PostService } from 'src/post.service';

@Module({
    controllers:[AppModule],
    providers:[PostService, AppService],
})
export class PostmoduleModule {}
