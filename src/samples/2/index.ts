import {Observable, fromEvent} from "rxjs";

const rxButton = <HTMLButtonElement>document.getElementById("rx-button");
const rxInput = <HTMLInputElement>document.getElementById("rx-input");
const mousePositionHeading = document.getElementById("mouse-position-heading");

const rxButtonClick$ = <Observable<MouseEvent>>fromEvent(rxButton, "click");
rxButtonClick$.subscribe(console.log);

(<Observable<InputEvent>>fromEvent(rxInput, "input"))
    .subscribe({
        next: e => {
            console.log((<HTMLInputElement>e.currentTarget).value);
        }
    });

(fromEvent(document, "mousemove") as Observable<MouseEvent>)
    .subscribe(e => {
        mousePositionHeading.innerHTML = `X: ${e.x} <br> Y: ${e.y}`;
    })