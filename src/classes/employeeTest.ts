export class EmployeeABCD {
    position: string;
    
    public printPostion(): void {

        switch(this.position)
        {
            case "developer":
                console.log("I am a developer");

            case "tester":
                console.log("I am a tester");

            case "designer":
                console.log("I am a designer");

            default:
                console.log("I do not really know :)");
        }
    }
}