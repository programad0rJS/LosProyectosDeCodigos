import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburquesas',
  templateUrl: './hamburquesas.component.html',
  styleUrls: ['./hamburquesas.component.css']
})
export class HamburquesasComponent implements OnInit {
  Casa = 'Inicio';
  Clientes = 'Contacto';
  Ajustes = 'Configuracion';
  constructor() { }

  ngOnInit(): void {
  }  
   
  Josue() {
    alert("Comprar")
    prompt("Quieres Confirmar La Compra ")
  }

}
