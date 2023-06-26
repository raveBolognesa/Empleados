interface Employee {
    name: string
    surname: string
    salary: number
    contractDate: Date
    calculateSalary: () => number
    getSeniority: () => number
    increaseSalary: (percentage: number) => void
}

class NewEmpleyee implements Employee {

    name: string
    surname: string
    salary: number
    contractDate: Date;

    constructor(
        name: string,
        surname: string,
        salary: number
    ) {
        this.name = name
        this.surname = surname
        this.salary = salary
        this.contractDate = new Date()
    }

    calculateSalary(): number {
        return this.salary * 12;
    }


    getSeniority(): number {
        const today = new Date();
        let age = today.getFullYear() - this.contractDate.getFullYear();
        const month = today.getMonth() - this.contractDate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < this.contractDate.getDate())) {
            age--;
        }

        return age;
    }

    increaseSalary(percentage: number): void {
        this.salary = (this.salary * (100 + percentage)) / 100
    }
}
const empleado1  =  new NewEmpleyee('pepe', 'programador', 1500)

console.log(empleado1.calculateSalary())
console.log(empleado1.getSeniority())
empleado1.increaseSalary(15)
console.log(empleado1.calculateSalary())
