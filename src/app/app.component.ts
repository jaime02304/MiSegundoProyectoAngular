import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaComponent } from "./lista/lista.component";
import { DetalleComponent } from "./detalle/detalle.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaComponent, DetalleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MiSegundoProyecto';

  itemSelected: object ={};

  changeItem(item: object){
    this.itemSelected=item;
    console.log(item);
  }
}
