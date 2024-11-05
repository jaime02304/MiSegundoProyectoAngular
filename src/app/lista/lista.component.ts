import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaComponent {
  cosasArray = [
    { name: 'Silla', precio: '30€' },
    { name: 'Ordenador', precio: '600€' },
    { name: 'Almuerzo', precio: '10€' },
    { name: 'Maleta', precio: '30€' },
  ];
  //Crea eventos
  @Output() itemSelected = new EventEmitter<object>();
  //Lanza el itemSelected conteniendo un string,
  onSelect(item: object) {
    this.itemSelected.emit(item);
  }
}
