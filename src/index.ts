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
        return 0;
    }


    getSeniority(): number {
        return 0;
    }

    increaseSalary(percentage: number): void {
    }


}

console.log(new NewEmpleyee('pepe', 'programador', 1500))
