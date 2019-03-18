//on importe le modul dont on a besoin
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

//on charge le dossier html et css de notre module
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //les attributs
  hero: Hero = {
    id: 1,
    name: "windstorm"
  }
  //on rajoute notre constante
  heroes = HEROES;

  constructor() { }
  //c'est une méthode qui se charge automatiquement sur la page

  ngOnInit() {
  }

}
