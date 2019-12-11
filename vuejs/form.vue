

<template lang='html'> 
 <div class='form-container'>
          <form action="" class="form">
        <div class="form-contractor">
            <p>Участники договора</p>
              <div class="input-wrapper">
            <input type="text" class="form-input__contactor form-input" data-input='name'
             placeholder="ФИО">
            <input type="text"  class="form-input__phone form-input input-plus__before" placeholder="+7(999)999-99-99" data-input='number'>          
            <img class="form-button__addContactor" src="img/Plus-icon-vector.svg" alt="icon-vector">
              </div>
            
      
        </div>
        <p>Тип собственности</p>   
        <select name="typeHome" id="type-of-property" @change='getObj()'>
                <option>Общая совестная</option>
                <option>Частная</option>
        </select>
        <div class="property-description">
            <p class="property__p">Объект:<span class="description-data" data-type='object'>{{dataObj.object}}</span></p>
            <p class="property__p">Квартира:<span class="description-data" data-type='numberHome'>{{dataObj.numberHome}}</span></p>
            <p class="property__p" >Строительные оси:<span class="description-data" data-type='axis'>{{dataObj.axis}}</span></p>
             <div class="wrapper-p__square">

            <p class="form-p__square">площадь:<span class="description-data" data-type='square'>{{dataObj.square}}</span></p>
            <img src="img/sort-down.svg" class="img-sort-down" alt="down-svg"  @click='show()'>
        </div>
        </div>
        <div class="form-square">
        
        
            <table class="square-table" cellspacing="0" v-show='showTable'>
                <tr class="table-tr table-header__bk">
                    <th class="table-th">Жилая</th>
                    <th class="table-th">Нежилая</th>
                    <th class="table-th">Площадь с пониж.коэф</th>
                   
                </tr>
        
                <tr class="table-tr">
                    <td> <p> Команта 1 <span class="table-td-span__square" data-type='square'>{{dataObj.square}} </span> </p> </td>
                    <td> <p> Коридор <span class="table-td-span__square" data-type='square'>{{dataObj.square}} </span> </p> </td>
                    <td> <p> Балкон <span class="table-td-span__square" data-type='square'>{{dataObj.square}} </span> </p> </td>
                </tr>
                <tr class="table-tr">
                    <td> <p> Комната 2 <span class="table-td-span__square" data-type='square'>{{dataObj.square}}</span> </p> </td>
                    <td> <p> Кухня <span class="table-td-span__square" data-type='square'>{{dataObj.square}}</span> </p> </td>
        
                </tr>
                <tr class="table-tr">
                    <td> <p>Комната 3 <span class="table-td-span__square" data-type='square'>{{dataObj.square}}</span> </p></td>
                    <td> <p> Санузер <span class="table-td-span__square" data-type='square'>{{dataObj.square}}</span> </p></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
        
                </tr>
        
            </table>
        </div>
        <div class="wrapper-form__forButton">
        <button class="form-button form-button__load"@click='load()'>load</button>
        <button class="form-button form-button__send"@click='send()'>send</button>
    </div>
    </form>
 </div>
            </template>
 <script>
 import gen from './genertatos'
