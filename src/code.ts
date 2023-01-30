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
import { fromEvent, Observable } from 'rxjs';


const observable = fromEvent(document, 'mousemove');

setTimeout(() => {
  const subscription = observable.subscribe(
    (x: any) => addItem(x)
  );
}, 1000 * 2);  // 2 seconds

function addItem(val: any) {
  const node = document.createElement('li');
  const textnode = document.createTextNode(val);

  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
}
