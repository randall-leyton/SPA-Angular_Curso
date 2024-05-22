import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any ={};// el decorador @infput establece que si la 
  //variable no se inicializa dentro entonces debe inicializar de a fuera 
  @Input() index : number;

  
  @Output() heroeSeleccionado: EventEmitter<number>;


  constructor( private router:Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }
  verHeroe(){
    // console.log(this.index);
    // this.router.navigate(['heroe',this.index])
    this.heroeSeleccionado.emit(this.index);
  }

}
