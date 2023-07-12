import { Container, Sprite, Text, Texture} from "pixi.js";
import { Tarea, Estrella } from "./Tarea";
import { Boton }  from "./Boton";


export class Scene extends Container{
    private boton:Boton;
    constructor()
    {
        super();
        const cartel: Tarea = new Tarea();
            this.addChild(cartel);

        const myText:Text = new Text("Completado",{fontSize:50, fill:0x000000,fontFamily:"Arial"});
            myText.position.set(200,80);
            this.addChild(myText);
        const puntaje:Text = new Text("PUNTAJE:",{fontSize:30, fill:0x298DB9, fontFamily:"Arial"});
            puntaje.position.set(190,180);
            this.addChild(puntaje);
        const puntnum:Text = new Text("123.012.332",{fontSize:25, fill:0x298DB9, fontFamily:"Arial"});
            puntnum.position.set(350,185);
            this.addChild(puntnum);
            this.boton = new Boton(
                Texture.from("botonok"), 
                Texture.from("botonokover"), 
                Texture.from("botonokon"),
                this.onBotonclick);
            this.boton.scale.set(0.1);
            this.boton.position.set(200,300);
            this.boton.interactive = true;
            this.addChild(this.boton);
        const boton2: Sprite = Sprite.from("botoncon");
            boton2.scale.set(0.1);
            boton2.position.set(300,300);
            this.addChild(boton2);
        const boton3: Sprite = Sprite.from("botonc");
            boton3.scale.set(0.1);
            boton3.position.set(400,300);
            this.addChild(boton3);
        const estrella: Estrella = new Estrella();
            estrella.position.set(240,230);
            this.addChild(estrella);
        const estrella1: Estrella = new Estrella();
            estrella1.position.set(300,230);
            this.addChild(estrella1);  
        const estrella3:Estrella = new Estrella();
            estrella3.position.set(360,230);
            this.addChild(estrella3);   

        /*const lastKeyPressed:Text = new Text("Waiting...",{fontSize:48});
                lastKeyPressed.anchor.set(0.5);
                lastKeyPressed.x = 100;
                lastKeyPressed.y = 100;
                this.addChild(lastKeyPressed);*/
    }
    private onBotonclick():void{
        console.log("el boton fue clickeado");
    }
}
