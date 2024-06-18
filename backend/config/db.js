import mysql from "mysql";
const DB = ()=>{

    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port:process.env.DB_PORT
    });
    connection.connect( (err)=> {
        if (err) {
            console.log("DB is not connect");
        }else{
            console.log("DB is connect");
        }
    });
}


export default DB;
