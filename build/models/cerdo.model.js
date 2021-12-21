"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Modelo - Cerdo
const cerdoSchema = new mongoose_1.Schema({
    id_producto: {
        type: String,
        trim: true,
        required: 'El ID de producto es obligatorio'
    },
    descripcion: {
        type: String,
        trim: true,
        uppercase: true,
        required: 'La descripcion es obligatoria'
    },
    cantidad: {
        type: Number,
        min: 0,
        required: 'La cantidad es obligatoria'
    },
    activo: {
        type: Boolean,
        default: true
    }
}, { timestamps: true, collection: 'cerdo' });
exports.default = mongoose_1.model('cerdo', cerdoSchema);
