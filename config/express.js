var express         = require('express');
var helmet          = require('helmet');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var load            = require('express-load');
var db			    = require('./../app/models');

module.exports = (rootDirectory) => {
    
    var app = express();
    
    // variáveis de ambiente
    app.set('root', rootDirectory + '/');
    app.set('models', db);
    
    // middlewares
    app.use(helmet());
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(methodOverride());
    // habilitar cors
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        next();
    });
    // apenas app's que trabalhem com json
    app.use((req, res, next) => {
        if (req.accepts('application/json')) {
            next();
        } else {
            res.sendStatus(415);
        }
    });
    
    // load modules
    load('controllers', {cwd: 'app'})
        .then('routes')
        .into(app);
        
    return app;
    
};