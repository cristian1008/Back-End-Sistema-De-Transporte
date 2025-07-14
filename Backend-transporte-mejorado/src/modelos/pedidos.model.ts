import {DataTypes, Model, Sequelize} from "sequelize";
import {CONDUCTOR_TABLA, Conductor} from "./conductores.model";

//esquema de la tabla pedidos

export const PEDIDO_TABLA = 'pedidos';

export const PedidoSchema = {

id: {
//allowNull: false,
type: DataTypes.INTEGER,
autoIncrement: true,
primaryKey: true,
//field: 'id'
},
tipo_pedido: {
    type: DataTypes.STRING(20),
    field: 'tipo_pedido'
},
direccion: {
    allowNull: false,
    type: DataTypes.STRING(20),
    field: 'direccion'
},
conductorId: {
    allowNull: false,
    type: DataTypes.INTEGER({length: 6}),
    field: 'conductor_id',
    references: {
        model: CONDUCTOR_TABLA,
        key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
},
}


export class Pedido extends Model{

    static associate(models){

      this.belongsTo(models.Conductores, {as: 'conductor'})

    }
static config(sequelize){

return {
sequelize,
tableName: PEDIDO_TABLA,
modelName: 'Pedidos',
timeStamp: false
}
}
}








// @Table({

//     timestamps: false,
//     tableName: "pedidos"

// })


// export class Pedidos extends Model {



//     @AutoIncrement
//     @PrimaryKey
//     @Column({
//         type: DataType.INTEGER({length: 6})
//     })
//     id?: number

//     @Column({

//         type: DataType.STRING(20)


//     })
//     tipo_pedido!: string


//     @Column({

//         type: DataType.STRING(20),
//         allowNull: false

//     })
//     direccion!: string



//     @ForeignKey(() => Conductor)
//     @Column({

//         type: DataType.INTEGER({length: 6}),
//         allowNull: false

//     })
//     conductor_id!: number;
  
//     @BelongsTo(() => Conductor)
//     conductores!: Conductor;


// }






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

