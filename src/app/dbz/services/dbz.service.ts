import { Injectable } from "@angular/core";
import { v4 as uuid } from 'uuid';
import { Character } from "../interfaces/character.interface";

@Injectable({
    providedIn: 'root'
})

export class DbzService { 

    public characterList: Character[] = [
        {
            id: uuid(),
            name: 'Krillin',
            power: 1000,
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9500,
        },
        {
            id: uuid(),
            name: 'Vegetta',
            power: 7500,
        }
    ];

    addNew(character: Character):void {
        const newCharacter: Character = { id: uuid(), ...character}
        this.characterList.push(newCharacter);
    }

    remodeCharacterById(id: string):void {
        this.characterList = this.characterList.filter((character) => character.id !== id);
    }

}