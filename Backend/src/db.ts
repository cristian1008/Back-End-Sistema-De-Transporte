import {Sequelize} from "sequelize-typescript";
import {Conductor} from "./modelos/Conductor";
import {Pedidos} from "./modelos/Pedidos";
import {Vehiculo} from "./modelos/vehiculo";

//instanciación de sequelize
const sequelize = new Sequelize({

database: "Transporte_DB",
username: "postgres",
password: "123456",
host: "localhost",
dialect: "postgres",
logging: false,
models: [ Conductor, Pedidos, Vehiculo]

});


//creacion de la funcion asincrona de la base de datos
export async function conexionBD(){

try{

await sequelize.sync();

}catch(error){

console.log(error);


}

}