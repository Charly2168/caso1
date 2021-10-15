var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cegh2168',
    database: 'Libreria',
    port: 3306
});
connection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexion correcta.');
        window.alert("Conexion Correcta");
        alert("Conexion Correcta");
    }
});
connection.end();