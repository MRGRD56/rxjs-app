import {Observable, Subscriber} from "rxjs";

async function delay(ms: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

const stream$ = new Observable((subscriber: Subscriber<number>) => {
    new Promise<void>(async resolve => {
        for (let i = 0; i < 10; i++) {
            await delay(500);
            subscriber.next(i);
            // if (i === 4) {
            //     subscriber.error("An error occurred");
            // }
            if (i === 5) {
                subscriber.complete();
                //break;
            }
        }
        resolve();
    }).then(() => {
        console.log("All data received!");
    });
});

stream$
    .subscribe({
        next: data => {
            console.log("subscribe:", data)
        },
        error: error => {
            console.error(error);
        },
        complete: () => {
            console.log("Subscription completed!");
        }
    });