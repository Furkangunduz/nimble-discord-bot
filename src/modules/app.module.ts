import { Module } from '@nestjs/common'
import { EnvalidModule } from 'nestjs-envalid'
import { validators } from '../config'
import { DiscordModule } from './discord/discord.module'
import { BotModule } from './bot/bot.module'
import { DatabaseModule } from './database/database.module'
import { YouTubeModule } from './youtube/youtube.module'
import { LoggerModule } from './logger/logger.module'

@Module({
  imports: [
    EnvalidModule.forRoot({
      validators,
      useDotenv: true,
      isGlobal: true
    }),
    LoggerModule,
    DatabaseModule,
    YouTubeModule,
    DiscordModule,
    BotModule
  ]
})
export class AppModule {}
