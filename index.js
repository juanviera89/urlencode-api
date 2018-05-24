'use strict'


// ############################################################################################
// ############################## importaciones, requires #####################################
// ############################################################################################

const express = require('express')
const bodyParser = require('body-parser')

// ############################################################################################
// ########################## inicializaciones, configuraciones ###############################
// ############################################################################################

const app = express()
const port = 11016
app.use(bodyParser.urlencoded({extended:false})) //esto para que?
app.use(bodyParser.json())
app.use((req, res, next) => {
    if ('OPTIONS' == req.method) {
     res.header('Access-Control-Allow-Origin', '*');
     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
     res.sendStatus(200);
    }
    else {
        
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Headers", "X-Requested-With")
        next();
    }
  });

  // ############################################################################################
// ########################## ######### Ejecuciones ########### ###############################
// ############################################################################################

app.listen(port,() => {
    console.log(`Ejecutando API de pruebas en puerto ${port}`)
    })

app.post('/query',(req,res)=>{

    console.log('Nueva peticion')
    console.log( ' ')
    console.log(req)
    res.status(200).send({message: 'recibido', body : req.body}) 
    
})