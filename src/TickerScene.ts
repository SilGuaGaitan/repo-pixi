import { Container, Texture, TilingSprite} from "pixi.js";
import { IUpdateable } from "./IUpdateable";

import { HEIGHT, WIDTH } from ".";
import { Player } from "./game/Player";
import { Platform } from "./game/Platform";
import { checkcollision } from "./game/IHitbox";

export class TickerScene extends Container implements IUpdateable{
    private playerCat: Player;
    private platforms :Platform[];
    private world:Container;
    private background: TilingSprite;
    private gamespeed:number =100;
   // private timepassed:number=0;
    constructor()
    {
        super();
        this.world =new Container();
        this.background = new TilingSprite(Texture.from("selva"),WIDTH ,HEIGHT);
            this.addChild(this.background);

        this.platforms=[];
        let plat = new Platform();
            plat.scale.set(0.25);
            plat.position.set(90,400) ;
            this.world.addChild(plat);
            this.platforms.push(plat);
       
            plat = new Platform();
            plat.scale.set(0.25);
            plat.position.set(400,300);
            this.world.addChild(plat);
            this.platforms.push(plat); 
           
            
        this.playerCat = new Player();
        this.world.addChild(this.playerCat);  
        this.addChild(this.world);          
    }
    public update(deltaTime: number, _deltaFrame: number): void {
        this.playerCat.update(deltaTime);
        for (let platform of this.platforms){
            platform.speed.x=-this.gamespeed;
            platform.update(deltaTime/1000);
         const overlap =checkcollision(this.playerCat, platform);
         if(overlap != null)
         {
            this.playerCat.separate(overlap, platform.position);
           
         }
        }
       /* if (this.playerCat.x > WIDTH )
        {
            this.playerCat.x = WIDTH;
        }
        else if (this.playerCat.x < 0)
        {
            this.playerCat.x =0;
        }
        if (this.playerCat.y > HEIGHT)
        {
            this.playerCat.canjump= true;
            this.playerCat.y = HEIGHT;
            
        }*/
       // this.world.x=-this.playerCat.x * this.worldTransform.a + WIDTH/4;
        this.background.tilePosition.x -= this.gamespeed * deltaTime/1000;       
       
    }
   
   
}