import { AnimatedSprite, Texture, Sprite, Container, Graphics} from "pixi.js";
import { IUpdateable } from "./IUpdateable";
import { PhsicContainer } from "./game/PhsicContainer";
import { HEIGHT, WIDTH } from ".";

export class TickerScene extends Container implements IUpdateable{
   private catAnimated: AnimatedSprite;
    physCat: PhsicContainer;
  
    constructor()
    {
        super();
        const background =Sprite.from("selva");
            background.width=640;
            background.height=480;
            this.addChild(background);
        this.catAnimated = new AnimatedSprite(
            [
                Texture.from("cat1"),
                Texture.from("cat2"),
                Texture.from("cat3"),
                Texture.from("cat4"),
                Texture.from("cat5"),
                Texture.from("cat6"),
            ],
            false
            );
            this.catAnimated.scale.set(0.5);
            //this.catAnimated.y =340;
            this.catAnimated.play();
            this.catAnimated.anchor.set(0.5,1);
            this.catAnimated.animationSpeed = 0.25;
           

            this.physCat = new PhsicContainer();
            this.physCat.speed.x = 50;
            this.physCat.speed.y = 0;
            this.physCat.aceleration.y = 800;
            this.addChild(this.physCat);
            const auxzero= new Graphics();
            auxzero.beginFill(0xFF00FF);
            auxzero.drawCircle(0,0,5);
            auxzero.endFill();
            this.physCat.addChild(this.catAnimated);
            this.physCat.addChild(auxzero);
         
    }
    public update(deltaTime: number, deltaFrame: number): void {
        this.catAnimated.update(deltaFrame);
        const dt = deltaTime / 1000;
        this.physCat.update(dt);
        if (this.physCat.x > WIDTH )
        {
            this.physCat.x = WIDTH;
            this.physCat.speed.x=Math.abs(this.physCat.speed.x) * -1;
            this.physCat.scale.x = -1;
            this.catAnimated.tint=0xFF00FF;
        }
        else if (this.physCat.x < 0)
        {
            this.physCat.x =0;
            this.physCat.speed.x=Math.abs(this.physCat.speed.x);
            this.physCat.scale.x=1;
            this.catAnimated.tint=0xFF0000;
        }
        if (this.physCat.y > HEIGHT)
        {
            this.physCat.y = HEIGHT;
        
            this.physCat.speed.y = -800 *Math.random();
            this.catAnimated.tint= 0xFFFF00;
        }
        
        
        /* for(let index = 0; index< 15000000;index++)
        1+1;*/
    }
   
   
}