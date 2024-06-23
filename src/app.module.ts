import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SongsModule } from './songs/songs.module';
import { SongService } from './song/song.service';

@Module({
  imports: [UsersModule, SongsModule],
  controllers: [AppController],
  providers: [AppService, SongService],
})
export class AppModule {}
