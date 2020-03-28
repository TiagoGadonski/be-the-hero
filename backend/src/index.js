const express = require('express');
const cors = require('cors'); 
const routes = require ('./routes');

const app = express ();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
Métodos HTTP:

* GET:Buscar informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end

*/

/* 
TIPOS DE PARAMETROS:

*QUERY: Parametros nomeados enviados enviados na rota após "?" (filtros, paginação)
* ROUTE PARAMS: Parâmetros utilizados para identificar recursos
* REQUEST BODY: Corpo da requisição, utilizado para criar ou alterar recursos 

*/

/*
SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
NoSQL: MongoDB, CouchDB, etc
*/

/* 
DRIVER: select * FROM USER
Query Builder: table ('users').select('*').where()

*/



app.listen(3333);