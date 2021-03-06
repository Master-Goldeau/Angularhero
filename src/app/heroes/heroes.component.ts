import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : Array<Hero>;

  constructor() { 
    this.heroes = new Array();
  }

  ngOnInit() {
    this.heroes.push(new Hero('Link'));
    this.heroes.push(new Hero('Zelda'));
    this.heroes.push(new Hero('Tingle'));
  }

}
