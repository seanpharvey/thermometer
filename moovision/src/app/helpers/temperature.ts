import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class Temperature {
    constructor(){}

    convertCelToFar(celcius:number){
        return ((celcius * 9/5) + 32);
    }
}