import dotenv from 'dotenv';

//archivo de configuracion de variables de entorno

dotenv.config({path: "./.env"})


export const PORT = process.env.PORT || 3000;
