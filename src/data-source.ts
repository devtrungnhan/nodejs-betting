import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "betting",
    entities: [

    ],
    synchronize: false,
    logging: false,
    migrations: ['src/migration/*{.ts,.js}'],
})