import {  Container, Texture } from "pixi.js";
import { StateAnimation } from "../game/StateAnimation";
import * as tierrapart from "../game/tierrapart.json";
import { Emitter, LinkedListContainer, upgradeConfig } from "@pixi/particle-emitter";

export class AnimationScene extends Container
{
   
    private perro :StateAnimation;
    private  tierra: Emitter;
    private tierracontainer: LinkedListContainer;
    constructor(){
        super();
      
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
       // this.interactive=true;
        this.on("mousedown", (e)=>{
            this.tierra.spawnPos.copyFrom(e.data.global);
            this.tierra.updateSpawnPos(e.data.global.x , e.data.global.y);
        });
    }
    public update(frame:number, deltaSecond:number)
    {
        this.perro.update(frame);
        this.tierra.update(deltaSecond);
      
    }
}