export default {
 
 data: function () {
    return {
      constructor :  '',
      divContactor: '',
      showTable: true,
      dataObj:  {
        square: '',
        object: '',
        axis: '',
        numberHome: '',
      
      },
      readyObj: false,
      readyUser: false,
      addBtn: '',
      loadBtn: '',
      inputWrapper: '',
      inputCLass: false,
      formInput: '',
     
     pattern : {
        male: /male/i,
        man: /man/i,
        number: /^[+]?\d{1}\(?\d{3}\)?[\d\-\?]{3,6}[\-\?\d]{3,6}$/i,
        name: /^[a-zа-я]{2,30}/i,
     },

    
      

    }   

  },
    
    methods: {
      __init(){
this.addBtn.addEventListener('click',()=>{
this.addInput()


}) 
   
    this.formInput.forEach(el => {
      el.addEventListener('input',()=>{
this.testInput()

      })
    });
    

      },
   
   randomNumber(min, max){
   if (min === undefined || ''){
        min = 0
    } if (max === undefined || ''){
        max = 500
    }
     return `${Math.floor(Math.random() * (max - min + 1)) + min}`

   },





     getObj(){
     event.preventDefault()
      let data =  this.constructor.CreateObj ()
      for (let key in data[0]){
          this.dataObj[key] = data[0][key]
      }
      this.readyObj = true
      
    },

    addInput(){
    let inserHTML = ` <div class="input-wrapper input-wrapper__mr">
     <input type="text" class="form-input__contactor form-input " data-input='name' placeholder="ФИО"  > 
     <input type="text"  class="form-input__phone form-input" data-input='number' placeholder="+7(999)999-99-99" >
     </div>`
     this.divContactor.insertAdjacentHTML('beforeend', inserHTML)
     this.inputWrapper = document.querySelectorAll('.input-wrapper')
    this.formInput  = document.querySelectorAll('.form-input')  // обновляем коллекцию input 
      let elKey = this.inputWrapper.length-1 // получаем номер созданного элемента в массиве NodeList     
     
     // Вешаем на вновь созданный input событие input
      for (let i = 0; i < this.inputWrapper[elKey].children.length-1;i++){
       this.inputWrapper[elKey].children[i].addEventListener('input',()=>{
       this.testInput()
    
  })

      }

     
    },

    testInput(){
    let value = event.target.value
    let key = event.target.dataset.input
     if (this.pattern[key].test(value)){
       event.target.classList.toggle('greenCl',true)

     } else{
       event.target.classList.toggle('greenCl',false)
     }
    },

    send(){
      event.preventDefault()
         let data =[{
         Users: {
           name: [],
           number: [],
         },
         objects:{
           
         }

         }]
         
         this.formInput.forEach((el)=>{
            if (el.dataset.input === 'name'){
            if(this.pattern.name.test(el.value)){
           
            data[0].Users.name.push(el.value)
            } else {
               el.value = this.constructor.getName()
               data[0].Users.name.push(el.value)
                 el.classList.toggle('greenCl',true)
            }
            } if(el.dataset.input === 'number'){
                 if(this.pattern.number.test(el.value)){
            data[0].Users.number.push(el.value)
              }  else{
                el.value = this.constructor.getNumber()
                data[0].Users.number.push(el.value)
                el.classList.toggle('greenCl',true)
              }
            }

          

         }) 
         if (this.readyObj === true){
            for (let key in this.dataObj){
              
          data[0].objects[key] = this.dataObj[key]
            
            } 
            
         } else {
            this.getObj()
             for (let key in this.dataObj){
               
          data[0].objects[key] = this.dataObj[key]
             }
          
         }
          this.readyObj = true

          let dataString = `Contactor: ${data[0].Users.name}
           Number: ${data[0].Users.number}
           Object: ${data[0].objects.axis}
                   ${data[0].objects.numberHome}
                   ${data[0].objects.square}`
                                        
         alert(dataString)
         

         this.AjaxFetch(data)
             
        


    },
      AjaxFetch(data) {
    fetch("http://localhost:3005/formcont", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })

      .then(response => {
        if (response.status !== 200) {
          console.log(data);
          return Promise.reject();

        }

        return response.json();

      })
      .then((data) => {
        alert("Данные ушли на сервер")
      })
      .catch((data) => {
          alert("Ошбика отправки данных на сервер")

      })

  },
   load(){
     event.preventDefault()
         fetch("http://localhost:3005/getform")
      .then(response => response.json())


      .then((response) => {
        this.parserLoad(response)
      })
      .catch((response) => {
        console.log(response)
      })
   },

   parserLoad(data){
    console.log(data)
    for (let key in data){
       for (let objEl in data[key]){
          if(  this.dataObj[objEl] === undefined){
            
            while (data[key][objEl].length-1 > this.inputWrapper.length-1 ){
             this.addInput()
            }
        while (data[key][objEl].length-1 < this.inputWrapper.length-1 ){
          let i = this.inputWrapper.length
          this.inputWrapper[i - 1].remove()
          this.inputWrapper = document.querySelectorAll('.input-wrapper')
        }
              
          if (objEl === 'name'){
           let el = document.querySelectorAll('.form-input__contactor')
           for(let i = 0; i <= el.length-1;i++){
            el[i].value = data[key][objEl][i]
            el[i].classList.toggle('greenCl',true)

           }


          } else if(objEl === 'phone'){
           let el = document.querySelectorAll('.form-input__phone')
           for(let i = 0; i<= el.length-1;i++){
            el[i].value = data[key][objEl][i]
            el[i].classList.toggle('greenCl',true)

           }

          }
          


        

          }else{
            this.dataObj[objEl] = data[key][objEl]
          }
       }
    

    }


   },

   show(){
this.showTable = !this.showTable

   }

    },

    
    mounted: function() {
    this.constructor = new gen()
    this.addBtn = document.querySelector('.form-button__addContactor')
    this.divContactor = document.querySelector('.form-contractor')
    this.formInput  = document.querySelectorAll('.form-input')
    this.inputWrapper = document.querySelectorAll('.input-wrapper')
    this.__init()
    
    },
     

    



 }
 </script>



