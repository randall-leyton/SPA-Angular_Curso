import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Heroe, HeroesServices } from 'src/app/services/heroes.service';
@Component({
  selector: 'app-herores',
  templateUrl: './herores.component.html',
  styles: []
})
export class HeroresComponent implements OnInit {

  heroes :Heroe[];
  constructor(private _heroesServices:HeroesServices,
    private _router:Router
  ) { }

  ngOnInit() {
    this.heroes = this._heroesServices.getHeroes();
    console.log(this.heroes);
  }
  verHeroe(id:number){
    console.log("este es el ver heroe id: " + id);
    this._router.navigate(['/heroe',id]);
  }

}
