import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AlbumsModule } from './albums/albums.module';
import { ArtistsModule } from './artists/artists.module';
import { PlaylistsModule } from './playlists/playlists.module';
import { SongsModule } from './songs/songs.module';
import { DatabaseConfiguration } from './database.configuration';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfiguration,
    }),
    AlbumsModule,
    ArtistsModule,
    AuthModule,
    PlaylistsModule,
    SongsModule,
    UsersModule,
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
