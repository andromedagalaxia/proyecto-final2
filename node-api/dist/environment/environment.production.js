"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    API: {
        NAME: 'Micro-Servicio Punto de Venta | NodeJS',
        PORT: 5000,
        ENVIRONMENT: 'Development'
    },
    NOTIFY: {
        DELAY: 1000 * 10 // 10 Segundos
    },
    TOKEN: {
        SECRET_KEY: 'secretkey-value',
        EXPIRES: '120s' // 2 Minutos
    },
    MONGODB: {
        HOST: '192.168.252.132',
        PORT: 27017,
        USER_NAME: 'lupita',
        USER_PASSWORD: '1234',
        DEFAULT_DATABASE: 'admin'
    }
};
