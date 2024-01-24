import { Table, Model, Column, DataType, Length, AutoIncrement, PrimaryKey, HasMany } from "sequelize-typescript";
import {Pedidos} from "./Pedidos"
import {Vehiculo} from "./vehiculo"

//esquema de la tabla conductor
@Table({

    timestamps: false,
    tableName: "conductor"

})


export class Conductor extends Model {



    @AutoIncrement
    @PrimaryKey
    @Column({
        type: DataType.INTEGER({length: 6})
    })
    id?: number

    @Column({

        type: DataType.STRING(11),
        allowNull: false

    })
    identificacion!: string

    @Column({

        type: DataType.STRING(20)

    })
    apellido!: string


    @Column({

        type: DataType.STRING(20),
        allowNull: false
    })
    nombre!: string


    @Column({

        type: DataType.STRING(10),
        allowNull: false
    })
    telefono!: string

    @Length({ max: 50 })
    @Column({

        type: DataType.STRING(50)

    })
    direccion?: string


    @HasMany(() => Pedidos)
    pedidos!: Pedidos[];


    @HasMany(() => Vehiculo)
    vehiculos!: Vehiculo[];





}







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
  