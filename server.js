let express = require('express');
let app = express();
let path = require('path');

app.get(['/', '/index', '/index.html'], function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get(['/about', '/about.html'], function(req, res) {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.use(express.static(path.join(__dirname, '/public')));

app.listen(3000, function() { console.log('server started'); });
