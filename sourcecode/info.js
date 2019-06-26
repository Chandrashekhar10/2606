var express = require('express');
var app = express();



var customerController=function (req, res) {

  var customers=[
          
 {CompanyName: "Contonso"},
 {TotalOffices: 12},
 {products:[{Products_Service1: "Web development"},
 {Products_Service2: "Customer Accountin"}, 
 {Products_Service3: "Cloud Services"}]},
 {Iaas: "Google Cloud Platform"},
 {host: "AWS"}
           
 { name:'ravi',city:'pune',accno:'12345'}
           
      ];
  res.send(customers);
};


app.get('/info',customerController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})