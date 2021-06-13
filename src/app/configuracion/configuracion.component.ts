import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  Aviso = 'Esta Pagina Web Esta En Mantenimineto ,Mucha Gracias';
  constructor() { }

  ngOnInit(): void {
  }

}
