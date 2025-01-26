import { Module } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { AppService } from 'src/app.service';
import { UserService } from 'src/user.service';

@Module({
    controllers : [AppModule],
    providers : [UserService, AppService],
})
export class UsermoduleModule {}
