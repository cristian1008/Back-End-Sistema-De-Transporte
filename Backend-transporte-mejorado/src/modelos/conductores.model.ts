import {DataTypes, Model, Sequelize, ModelStatic} from "sequelize";

//esquema de la tabla conductor

export const CONDUCTOR_TABLA = 'conductores';

export const ConductorSchema = {

id: {
//allowNull: false,
type: DataTypes.INTEGER,
autoIncrement: true,
primaryKey: true,
//field: 'id'
},
identificacion: {
    allowNull: false,
    type: DataTypes.STRING(11),
    field: 'identificacion'
},
apellido: {
    allowNull: false,
    type: DataTypes.STRING(20),
    field: 'apellido'
},
nombre: {
    allowNull: false,
    type: DataTypes.STRING(20),
    field: 'nombre'
},
telefono: {
    allowNull: false,
    type: DataTypes.STRING(10),
    field: 'telefono'
},
direccion: {
    allowNull: false,
    type: DataTypes.STRING({length: 50}),
    field: 'direccion'
}
}


export class Conductor extends Model{

    static associate(models){
        
        this.belongsToMany(models.Vehiculos, {as: 'vehiculo', through: 'Conductores_Vehiculos', foreignKey: 'conductorId', otherKey: 'vehiculoId'})
        this.hasMany(models.Pedidos, {as: 'pedido', foreignKey: 'conductorId'})

    }
static config(sequelize){

return {
sequelize,
tableName: CONDUCTOR_TABLA,
modelName: 'Conductores',
timeStamp: false
}
}
}




// @Table({

//     timestamps: false,
//     tableName: "conductor"

// })


// export class Conductor extends Model {



//     @AutoIncrement
//     @PrimaryKey
//     @Column({
//         type: DataType.INTEGER({length: 6})
//     })
//     id?: number

//     @Column({

//         type: DataType.STRING(11),
//         allowNull: false

//     })
//     identificacion!: string

//     @Column({

//         type: DataType.STRING(20)

//     })
//     apellido!: string


//     @Column({

//         type: DataType.STRING(20),
//         allowNull: false
//     })
//     nombre!: string


//     @Column({

//         type: DataType.STRING(10),
//         allowNull: false
//     })
//     telefono!: string

//     @Length({ max: 50 })
//     @Column({

//         type: DataType.STRING(50)

//     })
//     direccion?: string


//     @HasMany(() => Pedidos)
//     pedidos!: Pedidos[];


//     @HasMany(() => Vehiculo)
//     vehiculos!: Vehiculo[];





// }







// export class Conductor extends Model {



    
//     @AutoIncrement
//     @PrimaryKey
//     @Column
//     id?: number



//     @Column({

//         type: DataType.STRING,
//         allowNull: false


//     })
//     identificacion!: string


//     @Column({

//         type: DataType.STRING

//     })
//     apellido!: string



//     @Column({

//         type: DataType.STRING,
//         allowNull: false
//     })
//     nombre!: string



//     @Column({

//         type: DataType.STRING,
//         allowNull: false
//     })
//     telefono!: string


//     @Column({

//         type: DataType.STRING

//     })
//     direccion!: string


  
//     @HasMany(() => Pedidos)
//     pedidos!: Pedidos[];




//   }
  