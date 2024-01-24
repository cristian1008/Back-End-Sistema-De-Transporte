import { Table, Model, Column, DataType, Length, AutoIncrement, PrimaryKey, ForeignKey, BelongsTo } from "sequelize-typescript";
import {Conductor} from "./Conductor";

//esquema de la tabla pedidos
@Table({

    timestamps: false,
    tableName: "pedidos"

})


export class Pedidos extends Model {



    @AutoIncrement
    @PrimaryKey
    @Column({
        type: DataType.INTEGER({length: 6})
    })
    id?: number

    @Column({

        type: DataType.STRING(20)


    })
    tipo_pedido!: string


    @Column({

        type: DataType.STRING(20),
        allowNull: false

    })
    direccion!: string



    @ForeignKey(() => Conductor)
    @Column({

        type: DataType.INTEGER({length: 6}),
        allowNull: false

    })
    conductor_id!: number;
  
    @BelongsTo(() => Conductor)
    conductores!: Conductor;


}






// export class Pedidos extends Model {
  


//     @AutoIncrement
//     @PrimaryKey
//     @Column
//     id?: number



//     @Column({

//         type: DataType.STRING


//     })
//     tipo_pedido!: string


//     @Column({

//         type: DataType.STRING,
//         allowNull: false

//     })
//     direccion!: string


  
//     @ForeignKey(() => Conductor)
//     @Column
//     conductor_id!: number;
  
//     @BelongsTo(() => Conductor)
//     conductor!: Conductor;



//   }

