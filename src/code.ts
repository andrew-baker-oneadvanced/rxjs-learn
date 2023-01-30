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
import { Subject } from 'rxjs';


const subject = new Subject();

subject.subscribe(
  (data: any) => addItem('Observer 1: ' + data),
  (err: any) => addItem(err),
  () => addItem('Observer 1 completed')
);

subject.next('The first thing has been sent');

const observer2 = subject.subscribe(
  (data: any) => addItem('Observer 2: ' + data)
);

subject.next('The second thing has been sent');
subject.next('A third thing has been sent');

observer2.unsubscribe();

subject.next('A final thing has been sent');

function addItem(val: any) {
  const node = document.createElement('li');
  const textnode = document.createTextNode(val);

  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
}
