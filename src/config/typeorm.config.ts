import { ConfigService, ConfigModule } from '@nestjs/config';
let configService: ConfigService
export const typeOrmConfig = {
    imports: [ConfigModule],
    inject: [ConfigService],
    type: 'postgres',
    host: configService.get<string>('database.host'),
    port: parseInt(configService.get<string>('database.port')),
    username: configService.get<string>('database.username'),
    password: configService.get<string>('database.password'),
    database: configService.get<string>('database.name'),
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
}