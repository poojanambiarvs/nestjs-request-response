import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthGuard } from './guard/auth.guard';
import { FreezePipe } from './pipe/freeze.pipe';

//import{ authenticationmiddleware } from './middleware/authentication.middleware';
async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new FreezePipe)
  await app.listen(3000);
}
bootstrap();
