import { ClientModule } from './modules/client/client.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'src/config/database.config';
import { AuthModule } from './modules/auth/auth.module';
import { SettingsInfoModule } from './modules/settings-info/settings-info.module';
import { FreelancerModule } from './modules/freelancer/freelancer.module';
import { CategoryModule } from './modules/category/category.module';
import { SkillModule } from './modules/skill/skill.module';
import { AvatarModule } from './modules/avatar/avatar.module';
import { MulterModule } from '@nestjs/platform-express';
import { MailerModule } from '@nestjs-modules/mailer';
import { JobPostModule } from './modules/job-post/job-post.module';
import { ProposalModule } from './modules/proposal/proposal.module';
import { ContractsModule } from './modules/contracts/contracts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DatabaseConfig),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: 'smtp.sendgrid.net',
          auth: {
            user: 'apikey',
            pass: configService.get<string>('SEND_GRID_KEY'),
          },
        },
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MulterModule.register({
      dest: '/uploads',
    }),
    AuthModule,
    ClientModule,
    SettingsInfoModule,
    FreelancerModule,
    CategoryModule,
    SkillModule,
    JobPostModule,
    AvatarModule,
    ProposalModule,
    ContractsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
