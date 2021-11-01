const express = require( 'express');
const app = express();

const students = []

function student(Id,firstname,lastname,email,classid){
    this.Id= Id;
    this.firstName=firstname;
    this.lastname=lastname;
    this.email= email;
    this.classid= classid;
}
app.get("/student",function(req, res){
    res.send(students,'get request to hompage')
})
app.post()("/students",function(req,res){
    var data = req.body
    console.log("Id",data.Id)
    console.log("firstname",data.firstName)
    console.log("lastname",data.lastname)
    console.log("email",data.email)
    console.log("classid",data.classid)
} )

app.listen(3002,()=> console.log('listening on port 3002'))