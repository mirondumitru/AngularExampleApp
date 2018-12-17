export class User{
    username: string;
    email: string;
    isActive: boolean;
    identifier:string;
    _created:string;
}


export class IncomeSource{
    name: string;
}

export class Income{
    description: string;
    date: Date; 
    amount: number;
    category: IncomeSource;
}

