import { Container, Graphics, Rectangle, Sprite } from "pixi.js"
import { IHitbox } from "./IHitbox";

export class Platform extends Container implements IHitbox
{
    hitbox: Graphics;
    constructor()
    {
        super();
        const plat = Sprite.from("plat");
        
        this.addChild(plat);
            this.hitbox =new Graphics;
            this.hitbox.beginFill(0X00FFFF,0.3);
            this.hitbox.drawRect(0,0,830,150);
            this.hitbox.endFill();
            this.addChild(this.hitbox);
    }
    public gethitbox():Rectangle
    {
       return this.hitbox.getBounds();
    } 
}
