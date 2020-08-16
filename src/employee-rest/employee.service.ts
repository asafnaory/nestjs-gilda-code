import { Injectable, NotFoundException } from '@nestjs/common';
import { EmployessDB } from 'db/employees';

@Injectable()
export class EmployeeService {
  constructor(private employeeDb: EmployessDB) {}

  getAllEmployees() {
    return this.employeeDb.getEmployees();
  }

  getEmployeeById(id) {
    const employee = this.employeeDb.getEmployeeById(id);
    if (!employee) {
      throw new NotFoundException();
    }
    return employee;
  }
  createEmployee(employee) {
    this.employeeDb.addEmployee(employee);
  }

  updateEmployee(updateDetails){
      const employee = this.employeeDb.updateEmployee(updateDetails);
      if(!employee){
        throw new NotFoundException();
      }
      return employee;
  }

  deleteEmployee(id){
      const employee =  this.employeeDb.deleteEmployee(id);
      if(!employee){
          throw new NotFoundException();
        }
      return employee;
  }
}
