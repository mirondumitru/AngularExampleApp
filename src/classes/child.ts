export class Child{
    balls: boolean[];
    name: string;
    id: number;

    removeBall(){
        this.balls.pop();
    }

    addBall(){
        this.balls.push(true);
    }
}