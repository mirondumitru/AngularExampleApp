export class Child{
    balls: Array<boolean>;
    name: string;
    id: number;

    removeBall(){
        this.balls.pop();
    }

    addBall(){
        this.balls.push(true);
    }
}