import { Container, Point } from "pixi.js";

export class PhsicContainer extends Container{
    
    public speed:Point = new Point();
    public aceleration:Point = new Point();

    public update(deltaSecond:number)
    {
        this.x = this.x +this.speed.x * deltaSecond + (1/2) * this.aceleration.x *Math.pow(deltaSecond,2);
        this.y = this.x +this.speed.y * deltaSecond + (1/2) * this.aceleration.y *Math.pow(deltaSecond,2);

        this.speed.x += this.aceleration.x *deltaSecond;
        this.speed.y += this.aceleration.y *deltaSecond;
    }
}