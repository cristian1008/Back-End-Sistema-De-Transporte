// import { Table, Model, Column, DataType, Length, AutoIncrement, PrimaryKey, ForeignKey, BelongsTo } from "sequelize-typescript";
import {DataTypes, Model, Sequelize} from "sequelize";
import {CONDUCTOR_TABLA, Conductor} from "./conductores.model";


//esquema de la tabla vehiculos



export const VEHICULO_TABLA = 'vehiculos';



export const VehiculoSchema = {

id: {
//allowNull: false,
type: DataTypes.INTEGER,
autoIncrement: true,
primaryKey: true,
//field: 'id'
},
modelo: {
//    allowNull: false,
    type: DataTypes.STRING(4),
    field: 'modelo'
},
placa: {
    allowNull: false,
    type: DataTypes.STRING(7),
//    unique: true,
    field: 'placa'
},
capacidad: {
//    AllowNull: false,
    type: DataTypes.STRING(7),
    field: 'capacidad'
},
// telefono: {
//     allowNull: false,
//     type: DataTypes.STRING(10),
//     field: 'telefono'
// },
// direccion: {
//     allowNull: false,
//     type: DataTypes.STRING({length: 50}),
//     field: 'direccion'
// }
}


export class Vehiculo extends Model{

    static associate(models){

this.belongsToMany(models.Conductores, {as: 'conductor', through: 'Conductores_Vehiculos', foreignKey: 'vehiculoId', otherKey: 'conductorId'})

    }
static config(sequelize){

return {
sequelize,
tableName: VEHICULO_TABLA,
modelName: 'Vehiculos',
timeStamp: false
}
}
}









// @Table({

//     timestamps: false,
//     tableName: "vehiculo"

// })


// export class Vehiculo extends Model {



//     @AutoIncrement
//     @PrimaryKey
//     @Column({

//         type: DataType.INTEGER({length: 6})

//     })
//     id?: number


//     @Column({

//         type: DataType.STRING(4),
//         allowNull: false

//     })
//     modelo!: string


//     @Column({

//         type: DataType.STRING(7),
//         allowNull: false

//     })
//     placa!: string


//     @Column({

//         type: DataType.STRING(7)

//     })
//     capacidad!: string



//     @ForeignKey(() => Conductor)
//     @Column({

//         type: DataType.INTEGER({length: 6}),
//         allowNull: false

//     })
//     conductor_id!: number;
  
//     @BelongsTo(() => Conductor)
//     conductores!: Conductor;






// }


