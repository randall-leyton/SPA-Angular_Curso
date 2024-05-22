import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesServices } from 'src/app/services/heroes.service';
import { Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  @Input() heroe:any ={};
  @Input() index:number;
  heroes:any [] = [];
  termino: string;
  constructor(private Activate:ActivatedRoute,
              private _heroesSevices: HeroesServices
  ) { 

  }

  ngOnInit() {

    // te sirve para recir los parametros que mandas por el url
    this.Activate.params.subscribe(params=> {
        //console.log(params['termino']);
        this.termino = params['termino'];
        this.heroes=this._heroesSevices.BuscarHeroe(params['termino']);
        console.log(this.heroes);
    })  
  }

  



}
