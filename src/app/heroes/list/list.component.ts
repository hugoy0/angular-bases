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
  public deletedHeroes: string[] = [];

  deleteLastHeroe() {
    if(this.heroNames.length !== 0) {
      const lastHeroe = this.heroNames.pop()!;
      this.deletedHeroes.push(lastHeroe);
    } else {
      console.log('todo fue eliminado');
    }
  }
  
}
