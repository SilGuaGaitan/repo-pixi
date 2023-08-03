import { Container, Texture } from "pixi.js";
import { IUpdateable } from "../IUpdateable";
import { sound } from "@pixi/sound";
import { Boton } from "../Boton";

export class SoundScene extends Container implements IUpdateable
{
    constructor()
    {
        super();
        const snd =sound.play("sonido");
        //snd.volume =0.1;
        /*const allCont =new Container();
        this.addChild(allCont);
       /* allCont.scale.set(3);*/

        const btnSword = new Boton (Texture.from("espada"));
        btnSword.position.set(100,100);
        btnSword.scale.set(0.5);
        btnSword.on(Boton.CLIKED_EVENT, this.swordSound, this);
        this.addChild(btnSword);

        const btnVolumenUp =new Boton(Texture.from("mas"));
        btnVolumenUp.position.set(350,150);
        btnVolumenUp.scale.set(0.2);
        //btnVolumenUp.on(Boton.CLIKED_EVENT, this.VolumenUp, this);
        this.addChild(btnVolumenUp);

        const btnVolumenDown = new Boton(Texture.from("menos"));
        btnVolumenDown.position.set(350,300);
        btnVolumenDown.scale.set(0.2);
        //btnVolumenDown.on(Boton.CLIKED_EVENT, this.VolumenDown, this);
        this.addChild(btnVolumenDown);

        const toggleMute =new Boton(Texture.from("nota"));
        toggleMute.position.set(450,200);
        toggleMute.scale.set(0.5);
        //toggleMute.on(Boton.CLIKED_EVENT, this.toggleMute, this);
        this.addChild(toggleMute);

    }
 
   /* public VolumenUp()
    {
      sound.volume("espada",2);
    }
    public VolumenDown()
    {
      sound.volume("espada",0.1);
    }
    public toggleMute(_mute:boolean)
    {
      sound.toggleMuteAll();
    }*/
    public swordSound()
    {
      sound.play("espada");
    }
  
}
