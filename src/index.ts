import {of, interval, take, timer, range, takeWhile, filter, from, map} from "rxjs";

function getSubscription(name: string) {
    return {
        next: value => {
            console.log(`${name} next:`, value)
        },
        error: err => {
            console.error(`${name} error:`, err)
        },
        complete: () => {
            console.log(`${name} completed`);
        }
    };
}

function getNumber() {
    return new Promise<number>(resolve => {
        const randomNumber = Math.round(Math.random() * 100);
        resolve(randomNumber);
    });
}

const items = [
    true,
    3,
    "3",
    7,
    {
        foo: "bar",
        value: 42
    }
];

const itemsSet = new Set(items);

from(itemsSet)
    .pipe(
    )
    .subscribe(getSubscription("from"))