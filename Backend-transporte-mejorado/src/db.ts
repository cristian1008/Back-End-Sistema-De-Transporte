import {Sequelize} from "sequelize";
import {setupModels} from "./modelos";

//instanciación de sequelize
export const sequelize = new Sequelize({

database: "Transporte_DB",
username: "postgres",
password: "123456",
host: "localhost",
dialect: "postgres",
logging: false,
define: {
    underscored: true,
    timestamps: false,
},

});


//creacion de la funcion asincrona de la base de datos
export async function conexionBD(){

try{

setupModels(sequelize);

await sequelize.sync();

}catch(error){

console.log(error);


}

}