export class AppComponentModel{ 
    public title: string;
    public readonly randomGeneratedNumber: number;

    constructor(title:string) {
        this.randomGeneratedNumber = AppComponentModel.getNumber();
        this.title = title;
    }

    public static getNumber(): number{
        return Math.random() * 1000;
    }
}



