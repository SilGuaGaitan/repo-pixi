import { Container, Sprite } from "pixi.js";
import { Tween } from "tweedle.js";

export class TweenScene extends Container
{
    constructor(){
        super();
        const coin=Sprite.from("moneda");
        coin.scale.set(0.05);
        coin.anchor.set(0.5);
        coin.x=100;
        coin.y=100;
        this.addChild(coin);
        new Tween(coin)
            .to({x:500, y:300, alpha:0, scale:{x:1,y:1},angle:360},3000)
            .repeat(2)
            .yoyo(true)
            .start();
    }
    public update()
    {

    }
}