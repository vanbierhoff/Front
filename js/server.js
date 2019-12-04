class Generator{
   constructor(){
   
     this.generation = {
       name : {
           
         ManName: ['Иван',"Андрей","Вася","Петр","Роман","Олег","Геннадий","Валерий"],
         ManTwoName : ["Авдеев","Леондиов","Васильев","Петров","Безруков","Ерофеев","Ширшов"],
         MaleName : ["Светлана","Наталья","Оксана","Мария","Рита","Александра","Екатерина"],
         MaleTwoName : ["Николаева","Андреева","Русская","Смольная", "Вознесенская","Петрова"]
       },
       objects:{
         object:["Альфа 1 блок","ЛС 1Б", "13 район","Альфа 3 блок","Бета 2"],
         axis: ["АЫ-26","АР-13","БУ-15","БЗ-15","АЫ-20","УВ-20"],
         square:[35,45.47,65],
         number: '+7'
         
     
       }
     }
     this.name = '';
     this.obj = {};
     this.pattern ={
         male : /male/i,
         man: /man/i,
         number:/2/i,

     }
 
     
   

   }
     
   __getName(){
     let min = 1
     let max = 2
     min = Math.ceil(min);
     max = Math.floor(max);
    let score = `${Math.floor(Math.random() * (max - min+1)) + min}` //генерерирует рандомное число 

      if (score === '1'){ 
        this.MaleName()
      } else if(score === '2'){
        this.ManName()
      } else if (score === undefined || score === null){
        console.log('Ошибка генератора чисел')
      }
    
     

   }

   ManName(){
    this.name = ''
     for (var key in this.generation.name){
      if (this.pattern.man.test(key)) {
     let max = this.generation.name[key].length
     let name = this.generation.name[key][this.randomNumber(max)]
     this.name +=`${name} `
      }


     }
    
   

   }
   MaleName(){
     this.name = ''
     for (var key in this.generation.name){
       if (this.pattern.male.test(key)) {
      let max = this.generation.name[key].length
      let name = this.generation.name[key][this.randomNumber(max)]
      this.name +=`${name} `
    
     }
   
 }

}



randomNumber(lenght){
 let min = 0
 let max = lenght-1
 return  `${Math.floor(Math.random() * (max - min+ 1)) + min}`
    }

    getPhone(){
      this.obj.number = "+7"
        let i = 0
       for(i=0;i <=7;i++){
         this.obj.number += this.randomNumber(9)
       }  
    }


    getObj(){ 
      console.log('GetObj')
     for (var key in this.generation.objects){
       let max = this.generation.objects[key].length
     this.obj[key] =this.generation.objects[key][this.randomNumber(max)]
     
     }
   }

   NumberHome(){
   
   this.obj['numberHome'] = this.randomNumber(1000)

   }


}


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
   
     } 
    
});

app.get("/getform",(req,res)=>{
  let data = new Generator()
   data.getObj()
  
let JsonData = {
 people:[{
   name:[],
   phone:[],
 }],
dataObj:data.obj
}

//Генератор имен для формы
function randomName(){
  let max = 4
  let min = 2
  let score = `${Math.floor(Math.random() * (max - min+1)) + min}` //генерерирует рандомное число 
  for(let i = 0; score > i;i++ ){
    data.__getName()
    data.getPhone()
    data.NumberHome()
    console.log(data)
    console.log(data.obj)
    JsonData.people[0].name.push(data.name)
    JsonData.people[0].phone.push(data.obj.number)
    JsonData.dataObj['numberHome'] = data.obj.numberHome
  }

}
randomName()

    res.send(JSON.stringify(JsonData))
   
      
     
 });


app.listen(PORT, () => console.log("JOB"));
