import { AnimatedSprite, Graphics, ObservablePoint, Rectangle, Texture } from "pixi.js";
import { PhsicContainer } from "./PhsicContainer";
import { KeyBoard } from "../util/keyboard";
import { IHitbox } from "./IHitbox";

export class Player extends PhsicContainer implements IHitbox
{ 
    private static readonly  GRAVITY= 500;
    private static readonly  MOVE_SPEED = 0;
    private static readonly JUMP_SPEED = 500;

    private catAnimated: AnimatedSprite;
    private hitbox:Graphics;
    public canjump = true;
    constructor()
    {
        super();
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
            this.catAnimated.scale.set(0.25);
            this.catAnimated.play();
            this.catAnimated.anchor.set(0.5,1);
            this.catAnimated.animationSpeed = 0.25;

            const auxzero= new Graphics();
                auxzero.beginFill(0xFF00FF);
                auxzero.drawCircle(0,0,5);
                auxzero.endFill();
            this.hitbox =new Graphics;
            this.hitbox.beginFill(0XFF00FF,0.3);
            this.hitbox.drawRect(0,0,200,100);
            this.hitbox.endFill();
            this.hitbox.x = -50;
            this.hitbox.y= -100;
            
            this.addChild(this.catAnimated);
            this.addChild(auxzero);
            this.catAnimated.addChild(this.hitbox);
            this.aceleration.y = Player.GRAVITY;
            KeyBoard.down.on("ArrowUp", this.jump,this);
    }
    public override destroy(options?:any)
    {
       super.destroy(options);        
       KeyBoard.down.off("ArrowUp",this.jump,this);
    }

    public override update(deltaMS:number)
    {  super.update(deltaMS/1000);
        this.catAnimated.update(deltaMS/(1000/60));
        if (KeyBoard.state.get("ArrowRight"))
        {
            this.speed.x=Player.MOVE_SPEED;
            this.catAnimated.scale.x =1;
        }
        else if (KeyBoard.state.get("ArrowLeft"))
        {
            this.speed.x= -Player.MOVE_SPEED;
            this.catAnimated.scale.x = -1;
        }
        else
        {
            this.speed.x = 0;
        }    
        if (KeyBoard.state.get("ArrowDown"))
        {
            this.aceleration.y = Player.GRAVITY*5;
        }
        else
        {
            this.aceleration.y = Player.GRAVITY; 
        }

    }
    private jump()
        {
            if (this.canjump)
            {
                this.canjump = false;
                this.speed.y =- Player.JUMP_SPEED;
            }
        }
 
    public gethitbox():Rectangle
    {
       return this.hitbox.getBounds();
    }
    public separate(overlap:Rectangle,platform:ObservablePoint<any>)
    {
        if(overlap.width<overlap.height)
        {
            if(this.x > platform.x)
            {
              this.x +=overlap.width;
            }
            else if(this.x < platform.x)
            {
                this.x -=overlap.width; 
            }
        }
        else
        {
            if(this.y > platform.y)
            {
              this.y -=overlap.height;
              this.speed.y =0;
              this.canjump= true;
            }
            else if(this.y < platform.y)
            {
                this.y +=overlap.height; 
            }
            
        }
    }

}