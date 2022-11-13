import {DataSource} from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: 'localhost',
    port: 3306,
    database: 'case1md4',
    username: "root",
    password: '12345678',
    synchronize: true,
    entities: ['dist/src/model/*.js']
})