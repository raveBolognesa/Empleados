"use strict";
class NewEmpleyee {
    constructor(name, surname, salary) {
        this.name = name;
        this.surname = surname;
        this.salary = salary;
        this.contractDate = new Date();
    }
    calculateSalary() {
        return this.salary * 12;
    }
    getSeniority() {
        const today = new Date();
        let age = today.getFullYear() - this.contractDate.getFullYear();
        const month = today.getMonth() - this.contractDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < this.contractDate.getDate())) {
            age--;
        }
        return age;
    }
    increaseSalary(percentage) {
        this.salary = (this.salary * (100 + percentage)) / 100;
    }
}
const empleado1 = new NewEmpleyee('pepe', 'programador', 1500);
console.log(empleado1.calculateSalary());
console.log(empleado1.getSeniority());
empleado1.increaseSalary(15);
console.log(empleado1.calculateSalary());
//# sourceMappingURL=index.js.map