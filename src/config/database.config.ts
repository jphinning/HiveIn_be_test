import * as path from 'path';
import * as dotenv from 'dotenv';

const dotenv_path = path.resolve(process.cwd(), '.env');
const result = dotenv.config({ path: dotenv_path });
if (result.error) {
  throw new Error(`config error - missing ${dotenv_path}`);
}

export const DatabaseConfig = {
  type: 'mysql' as any,
  database: process.env.MYSQL_DB_NAME || 'zenbit',
  port: parseInt(process.env.MYSQL_PORT) || 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  timezone: 'Z',
  logging: true,
  autoLoadEntities: true,
  synchronize: true,
  migrationsRun: false,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/**/*{.ts,.js}'],
  cli: { migrationsDir: 'src/migrations' },
  ssl: {
    rejectUnauthorized: false,
  },
};
