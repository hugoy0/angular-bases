import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDeleteEmit: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index:number):void {
    this.onDeleteEmit.emit(index);
  }

}
