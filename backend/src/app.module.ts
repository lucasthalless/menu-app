import { Module } from '@nestjs/common';
import { DatabaseModule } from '@src/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from '@src/product/product.module';
import { CategoryModule } from '@src/category/category.module';
import { AuthModule } from '@src/auth/auth.module';
import { UsersModule } from '@src/users/users.module';
import { AuthGuard } from '@src/auth/auth.guard';

import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    ProductModule,
    CategoryModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
