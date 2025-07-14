import {DataTypes, Model, Sequelize, ModelStatic} from "sequelize";

//esquema de la tabla conductor

export const CONDUCTOR_HAS_VEHICULO_TABLA = 'conductores_vehiculos';

export const ConductorVehiculoSchema = {

id: {
    //allowNull: false,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'id'
},
conductorId: {
    allowNull: false,
    type: DataTypes.INTEGER({length: 6}),
    field: 'conductor_id',
    references: {
        model: "Conductores",
        key: "id"
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL"
},
vehiculoId: {
    allowNull: false,
    type: DataTypes.INTEGER({length: 6}),
    field: 'vehiculo_id',
    references: {
        model: "Vehiculos",
        key: "id"
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL"
}
}


export class ConductorVehiculo extends Model{

    static associate(models){
        
    }
static config(sequelize){

return {
sequelize,
tableName: CONDUCTOR_HAS_VEHICULO_TABLA,
modelName: 'Conductores_Vehiculos',
timeStamp: false
}
}
}
