import { Injectable } from "@nestjs/common";
import {Employee} from './empoyee.type'

@Injectable()
export class EmployessDB {
    private employees: Employee[] = [
        {
            id: '1',
            name: 'Asaf Naory', 
            salary: 1000000
        },{
            id: '2',
            name: 'Avraham Hemo', 
            salary: 1000000
        },{
            id: '3',
            name: 'Michael Jordan', 
            salary: 36000000
        },{
            id: '4',
            name: 'Lebron James', 
            salary: 37000000
        },{
            id: '5',
            name: 'Drake', 
            salary: 470000000
        },{
            id: '6',
            name: 'J Cole ', 
            salary: 35000000
        }
    ]

    getEmployees(): Employee[]{ 
        return this.employees; 
    }
    
    getEmployeeById(id: string): Employee { 

        const employee = this.employees.find((employee) => employee.id === id)
        return employee; 
    }

    addEmployee(newEmployee): Employee[]{
        this.employees = [...this.employees, newEmployee]
        return this.employees; 
    }

    updateEmployee(employee): Employee {
        let currEmployee = this.getEmployeeById(employee.id);

        if(!employee){
            return;
        }

        const currEmployeeIndex = this.employees.indexOf(currEmployee);


        if(employee.name){
            currEmployee = employee.name;  
        }
        if(employee.salary){
            currEmployee = employee.salary; 
        }
        this.employees[currEmployeeIndex] = currEmployee;

        return employee; 
    }

    deleteEmployee(id){
        const employee = this.getEmployeeById(id);
        if(!employee){
            return;
        }
        const index = this.employees.indexOf(employee)
        this.employees.splice(index,1);
        return employee;
    }
    
}