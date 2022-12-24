import mysql from "mysql"

const pool= mysql.createPool({
    "user": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "host": process.env.MYSQL_HOST,
    "port": Number(process.env.MYSQL_PORT)

})

export default pool