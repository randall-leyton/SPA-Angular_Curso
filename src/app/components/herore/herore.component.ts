import { Component, OnInit } from '@angular/core';
import { calcBindingFlags } from '@angular/core/src/view/util';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesServices } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-herore',
  templateUrl: './herore.component.html',
  styles: []
})
export class HeroreComponent implements OnInit {
  heroe:Heroe;
  constructor( private activateRouter: ActivatedRoute, private _heroesServices:HeroesServices) { 
    this.activateRouter.params.subscribe(params=> {
      console.log(params['id']);
      this.heroe = this._heroesServices.getHeroe(params['id']);
      console.log(this.heroe);
    });
    

  }

  ngOnInit() {
    
  }

}
