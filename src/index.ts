import {Observable, Subscriber} from "rxjs";

const stream$ = new Observable((subscriber: Subscriber<number>) => {
    new Promise(async resolve => {
        for (let i = 0; i < 10; i++) {
            await delay(500);
            subscriber.next(i);
            if (i === 5) {
                subscriber.complete();
            }
        }
        resolve(null);
    }).then(() => {
        console.log("All data received!");
    });
});

stream$.subscribe(data => {
    console.log("subscribe:", data)
})

async function delay(ms: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}