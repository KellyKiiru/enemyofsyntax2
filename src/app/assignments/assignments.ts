import { Component } from "@angular/core";

@Component({
    selector:"interpolation-trial",
    templateUrl: "./assignments.html",
    styleUrls: ["./assignments.css"]
})

export class InterpolationTrial{

    jina: string  = 'Kiiru Ryan '
    goals = ['buy a good machine', 'build a good house', 'be a sought-after programmer']

    cars = {
        first : 'bmw',
        second: 'audi',
        third: 'mercedes',
        fourth : 'cadillac'
    }

    willBeRich = true
}

