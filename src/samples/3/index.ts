import {of, interval, take, timer, range, takeWhile, filter} from "rxjs";

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

of(...items)
    .subscribe(getSubscription("of"));

interval(500)
    .pipe(
        take(5)
    )
    .subscribe(getSubscription("interval"))

timer(2000, 300)
    .pipe(
        take(3)
    )
    .subscribe(getSubscription("timer"))

range(5, 15)
    .pipe(
        takeWhile(value => value <= 11),
        filter(value => value % 2 === 0)
    )
    .subscribe(getSubscription("range"));