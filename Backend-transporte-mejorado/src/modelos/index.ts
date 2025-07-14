import {Conductor, ConductorSchema} from "./conductores.model";
import {Vehiculo, VehiculoSchema} from "./vehiculos.model";
import {Pedido, PedidoSchema} from "./pedidos.model";
import {ConductorVehiculo, ConductorVehiculoSchema} from "../modelos/conductor_has_vehiculo";

export const setupModels = (sequelize)=>{

Conductor.init(ConductorSchema, Conductor.config(sequelize));
Vehiculo.init(VehiculoSchema, Vehiculo.config(sequelize));
Pedido.init(PedidoSchema, Pedido.config(sequelize));
ConductorVehiculo.init(ConductorVehiculoSchema, ConductorVehiculo.config(sequelize));

Conductor.associate(sequelize.models);
Vehiculo.associate(sequelize.models);
Pedido.associate(sequelize.models);

}