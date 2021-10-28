
// debemos importar eventEmitter
import EventEmitter from 'events';
import {red, blue} from 'nanocolors'

// instanciar la clase
const conectBBDD = new EventEmitter();

// message to emit by the subscriber
const connectionHandler = ()=> {
  console.log('connection succeful');
}
// subscriber => receptor
// son dos pàrametros, el primero
conectBBDD.on('conection', connectionHandler);

// emisor
conectBBDD.emit('conection');

const emitter = new EventEmitter();

const myTimerHandler = data => console.log(red(Math.floor(data/ 1000)));
const myTimerHandler2 = data => console.log(blue(Math.floor(data/ 60000)));

emitter.on('date_now', myTimerHandler);
emitter.on('date_now', myTimerHandler2);

setInterval(_=>emitter.emit('date_now', Date.now()), 1000)