import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { AddDbzCharacterComponent } from './components/add-dbz-character/add-dbz-character.component';



@NgModule({
  declarations: [
    MainPageComponent,
    CharactersListComponent,
    AddDbzCharacterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
