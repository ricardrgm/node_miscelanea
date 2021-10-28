import evenEmitter from "events";

// instanciamos eventEmitter
const conectionDDBB = new evenEmitter();

// I need an ear
const myhandler = ()=> {
    console.log('connection successful');
   // conectionDDBB.emit('conexion')

}
const myHandler = ()=> console.log('data recieved succefully');

// como los asociamos, con el metodo on
// parametros
conectionDDBB.on('conexion', myhandler);
conectionDDBB.on('data_recieved', myHandler);

conectionDDBB.emit('conexion');
// emisor
 const myDate =  setInterval(()=> {
    conectionDDBB.emit(new Date());
 }, 1000)

 conectionDDBB.on('data', myDate);
 