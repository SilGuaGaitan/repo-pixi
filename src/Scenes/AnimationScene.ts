import {  Sprite, Texture } from "pixi.js";
import { StateAnimation } from "../game/StateAnimation";
import * as tierrapart from "../game/tierrapart.json";
import { Emitter, LinkedListContainer, upgradeConfig } from "@pixi/particle-emitter";
import {DotFilter} from "@pixi/filter-dot";
import { SceneBase } from "./SceneBase";

export class AnimationScene extends SceneBase
{
   
    private perro :StateAnimation;
    private  tierra: Emitter;
    private tierracontainer: LinkedListContainer;
    constructor(){
        super();
        const bg= Sprite.from("selva");
        this.addChild(bg);
        
        this.tierracontainer=new LinkedListContainer();
        this.addChild(this.tierracontainer);
        
        
        this.perro = new StateAnimation();
        this.perro.position.set(100,200);
        this.perro.scale.set(0.5);
        this.addChild(this.perro);

       this.perro.addState("run",["dog1","dog2" ]);
       this.perro.addState("jump",["dog6","dog7","dog5"]);
       this.perro.addState("quiet",["dog4"])

       this.perro.playState("jump");
       console.log(tierrapart);
       this.tierra = new Emitter(this.tierracontainer, upgradeConfig(tierrapart,Texture.from("tierra")));
       this.tierra.spawnPos.x = 300;
       this.tierra.spawnPos.y=200;
       this.tierra.emit=true;
       this.tierra.autoUpdate=true;
       this.interactive=true;
        this.on("mousedown", (e)=>{
            this.tierra.spawnPos.copyFrom(e.data.global);
            this.tierra.updateSpawnPos(e.data.global.x , e.data.global.y);
        });
        const mylook =new DotFilter ();
        mylook.resolution=10;
        this.filters =[mylook];
      
    }
    public update(_frame:number, deltaMS:number)
    {
       // this.perro.update(frame);
        this.tierra.update(deltaMS/1000);
      
    }
}