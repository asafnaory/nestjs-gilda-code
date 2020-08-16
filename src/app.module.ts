import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokesController } from './jokes/jokes.controller';
import { JokesService } from './jokes/jokes.service';
import { EmployeeController } from './employee-rest/employee.controller';
import { EmployeeService } from './employee-rest/employee.service';
import { EmployessDB } from 'db/employees';
import { EmployeeModule } from './employee-graphql/employee.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [HttpModule, EmployeeModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    EmployeeModule,
  ],
  controllers: [AppController, JokesController, EmployeeController],
  providers: [AppService, JokesService, EmployeeService, EmployessDB],
})
export class AppModule {}
