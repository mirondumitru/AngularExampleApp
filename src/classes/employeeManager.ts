export abstract class Employee{
    e(){
        if (this.canGenerate()) {
            console.log("this is a report!");
        }
        else{
            console.log("could not generate report!")
        }
    }

    protected abstract canGenerate(): boolean;
}

export class Developer extends Employee{
    protected canGenerate(): boolean {
        return true;
    }
}

export class Manager extends Employee{
    protected canGenerate(): boolean {
        return false;
    }
}
