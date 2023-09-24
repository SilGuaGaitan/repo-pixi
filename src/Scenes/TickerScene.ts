import { Container, Texture, TilingSprite} from "pixi.js";
import { IUpdateable } from "../IUpdateable";
import { Player } from "../game/Player";
import { Platform } from "../game/Platform";
import { checkcollision } from "../game/IHitbox";
import { SceneManager } from "../util/SceneManager";

export class TickerScene extends Container implements IUpdateable{
    private playerCat: Player;
    private platforms :Platform[];
    private world:Container;
    private background: TilingSprite;
    private gamespeed:number =100;
    private timepassed:number=0;
    platform: any;
    constructor()
    {
        super();
        this.world =new Container();
        this.background = new TilingSprite(Texture.from("selva"),SceneManager.WIDTH,SceneManager.HEIGHT);
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
        this.playerCat.x=100;
        this.playerCat.y=100;
        this.playerCat.scale.set(0.8);
        this.world.addChild(this.playerCat);  
        this.addChild(this.world);          
    }
    public update(deltaTime: number, _deltaFrame: number): void {
        this.timepassed+= deltaTime;
        if(this.timepassed > (2000* 200/this.gamespeed))
        {
            this.gamespeed +=50;
            this.timepassed=0;
            const plat = new Platform();
            plat.scale.set(0.25);
            plat.position.set(SceneManager.WIDTH,Math.random()*480) ;
            this.world.addChild(plat);
            this.platforms.push(plat);   
        }
        this.playerCat.update(deltaTime);
        for (let platform of this.platforms){
            platform.speed.x=-this.gamespeed;
            platform.update(deltaTime/1000);
         const overlap =checkcollision(this.playerCat, platform);
         if(overlap != null)
         {
            this.playerCat.separate(overlap, platform.position);
           
         }
         if(platform.gethitbox().right< 0)
         {
            platform.destroy();
         }
        }
        this.platforms =this.platforms.filter((elem)=>!elem.destroyed);
        console.log(this.platforms.length);
        this.background.tilePosition.x -= this.gamespeed * deltaTime/1000;       
       
    }
   
   
}