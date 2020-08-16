import { EmployeeService } from './employee.service';
import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { EmployeeDto } from './employee-dto';

@Controller('employee')
export class EmployeeController {
    constructor(private empolyeeService: EmployeeService){}

    @Get()
    getAllEmployees(){
        return this.empolyeeService.getAllEmployees()
    }
    @Get(':id')
    getEmployeeById(@Param('id') id:string){
        return this.empolyeeService.getEmployeeById(id);
    }

    @Post()
    createEmployee(@Body() employee: EmployeeDto){
        this.empolyeeService.createEmployee(employee);
    }

    @Put()
    updateEmployee(@Body() employeeDetails: any){
        return this.empolyeeService.updateEmployee(employeeDetails);
    }

    @Delete(':id')
    deleteEmployee(@Param('id') id:string){
        return this.empolyeeService.deleteEmployee(id)
    }
    
}
