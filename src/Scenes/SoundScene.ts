import { sound } from "@pixi/sound";
import { Container, Sprite } from "pixi.js"

export class SoundScene extends Container
{ constructor()
    {
        super();
        sound.play("sonido");
        const cont =new Container();
        this.addChild(cont);

        const btnSword=  Sprite.from("espada");
        btnSword.scale.set(0.5);
        btnSword.position.set(100,100);
        this.addChild(btnSword);
        btnSword.on("mousedown",this.onMouseDown, this);
        btnSword.interactive =true;

        const btnmas= Sprite.from("mas");
        btnmas.scale.set(0.2);
        btnmas.position.set(350,200);
        this.addChild(btnmas);
        btnmas.on("mousedown",this.VolumenOn,this);
        btnmas.interactive=true;

        const btnmenos=Sprite.from("menos");
        btnmenos.scale.set(0.2);
        btnmenos.position.set(350,300);
        this.addChild(btnmenos);
        btnmenos.on("mousedown",this.VolumenDown,this);
        btnmenos.interactive=true;

        


    }
    private onMouseDown():void
    {
        sound.play("sonido");
        console.log("sono la espada");
    }
    private VolumenOn():void
    {
        sound.play("sonido",{volume:5});
        console.log("sono la espada mas alto");
    }
    private VolumenDown():void
    {
        sound.play("sonido",{volume:0.1});
        console.log("sono la espada mas bajo");
    } 

}