var app = require('./app');
var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect(process.env.MONGODB_URI || config.db, (err) => {
  if (err) {
    console.log(err);
  }
  else {
    console.log('DB connected');
  }
});

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server listeningn on port: ' + port);
});
