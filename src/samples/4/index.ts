import {of, interval, take, timer, range, takeWhile, filter, from} from "rxjs";

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
    .subscribe(getSubscription("from"))