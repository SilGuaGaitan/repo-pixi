import { sound } from "@pixi/sound";
import { Container, Sprite } from "pixi.js"

export class SoundScene extends Container

{   public mutev:boolean=true;
     constructor()
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

        const togglemute = Sprite.from("nota");
        togglemute.scale.set(0.2);
        togglemute.position.set(450,300);
        this.addChild(togglemute);
        togglemute.on("mousedown", this.toggleMute, this);
        togglemute.interactive=true;


    }
   
    public onMouseDown():void
    {
        sound.play("sonido", {volume:1, loop:true});
        console.log("sono la espada");
    }
    public VolumenOn():void
    {
        sound.volumeAll += 0.5;
        console.log("sono la espada mas alto");
    }
    public VolumenDown():void
    {
        sound.volumeAll -= 0.5;
        console.log("sono la espada mas bajo");
    } 
    public toggleMute(): void
    {  
        if(!this.mutev)
        {
                sound.muteAll();
                console.log(" Volumen Muteado");
                this.mutev=true;
        }
        else
        {
            sound.unmuteAll();
            console.log("Volumen Habilitado");
            this.mutev =false;
        }
        
    } 

}