import { Container, Sprite } from "pixi.js";



export class Button extends Container{
    private spr: Sprite;

    constructor()
    {
        super();
        
        this.spr= Sprite.from("btnok");
        this.scale.set(0.1);
        this.position.set(100,100);
        this.addChild(this.spr);
        this.spr.interactive = true;
       
       
    }
   
   
}
