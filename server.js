var app = require('./config/express')(__dirname);
var http = require('http').Server(app);

app.get('models').sequelize
  //.sync({ force: true})
  .sync()
  .then(() => {
      
    // inicia servidor
	var server = http.listen(process.env.PORT || 8080, () => {
	  var host = '127.0.0.1';
	  var port = server.address().port;
	
	  console.log('App listening at http://%s:%s', host, port);
	});	

});