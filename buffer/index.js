console.log(Buffer.from('Hola Mundo'));

const greeting = Buffer.from('Hola Mundo');
console.log(greeting.toString());

const buffer = Buffer.alloc(4);
buffer.write('hola mundo');
console.log(buffer.toString());

const myHola = 'Hola Mundo';
// create buffer
const myBuffer = Buffer.from(myHola);
// part one
const firstHalf = myBuffer.slice(5,1);

// second one
 const secondHalf = myBuffer.slice(0,4)

let myResult = [secondHalf, firstHalf];
myResult = Buffer.concat(myResult);
console.log(myResult.toString().toLowerCase());

cadenaInicio = Buffer.from('Hola Mundo');

const cadenaFin = Buffer.concat([
    Buffer.from('h'),
    cadenaInicio.slice(1,4),
    Buffer.from('m'),
    cadenaInicio.slice(6)
]).toString()

console.log(cadenaFin);