"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conductor = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Pedidos_1 = require("./Pedidos");
const vehiculo_1 = require("./vehiculo");
let Conductor = class Conductor extends sequelize_typescript_1.Model {
};
exports.Conductor = Conductor;
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER({ length: 6 })
    }),
    __metadata("design:type", Number)
], Conductor.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(11),
        allowNull: false
    }),
    __metadata("design:type", String)
], Conductor.prototype, "identificacion", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(20)
    }),
    __metadata("design:type", String)
], Conductor.prototype, "apellido", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(20),
        allowNull: false
    }),
    __metadata("design:type", String)
], Conductor.prototype, "nombre", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(10),
        allowNull: false
    }),
    __metadata("design:type", String)
], Conductor.prototype, "telefono", void 0);
__decorate([
    (0, sequelize_typescript_1.Length)({ max: 50 }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(50)
    }),
    __metadata("design:type", String)
], Conductor.prototype, "direccion", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Pedidos_1.Pedidos),
    __metadata("design:type", Array)
], Conductor.prototype, "pedidos", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => vehiculo_1.Vehiculo),
    __metadata("design:type", Array)
], Conductor.prototype, "vehiculos", void 0);
exports.Conductor = Conductor = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: "conductor"
    })
], Conductor);
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
//# sourceMappingURL=Conductor.js.map