import { Container, Sprite} from "pixi.js";
import { IUpdateable } from "./IUpdateable";

import { HEIGHT, WIDTH } from ".";
import { Player } from "./game/Player";
import { Platform } from "./game/Platform";
import { checkcollision } from "./game/IHitbox";

export class TickerScene extends Container implements IUpdateable{
   private playerCat: Player;
    private platforms :Platform[];
    constructor()
    {
        super();
        const background = Sprite.from("selva");
            background.width=640;
            background.height=480;
            this.addChild(background);
        this.platforms=[];
        const plat = new Platform();
            plat.scale.set(0.25);
            plat.position.set(90,400) ;
            this.addChild(plat);
            this.platforms.push(plat);
        const plat2 = new Platform();
         plat2.scale.set(0.25);
            plat2.position.set(300,300);
            this.addChild(plat2);
            this.platforms.push(plat2);
            
        this.playerCat = new Player();
        this.addChild(this.playerCat);            
    }
    public update(deltaTime: number, _deltaFrame: number): void {
        this.playerCat.update(deltaTime);
        for (let platform of this.platforms){
    
         const overlap =checkcollision(this.playerCat, platform);
         if(overlap != null)
         {
            this.playerCat.separate(overlap, platform.position);
           
         }
        }
        if (this.playerCat.x > WIDTH )
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
            this.playerCat.speed.y =0;
        }
       
        
        /* for(let index = 0; index< 15000000;index++)
        1+1;*/
    }
   
   
}