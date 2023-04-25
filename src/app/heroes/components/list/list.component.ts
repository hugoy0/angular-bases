import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = [
    'Spiderman',
    'Hulk',
    'Ironman',
    'Thor',
    'Hawkeye'
  ];
  public deletedHeroe: string = '';

  removeLastHeroe() {
    this.deletedHeroe = this.heroNames.pop()!;
  }
  
}
