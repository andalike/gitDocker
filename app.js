
//Express Params
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));
app.set('port', process.env.PORT || 7878);

var cmd=require('node-cmd');

app.post('/gitPush', function (req, res) {
console.log("Received the message(from Git) inside gitPush->"+ JSON.stringify(req.body));

    cmd.get('bash script.sh',
        function(err, data, stderr){
            if (!err) {
               console.log('Error in Running the Code->',data)
            } else {
               console.log('error', err)
            }

        }
    );


});





app.listen(app.get('port'));
