import Generator from './generator'


class autofillForm extends Generator {
  constructor() {
    super(name)
    this.name

    this.descriptData = document.querySelectorAll('.description-data')
    this.select = document.getElementById('type-of-property')
    this.btnAddCont = document.querySelector('.form-button__addContactor')



    this.__addListener()
    this.__loadForm()
  }

  __selectType() {
    this.select.addEventListener('change', () => {
      this.descriptData.forEach(element => {
        this.getObj()
        this.getPhone()
        for(let i = 0; i <this.tableTdSpan.length;i++) {
          this.tableTdSpan[i].innerHTML = `${this.obj.square}м2`
  
         }
        for (var key in this.obj) {
          console.log(this.obj[key])

          if (element.dataset.type === key) {
            element.innerHTML = this.obj[key]
            return
          } else if (element.dataset.type === 'NumberHome') {
            element.innerHTML = this.randomNumber(1000)
          }


        }

        console.log(element.dataset.type)

      });

    })

  }

  __addListener() {
    this.btnSend.addEventListener('click', () => {
      event.preventDefault()
      this.addSend()
    })

    this.btnAddCont.addEventListener('click', () => {
      event.preventDefault()
      this.addContactor()
    })




  }



  addContactor() {

    let inserHTML = ` <div class="input-wrapper input-wrapper__mr">
<input type="text" class="form-input__contactor form-input"data-input='name' placeholder="ФИО"> 
<input type="text"  class="form-input__phone form-input" data-input='phone' placeholder="+7(999)999-99-99">
</div>`

    this.divContactor.insertAdjacentHTML('beforeend', inserHTML)

    this.input = document.querySelectorAll('.form-input')


  }






  addSend() {
    let name = []
    for (let i = 0; i <= `${this.input.length-1}`; i++) {
      if (this.pattern.name.test(this.input[i].value)) {
        name.push(this.input[i].value)
      
      } else if (!this.pattern.name.test(this.input[i].value && this.input[i].dataset.input === 'name')){
        this.__getName()
        name.push(this.name)
        alert('Вы не указали участника договора, в рамках задания оно было создано автоматически')
      } 
       if (this.obj === undefined || null || {}) {
        this.getObj()

      } 
     
    }
    let data = [
      {
        nameCont: name,
        object: this.obj
      }
    ]
    this.AjaxFetch(data)

  }
 


     
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
        alert(`${data.nameCont} 
       ${data.object.axis}
       ${data.object.object}
       ${data.object.square}
       `
        )
      })
      .catch((data) => {
        console.log(data)

      })

  }

  __loadForm() {

    this.loadBtn.addEventListener('click', () => {
      event.preventDefault()
      this.GetformAjax()

    })
  }

  GetformAjax() {
    fetch("http://localhost:3005/getform")
      .then(response => response.json())


      .then((response) => {
        this.parserLoad(response)
      })
      .catch((response) => {
        console.log(response)
      })



  }



  parserLoad(data) {

    for (let el in data) {

      if (Array.isArray(data[el])) {
        let divEl = document.querySelectorAll('.input-wrapper')

        while (divEl.length < data[el][0].name.length) {
          this.addContactor()
          divEl = document.querySelectorAll('.input-wrapper')
        }

        while (divEl.length > data[el][0].name.length) {
          let i = divEl.length
          divEl[i - 1].remove()
          divEl = document.querySelectorAll('.input-wrapper')
        }

        this.input = document.querySelectorAll('.form-input')
        let i = 0
        let b = 0
        this.__getListener()
        this.input.forEach((el) => {

          if (el.dataset.input === 'name') {
            el.value = data.people[0].name[i]
            el.classList.toggle('green-border', true)
            i++
          } else if (el.dataset.input === 'phone') {
            el.value = data.people[0].phone[b]
            el.classList.toggle('green-border', true)
            b++
          }
        })

      }


      else if (typeof (data[el]) === "object" && !Array.isArray(data[el])) {
       
       for(let i = 0; i <this.tableTdSpan.length;i++) {
        this.tableTdSpan[i].innerHTML = `${data[el].square} м2`

       }
        for (let key in data[el]){
          this.descriptData.forEach((elem)=>{
             if(elem.dataset.type === key ){
               elem.innerHTML = data[el][key]
             }

            

          })

         
        }
          
        
      }
    }
  }
}



  
    
  

  
  

 let generator = ''
  generator = new autofillForm()
  generator.__selectType()


 



