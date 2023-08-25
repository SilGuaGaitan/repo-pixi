import { AnimatedSprite, Container, Texture } from "pixi.js";

export class StateAnimation extends Container
{
    private states:Map<string,AnimatedSprite> =new Map;
    public playState(statename: string) {
        this.removeChildren();
        const currentstate = this.states.get(statename);
        if(currentstate)
        {
         this.addChild(currentstate);   
        }
        
    }
    public addState(statename: string, frames:Texture[]|string[], animationSpeed:number=0.12, loop:boolean=true) {
      const textarray:Texture[]=[];
         for(const tex of frames){
            if(typeof tex== "string")
            {
                textarray.push(Texture.from(tex));
            }
            else
            {
               textarray.push(tex);
            }
            const  tempAnim:AnimatedSprite =new AnimatedSprite(textarray);
            tempAnim.play();
            tempAnim.animationSpeed= animationSpeed;
            tempAnim.loop = loop;
            this.states.set(statename,tempAnim);
        }
         
    }
    public update(frames:number)
    {
        for(const state of this.states.values()){
            state.update(frames);
        }
    }

}