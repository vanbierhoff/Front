const gen  =require('./genertatos')

let data = new gen()


const exp = require('express');
const app = exp();
const PORT = 3005;
const BodyParser = require('body-parser');


app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.use(exp.json());

app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Methods", "GET, PUT,POST,");
   res.header("Access-Control-Allow-Headers", "origin, content-type, accept,multipart/form-data");
   next();
})



app.post("/formcont",(req,res)=>{
     if( req.body[0]  != undefined ){
        res.send(JSON.stringify(req.body[0]))
     console.log(req.body[0])
     } 
    
});

app.get("/getform",(req,res)=>{
 
   data.CreateObj()
  
let JsonData = {
 people:{
   name:[],
   number:[],
 },
dataObj:data.object
}

//Генератор имен для формы
function randomName(){
  let max = 4
  let min = 2
  let score = `${Math.floor(Math.random() * (max - min+1)) + min}` //генерерирует рандомное число 
  for(let i = 0; score > i;i++ ){
    data.getName()
    data.getNumber()
    console.log(data)
    console.log(data.object)
    JsonData.people.name.push(data.contactor.name)
    JsonData.people.phone.push(data.contactor.number)
  }

}
randomName()

    res.send(JSON.stringify(JsonData))
   
      
     
 });


app.listen(PORT, () => console.log("JOB"));
