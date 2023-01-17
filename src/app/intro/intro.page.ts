import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slideOpt = {
    initialSlide: 1, //slide inicial (primero) [0,1,2,3]
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, //que las slides enten centradas
    speed: 400 //velocidad movimiento de los slides
  }
  slides = [
    {
      title: "Oso Panda",
      img: "https://assets.afcdn.com/story/20161017/989289_w1200h630c1cx511cy250.jpg",
      description: "El panda, oso panda o panda gigante (Ailuropoda melanoleuca) es una especie de mamífero del orden de los carnívoros. El estudio de su ADN lo engloba entre los miembros de la familia de los osos (Ursidae),2​ siendo el oso de anteojos su pariente más cercano, que pertenece a la subfamilia de los tremarctinos."
    },
    {
      title: "Ardilla",
      img: "https://t1.ev.ltmcdn.com/es/posts/6/7/4/animales_de_la_ciudad_3476_orig.jpg",
      description: "Tienen un estilo de vida parecido al de los pájaros, viviendo en nidos o huecos de los árboles. Aunque no vuelan realmente, sí que planean en el cielo. Abren sus patas y se deslizan de árbol en árbol. La piel que une las extremidades y el cuerpo hace que parezca que tienen verdaderas alas."
    },
    {
      title: "Leon",
      img: "https://www.nationalgeographic.com.es/medio/2022/12/12/leon-1_b21b27e1_221212155936_1280x720.jpg",
      description: "Mamífero felino de 250 a 350 cm de longitud (cola incluida), pelaje pardo claro, cabeza grande, cola larga terminada en un mechón y uñas fuertes que usa para cazar; el macho es mayor que la hembra y tiene una larga melena que le cubre la nuca y el cuello; es carnívoro y habita en manada en desiertos y estepas de África y la India."
    },
    {
      title: "Elefante",
      img: "http://c.files.bbci.co.uk/AACD/production/_102952734_elefante.jpg",
      description: "Mamífero paquidermo de gran tamaño, el mayor de los terrestres, con la piel de color gris oscuro, gruesa, rugosa y sin pelo, grandes orejas colgantes, larga trompa prensil, cuatro extremidades gruesas y casi cilíndricas, cola larga, y dos colmillos muy largos de punta cónica; se alimenta de vegetales, y vive en diversos hábitats de Asia y África."
    }
  ]
 
  constructor(private navCtrl: NavController,private storage: Storage){
    this.storage.create();

  }

  async goToHome(){

  await this.storage.set('intro', true);
  console.log('intro');
  
    this.navCtrl.navigateForward('/home');
  }

  ngOnInit() {
  }

}
