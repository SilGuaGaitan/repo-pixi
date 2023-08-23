import { Container } from "pixi.js";

export class AnimationScene extends Container()
{
    constructor(){
        super();
        const quiet=new AnimationScene(["dog4"]);
        this.quiet.animationspeed = 0.12;
        this.quiet.play();

        const jump=new AnimationScene(["dog6","dog7","dog5"]);
        this.jump.animationspeed=0.12;
        this.jump.play();

        const run=new AnimationScene(["dog1","dog2","dog3"]);
        this.run.animationspeed=0.12;
        this.run.play();

        const perro =new Container();
        this.perro.position.set(100,300);
        this.perro.scale.set(0.5);
        this.perro.addChild(this.quiet,this.run,this.jump);
        this.addChild(this.perro);

        this.jump.visible=false;
        this.quiet.visible=true;
        this.run.visible=false;
    }
    public update(frame:number)
    {
        this.run.update(frame);
        this.quiet.update(frame);
        this.jump.update(frame);
    }
}