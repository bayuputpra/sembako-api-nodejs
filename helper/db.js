import mysql from "mysql2"
import migrations from "mysql-migrations"

const connection = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sembako_api'
});

migrations.init(connection, `${__dirname}/migrations`);