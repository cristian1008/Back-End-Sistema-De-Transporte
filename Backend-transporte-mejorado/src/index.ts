import {PORT} from './config';
import api from './api';
import {conexionBD} from './db'

//ejecucion de la base de datos
conexionBD();

//archivo de arranque del proyecto
try{

    api.listen(PORT, ()=>{
    
    console.log(`El servidor esta corriendo en el puerto: ${PORT}`)
    
    
    })
    
    }catch(error){
    
    console.log(`Error: ${error}`);
    
    }