/*
import { Observable, share } from 'rxjs';


/* const observable = Observable.create((observer: any) => {
  try {
    observer.next('Hey guys!');
    observer.next('How are you?');
    // throw new Error('Something bad happened');
    observer.complete();
    observer.next('This will not send');
  } catch (err) {
    observer.error(err);
  }
}); */
/*
const observable = Observable.create((observer: any) => {
  try {
    observer.next('Hey guys!');
    observer.next('How are you?');
    setInterval(() => {
      observer.next('I am good');
    }, 1000 * 2);  // 2 seconds
  } catch (err) {
    observer.error(err);
  }
// });
}).pipe(share());

const observer = observable.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem('Completed')
);

setTimeout(() => {
  const observer2 = observable.subscribe(
    (x: any) => addItem('Subscriber 2: ' + x)
  );
}, 1000 * 6);  // 6 seconds
*/
/*
import { fromEvent, Observable } from 'rxjs';


const observable = fromEvent(document, 'mousemove');

setTimeout(() => {
  const subscription = observable.subscribe(
    (x: any) => addItem(x)
  );
}, 1000 * 2);  // 2 seconds
*/
// import { Subject } from 'rxjs';
// import { BehaviorSubject } from 'rxjs';
// import { ReplaySubject } from 'rxjs';
// import { AsyncSubject } from 'rxjs';
// import { Observable, merge } from 'rxjs';
// import { Observable, map } from 'rxjs';
// import { from, pluck } from 'rxjs';
import { Observable, Subject, skipUntil } from 'rxjs';


/* from ([
  {
    first: 'Gary',
    last: 'Simon',
    age: '34'
  },
  {
    first: 'Jane',
    last: 'Simon',
    age: '34'
  },
  {
    first: 'John',
    last: 'Simon',
    age: '34'
  }])
    .pipe(pluck('first'))
    .subscribe((x: any) => addItem(x)); */

const observable1 = Observable.create((data: any) => {
  let i = 1;

  setInterval(() => {
    data.next(i++);
  }, 1000 * 1);
});

const observable2 = new Subject();

setTimeout(() => {
  observable2.next('Hey!');
}, 1000 * 5);

const newObs = observable1.pipe(skipUntil(observable2));

newObs.subscribe((x: any) => addItem(x));

/* const observable = Observable.create((observer: any) => {
  observer.next('Hey guys!');
});

const observable2 = Observable.create((observer: any) => {
  observer.next('How is it going?');
});

const newObs = merge(observable, observable2);

newObs.subscribe((x: any) => addItem(x)); */

// Observable.create((observer: any) => {
//   observer.next('Hey guys!');
// })
//   .pipe(map((val: any) => val.toUpperCase()))
//   .subscribe((x: any) => addItem(x));

// const subject = new Subject();
// const subject = new BehaviorSubject('First');
// const subject = new ReplaySubject(2);
// const subject = new ReplaySubject(30, 500);
// const subject = new AsyncSubject();

// subject.subscribe(
//   (data: any) => addItem('Observer 1: ' + data),
//   (err: any) => addItem(err),
//   () => addItem('Observer 1 completed')
// );

// var i = 1;
// var int = setInterval(() => subject.next(i++), 100);

// subject.next('The first thing has been sent');
// subject.next('Another thing has been sent');
// subject.next('...Observer 2 is about to subscribe...');

// setTimeout(() => {
//   const observer2 = subject.subscribe(
//     (data: any) => addItem('Observer 2: ' + data)
//   );
//   subject.complete();
// }, 500);

// subject.next('The second thing has been sent');
// subject.next('A third thing has been sent');

// observer2.unsubscribe();

// subject.next('A final thing has been sent');

function addItem(val: any) {
  const node = document.createElement('li');
  const textnode = document.createTextNode(val);

  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
}
