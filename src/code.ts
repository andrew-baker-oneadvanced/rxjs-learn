import { Observable } from 'rxjs';


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
const observable = Observable.create((observer: any) => {
  try {
    observer.next('Hey guys!');
    observer.next('How are you?');
    setInterval(() => {
      observer.next('I am good');
    }, 1000 * 2 /* seconds */);
  } catch (err) {
    observer.error(err);
  }
});

const observer = observable.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem('Completed')
);

const observer2 = observable.subscribe(
  (x: any) => addItem(x)
);

observer.add(observer2);
// observer.remove(observer2);

setTimeout(() => {
  observer.unsubscribe();
}, 1000 * 6 /* seconds */);

function addItem(val: any) {
  const node = document.createElement('li');
  const textnode = document.createTextNode(val);

  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
}
