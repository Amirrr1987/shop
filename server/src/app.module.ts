import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ResponseService } from './response/response.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/shop'),
    ProductsModule,
    UsersModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService, ResponseService],
})
export class AppModule {}
