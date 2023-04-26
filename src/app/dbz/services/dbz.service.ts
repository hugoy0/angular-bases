import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";

@Injectable({
    providedIn: 'root'
})

export class DbzService { 

    public characterList: Character[] = [
        {
            name: 'Krillin',
            power: 1000,
        },
        {
            name: 'Goku',
            power: 9500,
        },
        {
            name: 'Vegetta',
            power: 7500,
        }
    ];

    addNew(character: Character):void {
        this.characterList.push(character);
    }

    deleteCharacter(index:number):void {
        this.characterList.splice(index, 1);
    }

}