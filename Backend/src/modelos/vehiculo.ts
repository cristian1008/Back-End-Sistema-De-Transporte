import { Table, Model, Column, DataType, Length, AutoIncrement, PrimaryKey, ForeignKey, BelongsTo } from "sequelize-typescript";
import {Conductor} from "./Conductor";


//esquema de la tabla vehiculos
@Table({

    timestamps: false,
    tableName: "vehiculo"

})


export class Vehiculo extends Model {



    @AutoIncrement
    @PrimaryKey
    @Column({

        type: DataType.INTEGER({length: 6})

    })
    id?: number


    @Column({

        type: DataType.STRING(4),
        allowNull: false

    })
    modelo!: string


    @Column({

        type: DataType.STRING(7),
        allowNull: false

    })
    placa!: string


    @Column({

        type: DataType.STRING(7)

    })
    capacidad!: string



    @ForeignKey(() => Conductor)
    @Column({

        type: DataType.INTEGER({length: 6}),
        allowNull: false

    })
    conductor_id!: number;
  
    @BelongsTo(() => Conductor)
    conductores!: Conductor;






}


